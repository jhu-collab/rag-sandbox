# Exercise IIX

<div id="outcomes"><details><summary></summary>

* Use the definition of Big Theta to show the asymptotic running time of a given program.

</details></div>

Consider the following function $T(n)$ describes the precise running time of an algorithm:

$$
T(n) = 3n^2 - 100n + 6
$$

<br />

<span class="tag">Exercise</span> Show $T(n) \in \Theta(n^2)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

We have shown in earlier lessons that $T(n) \in \Omicron(n^2)$ and $T(n) \in \Omega(n^2)$. Therefore, we can conclude $T(n) \in \Theta(n^2)$. 

</details>

<span class="tag">Exercise</span> Show $T(n) \notin \Theta(n)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

We have shown [earlier]() that $T(n) \in Omega(n)$ but $T(n) \notin \Omicron(n)$. Therefore, we can conclude $T(n) \notin \Theta(n)$. 

</details>


<span class="tag">Exercise</span> Show $T(n) \notin \Theta(n^3)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

We have shown [earlier](/steps/3/) lessons that $T(n) \in \Omicron(n^3)$ but $T(n) \notin \Omega(n^3)$. Therefore, we can conclude $T(n) \notin \Theta(n^3)$. 

</details>
