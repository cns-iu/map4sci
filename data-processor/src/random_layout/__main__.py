import argparse
import pathlib
from src.random_layout.layout import randomize_layout

def setup_cmdline() -> argparse.ArgumentParser:
    """Setup command line argument parser.

    Returns
    -------
    argparse.ArgumentParser
        A fully populated parser.
    """
    parser = argparse.ArgumentParser(prog='layers',
                                     description='Randomize x and y coordinates')
    parser.add_argument('input', type=pathlib.Path, help='Input network file')
    parser.add_argument('output', type=pathlib.Path, help='Output network file')

    return parser

def run(args: argparse.Namespace) -> None:
    """Runs the extract.get_layers algorithm on the provided data.

    Parameters
    ----------
    args : argparse.Namespace
        Arguments for the run.
    """
    randomize_layout(args.input, args.output)

# Main execution flow
if __name__ == '__main__':
    args = setup_cmdline().parse_args()
    run(args)