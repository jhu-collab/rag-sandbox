# DLL Operation: Get

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (doubly) linked-list implementation.
- Understand the basic operations of a (doubly) linked list well enough to implement them.

</details></div>

Suppose we have a DLL with $n$ elements (nodes), and we want to get the data stored in the $k^{th}$ node (at index $k-1$). 

<div class="center">
<img src="/img/14/2020-10-05-08-14-59.png" width="100%">
</div>

<span class="tag">Exercise</span> Complete the implementation of the `get` method which returns data stored at a given index.

```java
public T get(int index) {
  return null; // TODO Implement me!
}
```

Hint: you cannot directly jump to $K^{th}$ node. You need to start from the `head` or the `tail` and follow the pointers to _get there_!

For this exercise, traverse the list from the `tail` pointer. Assume there is a `numElements` attribute that correctly represents the number of nodes in this DLL.

<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

```java
public T get(int index) {
  Node<T> target = tail;
  for (int i = numElements - 1; i > index; i--) {
    target = target.prev;
  }
  return target.data;
}
```

**Caution**: the implementation above fails to account for an edge case!

</details>