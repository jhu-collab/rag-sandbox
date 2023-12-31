# Exercise I

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic running time of a program given its precise running time as a function of input size.

</details></div>


Assume that each of the expressions below gives the processing time $T(n)$ spent by an algorithm for solving a problem of size $n$. Specify the asymptotic running time in Big-Oh notation.

<span class="tag">Exercise</span> $T_1(n) = 5 + 0.001n^3 + 0.025n$

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

The dominant term is $n^3$, so the runtime is $\Omicron(n^3)$.

</details>

<span class="tag">Exercise</span> $T_2(n)=3\lg n^2+(\lg n)^2 + (n+1)^2\lg (4n)$

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

Let's simplify the expression; this requires a certain level of mathematical literacy. Most of what is done below are based on the [laws of logarithms](https://en.wikipedia.org/wiki/Logarithm#Logarithmic_identities).

$$
= 3\times 2\lg n + \lg^2 n + (n^2 + 2n + 1)(\lg 4 + \lg n)
$$

$$
= 6\lg n + \lg^2 n + (n^2+2n+1)(2+\lg n)
$$

$$
= 6\lg n + \lg^2 n + 2n^2 + 4n + 2 + n^2\lg n + 2n\lg n + 2\lg n
$$

$$
= n^2\lg n + 2n^2 + 2n\lg n + 4n + \lg^2 n + 8\lg n + 2
$$

The dominant term is $n^2\lg n$, so the runtime is $\Omicron(n^2\lg n)$.

Note, $\lg n$ is $\log_2 n$ and $n^2\lg n$ is larger than $2n^2$ for all $n > 4$.

You might be wondering how I know which term has the highest order (fastest rate of growth). This, again, requires a certain level of mathematical literacy. However, a dozen functions show up in most practical cases, and we will survey them in a later lesson.  

</details>

<!--

Don't show it because it has implementations of data structures:

* Useful formulas and approximations; properties of logarithms; etc.: https://algs4.cs.princeton.edu/cheatsheet/

-->