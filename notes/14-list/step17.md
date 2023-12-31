# List ADT: Efficient Implementation

<div id="outcomes"><details><summary></summary>

* Analyze the time/space efficiency of alternative implementation approaches (e.g., array vs. linked structure).

</details></div>

We want to implement the List ADT so that all core operations are in $\Omicron(1)$. We claim this can only be done using a doubly linked list (with a TAIL pointer). 

<span class="tag">Exercise</span> Give an example operation of the List ADT which cannot be implemented in constant time using an array-based or singly linked list implementation. 

<details class="solution" data-release="Oct 6, 2023 17:00:00">
<summary>Solution</summary>

The `insertBefore` operation will be at the best linear time:

* In an array-based implementation, we need to shift all the elements at the given position to the right to make room for the given value to be inserted before the given position.
  
* In a singly linked list, we need to traverse the list from the HEAD node to reach the node (position) before the given position. We must do this search because there is no "previous" pointer to get hold of a node before a given position quickly.

</details>
