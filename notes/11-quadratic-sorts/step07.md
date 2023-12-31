# Summary

<div id="outcomes"><details><summary></summary>

* Recognize the effect of applying a particular sorting strategy on a data sequence.

</details></div>

Efficiency for all three is $\Omicron(n^2)$, hence "quadratic sorting algorithms."

| Sort | Elevator pitch! |
| :---- | :--------------- |
| Bubble | compare adjacent values, swap if out of order |
| Selection | find next smallest, swap into final position |
| Insertion | consider each element, move to left as far as it needs to go |


<span class="tag">Exercise</span> Suppose we have the following array contents after the **third pass** of the outer loop of some quadratic sorting algorithms meant to put the array in ascending order:

$$
3, 5, 7, 8, 2, 9, 4, 10, 15, 20
$$

Which sorting algorithm could be operating on this array? 

A) bubble (up) sort \
B) (min) selection sort \
C) insertion sort \
D) none of these

<details class="solution" data-release="Sep 25, 2023 17:00:00">
<summary>Solution</summary>

The answer is (A) & (C).

The last three elements of the array are the three largest elements. Therefore, it could be the bubble sort operating on it.

The first three elements are not the three smallest elements. Thus, it could not be the selection sort. 

The first three elements are in order. Hence, it could result from the insertion sort. (If you implement the insertion sort as to start from the second element, it can still be argued the first four elements are in sorted order).

</details>

<span class="tag">Exercise</span> Recursivley implement bubble, selection, and insertion sorts! 

<details class="solution" data-release="Sep 25, 2023 17:00:00">
<summary>Solution</summary>
This exercise is left for you as an unsolved activity!
</details>


<details class="resource">
<summary>Resources</summary>

There are great demos on the [VisuAlgo](https://visualgo.net/) website. In particular to show sorting algorithms:

  1. Go to https://visualgo.net/en/sorting
  2. Press Esc to get rid of the popup (if you log in, then it will not show up)
  3. Choose the type of sort in the top bar (Bubble, Sel, Ins) 
  4. On the bottom left, press create and add the data set (here, you can choose if you want it in random, sorted, or nearly sorted order)
  5. In the bottom left corner, you can adjust the speed by moving the bar
  6. Press sort and then Go (no need to check the box for computing inversion index)

</details>
