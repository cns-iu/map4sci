
from typing import Tuple
import networkx as nx
import math

Coordinates = Tuple[float, float]

def get_coordinate(vertex) -> Coordinates:
	"""Get the x, y coordinates for the given vertex
	
	Parameters
	----------
	vertex : Vertex for which you need the coordinates
	
	Returns
	-------
	Coordinates
		Returns the x, y coordinates of the given vertex
	"""	
	x, y = vertex['pos'].split(',')

	return float(x), float(y)


def set_coordinate(vertex, x: float, y: float) -> None:
	"""Sets the coordinates for the given vertex
	
	Parameters
	----------
	vertex : The vertex for which coordinates should be changed
	x : The x-coordinate of the vertex
	y :	The y-coordinate of the vertex
	"""

	vertex['pos'] = f'{x},{y}'


def shift_vertex(vertex, dx: float, dy: float) -> None:
	"""Shifts the vertex
	
	Parameters
	----------
	vertex : Vertex that you want to shift
	dx : Value by which you want the x-coordinate to shift
	dy : Value by which you want the y-coordinate to shift
	"""
	x, y = get_coordinate(vertex)
	set_coordinate(vertex, x+dx, y+dy)

def get_Angle(x1: float, y1: float, x2: float, y2: float) -> float:
	"""Gets the angle between the lines formed by the two points
	
	Parameters
	----------
	x1 : float
		x-coordinate of the first point
	y1 : float
		y-coordinate of the first point
	x2 : float
		x-coordinate of the second point
	y2 : float
		y-coordinate of the second point	
	
	Returns
	-------
	float
		The angle formed by the lines
	"""
	xDiff = x2 - x1
	yDiff = y2 - y1
	return math.degrees(math.atan2(yDiff, xDiff))

def get_sectors_angle(graph: nx.Graph, commonVertex) -> float:

    angle_dict = dict()

    for currN in set(nx.all_neighbors(graph, commonVertex)):

        v1 = graph.nodes[commonVertex]
        v2 = graph.nodes[currN]

        v1_x, v1_y = get_coordinate(v1)
        v2_x, v2_y = get_coordinate(v2)

        angle = get_Angle(v1_x, v1_y, v2_x, v2_y)

        if(angle < 0):
            angle = 360-abs(angle)


        if(angle not in angle_dict.keys()):
            angle_dict[angle] = list()
        angle_dict[angle].append(currN)

    sorted_slopes = sorted(angle_dict.keys())

    sector_angle_dict = dict()

    for i in range(0, len(sorted_slopes)):

        first_index = i
        second_index = i+1

        if(second_index>=len(sorted_slopes)):
            second_index = 0

        first_slope = sorted_slopes[first_index]
        next_slope = sorted_slopes[second_index]


        v1_id = angle_dict[first_slope][0]
        v2_id = angle_dict[next_slope][0]

        v1 = graph.nodes[v1_id]
        v2 = graph.nodes[v2_id]

        angular_resolution = next_slope-first_slope

        if(angular_resolution < 0):
            angular_resolution = 360-abs(angular_resolution)

        if(angular_resolution not in sector_angle_dict.keys()):
            sector_angle_dict[angular_resolution] = list()

        sector_angle_dict[angular_resolution].append([v1_id,  v2_id])

    return sector_angle_dict


def monotone_draw(graph, root, edge_length):
	""" take tree
	assign unique slope
	use tan-1 for slopes
	if path, may consider same slop
	run DFS
	"""

	i = 0 # starting with zero angle

	set_coordinate(graph.nodes[root], 0.0, 0.0)

	for e in nx.dfs_edges(graph, root):
		u, v = e
		slp = math.atan(i)

		x_u, y_u = get_coordinate(graph.nodes[u])

		x_v = x_u + math.cos(slp)
		y_v = y_u + math.sin(slp)

		set_coordinate(graph.nodes[v], x_v+edge_length, y_v+edge_length)

		i = i + 1

	return graph
