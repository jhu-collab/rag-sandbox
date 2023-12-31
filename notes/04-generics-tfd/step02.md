# An Implementation of IndexedList

<div id="outcomes"><details><summary></summary>

* Implement the IndexedList ADT using Java's built-in array.

</details></div>


We are aiming for a very simple implementation of `IndexedList` that <span class="highlight">uses the built-in Java array as internal storage of data</span>.

<span class="tag">Exercise</span> Completed the implementation of `ArrayIndexedList`

```java
/**
 * An implementation of IndexedList that takes a default value
 * to plaster over the entire data structure.
 */
public class ArrayIndexedList implements IndexedList {
  private int[] data;

  /**
   * Construct an ArrayIndexedList with given size and default value.
   *
   * @param size         the capacity of this list.
   * @param defaultValue an integer to plaster over the entire list.
   */
  public ArrayIndexedList(int size, int defaultValue) {
    // TODO Implement me!
  }

  @Override
  public void put(int index, int value) {
    // TODO Implement me!
  }

  @Override
  public int get(int index) {
    return 0; // TODO Implement me!
  }

  @Override
  public int length() {
    return 0; // TODO Implement me!
  }
}
```

<details class="solution" data-release="Sep 8, 2023 17:00:00">
<summary>Solution</summary>

```java
/**
 * An implementation of IndexedList that takes a default value
 * to plaster over the entire data structure.
 */
public class ArrayIndexedList implements IndexedList {
  private int[] data;

  /**
   * Construct an ArrayIndexedList with given size and default value.
   *
   * @param size         the capacity of this list.
   * @param defaultValue an integer to plaster over the entire list.
   */
  public ArrayIndexedList(int size, int defaultValue) {
    data = new int[size];
    for (int i = 0; i < size; i++) {
      data[i] = defaultValue;
    }
  }

  @Override
  public void put(int index, int value) {
    data[index] = value;
  }

  @Override
  public int get(int index) {
    return data[index];
  }

  @Override
  public int length() {
    return data.length;
  }
}
```

Notice 

* The `IndexedList` ADT does not specify how it must be implemented. Therefore, the decisions such as using an array internally, having a fixed length, and initializing the array with a default value are made by `ArrayIndexedList`. 

* There is no need to write JavaDoc for methods declared (and documented) in the `IndexedList` interface as one can always see the documentation there. 

</details>


Here is a class diagram that represents our type hierarchy so far:

<div class="center">
<img src="../../img/04/indexedlist.png" width="20%">
</div>

<div class="note">

`ArrayIndexedList` is our first official data structure in this course!	🎉

</div>
