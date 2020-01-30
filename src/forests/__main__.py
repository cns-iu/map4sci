import argparse
import pathlib
from typing import TYPE_CHECKING

import networkx as nx

from src.forests import extract


def setup_cmdline() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Extract forests from a layer")
    parser.add_argument('input', type=pathlib.Path,
                        help='Folder with layer files')
    parser.add_argument('output', type=pathlib.Path, help='Output folder')

    return parser


def run(args: argparse.Namespace) -> None:
    read_dot = nx.drawing.nx_agraph.read_dot
    write_dot = nx.drawing.nx_agraph.write_dot

    layers = sorted(args.input.glob('*.dot'))
    if len(layers) < 2:
        return

    graphs = map(lambda layer: read_dot(str(layer)), layers)
    prev = next(graphs)
    for index, graph in enumerate(graphs, 1):
        outpath: pathlib.Path = args.output / f'forest{index}.dot'
        forest = extract.get_forest(graph, prev)
        write_dot(forest, str(outpath))
        prev = graph


# Main execution flow
if not TYPE_CHECKING:
    args = setup_cmdline().parse_args()
    run(args)
