import math
import os
import random
import sys

import networkx as nx
from networkx.drawing.nx_agraph import read_dot as nx_read_dot
from networkx.drawing.nx_agraph import write_dot

from typings import Tuple


def getCoordinate(vertex):
    """Returns the coordinate of the given vertex."""

    x = float(vertex['pos'].split(",")[0])
    y = float(vertex['pos'].split(",")[1])

    return x, y

def compute_edge_length(G: nx.Graph, edge: Tuple[int, int]) -> float:
    """Returns the lenght of the edge in the give graph 
    
    Parameters
    ----------
    G : nx.Graph
        The graph in which we want to find the lenght of edge
    edge : Tuple[int, int]
        The edge for which we want to know the lenght
    
    Returns
    -------
    float
        The edge length
    """
    s1_id,t1_id = edge

    nodes_position = nx.get_node_attributes(G, 'pos')

    s1_pos = nodes_position[s1_id]
    t1_pos = nodes_position[t1_id]


    x_source1 = float(s1_pos.split(",")[0])
    x_target1 = float(t1_pos.split(",")[0])

    y_source1 = float(s1_pos.split(",")[1])
    y_target1 = float(t1_pos.split(",")[1])

    curr_length = math.sqrt((x_source1 - x_target1)**2 + (y_source1 - y_target1)**2)

    return curr_length


def avg_edge_length(graph: nx.Graph) -> float:
    """Returns the average edge length of the given graph
    
    Parameters
    ----------
    graph : nx.Graph
        The given graph for which we want to know the average edge length
    
    Returns
    -------
    float
        The average edge lenght of the given graph
    """
    edges = graph.edges()
    sum_edge_length = 0.0
    edge_count = len(edges)

    for e in edges:
        curr_length = compute_edge_length(graph, e)
        sum_edge_length += curr_length

    avg_edge_len = sum_edge_length/edge_count
    return avg_edge_len


def extract_leaves(graph: nx.Graph):
    """Returns the leaf node of the given graph 
    
    Parameters
    ----------
    graph : nx.Graph
        The given graph
    """

    leaves=[]

    for n in nx.nodes(graph):
        if len(list(graph.neighbors(n)))<=1:
            leaves.append(n)

    return leaves


def unify_leaves_edges_leghths(G: nx.Graph, value: -1) -> nx.Graph:
    """This function sets the length of the edges incident on the leaves
    of a tree to a fixed value.
    The idea is to position the leaves next to their parent to save space.
    The edges are set to the given <tt>value</tt> parameter. If no value is given
    or it is set to -1 then the edges are set to half the length of the average
    edge lenght.
    
    Parameters
    ----------
    G : nx.Graph
        The given graph     
    value : int
        The fixed length value, if it is not supplied then default value is half of the average edge lenght of the graph.
    
    Returns
    -------
    nx.Graph
        Returns the graph with the given fixed length or setting all edges to half of average edge lenght of graph
    """

    # If the edge length value is not given set it half the length of the
    # average length value
    if value == -1:
        avgEdgeLength = avg_edge_length(G)
        value = avgEdgeLength/3

    leaves = extract_leaves(G)

    to_be_shortened_edges = list(nx.edges(G, leaves))

    print("Shortening " + str(len(to_be_shortened_edges)) + " edges.")

    for e in to_be_shortened_edges:

        if compute_edge_length(G, e) <= value:
            continue

        t_id, s_id = e

        s = G.nodes[s_id]
        t = G.nodes[t_id]

        origin = s
        leaf = t

        leaf_id = t_id

        if s in leaves:
            origin = t

            leaf = s
            leaf_id = s_id


        x_origin, y_origin = getCoordinate(origin)
        x_leaf, y_leaf = getCoordinate(leaf)

        x_num = value * (x_leaf - x_origin)
        y_num = value * (y_leaf - y_origin)

        x_den = math.sqrt((x_origin-x_leaf)**2 + (y_origin-y_leaf)**2)
        y_den = math.sqrt((x_origin-x_leaf)**2 + (y_origin-y_leaf)**2)

        x_leaf_new = x_origin + x_num/x_den
        y_leaf_new = y_origin + y_num/y_den


        G.nodes[leaf_id]['pos'] = str(x_leaf_new)+","+str(y_leaf_new)

        # ovelapping = leavesoverlapremoval.get_overlapping_vertices(G, with_vertices=[origin_id, leaf_id])


    return G