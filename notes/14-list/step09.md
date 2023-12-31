# The Position Interface: Protecting Node!

<div id="outcomes"><details><summary></summary>

* Describe the role of Position abstraction.

</details></div>

The `Node` class represents a "position" in a linked list. We can further abstract the idea of a position. For example, we can create the following interface:

```java
/** 
 * Generic position interface.
 * 
 * @param <T> the element type.
 */
public interface Position<T> {
  
  /** 
   * Read element from this position.
   * 
   * @return element at this position.
   */
  T get();
}
```

Then, we can have the `Node` class to implement this interface:

```java
public class DoublyLinkedList<T> {
  private Node<T> head;
  private Node<T> tail;

  private static class Node<E> implements Position<E> {
    E data;
    Node<E> next;
    Node<E> prev;

    Node(E data) {
      this.data = data;
    }

    @Override
    public E get() {
      return data;
    }
  }

  // Constructor not shown

  public Position<T> addFirst (T data) { }
  public Position<T> addLast(T data) { }
  public Position<T> get(int index) { }
  public void delete(Position<T> target) { }
  public void insertAfter(Position<T> target, T data) { }
  public void insertBefore(Position<T> target, T data) { }
}
```

Notice how a client of `DoublyLinkedList` works with values of type `Position` but internally, the `DoublyLinkedList`, operates on `Node`, the subtype of `Position`.

<span class="tag">Exercise</span> How does this strategy "protect" `Node`?

<details class="solution" data-release="Oct 4, 2023 17:00:00">
<summary>Solution</summary>

A client who receives a value of type `Position` have one operation at their disposal: `get`, which returns the data stored at that position. However, they will not directly access `data` or `next`/`prev` reference variables.

</details>
