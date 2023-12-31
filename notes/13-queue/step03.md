# Linked Implementation of Queue

<div id="outcomes"><details><summary></summary>

- Implement the core operations of Queue efficiently (linked base).
- Explain why an efficient linked implementation of Queue requires a tail pointer.

</details></div>

A singly linked list can be used to implement the Queue ADT efficiently as long as it has a `tail` pointer (as well as the `head` pointer). The `tail` pointer is a reference variable pointing to the other end (opposite of `head`) of the queue.

<span class="tag">Exercise</span> Think about how to implement a queue using a singly linked list such that the core operations are **constant time**. 

| Operation | How? | Time    |
| --------- | ---- | :-------: |
| `enqueue` |      |  $\Omicron(1)$ |
| `dequeue` |      |  $\Omicron(1)$ |
| `front`   |      |  $\Omicron(1)$ |
| `empty`   |      |  $\Omicron(1)$ |

<details class="solution" data-release="Oct 2, 2023 17:00:00">
<summary>Solution</summary>

The front of the queue would be the HEAD node of the singly linked list. The back of the queue would be the TAIL node of the singly linked list. Every time we want to `enqueue` an additional value to the queue, we would create a new node and set it as the new TAIL node. Then when we want to `dequeue` a value from the front of the queue, we set the HEAD to the current HEAD node's `.next`. As such, the HEAD node will always be at the front of the queue, and calling `front` would return the value of the HEAD node.

| Operation | How?                                     | Time    |
| --------- | ---------------------------------------- | :-----: |
| `enqueue` |  apend the list and update the `tail`  |  $\Omicron(1)$ |
| `dequeue` |  delete from front: `head = head.next`   |  $\Omicron(1)$ |
| `front`   |  return `head.data`                      |  $\Omicron(1)$ |
| `empty`   |  check if `head` is `null`               |  $\Omicron(1)$ |

</details>