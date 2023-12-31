# DLL Operation: Insert Before

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (doubly) linked-list implementation.
- Understand the basic operations of a (doubly) linked list well enough to implement them.

</details></div>


Suppose we want to insert a note *before* the one pointed to by the reference variable `target`:

<div class="center">
<img src="/img/14/2020-10-05-10-03-03.png" width="95%">
</div>

<span class="tag">Exercise</span> Complete the implementation of `insertBefore`.

```java
public void insertBefore(Node<T> target, T data) {
	// TODO Implement me!
}
```

Hint: Use the following visualization as guidance.

<div class="center">
<img src="/img/14/2020-10-05-10-04-18.png" width="95%">
</div>


<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

```java
public void insertBefore(Node<T> target, T data) {
  Node<T> nodeToInsert = new Node<>(data);
  Node<T> prevNode = target.prev;

  target.prev = nodeToInsert;
  nodeToInsert.next = target;

  nodeToInsert.prev = prevNode;
  prevNode.next = nodeToInsert;
}
```

**Caution**: the implementation above fails to account for edge cases!

</details>