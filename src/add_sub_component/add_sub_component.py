import os
import sys

from networkx.drawing.nx_agraph import read_dot as nx_read_dot
from networkx.drawing.nx_agraph import write_dot

import networkx as nx
from graph import crossings, edge, vertex as vx, subcomponent
from transformations import graph as graph_transformations


def main(graph_path, subgraph_path, output_path):

	input_graph_name = os.path.basename(graph_path)
	graph_name = input_graph_name.split(".")[0]


	# Reading graph and subgraph
	print(graph_path)
	graph = nx_read_dot(graph_path)
	nx.set_edge_attributes(graph, 'red', 'color')
	subgraph = nx_read_dot(subgraph_path)

	commonVertices = set(set(graph.nodes()) & set(subgraph.nodes()))

	avg_edge_length = edge.avg_length(graph)

	if len(crossings.count_crossings_single_graph(graph)):
		print(graph_name + "  has crossings.")
		print("exiting")
		sys.exit()


	v_counter=0
	for commonVertex in commonVertices:
		v_counter+=1

		translation_dx, translation_dy = vx.get_coordinate(graph.nodes[commonVertex])
		graph_transformations.translate_graph(graph, -translation_dx, -translation_dy)

		a_counter = 0
		# # Extract subcomponents, draw, sacle and attach it to the widest sector
		for currN in set(nx.all_neighbors(subgraph, commonVertex)):
			a_counter += 1

			# Compute sector angle and get the largest
			sector_angle_dict = vx.get_sectors_angle(graph, commonVertex)
			sorted_angles = sorted(sector_angle_dict.keys())
			largest_sector_angle = sorted_angles[-1]

			# graphet First vertex
			sector_vertices = sector_angle_dict[largest_sector_angle][0]

			if(largest_sector_angle == 0):
				largest_sector_angle = 360

			mid_sector_angle = largest_sector_angle/2

			first_v_id = sector_vertices[0]

			center_v = graph.nodes[commonVertex]
			first_v = graph.nodes[first_v_id]

			center_v_x, center_v_y = vx.get_coordinate(center_v)
			first_v_x, first_v_y = vx.get_coordinate(first_v)

			# get the angle of the first segment of the sector
			min_sector_angle = vx.get_Angle(center_v_x, center_v_y, first_v_x, first_v_y)

			if(min_sector_angle < 0):
				min_sector_angle = 360-abs(min_sector_angle)
			#this places the center of the sector on x axis.
			drawing_rotation_factor = -(min_sector_angle+mid_sector_angle)

			# Rotate
			graph_transformations.rotate(graph, drawing_rotation_factor)


			# Compute subcomponent Drawing
			H = subcomponent.extract(subgraph, commonVertex, currN)
			H = vx.monotone_draw(H, commonVertex, avg_edge_length)


			# Place first vertex of new component on bisector
			currN_v = H.nodes[currN]
			currN_v_x, currN_v_y = vx.get_coordinate(currN_v)
			first_H_vertex_angle = vx.get_Angle(center_v_x, center_v_y, currN_v_x, currN_v_y)

			if(first_H_vertex_angle < 0):
				first_H_vertex_angle = 360-abs(first_H_vertex_angle)

			graph_transformations.rotate(H, -first_H_vertex_angle)

			currN_v_x, currN_v_y = vx.get_coordinate(currN_v)
			first_H_vertex_angle = vx.get_Angle(center_v_x, center_v_y, currN_v_x, currN_v_y)



			# desired_first_H_angle = mid_sector_angle - first_H_vertex_angle
			# rotate(H, desired_first_H_angle)

			scaling_factor = 0.5
			# # # Add subcomponent
			graph.add_nodes_from(H.copy())
			nx.set_node_attributes(graph, nx.get_node_attributes(H, 'pos'), 'pos')
			graph.add_edges_from(H.edges)
			graph.add_edge(currN, commonVertex)

	#        Count crossings between H and G
			edges_to_compare = list(H.edges)
			edges_to_compare.append((currN, commonVertex))
			crossing_pair=crossings.count_crossings(graph, edges_to_compare)

			while len(crossing_pair):
				H = graph_transformations.scale(H, scaling_factor)
				H_pos = nx.get_node_attributes(H, 'pos')
				# print(nx.nodes(H))
				nx.set_node_attributes(graph, H_pos, 'pos')
				edges_to_compare = list(H.edges)
				edges_to_compare.append((currN, commonVertex))
				crossing_pair=crossings.count_crossings(graph, edges_to_compare)

			graph_transformations.rotate(graph, -drawing_rotation_factor)

		#Place back the graph at original position
		graph_transformations.translate_graph(graph, translation_dx, translation_dy)

	graph = nx.Graph(graph)

	nx.set_node_attributes(graph, nx.get_node_attributes(subgraph, 'level'), 'level')
	nx.set_node_attributes(graph, nx.get_node_attributes(subgraph, 'label'), 'label')

	print('writing to', output_path)
	write_dot(graph, output_path)

if __name__ == "__main__":
	f, graph_path, subgraph_path, output_path = sys.argv
	main(graph_path, subgraph_path, output_path)
