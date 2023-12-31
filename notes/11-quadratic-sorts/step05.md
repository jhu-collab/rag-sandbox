# Bubble Sort: The Code

<div id="outcomes"><details><summary></summary>

- Understand the implementation of bubble sort.
- Explain the "stop early if no swaps" optimization for bubble sort.

</details></div>

Here is how we have implemented bubble sort:

```java
/**
 * The Bubble Sort algorithm with the optimized "quick" break to exit
 * if the array is sorted.
 *
 * @param <T> The type being sorted.
 */
public final class BubbleSort<T extends Comparable<T>>
    implements SortingAlgorithm<T> {

  // is a less than b?
  private boolean less(T a, T b) {
    return a.compareTo(b) < 0;
  }

  @Override
  public void sort(IndexedList<T> indexedList) {
    boolean swapped;
    for (int i = indexedList.length() - 1; i > 0; i--) {
      swapped = false;
      for (int j = 0; j < i; j++) {
        if (less(indexedList.get(j + 1), indexedList.get(j))) {
          swap(indexedList, j, j + 1);
          swapped = true;
        }
      }
      if (!swapped) {
        return;
      }
    }
  }

  // Pre: i & j are valid indices.
  // Post: elements at i & j are swapped.
  private void swap(IndexedList<T> indexedList, int i, int j) {
    T t = indexedList.get(i);
    indexedList.put(i, indexedList.get(j));
    indexedList.put(j, t);
  }

  @Override
  public String name() {
    return "Bubble Sort";
  }
}
```

Please run the bubble sort code in "debug" mode for the following sequence of values:

$$
14, 10, 23, 34, 6, 17, 50, 14
$$

You can use the unit test in `SortingAlgorithmTest` for this purpose. 

<span class="tag">Exercise</span> Complete the following trace table. As you fill out the table, think about the role of the boolean variable `swapped` as it is used in the code above.

<div class="center">
<img src="../../img/11/bubble_sort.png" width="95%">
</div>

<details class="resource">
<summary>Making sense of the table!</summary>

Each row of the table above represents a complete inner pass through the bubble sort algorithm. Two full passes have been filled as an example of the sort. You are responsible for manually performing the bubble sort algorithm on the remaining passes through the data. The top-left portion of some boxes represents an intermediate value held at that position, and the bottom-right portions represent the final value held at that position for that particular row/inner pass. 

</details>

<details class="solution" data-release="Sep 25, 2023 17:00:00">
<summary>Solution</summary>

<div class="center">
<img src="../../img/11/bubble_sort_answer_key.png" width="95%">
</div>

The `swapped` variable would allow us to **stop early** if no swaps were made in a full pass of the outer loop. When no swap is made in a complete pass, the items are already in sorted order.  We call this the "stop early if no swaps" optimization!

</details>
