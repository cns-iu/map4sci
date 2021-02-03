#!/usr/bin/env python3
import networkx as nx
from networkx.drawing.nx_agraph import write_dot, read_dot


GRAPH='datasets/google-topics-full/Topics_Graph.dot'
OUT='datasets/google-topics-full/network.dot'
TOPN=30

def get_nodes(graph):
  for (n, degree) in graph.degree():
    data = {
      'label': graph.nodes[n]['label'],
      'weight': graph.nodes[n]['weight']
    }
    yield n, data

def get_edges(graph):
  for n1, n2, weight in graph.edges.data('weight'):
    data = {
      'weight': float(weight)
    }
    yield n1, n2, data


source_graph = read_dot(GRAPH)
G = nx.Graph()

for n, data in get_nodes(source_graph):
  G.add_node(n, **data)
for n1, n2, data in get_edges(source_graph):
  G.add_edge(n1, n2, **data)

print('Writing Network... ', G.number_of_nodes(), G.number_of_edges())
write_dot(G, OUT)
