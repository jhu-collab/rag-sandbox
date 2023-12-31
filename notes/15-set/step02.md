# Linked Implementation of Set

<div id="outcomes"><details><summary></summary>

- Implement the core operations of Set efficiently (linked base).
- Analyze the time/space efficiency of linked implementation.

</details></div>


We want to _efficiently_ implement the Set ADT with an underlying linked list. (Go for the most straightforward choice, *singly linked list*, unless efficiently demands more complex structures.)

<span class="tag">Exercise</span> Complete the following table. 

| Operation | How? | Runtime   |
| --------- | ---- | :-------: |
| `has`     |      |           |
| `insert`  |      |           |
| `remove`  |      |           |
| `size`    |      |           |

<details class="solution" data-release="Oct 9, 2023 17:00:00">
<summary>Solution</summary>

Except for `size`, all operations require a helper `find` method to check if an element exists. We cannot do better than Linear Search for `find`.

| Operation | How?                                        | Runtime   |
| --------- | ------------------------------------------- | :-------: |
| `has`     | `return find(t) != null;`                   |   $\Omicron(n)$  |
| `insert`  | `if (find(t) == null), prepend(t);`         |   $\Omicron(n)$  |
| `remove`  | `remove(find(t));`                          |   $\Omicron(n)$  |
| `size`    | `return numElements;`                       |   $\Omicron(1)$  |
| `find`    | Linear search                               |   $\Omicron(n)$  |

We can use a doubly linked list so once the "node to be removed" is found, we can remove it in constant time (we need access to the previous node). Or we can have a `findPrevious` method to get hold of the node before the one "to be removed" in a singly linked list, in linear time, and then remove the "next" node (the target node) in constant time.

</details>