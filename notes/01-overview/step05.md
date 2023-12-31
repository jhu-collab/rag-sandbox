# An Algorithm!

<div id="outcomes"><details><summary></summary>

- Define algorithm
- Differentiate between the best-case and the worst-case scenarios for linear search runtime

</details></div>


Linear search is an algorithm!

<div class="note">

The Oxford dictionary defines *algorithm* as "a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer."

</div>

What can we say about the performance of the linear search? Well, let's consider different cases:

* If we are lucky, and the target student which we are looking for is the first element in the `students` array, then we will find it immediately. That's the **best-case** scenario. 

* The **worst-case** is when the target student is not on the roster. Then, the linear search has to go over all the students (their emails) to report the array does not contain what we are looking for. 

<div class="note">

The difference between the _best_ and _worst_ case scenarios would be more prominent when the `students` array is large and has many elements. 

</div>

<span class= "tag">Exercise</span> How long will it take to find a student in each case? (Assume each iteration of the for loop takes $0.004$ milliseconds.) 


1. `Roster` is used for a required freshman science class at JHU that typically has a few hundred of students (all sections combined); let's round that up to 1000 students!

| Best-case      | Worst-case |
| -------------- | ---------- |
| <br><br><br>   |            |


2. `Roster` is used for a JHU Engineering for Professional MOOC (Massive Open Online Course) that has a few hundred thousand students (all cohorts combined); let's round that up to a million!

| Best-case      | Worst-case |
| -------------- | ---------- |
| <br><br><br>   |            |


<details class="solution" data-release="Aug 28, 2023 17:00:00">
<summary>Solution</summary>

The best-case scenario for both cases is the same: it takes one loop iteration to find the student we are looking for. Therefore, it takes $0.004$ milliseconds.

The worst-case scenario will be different: 
* In the first case, we must search $n = 1000$ elements. 

It takes $10^3 \times (4 \times 10^{-3}) = 4$ milliseconds. 

* In the second case, we must search $n = 1000000$ elements. 

It takes $10^6 \times (4 \times 10^{-3}) = 4000$ milliseconds or $4$ seconds.

</details>


<details class="resource">
<summary>Resources</summary>

Wikipedia's entry on [Linear Search](https://en.wikipedia.org/wiki/Linear_search) is a good resource for a more in-depth analysis.

</details>