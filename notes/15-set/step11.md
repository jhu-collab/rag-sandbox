# Linked Implementation of OrderedSet

<div id="outcomes"><details><summary></summary>

* Implement the core operations of Ordered Set efficiently (linked base).

</details></div>

We want to _efficiently_ implement the OrderedSet ADT with an underlying linked list. 

<span class="tag">Exercise</span> Complete the following table. 

| Operation | How? | Runtime   |
| --------- | ---- | :-------: |
| `has`     |      |           |
| `insert`  |      |           |
| `remove`  |      |           |
| `size`    |      |           |

<details class="solution" data-release="Oct 9, 2023 17:00:00">
<summary>Solution</summary>

Except for `size`, all operations require a helper `find` method to check if an element exists. Thus, we cannot do better than Linear Search for `find`. (Performing Binary Search on a linked list is futile as its cost is $\Omicron(n)$ while its implementation is more complex than Linear Search.)

| Operation | How?                                        | Runtime   |
| --------- | ------------------------------------------- | :-------: |
| `has`     | `return find(t) != null;`                   |   $\Omicron(n)$  |
| `insert`  | Find where to insert, then insert!          |   $\Omicron(n)$  |
| `remove`  | `remove(find(t));`                          |   $\Omicron(n)$  |
| `size`    | `return numElements;`                       |   $\Omicron(1)$  |
| `find`    | Linear search                               |   $\Omicron(n)$  |

We can come up with a clever implementation so the `find` method would return the previous node of the target (instead of the target itself). This will make the `insert` method easier to use the same `find` operation like the one used by other operations. However, we leave this as an (unsolved) exercise to you to implement the functions of OrderedSet using a linked list.

</details>