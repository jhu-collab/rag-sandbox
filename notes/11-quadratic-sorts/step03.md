# Selection Sort: The Algorithm

<div id="outcomes"><details><summary></summary>

- Describe selection sort at a high level.
- Work out the asymptotic complexity of selection sort.
- Identify the number of comparisons and swaps selection sort takes in the worst case, based on the data size.

</details></div>


Now that you've seen the code and have done a tracing activity, please work out the following exercises. 

<span class="tag">Exercise</span> Explain the selection sort algorithm (at high-level). Supply your explanation with a concise pseudocode. 

<details class="demo">
<summary>Demo</summary>

The following slides assist in building an intuition for the answer:

<div class="pdf" file="../pdf/selection_sort.pdf"></div>

</details>

<details class="solution" data-release="Sep 25, 2023 17:00:00">
<summary>Solution</summary>

The idea of Selection Sort is that we repeatedly find the smallest element in the list and bring it to the left side.

```js
for i gets the values from 0 to length-2
  min = i
  for j gets the values from i+1 to length-1
    if val[j] < val[min]
      min = j
  swap val[min] and val[i] 
  // at this point, all elements with an index i or smaller are sorted.
```

* In the outer loop of the code, there would have to be a variable keeping track of the index with the smallest element in the unsorted part of the array. 
  
* To find the actual smallest element's index, the inner loop would have to update this variable as it loops through all the elements in the unsorted part of the array.
   
* Then, a swap between the front of the unsorted part of the array and the smallest element would occur as the last line in the outer loop.
 
* This pattern continues as the unsorted part of the array becomes smaller and smaller.

</details>

<span class="tag">Exercise</span> Analyze the running time of the  selection sort algorithm. In particular, think about where comparisons and swaps are being made and how many of them occur in each pass through the collection to be sorted. 

<details class="solution" data-release="Sep 25, 2023 17:00:00">
<summary>Solution</summary>

The algorithm has a quadratic running time, i.e., $\Omicron(n^2)$.

Looking at the pseudocode (previous exercise):

* Each inner pass compares each element in the unsorted part of the array with the smallest element. 
  
* There is only one swap to place the smallest unsorted element in the correct position. 
  
* In the worst case, when one has an array in descending order, there is no change to the number of comparisons and swaps. However, the reference to the smallest unsorted element constantly changes. 
  
* There would then be $(n-1) + (n-2) + ... 1 = \frac{n(n-1)}{2}$ comparisons, and $1 \times n = n$ swaps, where $n$ is the number of elements; therefore, the time complexity of the worst case is $\Omicron(n^2)$, due to the number of comparisons.

Selection sort requires $\Omicron(n)$ space: $\Omicron(n)$ input and $\Omicron(1)$ auxiliary space.

</details>

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Selection sort](https://en.wikipedia.org/wiki/Selection_sort).
* Programiz article on the [Selection Sort Algorithm](https://www.programiz.com/dsa/selection-sort); pictorial examples & implementation in multiple programming languages.
* HackerEarth's [Selection Sort Tutorial](https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/tutorial/) with visualizer and coding questions.
* InterviewBit's [Selection Sort Tutorial](https://www.interviewbit.com/tutorial/selection-sort/) with pictorial examples and a video explanation.
* Toptal's page on [Selection Sort](https://www.toptal.com/developers/sorting-algorithms/selection-sort) with animation, code, analysis, and discussion.

</details>
