import argparse
import pathlib

import networkx as nx

from src.forests import extract


def setup_cmdline() -> argparse.ArgumentParser:
    """Sets up the commandline arguments for the forest extractor
    
    Returns
    -------
    argparse.ArgumentParser
        Returns the arguments as single object
    """    
    parser = argparse.ArgumentParser(
        description="Extract forests from a layer")
    parser.add_argument('input', type=pathlib.Path,
                        help='Folder with layer files')
    parser.add_argument('output', type=pathlib.Path, help='Output folder')

    return parser


def run(args: argparse.Namespace) -> None:
    """Run extract forest
    
    Parameters
    ----------
    args : argparse.Namespace
        Object holding the command line arguments
    """    
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
if __name__ == '__main__':
    args = setup_cmdline().parse_args()
    run(args)
