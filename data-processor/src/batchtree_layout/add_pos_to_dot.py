from collections import Counter
from json import load
import networkx as nx
from networkx.drawing.nx_agraph import read_dot, write_dot
from networkx.relabel import convert_node_labels_to_integers
from sys import argv

GRAPH = argv[1]
COORDS = argv[2]
OUT = argv[3]

G = read_dot(GRAPH)

with open(COORDS) as in_lines:
  for x,y,id in (line.strip().split() for line in in_lines):
    x, y = float(x)*1000, float(y)*1000
    G.nodes[id]['pos'] = f'{x},{y}'

write_dot(G, OUT)
