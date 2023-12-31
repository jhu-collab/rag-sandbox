# DLL Operation: Insert After

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (doubly) linked-list implementation.
- Understand the basic operations of a (doubly) linked list well enough to implement them.

</details></div>

Suppose we want to insert a node *after* the one pointed to by the reference variable `target`:

<div class="center">
<img src="/img/14/2020-10-05-09-43-03.png" width="95%">
</div>

<span class="tag">Exercise</span> Complete the implementation of `insertAfter`.

```java
public void insertAfter(Node<T> target, T data) {
	// TODO Implement me!
}
```

Hint: Use the following visualization as guidance.

<div class="center">
<img src="/img/14/2020-10-06-20-42-05.png" width="95%">
</div>

<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

```java
public void insertAfter(Node<T> target, T data) {
  Node<T> nodeToInsert = new Node<>(data);
  Node<T> nextNode = target.next;

  target.next = nodeToInsert;
  nodeToInsert.prev = target;

  nodeToInsert.next = nextNode;
  nextNode.prev = nodeToInsert;
}
```

**Caution**: the implementation above fails to account for edge cases!

</details>