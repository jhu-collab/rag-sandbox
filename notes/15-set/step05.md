# Array Implementation of Set

<div id="outcomes"><details><summary></summary>

- Implement the core operations of Set efficiently (array base).
- Analyze the time/space efficiency of array-based implementation.

</details></div>


We want to _efficiently_ implement the Set ADT with an array as the underlying data structure.

<span class="tag">Exercise</span> Complete the following table. 

| Operation | How? | Runtime   |
| --------- | ---- | :-------: |
| `has`     |      |           |
| `insert`  |      |           |
| `remove`  |      |           |
| `size`    |      |           |

<details class="solution" data-release="Oct 9, 2023 17:00:00">
<summary>Solution</summary>

Except for `size`, all operations require a helper `find` method to check if an element exists. We cannot keep the underlying data sorted to perform Binary Search (why?). We will, however, explore this option for implementing an array-based OrderedSet ADT. Let's keep the underlying data unsorted and perform Linear Search in `find`.

| Operation | How?                                        | Runtime   |
| --------- | ------------------------------------------- | :-------: |
| `has`     | `return find(t) != -1;`                     |   $\Omicron(n)$  |
| `insert`  | `if (fint(t) == -1) data[numElement++] = t;`  |   $\Omicron(n)$  |
| `remove`  | Find the element, swap with last, `numElements--` |   $\Omicron(n)$  |
| `size`    | `return numElements;`                       |   $\Omicron(1)$  |
| `find`    | Linear search                               |   $\Omicron(n)$  |

Notice the `remove` strategy, which allows us to spend constant time after the element is found.

<!-- cannot do a binary search because T is not comparable  -->

</details>