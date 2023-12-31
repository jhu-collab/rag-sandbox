# Using Sentinel Nodes

<div id="outcomes"><details><summary></summary>

* Explain the advantages of using sentinel node-based implementation.

</details></div>


A common practice when implementing a link list is to use _sentinel_ nodes. 

<div class="center">
<img src="/img/14/2020-10-07-09-27-50.png" width="100%">
</div>

* Sentinel nodes are _dummy_ nodes that you add to both ends of your linked list. 
* You will have the `head` and the `tail` pointer to always point to sentinel nodes.
The constructor will construct the sentinel nodes; they will never be removed nor updated.
* You should not count the sentinel nodes as elements of the data structure. 
* The sentinel nodes should not be considered when iterating over the elements of the data structure.

Here is the constructor of `LinkedList` building the sentinel nodes:

```java
public LinkedList() {
  head = new Node<>(null, this);
  tail = new Node<>(null, this);
  head.next = tail;
  tail.prev = head;
  numElements = 0;
}
```

<div class="note">

Using sentinel nodes eliminates many of the _edge cases_ that arise in implementing linked list operations.

</div>


<span class="tag">Exercise</span> Update the implementation of `delete` (in `DoublyLinkedList.java`) to account for all edge cases. Consider `head` and `tail` point to sentinel nodes. 


<details class="solution" data-release="Oct 6, 2023 17:00:00">
<summary>Solution</summary>

Well, we don't need to make any changes to the implementation of `delete` because with the addition of sentinel nodes, all those edge cases are accountd for!

```java
public void delete(Position<T> target) {
  Node<T> targetNode = convert(target);
  Node<T> beforeTarget = targetNode.prev;
  Node<T> afterTarget = targetNode.next;

  beforeTarget.next = afterTarget;
  afterTarget.prev = beforeTarget;
}
```

</details>

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Sentinel Node](https://en.wikipedia.org/wiki/Sentinel_node).

</details>
