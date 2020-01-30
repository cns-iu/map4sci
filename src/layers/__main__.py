import argparse
import pathlib
from typing import TYPE_CHECKING

import networkx as nx

from src.layers import extract


def correct_weight_type(graph: nx.Graph, weight: extract.WeightSelector) -> None:
    """Converts weight values into floats.

    PyGraphviz and consequently networkx loads attributes as strings so
    values have to be cast/converted before use for correct results.

    Parameters
    ----------
    graph : nx.Graph
        Graph of values.
    weight : extract.WeightSelector
        Node attribute containing the weight values.
    """
    nweight, eweight = extract._weight_selectors(weight)

    for _unused, data in graph.nodes.data():
        data[nweight] = float(data[nweight])
    for _unused1, _unused2, data in graph.edges.data():
        data[eweight] = float(data[eweight])


def setup_cmdline() -> argparse.ArgumentParser:
    """Setup command line argument parser.

    Returns
    -------
    argparse.ArgumentParser
        A fully populated parser.
    """
    parser = argparse.ArgumentParser(prog='layers',
                                     description='Extract layers from a network')
    parser.add_argument('input', type=pathlib.Path, help='Input network file')
    parser.add_argument('output', type=pathlib.Path, help='Output folder')
    parser.add_argument('--layers', type=lambda arg: arg.split(','),
                        required=True, help='Percentage of total in each layer')
    parser.add_argument('--selector', default='weight',
                        help='Data field containing the weights')
    parser.add_argument('--minimum', action='store_true',
                        help='Use minimum spanning tree instead')
    parser.add_argument('--algorithm', default='prim',
                        help='Algorithm used to find spanning tree')

    return parser


def run(args: argparse.Namespace) -> None:
    """Runs the extract.get_layers algorithm on the provided data.

    Parameters
    ----------
    args : argparse.Namespace
        Arguments for the run.
    """
    graph = nx.drawing.nx_agraph.read_dot(str(args.input))
    correct_weight_type(graph, args.selector)
    layers = extract.get_layers(graph, map(float, args.layers), maximum=(not args.minimum),
                                weight=args.selector, algorithm=args.algorithm)
    for index, layer in enumerate(layers):
        path: pathlib.Path = args.output / f'layer{index}.dot'
        layer.graph['name'] = f'layer{index}'
        nx.drawing.nx_agraph.write_dot(layer, str(path))


# Main execution flow
if not TYPE_CHECKING:
    args = setup_cmdline().parse_args()
    run(args)
