# Remove (Implementation)

<div id="outcomes"><details><summary></summary>

* Implement the core operations of an OrderedSet efficiently with a Binary Search Tree.

</details></div>

<span class="tag">Exercise</span> Complete the implementation of `remove`.

```java
@Override
public void remove(T t) {
  // TODO Implement Me!
}
```

**Hint:** Go for a recursive implementation. An iterative one without having a `parent` pointer in the `Node` class will be tough to carry out.

<details class="solution" data-release="Oct 11, 2023 17:00:00">
<summary>Solution</summary>

```java
@Override
public void remove(T t) {
  // Uses a recursive (private) helper insert
  root = remove(root, t);
}
```

```java
/* removes node with given value in the subtree rooted
   at given node and returns modified subtree. */
private Node<T> remove(Node<T> node, T t) {
  if (node == null) { // base case
    return node;
  }
  // find the node that contains "t"
  if (node.data.compareTo(t) > 0) {
    node.left = remove(node.left, t);
  } else if (node.data.compareTo(t) < 0) {
    node.right = remove(node.right, t);
  } else { // found it; let's remove it!
    // zero or one child
    if (node.right == null) {
      return node.left;
    } else if (node.left == null) {
      return node.right;
    }
    // two children
    Node<T> next = findSmallest(node.right);
    node.data = next.data;
    node.right = remove(node.right, next.data);
    numElements--;
  }

  return node;
}
```

```java
// find the smallest value in subtree rooted at node
// Pre: node != null
private Node<T> findSmallest(Node<T> node) {
  Node<T> small = node;
  while (small.left != null) {
    // go left as far as we can
    small = small.left;
  }
  return small;
}
```

</details>