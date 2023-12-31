# Insertion Sort: The Algorithm

<div id="outcomes"><details><summary></summary>

- Describe insertion sort at a high level.
- Trace insertion sort algorithm on a given sequence of data.
- Understand insertion sort well enough to implement it.
- Work out the asymptotic complexity of insertion sort.
- Identify the number of comparisons and swaps insertion sort takes in the worst case, based on the data size.

</details></div>

You are asked, as part of homework-3, to implement the Insertion Sort algorithm. This lesson helps you to understand the insertion sort process.

<div class="note">

In Insertion Sort, we divide the list into two parts, a sorted and an unsorted part. 
At each iteration, insertion sort removes one element from the unsorted part, finds its location within the sorted part, and inserts it there. 
It repeats this process until no elements remain in the unsorted part.

</div>


<details class="demo">
<summary>Demo</summary>

The following slides assist in building an intuition for the insertion sort:

<div class="pdf" file="../pdf/insertion_sort.pdf"></div>

</details>

Here is the process described in pseudocode. 

```js
for i gets values from 1 to length-1
  j gets i
  while j > 0 and val[j] < val[j-1]
    swap val[j] and val[j-1]
    decrement j by 1
  // at this point, all elements to the left of index i are sorted.
```


Imagine running the insertion sort algorithm on the following sequence of values:

$$
14, 10, 23, 34, 6, 17, 50, 14
$$

<span class="tag">Exercise</span> Complete the following trace table.

<div class="center">
<img src="../../img/11/insertion_sort.png" width="95%">
</div>

<details class="resource">
<summary>Making sense of the table!</summary>

Each row of the table above represents a complete inner pass through the insertion sort algorithm. Two full passes have been filled as an example of the sort. You are responsible for manually performing the insertion sort algorithm on the remaining passes through the data. The upwards arrow in each row indicates which element needs to be partially sorted next (in other words, sorted concerning all elements to its left). 

</details>

<details class="solution" data-release="Sep 25, 2023 17:00:00">
<summary>Solution</summary>

<div class="center">
<img src="../../img/11/insertion_sort_answer_key.png" width="95%">
</div>

</details>

<span class="tag">Exercise</span> Analyze the running time of the insertion sort algorithm. In particular, think about where comparisons and swaps are being made and how many of them occur in each pass through the collection to be sorted. 

<details class="solution" data-release="Sep 25, 2023 17:00:00">
<summary>Solution</summary>

The algorithm has a quadratic running time, i.e., $\Omicron(n^2)$.

Looking at the pseudocode:

* Each inner pass has a comparison and swap for as many positions as it needs to move the next element into its sorted spot, which at max is the number of elements in the partially sorted part of the array. 
  
* In the worst case, when one has an array in descending order, each next element would need to be moved to the beginning of the array.

* There would then be $1 + 2 + \dots + (n-1) = \frac{n(n-1)}{2}$ comparisons and swaps, where $n$ is the number of elements; the time complexity of the worst case is $\Omicron(n^2)$.

Insertion sort requires $\Omicron(n)$ space: $\Omicron(n)$ input and $\Omicron(1)$ auxiliary space.

</details>

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort).
* Geeks for geeks's article on the [Insertion Sort Algorithm](https://www.geeksforgeeks.org/insertion-sort/); pictorial examples & implementation in multiple programming languages.
* HackerEarth's [Insertion Sort Tutorial](https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/tutorial/) with a visualizer.
* Khan Academy's article on [Insertion Sort](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort).
* Toptal's page on [Insertion Sort](https://www.toptal.com/developers/sorting-algorithms/insertion-sort) with animation, code, analysis, and discussion.

</details>