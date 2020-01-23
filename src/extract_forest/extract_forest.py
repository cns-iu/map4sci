import networkx as nx
import os
import sys
from networkx.drawing.nx_agraph import write_dot
from networkx.drawing.nx_agraph import read_dot as nx_read_dot
import argparse

def extract(layer1: nx.Graph, layer2: nx.Graph) -> nx.Graph:
	"""Takes in two graphs and returns the tree.

	
	Parameters
	----------
	layer1 : nx.Graph
		The first graph
	layer2 : nx.Graph
		The second graph
	
	Returns
	-------
	nx.Graph
		The tree extracted from given two graph.
		The nodes of tree are such that for any edge (A,B) node A will be in layer1 and B will be in layer2
	"""
	layer1_edges = layer1.edges()
	layer2.remove_edges_from(layer1_edges)

	nodes  = list(layer2.nodes())
	for node in nodes:
			if not list(nx.neighbors(layer2, node)):
					layer2.remove_node(node)

	return layer2

if __name__ == "__main__":
	
	parser = argparse.ArgumentParser(description='Extract Forest')
	parser.add_argument('-i', help='Path to the folder that has all the layer dot files', dest='path_to_layers')
	parser.add_argument('-o', help='Output path',dest='output_path')
	args = parser.parse_args()

	files = os.listdir(args.path_to_layers)
	print(files)	
	for i in range(len(files)-1):

		curr_file_name = files[i]
		next_file_name = files[i+1]

		layer1 = nx_read_dot(f'{args.path_to_layers}/{curr_file_name}')
		layer2 = nx_read_dot(f'{args.path_to_layers}/{curr_file_name}')

		forest = extract(layer1, layer2)
		layer2_name = os.path.basename(next_file_name).split(".")[0]

		write_dot(forest, f'{args.output_path}/{layer2_name}_forest.dot')


