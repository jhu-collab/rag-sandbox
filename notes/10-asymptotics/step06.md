# Exercise III

<div id="outcomes"><details><summary></summary>

* Use the mathematical definition of Big-Oh to show the asymptotic running time of a given program.

</details></div>

Consider the following function $T(n)$ describes the precise running time of an algorithm:

$$
T(n) = 3n^2 - 100n + 6
$$

<br/>

<span class="tag">Exercise</span> Show $T(n) \in \Omicron(n^2)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

We can choose $c=3$ and $n_0=1$ for the definition of Big-Oh to hold.

$$
3n^2 - 100n + 6 \le 3n^2
$$

> Recall the choice of $n_0$ and $c$ are not unique.

There can be many (actually, infinitely many) different
combinations of $n_0$ and $c$ that would make the Big-Oh definition to work.
It depends on what inequalities you use while doing the upper-bounding.

</details>

<span class="tag">Exercise</span> Show $T(n) \in \Omicron(n^3)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

We can choose $c=1$ and $n_0=1$ for the definition of Big-Oh to hold.

$$
3n^2 - 100n + 6 \le n^3
$$

> Big-Oh expresses an <u>upper bound</u> but does not necessarily provide a tight upper bound.

For example, you can easily show $T(n) \in  \Omicron(n^p)$ for any $p \ge 2$.

</details>

<span class="tag">Exercise</span> Show $T(n) \notin \Omicron(n)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

There simply is no $c$ and $n_0$ where the Big-Oh definition would hold for $T(n) \in \Omicron(n)$.

</details>
