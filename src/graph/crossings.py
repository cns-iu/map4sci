from typing import Tuple, List

import networkx as nx

from src.graph.edge import doIntersect

Edge = Tuple[int, int]

def count_crossings_single_graph(graph: nx.Graph) -> List[Edge] :
    """Returns the edges that have crossing in the graph.
    
    Parameters
    ----------
    graph : nx.Graph
        The given graph
    
    Returns
    -------
    List[Edge]
        The tuple of edge vertices that have crossings in the graph.
    """    
    count = 0
    crossings_edges = []
    all_pos = nx.get_node_attributes(graph, "pos")
    all_pos_dict = dict((k, (float(all_pos[k].split(",")[0]), float(all_pos[k].split(",")[1]))) for k in all_pos.keys())
    edge_list = [e for e in graph.edges]

    for c1 in range(0, len(edge_list)):
        for c2 in range(c1+1, len(edge_list)):

            edge1 = edge_list[c1]
            edge2 = edge_list[c2]

            s1, t1 = edge1[0], edge1[1]
            s2, t2 = edge2[0], edge2[1]

            p1 = all_pos_dict[s1]
            q1 = all_pos_dict[t1]
            p2 = all_pos_dict[s2]
            q2 = all_pos_dict[t2]

            p1x, p1y = p1
            q1x, q1y = q1
            p2x, p2y = p2
            q2x, q2y = q2

            if doIntersect(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y):
                crossings_edges.append((edge1, edge2))
                count = count + 1
                return crossings_edges

    return crossings_edges

def count_crossings(G, edges_to_compare=None):

    count = 0

    crossings_edges = []

    all_pos = nx.get_node_attributes(G, "pos")

    all_pos_dict = dict((k, (float(all_pos[k].split(",")[0]), float(all_pos[k].split(",")[1]))) for k in all_pos.keys())

    edge_list = [e for e in G.edges]

    edge_set_1 = edge_list

    if edges_to_compare is not None:
        edge_set_1 = edges_to_compare


    for c1 in range(0, len(edge_set_1)):

        edge1 = edge_set_1[c1]
        (s1,t1) = (edge1[0], edge1[1])

        p1 = all_pos_dict[s1]
        q1 = all_pos_dict[t1]
        p1x, p1y = p1[0], p1[1]
        q1x, q1y = q1[0], q1[1]


        j_start=c1+1
        if edges_to_compare is not None:
            j_start=0

        for c2 in range(j_start, len(edge_list)):

            edge2 = edge_list[c2]
            (s2,t2) = (edge2[0], edge2[1])

            p2 = all_pos_dict[s2]
            q2 = all_pos_dict[t2]
            p2x, p2y = p2[0], p2[1]
            q2x, q2y = q2[0], q2[1]

            if(doIntersect(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y)):
                crossings_edges.append((edge1, edge2))
                count = count + 1
                return crossings_edges

    return crossings_edges
