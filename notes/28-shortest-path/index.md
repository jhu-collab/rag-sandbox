<!---
lecture: 32
--->

# Shortest Path Problem

After reading this chapter and engaging in the embedded activities and reflections, you should be able to:

- Describe a general Graph Search problem variant that finds a <u>path</u> between a source and every reachable vertex.
- Modify BFS/DFS to find a path between a source and every reachable vertex.
-  Describe a general Graph Search problem variant that finds a <u>distance</u> between a source and every reachable vertex. Distance is defined as the length of a path from the source to that vertex.
- Modify BFS/DFS to find the distance between a source and every reachable vertex where distance is the length of a path from the source to that vertex.
- Trace **shortest path algorithm** in <u>unweighted graph</u> by specifying the values in auxiliary data structures. 
- Analyze the running time of the (unweighted) shortest path algorithm, assuming an incidence/adjacency list Graph implementation.
- Recognize that (unweighted) shortest path algorithm is a modified BFS.
- Explain why the modified BFS will not find the shortest path in weighted graphs.
- Trace **Dijkstra's algorithm** (shortest path in <u>weighted graph</u>) by specifying the values in auxiliary data structures. 
- Analyze the running time of Dijkstra's algorithm, assuming an incidence/adjacency list Graph implementation.
- Describe the role of support data structures in reducing the running time of Dijkstra's algorithm from quadratic to log-linear.
- Implement Dijkstra's algorithm efficiently for application to a specific problem.

> This chapter does not have a starter/solution code.