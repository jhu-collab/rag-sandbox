# Trace Linked Implementation

<div id="outcomes"><details><summary></summary>

* Trace the core operations of Queue (linked implementation).

</details></div>

Think about a linked implementation of queue such that the core operations are **constant time**.

<span class="tag">Exercise</span> Complete the table below: update the linked list as you trace the operations; show value returned if any.

| Operation    | Linked List                    | Value Returned |
| :----------- | :----------------------------- | :------------- |
| `enqueue(1)` | `HEAD -> (1) <- TAIL`          |                |
| `enqueue(2)` | `HEAD -> (1) -> (2) <- TAIL`   |                |
| `enqueue(3)` |                                |                |
| `dequeue()`  |                                |                |
| `enqueue(4)` |                                |                |
| `dequeue()`  |                                |                | 
| `enqueue(5)` |                                |                | 
| `front()`    |                                |                |
| `dequeue()`  |                                |                |
| `front()`    |                                |                |

<details class="solution" data-release="Oct 2, 2023 17:00:00">
<summary>Solution</summary>

| Operation    | Linked List                    | Value Returned |
| :----------- | :----------------------------- | :------------- |
| `enqueue(1)` | `HEAD -> (1) <- TAIL`          |                |
| `enqueue(2)` | `HEAD -> (1) -> (2) <- TAIL`   |                |
| `enqueue(3)` | `HEAD -> (1) -> (2) -> (3) <- TAIL`   |         |
| `dequeue()`  | `HEAD -> (2) -> (3) <- TAIL`   |                |
| `enqueue(4)` | `HEAD -> (2) -> (3) -> (4) <- TAIL`   |         |
| `dequeue()`  | `HEAD -> (3) -> (4) <- TAIL`   |                | 
| `enqueue(5)` | `HEAD -> (3) -> (4) -> (5) <- TAIL`   |         | 
| `front()`    | `HEAD -> (3) -> (4) -> (5) <- TAIL`   |     3   | 
| `dequeue()`  | `HEAD -> (4) -> (5) <- TAIL`   |                |
| `front()`    | `HEAD -> (4) -> (5) <- TAIL`   |        4       |

</details>


<details class="resource">
<summary>Resources</summary>

* USFCA interactive demo of [Queue (Linked List Implementation)](https://www.cs.usfca.edu/~galles/visualization/QueueLL.html).

</details>
