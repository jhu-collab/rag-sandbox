# Get Operation

<div id="outcomes"><details><summary></summary>

- Trace the basic operations of a (singly) linked list implementation.
- Understand the basic operations of a (singly) linked list well enough to implement them.

</details></div>

Suppose we have a linked list with $n$ elements (nodes), and we want to get the data stored in the $k^{th}$ element (at index $k-1$). 

<div class="center">
<img src="../../img/07/image-20200916100337846.png" width="95%">
</div>

<span class="tag">Exercise</span> Complete the implementation of the `get` method which returns data stored at a given index.

```java
public T get(int index) {
  return null; // TODO Implement me!
}
```

Hint: you cannot directly jump to $K^{th}$ node. You need to start at the `head` and follow the `next` references to _get there_!

<details class="solution" data-release="Sep 13, 2023 17:00:00">
<summary>Solution</summary>

```java
public T get(int index) {
  return find(index).data;
}

// PRE: 0 <= index < numElements 
private Node<T> find(int index) {
  Node<T> target = head;
  for(int counter = 0; counter < index; ounter++) {
    target = target.next;
  }
  return target;
}
```

**Caution**: the implementation above fails to account for an edge case!

</details>

