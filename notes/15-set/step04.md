# Hacking the $\Omicron(n)$ Find

<div id="outcomes"><details><summary></summary>

* Understand move-to-front heuristic well enough to implement it.

</details></div>

Consider the following implementation of `find`:

```java
private Node<T> find(T t) {
  for (Node<T> n = head; n != null; n = n.next) {
    if (n.data.equals(t)) {
      return n;
    }
  }
  return null;
}
```

<span class="tag">Exercise</span> Update the implementation of `find` to employ the ["move-to-front heuristic"](https://xlinux.nist.gov/dads/HTML/movefront.html) as it is described in the ["Dictionary of Algorithms and Data Structures"](https://xlinux.nist.gov/dads/).

<details class="solution" data-release="Oct 9, 2023 17:00:00">
<summary>Solution</summary>

Assuming helper methods `remove` and `prepend` exist, you can remove the target node and then prepend it to the list.

</details>


