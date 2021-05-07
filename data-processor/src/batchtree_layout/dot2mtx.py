from collections import Counter
from json import load
import networkx as nx
from networkx.drawing.nx_agraph import read_dot
from networkx.relabel import convert_node_labels_to_integers
from sys import argv

GRAPH = argv[1]
OUT = argv[2]

G = read_dot(GRAPH)

with open(OUT+'.labels', 'w') as out:
  for n, label in sorted(G.nodes.data('label'), key=lambda x: int(x[0])):
    out.write(f'{label}\n')

with open(OUT+'.mtx', 'w') as out:
  out.write('%%MatrixMarket matrix coordinate pattern symmetric\n')
  num_nodes = G.number_of_nodes()
  num_edges = G.number_of_edges()
  out.write(f'{num_nodes} {num_nodes} {num_edges}\n')

  for source, target, weight in sorted(G.edges.data('weight'), key=lambda x: int(x[0])):
    out.write(f'{source} {target} {weight}\n')
