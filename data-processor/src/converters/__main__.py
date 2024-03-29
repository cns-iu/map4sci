import argparse
import json
import xml.etree.ElementTree as etree

import networkx as nx

from src.converters import svg_to_geojson, dot_to_cx

def run_dot2cx(args: argparse.Namespace) -> None:
    graph = nx.drawing.nx_agraph.read_dot(args.input)
    cx_graph = dot_to_cx.get_cx_from_nx(graph, args.name)

    with open(f'{args.output}', 'w') as file:
        json.dump(cx_graph.to_cx(), file, indent=2)

def run_svg2geo(args: argparse.Namespace) -> None:
    graph = nx.drawing.nx_agraph.read_dot(args.layer)
    svg = etree.parse(args.input)
    nodes, edges, cluster, boundary = svg_to_geojson.process(graph, svg)

    with open(f'{args.output}/nodes.geojson', 'w') as file:
        json.dump(nodes, file, indent=2)
    with open(f'{args.output}/edges.geojson', 'w') as file:
        json.dump(edges, file, indent=2)
    with open(f'{args.output}/cluster.geojson', 'w') as file:
        json.dump(cluster, file, indent=2)
    with open(f'{args.output}/boundary.geojson', 'w') as file:
        json.dump(boundary, file, indent=2)


def setup_cmdline() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description='Utilities for converting between file formats')
    subparsers = parser.add_subparsers(title='Converters', dest='command')

    svg2geo = subparsers.add_parser('svg2geo', help='Convert svg to geojson')
    svg2geo.add_argument('input', help='Input svg file')
    svg2geo.add_argument('layer', help='Full layer')
    svg2geo.add_argument('output', help='Output folder')

    dot2cx = subparsers.add_parser('dot2cx', help='Convert dot to Cytoscape cx')
    dot2cx.add_argument('input', help='Input DOT file')
    dot2cx.add_argument('output', help='Output Cytoscape CX file')
    dot2cx.add_argument('name', help='Graph name')

    return parser


# Main execution flow
if __name__ == '__main__':
    args = setup_cmdline().parse_args()
    if args.command == 'svg2geo':
        run_svg2geo(args)
    elif args.command == 'dot2cx':
        run_dot2cx(args)
