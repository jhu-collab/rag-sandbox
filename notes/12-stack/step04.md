# Linked Implementation of Stack

<div id="outcomes"><details><summary></summary>

* Implement the core operations of stack efficiently (linked base).

</details></div>

A singly linked list referenced by a `head` pointer naturally lends itself to the implementation of the Stack ADT.

<span class="tag">Exercise</span> Think about how to implement a stack using a singly linked list 
such that the core operations are **constant time**. 

| Operation | How? | Time    |
| --------- | ---- | :-------: |
| `push`    |      |  $\Omicron(1)$ |
| `pop`     |      |  $\Omicron(1)$ |
| `top`     |      |  $\Omicron(1)$ |
| `empty`   |      |  $\Omicron(1)$ |

<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

The top of the stack would be the HEAD node of the singly linked list. This
works because every time we want to `push` an additional value to the stack,
we would create a new node and set it as the new HEAD node (with its `.next`
pointing to the original HEAD node, or NULL if the stack was empty). Then when
we want to `pop` a value from the top of the stack, we set the
HEAD to the current HEAD node's `.next`. As such, the HEAD node will always be
at the top of the stack, and calling `top` would return the value of the HEAD
node.

| Operation | How?                                     | Time    |
| --------- | ---------------------------------------- | :-----: |
| `push`    |  prepend the list and update the `head`  |  $\Omicron(1)$ |
| `pop`     |  delete from front: `head = head.next`   |  $\Omicron(1)$ |
| `top`     |  return `head.data`                      |  $\Omicron(1)$ |
| `empty`   |  check if `head` is `null`               |  $\Omicron(1)$ |

</details>