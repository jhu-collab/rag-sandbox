# BST Operation: Find

<div id="outcomes"><details><summary></summary>

* Implement the core operations of an OrderedSet efficiently with a Binary Search Tree.

</details></div>

The `has` operation in a BST implementation of OrderedSet ADT can perform a binary search.

<div class="center">
<img src="/img/16/bst08.gif" width="80%">
</div>

<span class="tag">Exercise</span> Complete the implementation of `has`.

```java
@Override
public boolean has(T t) {
  // TODO Implement me!
  return false;
}
```

**Suggestion**: Make use of a private helper `find` method.

<details class="solution" data-release="Oct 11, 2023 17:00:00">
<summary>Solution</summary>

Here is the implementation of `has`:

```java
@Override
public boolean has(T t) {
  Node<T> target = find(t);
  return target != null;
}
```

And this is the implementation of the `find` helper method:

```java
private Node<T> find(T data) {
  Node<T> curr = root;
  while (curr != null) {
    if (curr.data.compareTo(data) > 0) {
      curr = curr.left;
    } else if (curr.data.compareTo(data) < 0) {
      curr = curr.right;
    } else {
      return curr;
    }
  }
  return curr;
}
```

We could also implement `find` recursively:

```java
private Node<T> find(Node<T> root, T data) {
  if (root == null) {
    return null;
  }
  if (root.data.compareTo(data) > 0) {
    return find(root.left, data);
  } else if (root.data.compareTo(data) < 0) {
    return find(root.right, data);
  } else {
    return root;
  }
}
```

Here is the same but more _polished_ recursive implementation!

```java
private Node<T> find(Node<T> root, T data) {
  if (root == null || root.data.equals(data)) {
    return root;
  }
  
  if (root.data.compareTo(data) > 0) {
    return find(root.left, data);
  }
  
  return find(root.right, data);
}
```

</details>