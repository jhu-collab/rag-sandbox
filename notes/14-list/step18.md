# Revisit `delete`

<div id="outcomes"><details><summary></summary>

* Implement the core operations of List efficiently.

</details></div>

Open the `DoublyLinkedList.java` file and find the `delete` method.

```java
public void delete(Position<T> target) {
  Node<T> targetNode = convert(target);
  Node<T> beforeTarget = targetNode.prev;
  Node<T> afterTarget = targetNode.next;

  beforeTarget.next = afterTarget;
  afterTarget.prev = beforeTarget;
}
```

<span class="tag">Exercise</span> The implementation above fails to account for some edge cases! Identify those edge cases. 

<details class="solution" data-release="Oct 6, 2023 17:00:00">
<summary>Solution</summary>

Here are some edge cases:

* If `target` is the first element, we will not have a `beforeTarget`.
* If `target` is the last element, we will not have a `afterTarget`.
* If `target` is the only element, we will not have a `beforeTarget` nor a `afterTarget`.

In every case above, we need to treat with care and also make sure to update the `head` and/or `tail` pointers.

</details>