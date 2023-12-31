# Insert (Implementation)

<div id="outcomes"><details><summary></summary>

* Implement the core operations of an OrderedSet efficiently with a Binary Search Tree.

</details></div>

<span class="tag">Exercise</span> Complete the implementation of `insert`.


```java
@Override
public void insert(T t) {
  // TODO Implement Me!
}
```

<details class="solution" data-release="Oct 11, 2023 17:00:00">
<summary>Solution</summary>

Here is an iterative implementation:

```java
public void insert(T t) {
  if (root == null) { // edge case!
    root = new Node<>(t);
    return;
  }

  Node<T> curr = root;
  while (curr != null) {
    if (curr.data.compareTo(t) > 0) {
      if (curr.left == null) { // reached a leaf
        // insert the new node
        curr.left = new Node<>(t);
        curr = null; // break out of the loop
      } else {
        // explore the left subtree
        curr = curr.left;
      }
    } else if (curr.data.compareTo(t) < 0) {
      if (curr.right == null) { // reached a leaf
        // insert the new node
        curr.right = new Node<>(t);
        curr = null; // break out of the loop
      } else {
        // explore the right subtree
        curr = curr.right;
      }
    } else {
      // duplicate is not allowed!
      return;
    }
  }
}
```

Here is a recursive implementation of `insert`

```java
@Override
public void insert(T t) {
  root = insert(root, t);
}

/* inserts given value into subtree rooted at given node
    and returns changed subtree with new node added. */
private Node<T> insert (Node<T> root, T data) {
  if (root == null) {
    /* If the tree is empty, return a new node */
    return new Node<>(data);
  }

  /* Otherwise, recur down the tree */
  if (root.data.compareTo(data) > 0) {
    root.left = insert(root.left, data);
  } else if (root.data.compareTo(data) < 0) {
    root.right = insert(root.right, data);
  }

  /* return the (unchanged) node pointer */
  return root;
}
```

Note the use of recursion for insert &mdash; using the value returned to update the current node. This may take a moment to understand! 

</details>
