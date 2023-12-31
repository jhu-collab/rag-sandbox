# Build a Linked List

<div id="outcomes"><details><summary></summary>

* Trace the basic operations of a (singly) linked-list implementation.

</details></div>

Consider the following implementation of `Node` (with package-private visibility modifier):

```java
class Node {
  int data;
  Node next;
  
  Node(int data) { 
    this.data = data; 
    this.next = null; // we can eliminate this line; it happens by default 
  }
}
```

<span class="tag">Exercise</span> Draw a schematic representation of a linked list pointed to by the `head` variable after the following code snippet has been executed.

```java
Node head = new Node(7);
head.next = new Node(5);
head.next.next = new Node(10);

Node node = new Node(9);
node.next = head;
head = node;
```

<details class="solution" data-release="Sep 13, 2023 17:00:00">
<summary>Solution</summary>

<div class="center">
<img src="../../img/07/2020-09-18-16-22-02.png" width="95%">
</div>

</details>

