# Big Theta

<div id="outcomes"><details><summary></summary>

* Express the mathematical definition of Big Theta.

</details></div>

Big Theta is used to describe asymptotic tight bound!

<div class="note">

$$
T(n) \in \Theta(f(n))\Leftrightarrow \exists \\; c_1 > 0, c_2 > 0, n_0 > 0 
$$

$$
s.t. \\; \\; c_1\cdot f(n) \le T(n) \le c_2\cdot f(n) \\; \\; \forall \\; n \ge n_0
$$

</div>

Read it as 

<div class="note">

$T(n)$ is a member of $\Theta(f(n))$ if and only if there exist positive constants $c_1$, $c_2$ and $n_0$ such that $c_1\cdot f(n) \le T(n)\le c_2\cdot f(n)$ for all $n\ge n_0$.

</div>

> $\Theta(f(n))$ is the set of functions that grow **no faster and no slower** than $f(n)$.

Here is a pictorial illustration of the above definition:

<div class="center">
<img src="../../img/10/2020-09-24-22-18-39.png" width="60%">
</div>

If you want to _show_ that $T(n) \in \Theta(f(n))$, you need to choose the constants $c_1$, $c_2$, and $n_0$ so that above definition holds whenever $n \ge n_0$. 

<span class="tag">Exercise</span> The running time of an algorithm is $T(n)=7n^2+5$. Show that $T(n) \in \Theta(n^2)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

We can choose $c_1=7$, $c_2=12$, and $n_0=1$ for the definition of Big Theta to hold.

$$
7n^2 \le 7n^2 + 5 \le 12n^2 
$$

</details>

Please note, another way of defining Big Theta is as follows:

<div class="note">

$T(n) \in \Theta(f(n))$ if and only if $T(n) \in \Omicron(f(n))$ and $T(n) \in \Omega(f(n))$.

</div>

Note that Big Theta describes a *tight bound*. So it is a stronger statement than Big-Oh and big Omega.

<details class="resource">
<summary>Resources</summary>

* Khan academy's article on [Big Theta notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation)
* freeCodeCamp's article [Big Theta and Asymptotic Notation Explained](https://www.freecodecamp.org/news/big-theta-and-asymptotic-notation-explained/)
* [What exactly does big Ө notation represent?](https://stackoverflow.com/questions/10376740/what-exactly-does-big-%D3%A8-notation-represent) on StackOverFlow.

</details>

<!--  

Another method of determining the condition is the following limit:

$$
\lim_{n\rightarrow \infty} \frac{T(N)}{f(n)} = c, \\; \\; \text{where} \\; \\; 0 < c < \infty
$$

If such a $c$ does exist, then $T(n) \in \Theta(f(n))$.

<span class="tag">Exercise</span> The running time of an algorithm is $T(n)=7n^2+5$. Show that $T(n) \in \Theta(n^2)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

We have shown earlier that $T(n) \in \Omicron(n^2)$ and $T(n) \in \Omega(n^2)$. Therefore, we can conclude $T(n) \in \Theta(n^2)$. Also, we can show:

$$
\lim_{n\rightarrow \infty} \frac{7n^2 + 5}{n^2} = 7
$$

</details>

-->