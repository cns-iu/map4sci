import networkx as nx

def extract(graph: nx.Graph, mainVertex, vertex):

	tempG = graph.copy()
	tempG.remove_node(mainVertex)
	subcomponet_vertices = nx.node_connected_component(tempG, vertex)
	subcomponet_vertices.add(mainVertex)
	subcomponet_edges = graph.subgraph(subcomponet_vertices).copy().edges()
	subcomponent = nx.Graph()
	subcomponent.add_nodes_from(list(subcomponet_vertices))
	subcomponent.add_edges_from(list(subcomponet_edges))

	return subcomponent