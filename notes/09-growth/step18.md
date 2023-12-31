# Exercise XIII

<div id="outcomes"><details><summary></summary>

* Rank asymptotic complexities from smallest to largest.

</details></div>


<span class="tag">Exercise</span> For each of the $T(n)$ running time listed below, figure out the asymptotic runtime and express it in Big-Oh notation. Then rank the functions in growth rate order, **starting with the slowest growth rate (i.e those resulting in a fast runtime), and ending with the fastest growth rate (worst runtime).** If two functions have the same asymptotic runtime, then rank them based on the original expressions (including constants).

| $T(n)$                               | Big-Oh | Rank |
| :----------------------------------- | ------ | ---- |
| $\left ( \lg \frac{n}{4} \right )^3$ |        |      |
| $(n^2-4)/(n+2)$                      |        |      |
| $\left ( 3n + \lg n \right )^2$      |        |      |
| $2 \lg n^2$                          |        |      |
| $\left ( 2^n \right )^2 + \lg n$     |        |      |
| $n^2 \lg 16$                         |        |      |
| $2n\lg\lg n$                         |        |      |
| $4n^2+n(10 + \lg n)$                 |        |      |


<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

| $T(n)$                               | Big-Oh                                                       | Rank |
| :----------------------------------- | ------------------------------------------------------------ | :----: |
| $\left ( \lg \frac{n}{4} \right )^3$ | $\left ( \lg n - \lg 4 \right )^3 = \left ( \lg n - 2 \right )^3 \in \Omicron(\lg^3 n)$ | 2    |
| $(n^2-4)/(n+2)$                      | $(n-2)(n+2)/(n+2) \in \Omicron(n)$                                  | 3    |
| $\left ( 3n + \lg n \right )^2$      | $9n^2+\lg^2 n + 6n\lg n \in \Omicron(n^2)$                          | 7    |
| $2 \lg n^2$                          | $4 \lg n \in \Omicron(\lg n)$                                       | 1    |
| $\left ( 2^n \right )^2 + \lg n$     | $4^n+\lg n \in \Omicron(4^n)$                                       | 8    |
| $n^2 \lg 16$                         | $4n^2 \in \Omicron(n^2)$                                            | 5    |
| $2n\lg\lg n$                         | $\Omicron(n\lg\lg n)$                                               | 4    |
| $4n^2+n(10 + \lg n)$                 | $4n^2+10n+n\lg n \in \Omicron(n^2)$                                 | 6    |

</details>


<details class="resource">
<summary>Resources</summary>

[Logarithmic identities](https://en.wikipedia.org/wiki/Logarithm#Logarithmic_identities) are essential for solving the above exercise.

</details>
