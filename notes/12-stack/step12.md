# Amortized Analysis

<div id="outcomes"><details><summary></summary>

* Describe what amortized analysis is.

</details></div>

So far we analyzed the (worst-case) cost of each operation. What about (worst-case) cost of sequence of operations?

In the study of data structures, it is common to perform a sequence of operations to solve a computational task. Therefore, we may be interested to analyze the running time over a sequence of operations. For example, consider the Roster class from earlier chapters. We analyzed the cost of `find` when implemented as linear or binary search. However, we may be interested to analyze the running time when we perform a sequence of `add`s and `find`s. 

We use **amortized analysis** to analyze the cost of a sequence of operations!

<div class="note">

The amortized cost of each operation in a sequence of $n$ operations is the total cost divided by $n$.

</div>

You might have heard the term "amortized cost" in Finance or Accounting. In that context, it means to gradually write off the initial cost of an asset over a period of time. However, here, it means the _average cost_ per operation of a sequence of operations. Here, we mean "averaged" over the number of operations (or the number of times an operation is invoked). Please do not confuse amortized with _average case analysis_. The latter provides the _expected_ runtime when the input is _randomly_ drawn from a distribution *assumed* to represent the typical inputs to the algorithm.

<!--

More formally, "amortized cost is that accumulated portion of the recorded cost of a fixed asset that has been charged to expense through either depreciation or amortization."

In Computer Science and analysis of algorithms, the motivation for amortized analysis is that looking at the worst-case run time **per operation**, rather than **per algorithm**, can be too _pessimistic_!

Amortized vs. Average:

https://gist.github.com/jconnolly/5acf05f279a7e9e40371
http://lcm.csa.iisc.ernet.in/dsa/node9.html
https://stackoverflow.com/questions/7333376/difference-between-average-case-and-amortized-analysis

-->

For example, suppose we perform $10$ operations of cost $1$ and then $1$ operation of cost $10$. The amortized cost for this sequence of operations would be $20/11 \approx 2$.

We can also perform the same operation several times and calculate the amortized cost per operation! 

<span class="tag">Exercise</span> In a stack of size $n$, we run `push` $n - 1$ times where each run involves $\Omicron(1)$ work, followed by another run that involves $\Omicron(n)$ steps (due to dynamically growing the underlying array). What is the amortized cost of `push`?. 

<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

$$
\frac{(n - 1) \times \Omicron(1) + \Omicron(n)}{n} = \frac{2 \times \Omicron(n)}{n} \in \Omicron(1)
$$

</details>

More generally, the amortized cost per operation for running an operation $n$ times is the total cost divided by $n$. For example, if we run an operation $n - 1$ times where each run involves $\Omicron(1)$ work, followed by another run of the same operation that involves $\Omicron(n)$ steps (due to some worst-case condition being met), the amortized cost of this operation is $\Omicron(1)$.

Note the normal worst-case analysis for the operation (example above) would yield $\Omicron(n)$ (which is too *pessimistic*), but amortized (worst-case) analysis gives $\Omicron(1)$ (more *realistic*).

<div class="note">

The motivation for amortized analysis is that looking at the (worst-case) runtime per operation rather than sequence of operations can be too pessimistic.

</div>

Amortized cost analysis is helpful because core operations of some data structures occasionally incur a significant cost as they rebalance or improve the data structures' internal state. Those expensive processes, however, do not occur too frequently. Therefore, the amortized analysis yields an asymptotic bound closer to the actual cost of using the data structure than a standard worst-case bound. 

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Amortized Analysis](https://en.wikipedia.org/wiki/Amortized_analysis).
* Brilliant's article on [Amortized Analysis](https://brilliant.org/wiki/amortized-analysis/).
* Cornell's CS3110 online lecture notes on [Amortized Analysis](https://www.cs.cornell.edu/courses/cs3110/2011sp/Lectures/lec20-amortized/amortized.htm).
* [What is amortized analysis of algorithms?](https://stackoverflow.com/questions/11102585/what-is-amortized-analysis-of-algorithms) on StackOverflow.
* [Difference between average case and amortized analysis](https://stackoverflow.com/questions/7333376/difference-between-average-case-and-amortized-analysis) on StackOverflow.

</details>
