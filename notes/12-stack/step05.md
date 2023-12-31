# Trace Linked Implementation

<div id="outcomes"><details><summary></summary>

* Trace the core operations of stack (linked implementation).

</details></div>

Think about a linked implementation of Stack such that the core operations are **constant time**.

<span class="tag">Exercise</span> Complete the table below: update the linked list as you trace the operations; show value returned if any.

| Operation    | Linked List            | Value Returned |
| :----------- | :--------------------- | :------------- |
| `push(6)`    | `HEAD -> (6)`          |                |
| `push(10)`   | `HEAD -> (10) -> (6)`  |                |
| `push(2)`    |                        |                |
| `top()`      |                        |                |
| `pop()`      |                        |                |
| `push(15)`   |                        |                | 
| `pop()`      |                        |                | 
| `pop()`      |                        |                |
| `push(5)`    |                        |                |
| `top()`      |                        |                |


<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

| Operation   | Linked List                   | Value Returned |
| :----------- | :--------------------------- | :------------- |
| `push(6)`   | `HEAD -> (6)`                 |                |
| `push(10)`  | `HEAD -> (10) -> (6)`         |                |
| `push(2)`   | `HEAD -> (2) -> (10) -> (6)`  |                |
| `top()`     | `HEAD -> (2) -> (10) -> (6)`  |  $2$           |
| `pop()`     | `HEAD -> (10) -> (6)`         |                |
| `push(15)`  | `HEAD -> (15) -> (10) -> (6)` |                |
| `pop()`     | `HEAD -> (10) -> (6)`         |                |
| `pop()`     | `HEAD -> (6)`                 |                |
| `push(5)`   | `HEAD -> (5) -> (6)`          |                |
| `top()`     | `HEAD -> (5) -> (6)`          |  $5$           |

</details>

<details class="resource">
<summary>Resources</summary>

* USFCA interactive demo of [Stack (Linked List Implementation)](https://www.cs.usfca.edu/~galles/visualization/StackLL.html).

</details>
