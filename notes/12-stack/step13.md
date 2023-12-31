# Growth Factor

<div id="outcomes"><details><summary></summary>

* Elaborate on the importance of array growth factor to maintain amortized constant time push operation.

</details></div>

Consider a dynamic array-based implementation of Stack. The amortized cost of `push` depends on the _growth factor_ employed to expand (resize) the array.

<span class="tag">Exercise</span> If the array size starts at $1$, how expensive will it be to grow to $1$ million if we grow the array one element at a time?

<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

When we call `grow` in the `push` method, if we grow the array by one (or few) elements, then the number of times we call "grow" **linearly increases** with the number of times we call "push." 

<div class="center">
<img src="../../img/12/2020-09-29-23-03-04.png" width="90%">
</div>

The function `grow` itself is a linear-time operation. So we have a situation that looks like $\Omicron(n) \times \Omicron(n)$, which gives us $\Omicron(n^2)$ quadratic runtime for $n$ "push" operations.

Another way to see this is that for one million push, the (computational) work performed by the "grow" operation (in total) will be as follows.

$$
1 + 2 + \dots + 999999 = 499999500000 \approxeq \text{1 billion}
$$ 

The above shows the $\Omicron(n^2)$ total runtime for $n$ "push" operations. The **amortized cost** of `push` will then be $\frac{\Omicron(n^2)}{n}=\Omicron(n)$.

</details>

<span class="tag">Exercise</span> If the array size starts at $1$, how expensive will it be to grow to $1$ million if we double the size of the array each time we reach its capacity?

<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

If we grow the array by doubling its size, the number of times we call `grow` **logarithmically increases** with the number of pushes. 

<div class="center">
<img src="../../img/12/2020-09-29-23-03-49.png" width="90%">
</div>

Let's say we start with an array of 1 element, and then we do $n$ push. The total work done is as follows. 

$$
1 + 2 + 4 + 8 + \dots + 2^{\lg n} = 2^{(\lg n) + 1} - 1 
$$

The total above is calculated by [adding up all the powers of two](https://en.wikipedia.org/wiki/1_%2B_2_%2B_4_%2B_8_%2B_%E2%8B%AF).

Note that $2^{\lg n} = n$ (recall $\lg n$ is $\log_{2} n$. Moreover, look at rule #7 of [logarithm rules](https://www.chilimath.com/lessons/advanced-algebra/logarithm-rules/)). 

So we have the following:

$$
2^{(\lg n) + 1} - 1 = \left ( 2^{(\lg n)} \times 2 \right ) - 1 = 2n - 1 \in \Omicron(n)
$$

Thus the total runtime is $\Omicron(n)$ for $n$ "push" operations. The **amortized cost** of `push` will then be $\frac{\Omicron(n)}{n}=\Omicron(1)$.

<div class="note">

Dynamic arrays resize by a multiplicative factor, such as doubling in size, to avoid incurring the cost of resizing many times. That is, as $n$ elements are inserted, the values of increased capacities form a [geometric progression](https://en.wikipedia.org/wiki/Geometric_progression).

</div>

</details>

<details class="resource">
<summary>Resources</summary>

* Wikipedia entry: [Dynamic array &mdash; Geometric expansion and amortized cost](https://en.wikipedia.org/wiki/Dynamic_array#Geometric_expansion_and_amortized_cost).

</details>


<!--

Can we use a growth factor of 3 or 4?


See https://en.wikipedia.org/wiki/Dynamic_array#Geometric_expansion_and_amortized_cost that says: generally, we want to expand by a multiplicative factor. Hence, as $n$ elements are inserted, the capacities form a geometric progression. (That is, a sequence of non-zero numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio).

Choosing 2 (or powers of 2) will _minimize_ the cost (vanishes the derivative). See this answer:
https://cs.stackexchange.com/questions/74350/why-is-it-most-efficient-to-resize-a-dynamic-array-to-2-array-length

-->