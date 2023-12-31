# Trace Array Implementation

<div id="outcomes"><details><summary></summary>

* Trace the core operations of Stack (array-based implementation).

</details></div>

Think about an array-based implementation of Stack such that the core operations are **constant time**.

<span class="tag">Exercise</span> Complete the table below: update the array values at indices `0`, `1`, `2`, `3`, and `4` as you trace the operations; show value returned if any.

| Operation  | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | Return Value  |
| :--------- | :---: | :---: | :---: | :---: | :---: | :-----------: |
| `push(6)`  |       |       |       |       |       |               |
| `push(10)` |       |       |       |       |       |               |
| `push(2)`  |       |       |       |       |       |               |
| `top()`    |       |       |       |       |       |               |
| `pop()`    |       |       |       |       |       |               |
| `push(15)` |       |       |       |       |       |               |
| `pop()`    |       |       |       |       |       |               |
| `pop()`    |       |       |       |       |       |               |
| `push(5)`  |       |       |       |       |       |               |
| `top()`    |       |       |       |       |       |               |

<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

| Operation  | [ 0 ] | [ 1 ] | [ 2 ] | [ 3 ] | [ 4 ] | Return Value  |
| :--------- | :---: | :---: | :---: | :---: | :---: | :-----------: |
| `push(6)`  |   6   |       |       |       |       |               |
| `push(10)` |   6   |   10  |       |       |       |               |
| `push(2)`  |   6   |   10  |   2   |       |       |               |
| `top()`    |   6   |   10  |   2   |       |       |       2       |
| `pop()`    |   6   |   10  |       |       |       |               |
| `push(15)` |   6   |   10  |   15  |       |       |               |
| `pop()`    |   6   |   10  |       |       |       |               |
| `pop()`    |   6   |       |       |       |       |               |
| `push(5)`  |   6   |   5   |       |       |       |               |
| `top()`    |   6   |   5   |       |       |       |       5       |

</details>

<details class="resource">
<summary>Resources</summary>

* USFCA interactive demo of [Stack (Array Implementation)](https://www.cs.usfca.edu/~galles/visualization/StackArray.html).

</details>