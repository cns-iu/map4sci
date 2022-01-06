import itertools
from typing import Iterable, Iterator, Tuple, TypeVar, Union

import networkx as nx

from src.layers import tree_util

T = TypeVar('T')
WeightSelector = Union[str, Tuple[str, str]]


def _take_n(iterator: Iterator[T], count: int) -> Iterator[T]:
    """Takes the first n items of an iterator.

    Parameters
    ----------
    iterator : Iterator[T]
        Iterator to take items from.
    count : int
        Number of items to take.

    Yields
    -------
    Iterator[T]
        The first n items.
    """
    for _unused in range(count):
        yield next(iterator)


def _weight_selectors(selector: WeightSelector) -> Tuple[str, str]:
    """Normalize weight attribute selector.

    Parameters
    ----------
    selector : WeightSelector
        Unnormalized selector.

    Returns
    -------
    Tuple[str, str]
        Node and edge attribute selectors.
    """
    if isinstance(selector, str):
        return selector, selector
    return selector


def get_layers(graph: nx.Graph, fractions: Iterable[float],
               maximum=True, weight: WeightSelector = 'weight',
               algorithm='prim') -> Iterator[nx.Graph]:
    """Extracts multiple layers from a graph.

    Parameters
    ----------
    graph
        The base graph.
    fractions
        Percentage of nodes in each layer.
    maximum
        Whether to use a maximum spanning tree.
    weight
        Key for the weight attribute.
    algorithm
        Algorithm used to find spanning tree.

    Yields
    -------
    layers
        Each layer as its own graph.
    """
    nweight, eweight = _weight_selectors(weight)
    tree = graph
    if algorithm != 'null':
        tree = tree_util.spanning_tree(graph, maximum, eweight, algorithm)
    sorted_nodes = tree_util.sorted_nodes(tree, nweight, maximum)
    root = sorted_nodes[0]
    predecessors = dict(nx.bfs_predecessors(tree, root))

    level_counts = dict((level, int(frac * len(tree))) for level, frac in enumerate(fractions))
    level_counts = {0: 100, 1: 300, 2: 900, 3: 2700, 4: 8100, 5: 24300, 6: len(sorted_nodes)}

    for level in range(len(level_counts)):
        count = level_counts[level]
        nodes = _take_n(iter(sorted_nodes), min(len(sorted_nodes), count))
        subtree = tree_util.subtree(tree, nodes, predecessors)

        for _n, data in subtree.nodes.data():
            if _n in sorted_nodes[:count]:
                data.setdefault('level', level + 1)
        for _u, _v, data in subtree.edges.data():
            data.setdefault('level', level + 1)

        yield subtree
    yield tree
