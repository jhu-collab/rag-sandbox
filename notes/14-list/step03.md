# DLL Operation: Append

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (doubly) linked-list implementation.
- Understand the basic operations of a (doubly) linked list well enough to implement them.

</details></div>


Suppose we have the following DLL, and we want to append (add to the end) a new node.

<div class="center">
<img src="/img/14/2020-10-05-00-04-07.png" width="95%">
</div>

<span class="tag">Exercise</span> Complete the implementation of the `addLast` method that creates a node and add it to the back of the list.

```java
public void addLast(T data) {
  // TODO Implement me!
}
```

Hint: Use the following visualization as guidance.

<div class="center">
<img src="/img/14/2020-10-05-00-04-39.png" width="95%">
</div>

<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

```java
public void addLast(T data) {
  Node<T> node = new Node<>(data);
  node.prev = tail;
  tail.next = node;
  tail = node;
}
```

**Caution**: the implementation above fails to account for edge cases!

</details>

