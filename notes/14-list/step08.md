# Exposing Node?

<div id="outcomes"><details><summary></summary>

* Understand the potential risks of exposing the Node inner class.

</details></div>

Consider the following operation which we have explored earlier:

```java
public void delete(Node<T> target) { }
public void insertAfter(Node<T> target, T data) { }
public void insertBefore(Node<T> target, T data) { }
```

<span class="tag">Exercise</span> How does one get a reference to a node in an arbitrarily position among the nodes in a DLL?

<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

We can update the `get` method to return a reference to a node at the target position.

```diff
- public T get(int index) { }
+ public Node<T> get(int index) { }
```

We can also update the following methods to return a reference to a newly inserted node.

```diff
- public void addFirst (T data) { }
+ public Node<T> addFirst (T data) { }

- public void addLast(T data) { }
+ public Node<T> addLast(T data) { }
```

</details>

<span class="tag">Exercise</span> Is there any benefit in, e.g., having `get` to return a Node and later pass this node to a method like `insertAfter` in contrast to having a method like `insertAfter` to recieve the target's position index?

<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

Imagine this contrived example:

```java
Node<T> node = get(3);
insertAfter(node, 4);
insertBefore(node, 2);
delete(node);
```

In contrast to:

```java
insertAfter(3, 4);
insertBefore(3, 2);
delete(3);
```

In the first snippet, the $$\Omicron(n)$$ search to find the node at index 3 happens once when we call `get`. On the other hand, in the secon snippet, the linear search happens for each operation.

</details>


When we use `Node` as a type in the signature of any public operations (such as `delete`), we must also make `Node` available (change it from `private` to a `public` static nested class).

<span class="tag">Exercise</span> What are the potential _risks_ of exposing `Node` to clients of DLL?

<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

A deviant client can change the value stored at a node and change the `next`/`prev` pointers. The latter will corrupt the data structure.

</details>
