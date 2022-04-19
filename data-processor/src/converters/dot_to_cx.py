import ndex2, json
import networkx as nx

# Refactored version of https://ndex2.readthedocs.io/en/latest/_modules/ndex2.html#create_nice_cx_from_networkx
# So that it works with our data

def get_cx_from_nx(G: nx.Graph, graphName: str = None) -> ndex2.NiceCXNetwork:
  builder = ndex2.NiceCXBuilder()

  if graphName:
    builder.set_name(graphName)
  elif G.graph.get('name'):
    builder.set_name(G.graph.get('name'))

  node_layout = []
  for n, d in G.nodes(data=True):
    if isinstance(n, int):
      node_id = builder.add_node(name=n, represents=d.get('represents'), id=n, map_node_ids=True)
    else:
      node_id = builder.add_node(name=n, represents=d.get('represents'), map_node_ids=True)

    builder.node_inventory[n]['n'] = d.get('label')

    for k, v in d.items():
      if k == 'weight':
        use_this_value = float(v)
        attr_type = 'double'
      elif k == 'level':
        use_this_value = int(v)
        attr_type = 'integer'
      elif k == 'pos':
        use_this_value = list(map(float, v.split(',')))
        use_this_value[1] = -use_this_value[1] # Flip the Y axis to be consistent with Mapbox
        attr_type = 'list_of_double'
        node_layout.append({'node': node_id, 'x': use_this_value[0], 'y': use_this_value[1]})
      else:
        use_this_value, attr_type = builder._infer_data_type(v, split_string=False)

      if k == 'citation' and not isinstance(use_this_value, list):
        use_this_value = [use_this_value]
        attr_type = 'list_of_string'
      if use_this_value is not None:
        builder.add_node_attribute(node_id, k, use_this_value, type=attr_type)

  index = 0
  for u, v, d in G.edges(data=True):
    if d.get('interaction') is None or d.get('interaction') == 'null':
      interaction = 'neighbor-of'
    else:
      interaction = d.get('interaction')

    if isinstance(u, int):
        builder.add_edge(source=u, target=v, interaction=interaction, id=index)
    else:
        builder.add_edge(source=builder.node_id_lookup.get(u), target=builder.node_id_lookup.get(v),
                          interaction=interaction, id=index)

    for k, val in d.items():
      if k != 'interaction':
        use_this_value, attr_type = builder._infer_data_type(val, split_string=False)

        if k == 'citation' and not isinstance(use_this_value, list):
          use_this_value = [use_this_value]
          attr_type = 'list_of_string'

        if use_this_value is not None:
          builder.add_edge_attribute(property_of=index, name=k, values=use_this_value, type=attr_type)

    index += 1

  if len(node_layout) > 0:
    builder.add_opaque_aspect('cartesianLayout', node_layout)

  return builder.get_nice_cx()

if __name__ == '__main__':
  from sys import argv
  IN_DOT = argv[1]
  OUT_CX = argv[2]
  NAME = argv[3] if len(argv) > 3 else None
  print(argv)

  G = nx.drawing.nx_agraph.read_dot(IN_DOT)
  graph = get_cx_from_nx(G, NAME)
  json.dump(graph.to_cx(), open(OUT_CX, 'w'), indent=2)
