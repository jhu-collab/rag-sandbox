# Best vs. Worst Case

<div id="outcomes"><details><summary></summary>

- Differentiate between the best-case and the worst-case scenarios for binary search runtime
- Recognize the speed difference between linear search and binary search

</details></div>


Let's rework the last exercise for Binary search.

<span class="tag">Exercise</span> How long will it take to find a student in each case? (Assume the `students` array is sorted and each step through the search process takes $0.004$ milliseconds.) 


1. `Roster` is used for a required freshman science class at JHU that typically has a few hundred students (all sections combined); let's round that up to 1000 students!

| Best-case      | Worst-case |
| -------------- | ---------- |
| <br><br><br>   |            |


2. `Roster` is used for a JHU Engineering for Professional MOOC (Massive Open Online Course) that has a few hundred thousand students (all cohorts combined); let's round that up to a million!

| Best-case      | Worst-case |
| -------------- | ---------- |
| <br><br><br>   |            |


<details class="solution" data-release="Aug 30, 2023 17:00:00">
<summary>Solution</summary>

The best-case scenario for both cases is the same: it takes $0.004$ milliseconds to find the student we are looking for. 

The worst-case scenario:

* In the first case, for $N = 1000$ it take approximately $\log_2 (1000) \approx 10$ steps. 

It takes $10 \times (4 \times 10^{-3}) = 0.04$ milliseconds. 

* In the second case, for $N = 10^6$ it take approximately $\log_2 (10^6) \approx 20$ steps. 

It takes $20 \times (4 \times 10^{-3}) = 0.08$ milliseconds.


<div class="note"> 

For linear search, when the size of the array increased by a factor of $1000$, the time (for worst-case) increased by the same factor of $1000$ (a linear scale, hence the name _linear_ search). However, for binary search, the same increase in size only doubled the runtime.

</div>

</details>

<details class="resource">
<summary>Resources</summary>

* Wikipedia entry on [Binary Search Performance](https://en.wikipedia.org/wiki/Binary_search_algorithm#Performance) provides an in-depth analysis.

</details>
