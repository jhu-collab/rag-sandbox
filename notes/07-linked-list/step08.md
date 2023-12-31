# Traversing a Linked List

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (singly) linked-list implementation.
- Understand the basic operations of a (singly) linked list well enough to implement them. 

</details></div>

Suppose we have a linked list with $n$ elements (nodes), and we want to go over every element and print out the data stored in it. 

<div class="center">
<img src="../../img/07/image-20200916095828133.png" width="95%">
</div>

<span class="tag">Exercise</span> Complete the implementation of `traverse` that iterates over a linked list and prints the data stored at every node.

```java
public void traverse() {
  // TODO Implement me!
}
```

Hint: the front of the linked list is marked by the `head` pointer. If you were to follow the `next` references, how would you know when you reached the last node?

<details class="solution" data-release="Sep 13, 2023 17:00:00">
<summary>Solution</summary>

```java
public void traverse() {
  Node<T> current = head;
  while (current != null) {
    System.out.println(current.data);
    current = current.next;
  }
}
```

If you count the number of nodes in the linked list, you can also write this with a counter-controlled loop.

```java
public void traverse() {
  for (Node<T> current = head; current != null; current = current.next) {
    System.out.println(current.data);
  }
}
```

You can also implement this using a counter controlled loop, checking the count against the `numElements`.

</details>

