<!---
outcomes: Use Big-Oh notation to describe the asymptotic running time of the operations of the data structures we have implemented so far. 
--->

# Exercise X

For your reference, below are the iterators for an array-based and a linked-based implementation of the IndexedList ADT.

<details class="resource">
<summary><code>ArrayIndexedListIterator</code></summary>

```java
public class ArrayIndexedList<T> implements IndexedList<T> {

  private T[] data;

  /* other fields/methods not shown */

  @Override
  public Iterator<T> iterator() {
    return new ArrayIndexedListIterator();
  }

  private class ArrayIndexedListIterator implements Iterator<T> {
    private int nextIndex;

    private ArrayIndexedListIterator() {
      nextIndex = 0;
    }

    @Override
    public boolean hasNext() {
      // you can directly access the private member 'data'
      return nextIndex < data.length;
    }

    @Override
    public T next() {
      if (!hasNext()) {
        throw new NoSuchElementException();
      }
      T t = data[nextIndex];
      nextIndex += 1;
      return t;
    }
  }
}
```

</details>

<details class="resource">
<summary><code>LinkedIndexListIterator</code></summary>

```java
public class LinkedIndexedList<T> implements IndexedList<T> {

  private Node<T> head;

  /* other fields/methods not shown */

  @Override
  public Iterator<T> iterator() {
    return new LinkedIndexListIterator();
  }

  // Node does not have access to members of LinkedIndexedList
  // because it is static
  private static class Node<T> {
    T data;
    Node<T> next;
  }

  // An iterator to traverse the linked list from front (head) to back.
  private class LinkedIndexListIterator implements Iterator<T> {
    private Node<T> current;

    LinkedIndexListIterator() {
      current = head;
    }

    @Override
    public boolean hasNext() {
      return current != null;
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
  }
}
```

</details>

<span class="tag">Exercise</span> Complete the following table. Use Big-Oh notation for expressing asymptotic runtime.

| Operation   | `ArrayIndexedListIterator` | `LinkedIndexListIterator` |
| :---------  | :-----------------------:  | :-----------------------: |
| constructor |                            |                           |
| `next`      |                            |                           |
| `hasNext`   |                            |                           |

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

| Operation   | `ArrayIndexedListIterator` | `LinkedIndexListIterator` |
| :---------  | :-----------------------:  | :-----------------------: |
| constructor |           $\Omicron(1)$           |            $\Omicron(1)$         |
| `next`      |           $\Omicron(1)$           |            $\Omicron(1)$         |
| `hasNext`   |           $\Omicron(1)$           |            $\Omicron(1)$         |
  
</details>