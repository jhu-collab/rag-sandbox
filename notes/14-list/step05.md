# DLL Operation: Delete

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (doubly) linked-list implementation.
- Understand the basic operations of a (doubly) linked list well enough to implement them.

</details></div>

Suppose we want to delete the node pointed to by the reference variable `target`:

<div class="center">
<img src="/img/14/2020-10-05-08-44-18.png" width="95%">
</div>

<span class="tag">Exercise</span> Complete the implementation of `delete`.

```java
public void delete(Node<T> target) {
	// TODO Implement me!
}
```

Hint: Use the following visualization as guidance.

<div class="center">
<img src="/img/14/2020-10-05-08-44-45.png" width="95%">
</div>

<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

```java
public void delete(Node<T> target) {
  Node<T> prevNode = target.prev;
  Node<T> nextNode = target.next;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;

  // no need for these!
  target.next = null;
  target.prev = null;
}
```

**Caution**: the implementation above fails to account for edge cases!

</details>