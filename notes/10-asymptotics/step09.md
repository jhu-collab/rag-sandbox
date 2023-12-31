# Big Omega

<div id="outcomes"><details><summary></summary>

* Express the mathematical definition of Big Omega.

</details></div>

Big Omega is used to describe asymptotic lower bounds!

<div class="note">

$$
T(n) \in \Omega(f(n))\Leftrightarrow \exists \\; c > 0, n_0 > 0 \\; \\; s.t. \\; \\; T(n) \ge c\cdot f(n) \\; \\; \forall \\; n \ge n_0.
$$

</div>

Read it as 

<div class="note">

$T(n)$ is a member of $\Omega(f(n))$ if and only if there exist positive constants $c$ and $n_0$ such that $T(n)\ge c\cdot f(n)$ for all $n\ge n_0$.

</div>

> $\Omega(f(n))$ is set of functions that grow no slower than $f(n)$.

Here is a pictorial illustration of the above definition:

<div class="center">
<img src="../../img/10/2020-09-24-21-36-03.png" width="50%">
</div>

If you want to _prove_ that $T(n) \in \Omega(f(n))$, you need to choose the constants $c$ and $n_0$ so that above definition holds whenever $n \ge n_0$. 

<span class="tag">Exercise</span> The running time of an algorithm is $T(n)=7n^2+5$. Show that $T(n) \in \Omega(n^2)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

We can choose $c=7$ and $n_0=1$ for the definition of Big Omega to hold.

$$
T(n) = 7n^2 + 5 \ge 7n^2 
$$

</details>

<details class="resource">
<summary>Resources</summary>

* Khan academy's article on [Big Omega notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-omega-notation).
* Wikipedia's entry on [Big Omega notation](https://en.wikipedia.org/wiki/Big_O_notation#Big_Omega_notation).

</details>

