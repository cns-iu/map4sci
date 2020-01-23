import itertools
from typing import Iterable, Iterator, Tuple, TypeVar, Union

import networkx as nx

from src.layers import tree_util

T = TypeVar('T')
Node = tree_util.Node
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
    tree = tree_util.spanning_tree(graph, maximum, eweight, algorithm)
    sorted_nodes = tree_util.sorted_nodes(tree, nweight, maximum)
    root = sorted_nodes[0]
    predecessors = dict(nx.bfs_predecessors(tree, root))

    for frac in fractions:
        count = int(frac * len(tree))
        nodes = _take_n(iter(sorted_nodes), count)
        yield tree_util.subtree(tree, nodes, predecessors)
    yield tree
