import argparse
import subprocess
from typing import TYPE_CHECKING


def run_original(args: argparse.Namespace) -> None:
    """Runs quality measurements using the original algorithms.

    Parameters
    ----------
    args : argparse.Namespace
        Metrics configuration arguments.
    """
    metrics = []
    if args.crossings:
        metrics.append('cr')
    if args.edge_uniformity:
        metrics.append('ue')
    if args.stress:
        metrics.append('st')
    if args.neighbor_preservation:
        metrics.append('np')
    if args.bounding_box:
        metrics.append('bb')
    if args.upward_flow:
        metrics.append('upflow')
    if args.label_bounding_box:
        metrics.append('lblbb')
    if args.label_area:
        metrics.append('lblarea')

    prog = 'python3'
    module = '-msrc.quality_measurement.original.metricscomputer'
    prog_args = [args.input, args.output, ','.join(metrics)]
    subprocess.run([prog, module] + prog_args)


def setup_cmdline() -> argparse.ArgumentParser:
    """Setup command line argument parser.

    Returns
    -------
    argparse.ArgumentParser
        Fully initialized argument parser.
    """
    parser = argparse.ArgumentParser(prog='quality_measurement',
                                     description='Run quality measurements')
    parser.add_argument('input', help='File to measure')
    parser.add_argument('output', help='File to write results')

    group = parser.add_argument_group('metrics')
    group.add_argument('--crossings', '--cr',
                       action='store_true', help='Measure # crossings')
    group.add_argument('--edge-uniformity', '--eu',
                       action='store_true', help='Measure edge length uniformity')
    group.add_argument('--stress', '--st',
                       action='store_true', help='Measure stress')
    group.add_argument('--neighbor-preservation', '--np',
                       action='store_true', help='Measure neighbor preservations')
    group.add_argument('--bounding-box', '--bb',
                       action='store_true', help='Measure bounding box')
    group.add_argument('--upward-flow', '--uf',
                       action='store_true', help='Measure upwards flow')
    group.add_argument('--label-bounding-box', '--lbb',
                       action='store_true', help='Measure label bounding box ratios')
    group.add_argument('--label-area', '--la',
                       action='store_true', help='Measure label area')

    return parser


# Main execution flow
if not TYPE_CHECKING:
    args = setup_cmdline().parse_args()
    run_original(args)
