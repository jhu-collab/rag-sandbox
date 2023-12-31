# Bubble Sort: The Algorithm

<div id="outcomes"><details><summary></summary>

- Describe bubble sort at a high level.
- Work out the asymptotic complexity of bubble sort.
- Identify the number of comparisons and swaps bubble sort takes in the worst case, based on the data size.

</details></div>

Now that you've seen the code and have done a tracing activity, please work out the following exercises. 

<span class="tag">Exercise</span> Explain the bubble sort algorithm (at high-level). Supply your explanation with a concise pseudocode. 

<details class="demo">
<summary>Demo</summary>

The following slides assist in building an intuition for the answer:

<div class="pdf" file="../pdf/bubble_sort.pdf"></div>

</details>

<details class="solution" data-release="Sep 25, 2023 17:00:00">
<summary>Solution</summary>

Bubble Sort works on the idea of repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted. In each iteration, the highest unsorted element "bubbles up" to its correct position, hence the name "Bubble Sort."

```js
for i gets the values from last index to 1
  for j gets the values from 0 to i-1
    if val[j] > val[j+1]
      swap val[j] & val[j+1]
```

* The pseudocode does not have the "stop early if no swaps" optimization.

</details>

<span class="tag">Exercise</span> Analyze the running time of the bubble sort algorithm. In particular, think about where comparisons and swaps are being made and how many of them occur in each pass through the collection to be sorted. 


<details class="solution" data-release="Sep 25, 2023 17:00:00">
<summary>Solution</summary>

The algorithm has a quadratic running time, i.e., $\Omicron(n^2)$.

Looking at the pseudocode:

* Each inner pass has a comparison for each neighboring pair in the unsorted part of the array. Thus, swaps occur any time a neighboring pair is "out of order." 

* In the worst case, every comparison would result in a swap when one has an array in descending order. There would then be $(n-1) + (n-2) + \dots + 1 = \frac{n(n-1)}{2}$ comparisons and swaps, where $n$ is the number of elements; the time complexity of the worst case is $\Omicron(n^2)$.

Bubble sort requires $\Omicron(n)$ space: $\Omicron(n)$ input and $\Omicron(1)$ auxiliary space.

</details>

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort).
* Brilliant's article on [Bubble Sort](https://brilliant.org/wiki/bubble-sort/) with detailed complexity analysis.
* HackerEarth's [Bubble Sort Tutorial](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/tutorial/) with a visualizer.
* Toptal's page on [Bubble Sort](https://www.toptal.com/developers/sorting-algorithms/bubble-sort) with animation, code, analysis, and discussion.

</details>