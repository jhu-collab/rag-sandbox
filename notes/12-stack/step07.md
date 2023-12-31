# Array Implementation of Stack

<div id="outcomes"><details><summary></summary>

* Implement the core operations of stack efficiently (array-based).

</details></div>

We want to implement the `Stack` interface using an array as an internal data storage. 

<span class="tag">Exercise</span> Think about how to implement a stack using an array such that the core operations are **constant time**. <u>Assume the array is sufficiently large.</u>

| Operation | How? | Time    |
| --------- | ---- | :-----: |
| `push`    |      |  $\Omicron(1)$ |
| `pop`     |      |  $\Omicron(1)$ |
| `top`     |      |  $\Omicron(1)$ |
| `empty`   |      |  $\Omicron(1)$ |

<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

Consider the "top" of the stack as the "end" of the array. Thus, elements can be added at the end of the collection in constant time.

Assume there is a variable `numElement`. It is initialized to $0$ when the stack is constructed (and it is therefore empty). The `numElement` is incremented/decremented as data is pushed to/popped from the stack. Therefore, the `numElement` continuously points to the next empty slot in the array. Thus, we can use it to index into the collection.

| Operation | How?                                 | Time   |
| --------- | ------------------------------------ | :----: |
| `push`    |  add to end: `arr[numElement++]`     | $\Omicron(1)$ |
| `pop`     |  delete from end: `numElement--`     | $\Omicron(1)$ |
| `top`     |  return last:  `arr[numElement - 1]` | $\Omicron(1)$ |
| `empty`   |  check if `numElement == 0`          | $\Omicron(1)$ |

</details>