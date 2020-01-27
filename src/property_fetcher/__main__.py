import os
import sys

import networkx as nx
from networkx.drawing.nx_agraph import read_dot as nx_read_dot
from networkx.drawing.nx_agraph import write_dot


def copy_attributed(graph_path, tree_path):

	properties_to_fetch = ["label", "weight", "fontsize", "level", "width","height","label", 'paper_title', 'paper_id']

	from_graph=nx_read_dot(graph_path)
	from_graph=nx.Graph(from_graph)

	to_graph=nx_read_dot(tree_path)
	to_graph=nx.Graph(to_graph)

	for param in properties_to_fetch:
		nx.set_node_attributes(to_graph, nx.get_node_attributes(from_graph, param), param)
		nx.set_edge_attributes(to_graph, nx.get_edge_attributes(from_graph, param), param)
		# print(param, end=" ")

	write_dot(to_graph, tree_path)


if __name__ == '__main__':
	copy_attributed(sys.argv[1], sys.argv[2])
