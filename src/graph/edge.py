import math
import networkx as nx

import src.graph.vertex as vx

def zero_length_edges(graph: nx.Graph):
	"""Yields all zero-length edges
	
	Parameters
	----------
	graph : nx.Graph
		The given graph
	"""	
	for edge in graph.edges():
			s,t = edge
			s = graph.nodes[s]
			t = graph.nodes[t]

			x_source1, y_source1  = vx.get_coordinate(s)
			x_target1, y_target1 = vx.get_coordinate(t)

			if isSameCoord(x_source1, y_source1, x_target1, y_target1):
				yield edge

def avg_length(G: nx.Graph) -> float:
    """Returns the average lenght for all the edges of the graph
	
	Parameters
	----------
	G : nx.Graph
		Graph for which you want to find the average lenght of edges
	
	Returns
	-------
	float
		The average lenght of all edges of the given graph
	"""
    sum_edge_length = 0.0
    edge_count = len(G.edges())

    for edge in G.edges():

        s,t = edge
        s = G.nodes[s]
        t = G.nodes[t]

        x_source1, y_source1  = vx.get_coordinate(s)
        x_target1, y_target1 = vx.get_coordinate(t)

        curr_length = math.sqrt((x_source1 - x_target1)**2 + (y_source1 - y_target1)**2)

        sum_edge_length += curr_length

    avg_edge_len = sum_edge_length/edge_count if edge_count > 0 else 0
    return avg_edge_len


def doIntersect(p1x: float, p1y: float, q1x: float, q1y: float, p2x: float, p2y: float, q2x: float, q2y: float) -> bool:
	"""Checks if the line segments (p1, q1) and (p2, q2) intersect
	
	Parameters
	----------
	p1x : float
		x-coordinate of p1 point
	p1y : float
		y-coordinate of p1 point
	q1x : float
		x-coordinate of q1 point
	q1y : float
		y-coordinate of q1 point
	p2x : float
		x-coordinate of p2 point
	p2y : float
		y-coordinate of p2 point
	q2x : float
		x-coordinate of q1 point
	q2y : float
		y-coordinate of q2 point
	
	Returns
	-------
	bool
		True if the line segments (p1, q1) and (p2, q2) intersect
	"""	
	if areEdgesAdjacent(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y):
		if is_colinear(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y):
			if is_strictly_on_segment(p1x, p1y, p2x, p2y, q1x, q1y) \
				or is_strictly_on_segment(p1x, p1y, q2x, q2y, q1x, q1y) \
				or is_strictly_on_segment(p2x, p2y, p1x, p1y, q2x, q2y) \
				or is_strictly_on_segment(p2x, p2y, q1x, q1y, q2x, q2y):
				return True
			else:
				return False
		else:
			return False
	return do_segments_intersect(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y)

def areEdgesAdjacent(p1x: float, p1y: float, q1x: float, q1y: float, p2x: float, p2y: float, q2x: float, q2y: float) -> bool:
	"""Determined if one of the coordiate out of given two edges (p1,q1) and (p2,q2) is same
	
	Parameters
	----------
	p1x : float
		x-coordinate of the first vertex of (p1,q1) edge
	p1y : float
		y-coordinate of the first vertex of (p1,q1) edge
	q1x : float
		x-coordinate of the second vertex of (p1,q1) edge
	q1y : float
		y-coordinate of the second vertex of (p1,q1) edge
	p2x : float
		x-coordinate of the first vertex of (p2,q2) edge
	p2y : float
		y-coordinate of the first vertex of (p2,q2) edge
	q2x : float
		x-coordinate of the first vertex of (p2,q2) edge
	q2y : float
		y-coordinate of the first vertex of (p2,q2) edge
	
	Returns
	-------
	bool
		True if one of the vertex of two edges (p1,q1) and (p2,q2) are same.
	"""	

	if isEndPoint(p1x, p1y, q1x, q1y, p2x, p2y):
		return True
	elif isEndPoint(p1x, p1y, q1x, q1y, q2x, q2y):
		return True

	return False

def is_colinear(p1x: float, p1y: float, q1x: float, q1y: float, p2x: float, p2y: float, q2x: float, q2y: float) -> bool:
	"""Determines if the two edges (p1,q1) and (p2,q2) are colinear
	
	Parameters
	----------
	p1x : float
		x-coordinate of the p1 vertex in edge (p1,q1)
	p1y : float
		y-coordinate of the p1 vertex in edge (p1,q1)
	q1x : float
		x-coordinate of the q1 vertex in edge (p1,q1)
	q1y : float
		y-coordinate of the q1 vertex in edge (p1,q1)
	p2x : float
		x-coordinate of the p2 vertex in edge (p2,q2)
	p2y : float
		y-coordinate of the p2 vertex in edge (p2,q2)
	q2x : float
		y-coordinate of the q2 vertex in edge (p2,q2)
	q2y : float
		y-coordinate of the q2 vertex in edge (p2,q2)
	
	Returns
	-------
	bool
		True if the two edges (p1,q1) and (p2,q2) are colinear
	"""	
	x1 = p1x-q1x
	y1 = p1y-q1y
	x2 = p2x-q2x
	y2 = p2y-q2y
	cross_prod_value = x1*y2 - x2*y1
	return not cross_prod_value

def isEndPoint(ux: float, uy: float, vx: float, vy: float, px: float, py: float) -> bool:
	"""Give three vertices u, v, p, checks if there exist any one pair out of the given three which are the same coordinates
		Example: if u and v coordinates have the same values then this function will return True

	Parameters
	----------
	ux : float
		x-coordinate of the first vertex
	uy : float
		y-coordinate of the first vertex
	vx : float
		x-coordinate of the second vertex
	vy : float
		y-coordinate of the second vertex
	px : float
		x-coordinate of the third vertex
	py : float
		y-coordinate of the third vertex
	
	Returns
	-------
	bool
		Returns True if any one pair out of given three vertex are same
	"""	
	return isSameCoord(ux, uy, px, py) or isSameCoord(vx, vy, px, py)

def is_strictly_on_segment(px, py, qx, qy, rx, ry):
	return (qx < max(px, rx) and qx > min(px, rx) and qy < max(py, ry) and qy > min(py, ry))

def isSameCoord(x1: float, y1: float, x2: float, y2: float) -> bool:
	"""Checks if the given coordinates are equal or not
	
	Parameters
	----------
	x1 : float
		x-coordinate of the first vertex
	y1 : float
		y-coordinate of the second vertex
	x2 : float
		x-coordinate of the second vertex
	y2 : float
		y-coordiante of the second vertex
	
	Returns
	-------
	bool
		Returns True is the coordinates are equal
	"""	
	return x1 == x2 and y1 == y2

def get_orientation(px, py, qx, qy, rx, ry):
 # See http://www.geeksforgeeks.org/orientation-3-ordered-points/
 # for details of below formula.
	val = (qy - py) * (rx - qx) - (qx - px) * (ry - qy)

	if (val == 0): return 0

	# clock or counterclock wise
	if (val > 0):
		return 1
	else:
		return 2

def is_on_segment(px, py, qx, qy, rx, ry):
	return qx <= max(px, rx) and qx >= min(px, rx) and qy <= max(py, ry) and qy >= min(py, ry)

def do_segments_intersect(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y):
 # Find the four orientations needed for general and
 # special cases
	o1 = get_orientation(p1x, p1y, q1x, q1y, p2x, p2y)
	o2 = get_orientation(p1x, p1y, q1x, q1y, q2x, q2y)
	o3 = get_orientation(p2x, p2y, q2x, q2y, p1x, p1y)
	o4 = get_orientation(p2x, p2y, q2x, q2y, q1x, q1y)

 #if(o1==0 or o2==0 or o3==0 or o4==0):return False
 # General case
	if (o1 != o2 and o3 != o4):
  		return True

 # Special Cases
 # p1, q1 and p2 are colinear and p2 lies on segment p1q1
	if (o1 == 0 and is_on_segment(p1x, p1y, p2x, p2y, q1x, q1y)):return True

 # p1, q1 and p2 are colinear and q2 lies on segment p1q1
	if (o2 == 0 and is_on_segment(p1x, p1y, q2x, q2y, q1x, q1y)):return True

	# p2, q2 and p1 are colinear and p1 lies on segment p2q2
	if (o3 == 0 and is_on_segment(p2x, p2y, p1x, p1y, q2x, q2y)):return True

	# p2, q2 and q1 are colinear and q1 lies on segment p2q2
	if (o4 == 0 and is_on_segment(p2x, p2y, q1x, q1y, q2x, q2y)):return True

	return False # Doesn't fall in any of the above cases
