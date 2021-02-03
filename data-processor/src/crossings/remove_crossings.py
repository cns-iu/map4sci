import sys

import networkx as nx
from networkx.drawing.nx_agraph import read_dot

import src.graph.vertex as vx
from src.graph import crossings
from src.transformations import graph as graph_transformations


def remove_crossings(graph: nx.Graph) -> None:
	"""Removes the crossings for the given graph
	
	Parameters
	----------
	graph : nx.Graph
		The given graph
	"""
	crs = crossings.count_crossings_single_graph(graph)
	while crs:

		current_crossing_edges = crs[0]
		graph_copy = graph.copy()

        # Removing edges to separate graph
		graph_copy.remove_edges_from(current_crossing_edges)

        # Getting the smaller component to be scaled
		smaller_component_vertices = list([c for c in sorted(nx.connected_components(graph_copy), key=len, reverse=True)][-1])
        # print(smaller_component_vertices)

		main_vertex = ""
		other_vertex = ""

		# Getting the edge connecting the main and the smaller component
		for curr_edge in current_crossing_edges:
			s, t = curr_edge[:2]

			if s in smaller_component_vertices:
				main_vertex = t
				other_vertex = s
				break

			if t in smaller_component_vertices:
				main_vertex = s
				other_vertex = t
				break

		# Translating the graph for better scaling
		translation_dx, translation_dy =  vx.get_coordinate(graph.nodes[main_vertex])
		graph_transformations.translate_graph(graph, -translation_dx, -translation_dy)


		subcomponet_vertices = smaller_component_vertices
		subcomponet_edges = graph.subgraph(subcomponet_vertices).copy().edges()

		sub_graph = nx.Graph()

		sub_graph.add_nodes_from(subcomponet_vertices)
		sub_graph.add_node(main_vertex)
		nx.set_node_attributes(sub_graph, nx.get_node_attributes(graph, 'pos'), 'pos')

		sub_graph.add_edges_from(subcomponet_edges)
		sub_graph.add_edge(main_vertex, other_vertex)

		graph = graph_transformations.scale(sub_graph, 0.5)

		nx.set_node_attributes(graph, nx.get_node_attributes(sub_graph, 'pos'), 'pos')
		crs = crossings.count_crossings_single_graph(graph)

	return graph

if __name__ == '__main__':

	graph_path  = sys.argv[1]
	graph = read_dot(graph_path)
	remove_crossings(graph)
