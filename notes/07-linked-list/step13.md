# Linked List Iteration

<div id="outcomes"><details><summary></summary>

* Implement an iterator for a (singly) linked list.

</details></div>

Assume we pass the `head` reference variable, which points to the front of a linked list to the following Iterator class. 

<span class="tag">Exercise</span> Complete the implementation of `hasNext` and `next` methods.

```java
public class LinkedList<T> implements Iterable<T> {

  private Node<T> head;

  // other fields/methods are not shown here!

  @Override
  public Iterator<T> iterator() {
    return new LinkedListIterator();
  }

  private class LinkedListIterator implements Iterator<T> {

    @Override
    public T next() {
      return null; // TODO Implement me!
    }

    @Override
    public boolean hasNext() {
      return false; // TODO Implement me!
    }
  }
}
```

Hint: describe the responsibilities of `hasNext` and `next` before implementing them.

<details class="solution" data-release="Sep 13, 2023 17:00:00">
<summary>Solution</summary>

```java
private class LinkedListIterator implements Iterator<T> {
  private Node<T> current;

  public LinkedListIterator() {
    current = head;
  }

  @Override
  public T next() {
    if (!hasNext()) {
      throw new NoSuchElementException();
    }

    T t = current.data;
    current = current.next;
    return t;
  }

  @Override
  public boolean hasNext() {
    return current != null;
  }
}
```

</details>

