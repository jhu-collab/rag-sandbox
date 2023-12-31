# Trace Array Implementation

<div id="outcomes"><details><summary></summary>

* Trace the core operations of Queue (array-based implementation).

</details></div>

Think about an array-based implementation of queue such that the core operations are **constant time**.

<span class="tag">Exercise</span> Complete the table below: update the array values at indices `0`, `1`, `2`, `3`, and `4` as you trace the operations; show value returned if any.

| Operation     | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | Return Value |
| :------------ | :---: | :---: | :---: | :---: | :---: | :-----------: |
| `enqueue(1)`  |       |       |       |       |       |               |
| `enqueue(2)`  |       |       |       |       |       |               |
| `enqueue(3)`  |       |       |       |       |       |               |
| `dequeue()`   |       |       |       |       |       |               |
| `enqueue(4)`  |       |       |       |       |       |               |
| `dequeue()`   |       |       |       |       |       |               |
| `enqueue(5)`  |       |       |       |       |       |               |
| `front()`     |       |       |       |       |       |               |
| `dequeue()`   |       |       |       |       |       |               |
| `front()`     |       |       |       |       |       |               |

<details class="solution" data-release="Oct 2, 2023 17:00:00">
<summary>Solution</summary>

| Operation     | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | Return Value |
| :------------ | :---: | :---: | :---: | :---: | :---: | :-----------: |
| `enqueue(1)`  |   1   |       |       |       |       |               |
| `enqueue(2)`  |   1   |   2   |       |       |       |               |
| `enqueue(3)`  |   1   |   2   |   3   |       |       |               |
| `dequeue()`   |       |   2   |   3   |       |       |               |
| `enqueue(4)`  |       |   2   |   3   |   4   |       |               |
| `dequeue()`   |       |       |   3   |   4   |       |               |
| `enqueue(5)`  |       |       |   3   |   4   |   5   |               |
| `front()`     |       |       |   3   |   4   |   5   |       3       |
| `dequeue()`   |       |       |       |   4   |   5   |               |
| `front()`     |       |       |       |   4   |   5   |       4       |

</details>

<details class="resource">
<summary>Resources</summary>

* USFCA interactive demo of [Queue (Array Implementation)](https://www.cs.usfca.edu/~galles/visualization/QueueArray.html)

</details>