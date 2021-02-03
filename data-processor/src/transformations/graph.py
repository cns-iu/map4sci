import networkx as nx
import math

from src.graph import vertex as vx

def translate_graph(graph: nx.Graph, translation_dx: float, translation_dy: float) -> nx.Graph:
	"""Translated the given graph

	Parameters
	----------
	G :	nx.Graph 
		Graph that you want to translate
	translation_dx : float 
		Value for the x-coordinate by which the graph need to be translated
	translation_dy : float
		Value for the x-coordinate by which the graph need to be translated

	Returns
	-------
	nx.Graph
		Returns the translated graph
	""" 

	for currVertex in nx.nodes(graph):
		vx.shift_vertex(graph.nodes[currVertex], translation_dx, translation_dy)

	return graph

def scale(graph: nx.Graph, scaling_factor: float) -> nx.Graph:
	"""Scaled the graph by given factor			
	
	Parameters
	----------
	G : nx.Graph
		The graph which need to be scaled
	scaling_factor : float
		Factor by which the graph should be scaled
	
	Returns
	-------
	nx.Graph
		Graph after scaling it by given factor
	"""

	# NOTE: In original impored.py it was tranlated too along with scalling 
	# translate_graph(G, min_x, min_y)
	for currVertex in nx.nodes(graph):
		v = graph.nodes[currVertex]		
		v_x, v_y = vx.get_coordinate(v)
		v_x_scaled = v_x * scaling_factor
		v_y_scaled = v_y * scaling_factor
		vx.set_coordinate(v, v_x_scaled, v_y_scaled)

	return graph


def rotate(graph: nx.Graph, angle: float) -> nx.Graph:
    """Rotates the given graph
	
	Parameters
	----------
	G : nx.graph
		The graph which you want to rotate
	angle : float
		Angle by which the graph should be rotated
	
	Returns
	-------
	nx.graph
		Returns the graph rotated by the given angle
	"""  
    angle = math.radians(angle)

    for currVertex in nx.nodes(graph):
        x, y = vx.get_coordinate(graph.nodes[currVertex])
        x_rot = x*math.cos(angle) - y*math.sin(angle)
        y_rot = x*math.sin(angle) + y*math.cos(angle)
        vx.set_coordinate(graph.nodes[currVertex], x_rot, y_rot)

    return graph