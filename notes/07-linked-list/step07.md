# Prepend Operation

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (singly) linked list implementation.
- Understand the basic operations of a (singly) linked list well enough to implement them.

</details></div>

Suppose we have the following linked list and want to add a new node to its front. 

<div class="center">
<img src="../../img/07/image-20200915231353732.png" width="95%">
</div>

<span class="tag">Exercise</span> Complete the implementation of the `addFirst` method that creates a node and adds it to the front of the list.

```java
public void addFirst (T data) {
  // TODO Implement Me!
}
```

Hint: Use the following visualization as a guidance:

<div class="center">
<img src="../../img/07/image-20200915231517797.png" width="95%">
</div>

<details class="solution" data-release="Sep 13, 2023 17:00:00">
<summary>Solution</summary>

```java
public void addFirst(T t) {
  Node<T> node = new Node<>(t);
  // node.next = null; // no need: done by default!
  node.next = head;
  head = node;
}
```

</details>

