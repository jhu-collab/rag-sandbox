# Return a Position!

<div id="outcomes"><details><summary></summary>

* Explain how Position is different from the Node (inner) class.

</details></div>

Here is the implementation of `addFirst` from an earlier exercise:

```java
public void addFirst(T data) {
  Node<T> node = new Node<>(data);
  node.next = head;
  head.prev = node;
  head = node;
}
```

<span class="tag">Exercise</span> Update `addFirst` to return the newly added node (position) which contains the given data value.

```java
public Position<T> addFirst(T data) {
  // TODO Implement Me!
  return null;
}
```

<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

```java
public Position<T> addFirst(T data) {
  Node<T> node = new Node<>(data);
  node.next = head;
  head.prev = node;
  head = node;
  return node;
}
```

Notice we can directly return a value of type `Node` where a `Position` is expected. This works because of "type substitution."

</details>
