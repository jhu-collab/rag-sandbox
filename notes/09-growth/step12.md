# Exercise IX

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic running time of the operations of the data structures we have implemented so far.

</details></div>


Consider the (singly) linked list data structure (as it was described in an earlier chapter). Then, we define the following operations:

* **insert front**: insert a element to the front of a linked list (prepend the list). <span class="highlight">This is <u>not</u> updating the value of an existing element.</span>
* **insert middle**: insert an element at a random index at a random index $i$ where $0 < i < \text{length} - 1$
* **insert back**: insert an element to the end of the list (append the list). <span class="highlight">Assume you have only a pointer to the front of the list.</span>
* corresponding **delete** operations (delete front, delete middle, delete back).
* **access** read the data stored in a node at a random position.

<span class="tag">Exercise</span> Based on your understanding of the linked list data structure, complete the following table. Use Big-Oh notation for expressing asymptotic runtime.

| Operation     | Asymptotic runtime |
| :-----------  | :----------------: |
| insert front  |                    |
| insert middle |                    |
| insert back   |                    |
| delete front  |                    |
| delete middle |                    |
| delete back   |                    |
| access        |                    |

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

| Operation     | Asymptotic runtime |
| :------------ | :------------  |
| insert front  | $\Omicron(1)$ &mdash; point the `head` to a new node |
| insert middle | $\Omicron(n)$ &mdash; reach the element before target position |
| insert back   | $\Omicron(n)$ &mdash; reach the last element |
| delete front  | $\Omicron(1)$ &mdash; update the `head` pointer |
| delete middle | $\Omicron(n)$ &mdash; reach the element before target position |
| delete back   | $\Omicron(n)$ &mdash; reach the last element |
| access        | $\Omicron(n)$ &mdash; reach the target element |
  
</details>