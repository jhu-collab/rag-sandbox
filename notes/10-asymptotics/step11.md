# Exercise IV

<div id="outcomes"><details><summary></summary>

- Recognize that Big-Oh and big Omega are not necessarily tight bounds.
- Recognize growth rate type (upper or lower bound) is different from worst-case vs. best-case analysis.

</details></div>

<span class="tag">Exercise</span> Which of the following are correct asymptotic runtime for the binary search algorithm? (There may be more than one correct answer!)

**A)** $\Omicron(n^2)$ \
**B)** $\Omicron(n)$ \
**C)** $\Omicron(\lg n)$ \
**D)** $\Omega(\lg n)$ \
**E)** $\Omega(1)$

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

All of the above!

Relying only on the formal definitions of Big-Oh and big Omega, it would be mathematically justified but rather strange (and unhelpful) to use all of the above to describe the asymptotic running time of the binary search algorithm.

<div class="note">

When we use Big-Oh/Omega to communicate how fast an algorithm is, we give the tightest upper/lower bound we can prove true.

</div>

</details>