# Exercise V

<div id="outcomes"><details><summary></summary>

* Use the mathematical definition of Big Omega to prove the asymptotic running time of a given program.

</details></div>

Consider the following function $T(n)$ describes the precise running time of an algorithm:

$$
T(n) = 3n^2 - 100n + 6
$$

<br />

<span class="tag">Exercise</span> Show $T(n) \in \Omega(n^2)$.

<details class="solution">
<summary>Solution</summary>

We can choose $c=2$ and $n_0=100$ for the definition of Big-Oh to hold.

$$
2n^2 < 3n^2 - 100n + 6 
$$

Similar to the definition of Big-Oh, the choice of $n_0$ and $c$ are not unique.

</details>

<span class="tag">Exercise</span> Show $T(n) \in \Omega(n)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

For any $c$ and $n_0=100c$, the definition of Big-Oh to hold.

$$
cn \le 3n^2 - 100n + 6
$$

<div class="note">

Big-Omega expresses a <u>lower bound</u>, but it is not necessarily a tight lower bound.

</div>

</details>

<span class="tag">Exercise</span> Show $T(n) \notin \Omega(n^3)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

We can choose $c=1$ and for any $n > 1$ we have

$$
3n^2 - 100n + 6 \le n^3
$$

So $n^3$ is really an upper bound for $T(n)$ and **not** a lower bound.

</details>
