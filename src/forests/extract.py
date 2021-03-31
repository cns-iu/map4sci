import networkx as nx


def get_forest(layer: nx.Graph, sublayer: nx.Graph) -> nx.Graph:
    """Creates a forest from a tree where all nodes and edges from a subtree
    have been removed except those that have connections outside the subtree.

    Parameters
    ----------
    layer : nx.Graph
        Tree to turn into a forest.
    sublayer : nx.Graph
        Subtree that should be subtracted from the forest.

    Returns
    -------
    nx.Graph
        Forest without the subtree nodes and edges.
    """
    layer = layer.copy()
    layer.remove_edges_from(sublayer.edges)
    disconnected_nodes = (node for node in sublayer.nodes if not layer.has_node(node))
    layer.remove_nodes_from(disconnected_nodes)
    return layer
