# Append Operation

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (singly) linked-list implementation.
- Understand the basic operations of a (singly) linked list well enough to implement them.

</details></div>

Suppose we have the following linked list and we want to append (add to the end) a new node.

<div class="center">
<img src="../../img/07/image-20200916101118198.png" width="95%">
</div>

<span class="tag">Exercise</span> Complete the implementation of the `addLast` method that creates a node and add it to the back of the list.

```java
public void addLast(T t) {
  // TODO Implement me!
}
```

Hint: Use the following visualization as guidance.

<div class="center">
<img src="../../img/07/image-20200916101233051.png" width="95%">
</div>

<details class="solution" data-release="Sep 13, 2023 17:00:00">
<summary>Solution</summary>

```java
public void addLast(T t) {
  Node<T> tail = head;
  while (tail.next != null) {
    tail = tail.next;
  }
  
  tail.next = new Node<T>(t);
}
```

If you count the number of nodes in the linked list, you can also write this with a counter-controlled loop. In that case, the `find` helper method from when we implemented `get` can be used here to go to the last element. 

**Caution**: the implementation above fails to account for an edge case!

</details>

