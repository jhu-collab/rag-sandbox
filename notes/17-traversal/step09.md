# In-order Traversal: Recursive Implementation

<div id="outcomes"><details><summary></summary>

* Implement in-order traversal.

</details></div>

For BST implementation of OrderedSet ADT, we must iterate over the nodes using in-order traversal, so the outcome is "ordered" (sorted).

We will try to implement a recursive in-order traversal first before implementing the iterator since the recursive implementation is easier to understand and implement.

Assume the `Node` class was public, and we have the reference variable `root` pointing to the root of a BST. The following statement must print the values in the BST "in order":

```java
printInOrder(root);
```

<span class="tag">Exercise</span> Complete the implementation of `printInOrder`.

```java
public static void printInOrder(Node<T> node) {
  // TODO Implement me!
  System.out.print(node.data + " ");
}
```

<details class="solution" data-release="Oct 16, 2023 17:00:00">
<summary>Solution</summary>

```java
public static void printInOrder(Node<T> node) {
  if (node == null) {
    return;
  }
  printInOrder(node.left);
  System.out.print(node.data + " ");
  printInOrder(node.right);
}
```

</details>
