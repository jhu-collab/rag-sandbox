# DLL Operation: Prepend

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (doubly) linked-list implementation.
- Understand the basic operations of a (doubly) linked list well enough to implement them.

</details></div>

Suppose we have the following DLL, and we want to add a new node to its front. 

<div class="center">
<img src="/img/14/2020-10-04-22-59-24.png" width="95%">
</div>

<span class="tag">Exercise</span> Complete the implementation of the `addFirst` method that creates a node and adds it to the front of the list.

```java
public void addFirst (T data) {
  // TODO Implement Me!
}
```

Hint: Use the following visualization as a guidance:

<div class="center">
<img src="/img/14/2020-10-04-23-00-02.png" width="95%">
</div>


<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

```java
public void addFirst(T data) {
  Node<T> node = new Node<>(data);
  node.next = head;
  head.prev = node;
  head = node;
}
```

**Caution**: the implementation above fails to account for edge cases!

</details>

