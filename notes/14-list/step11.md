# Receive a Position!

<div id="outcomes"><details><summary></summary>

* Explain how Position is different from the Node (inner) class.

</details></div>

Here is the implementation of `delete` from an earlier exercise:

```java
public void delete(Node<T> target) {
  Node<T> prevNode = target.prev;
  Node<T> nextNode = target.next;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;
}
```

<span class="tag">Exercise</span> Update `delete` so that it receives a "Position" instead of a "Node".

```java
// Pre: target's actual type is Node
public void delete(Position<T> target) {
  // TODO Implement Me!
}
```

<details class="solution" data-release="Oct 6, 2023 17:00:00">
<summary>Solution</summary>

```java
// Pre: target's "actual" type is Node
public void delete(Position<T> target) {
  Node<T> targetNode = (Note<T>) target;

  Node<T> prevNode = targetNode.prev;
  Node<T> nextNode = targetNode.next;

  prevNode.next = nextNode;
  nextNode.prev = prevNode;
}
```

Notice we must explicitly downcast `target` to access the `next` and `prev` reference variables.

</details>
