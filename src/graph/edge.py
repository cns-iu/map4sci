import math
import networkx as nx

import vertex as vx


def avg_length(G: nx.Graph) -> float:
    """Returning the average lenght for all the edges of the graph
	
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
        s = G.node[s]
        t = G.node[t]

        x_source1, y_source1  = vx.get_coordinate(s)
        x_target1, y_target1 = vx.get_coordinate(t)

        curr_length = math.sqrt((x_source1 - x_target1)**2 + (y_source1 - y_target1)**2)

        sum_edge_length += curr_length

    avg_edge_len = sum_edge_length/edge_count
    return avg_edge_len


def doIntersect(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y):
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

def areEdgesAdjacent(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y):
	if isEndPoint(p1x, p1y, q1x, q1y, p2x, p2y):
		return True
	elif isEndPoint(p1x, p1y, q1x, q1y, q2x, q2y):
		return True

	return False

def is_colinear(p1x, p1y, q1x, q1y, p2x, p2y, q2x, q2y):
	x1 = p1x-q1x
	y1 = p1y-q1y
	x2 = p2x-q2x
	y2 = p2y-q2y
	cross_prod_value = x1*y2 - x2*y1
	return not cross_prod_value

def isEndPoint(ux, uy, vx, vy, px, py):
	return isSameCoord(ux, uy, px, py) or isSameCoord(vx, vy, px, py)

def is_strictly_on_segment(px, py, qx, qy, rx, ry):
	return (qx < max(px, rx) and qx > min(px, rx) and qy < max(py, ry) and qy > min(py, ry))

def isSameCoord(x1, y1, x2, y2):
	return x1 == x2 and y1 == y2

def get_orientation(px, py, qx, qy, rx, ry):
 # See http://www.geeksforgeeks.org/orientation-3-ordered-points/
 # for details of below formula.
	val = (qy - py) * (rx - qx) - (qx - px) * (ry - qy)

	if (val == 0):return 0

	# clock or counterclock wise
	if (val > 0):
		return 1
	else:
		return 2

def is_on_segment(px, py, qx, qy, rx, ry):
	return qx <= max(px, rx) and qx >= min(px, rx) and qy <= max(py, ry) and qy >= min(py, ry):

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
