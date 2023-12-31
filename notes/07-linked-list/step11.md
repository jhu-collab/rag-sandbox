# Insert Operation

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (singly) linked list implementation.
- Understand the basic operations of a (singly) linked list well enough to implement them.

</details></div>

Suppose we have a linked list with $n$ elements (nodes), and we want to insert a new node at index $k$. That is, we insert a new node between elements at indices $k-1$ and $k$. After the insertion, we will have $n + 1$ elements:

* The node at index $k - 1$ before the insertion will remain at that index after the insertion.
* The node at index $k$ before the insertion will be at index $k+1$ after the insertion. 
* The newly added node will be at index $k$.

For example, we have a linked list with three nodes at indices `0`, `1`, and `2`.

<div class="center">
<img src="../../img/07/image-20200916103657147.png" width="95%">
</div>

We will insert a new node at index `2`:

<div class="center">
<img src="../../img/07/image-20200916103708486.png" width="95%">
</div>

<span class="tag">Exercise</span> Complete the implementation of `insert` which adds a new node at the given index.

```java
public void insert(int index, T t) {
	// TODO Implement me!
}
```

Hint: Use the following visualization as guidance.

<div class="center">
<img src="../../img/07/image-20200916103728330.png" width="95%">
</div>

<details class="solution" data-release="Sep 13, 2023 17:00:00">
<summary>Solution</summary>

```java
public void insert(int index, T t) {
  Node<T> target = head;
  for (int counter = 0; counter < index - 1; counter++) {
    target = target.next;
  }

  Node<T> node = new Node(t);
  node.next = target.next;
  target.next = node;
}
```

**Caution**: the implementation above fails to account for edge cases or cases where `index` is invalid!

</details>

