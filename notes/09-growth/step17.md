# Exercise XII

<div id="outcomes"><details><summary></summary>

* Rank asymptotic complexities from smallest to largest.

</details></div>

<span class="tag">Exercise</span> Two alternative algorithms, $A$ and $B$, have _logarithmic_ and _linear_ runtimes, respectively. Which statement is true?

A) $A$'s runtime function grows faster thus $A$ is faster \
B) $A$'s runtime function grows slower thus $A$ is faster \
C) $B$'s runtime function grows faster thus $B$ is faster \
D) $B$'s runtime function grows slower thus $B$ is faster

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

You can imagine A is binary search and B is linear search. 
Based on the information we have, A runs faster. How do we know that?
Because $\lg n$ grows _slower_ than $n$, as $n$ gets larger and larger, which means it takes less time for $A$ to do its work. So the answer is (B).

</details>




