import itertools
from typing import (Any, Callable, Iterable, Iterator,
                    List, Mapping, Tuple, TypeVar)

import networkx as nx

T = TypeVar('T')
Node = Any


def _peek(iterator: Iterator[T], count=1) -> Tuple[Tuple[T, ...], Iterator[T]]:
    """Peeks the first values of an iterator.

    Assumes there are at least `count` values available in the iterator.

    Parameters
    ----------
    iterator : Iterator[T]
        Iterator to peek from.
    count : int, optional
        Number of values to peek, by default 1

    Returns
    -------
    values : Tuple[T, ...]
        The peeked values.
    continuation : Iterator[T]
        A continuation iterator that yields all values of
        iterator including the peeked values.
    """
    head = tuple(next(iterator) for _unused in range(count))

    def continuation() -> Iterator[T]:
        yield from head
        yield from iterator
    return head, continuation()


def sorted_nodes(graph: nx.Graph, attribute='weight',
                 reverse=False) -> List[Node]:
    """Sorts nodes in a graph

    Parameters
    ----------
    graph : nx.Graph
        The graph whose nodes to sort.
    attribute : str, optional
        Node attribute to sort on, by default 'weight'
    reverse : bool, optional
        Whether the result order should be reversed, by default False

    Returns
    -------
    List[Node]
        A list of the sorted node ids.
    """
    data = graph.nodes.data(attribute, 1)
    return sorted(graph.nodes, key=lambda node: data[node], reverse=reverse)


def spanning_tree(graph: nx.Graph, maximum=True,
                  weight='weight', algorithm='prim') -> nx.Graph:
    """Computes the [minimum/maximum] spanning tree for a graph.

    Parameters
    ----------
    graph : nx.Graph
        Graph to compute spanning tree for.
    maximum : bool, optional
        Whether the tree is maximum spanning, by default True
    weight : str, optional
        Edge attribute of weights, by default 'weight'
    algorithm : str, optional
        Algorithm used to compute the spanning tree, by default 'prim'

    Returns
    -------
    nx.Graph
        Subgraph representing the spanning tree.

    See Also
    --------
    networkx.minimum_spanning_tree
    networkx.maximum_spanning_tree
    """
    method = nx.maximum_spanning_tree if maximum else nx.minimum_spanning_tree
    return method(graph, weight=weight, algorithm=algorithm)


def parents(node: Node, predecessors: Mapping[Node, Node]) -> Iterator[Node]:
    """Iterate over a node's parents up to root.

    Parameters
    ----------
    node : Node
        Start node (not included in output).
    predecessors : Mapping[Node, Node]
        A mapping of node to parent node.

    Returns
    -------
    Iterator[Node]
        [description]

    Yields
    -------
    Iterator[Node]
        Parent nodes in the path to root.
    """
    current = predecessors.get(node)
    while current is not None:
        yield current
        current = predecessors.get(current)


def subtree(graph: nx.Graph, nodes: Iterable[Node],
            predecessors: Mapping[Node, Node] = None) -> nx.Graph:
    """Extract a subtree with the specified nodes.

    Parameters
    ----------
    graph : nx.Graph
        Full tree graph.
    nodes : Iterable[Node]
        Nodes to include.
    predecessors : Mapping[Node, Node], optional
        Mapping of node to parent node, by default None

    Returns
    -------
    nx.Graph
        A proper tree containing at least the specified nodes.
    """
    if predecessors is None:
        (root,), nodes = _peek(iter(nodes))
        predecessors = dict(nx.bfs_predecessors(graph, root))

    base = set(nodes)
    parent_nodes = (parents(node, predecessors) for node in base)
    result = set(itertools.chain.from_iterable(parent_nodes))
    result.update(base)
    return graph.subgraph(result)
