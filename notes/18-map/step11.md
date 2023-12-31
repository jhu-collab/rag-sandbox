# Height is $\Omicron(\lg N)$

<div id="outcomes"><details><summary></summary>

* Show the height of BST that maintains balance property is $\Omicron(\lg N)$.

</details></div>


<div class="note">

This section is an optional reading!

</div>

In a BBST, unlike a regular BST, it is *guaranteed* that the tree's height is $\Omicron(\lg N)$. This claim can be easily observed for a perfect BST, where each internal node has two children and all the leaves are at the same level. 

<div class="center">
<img src="/img/18/bbst03.png" width="100%">
</div>

Let's observe the perfect BSTs above

| Height | Nodes | Binary Log Calculation |
|:------:|:-----:|:----------------------:|
|  $0$   |  $1$  |     $\log_2 1 = 0$     |
|  $1$   |  $3$  |     $\log_2 3 = 1$     |
|  $2$   |  $7$  |     $\log_2 7 = 2$     |
|  $3$   | $15$  |    $\log_2 15 = 3$     |

Given these perfect BSTs, one can intuit how this holds more generally. 

First, convince yourself that the worst height of a BST is when it has the minimum number of nodes concerning its height. Then, let's call $N(h)$ the minimum number of nodes given height. 

> The worst case $h \in \Omicron(n)$ is when $N(h) = h+1$.

If we find the upper bound of $N(h)$ for BBST, then we've bounded the height of all BBSTs. 

Let's consider a BBST of height $h \geq 3$ and the minimum number of nodes $n=N(h)$. This tree is composed of a root and two subtrees. Since the whole tree has the minimum number of nodes for its height, so do the subtrees. For the big tree to be of height $h$, one of the subtrees must be of height $h-1$. To get the minimum number of nodes, the other subtree is of height $h-2$.

<details class="resource">
<summary>
Why can't the other subtree be of height $h-3$ or $h-4$?
</summary>

Because the balance property requires the height of siblings to differ by at most $1$. 

</details>


So far, we established for $h \geq 3$,

$$
N(h) = 1 + N(h-1) + N(h-2)
$$

We know

$$
N(h) > N (h-1)​ \space \text{and} \space N(h-1) > N(h-2)​
$$

therefore

$$
N(h) > N(h-1) + N(h-2) > 2\times N(h-2)
$$

If $N(h) > 2\times N(h-2)$ then $N(h-2) > 2\times N(h-4)$, therefore

$$
N(h) > 2\times N(h-2) > 4 \times N(h-4)
$$

We can keep doing this

$$
N(h) > \dots > 4\times N(h-4) > 8\times N(h-8) > \dots
$$

<details class="resource">
<summary>What does the above expression demonstrate? Why is that significant?</summary>

This expression demonstrates that the number of nodes at least doubles each time the height increases by a factor of $2$. This observation is important because $N(h)$ is exponential in $h$. Therefore $h$ is logarithmic in the number of nodes.

</details>

Continuing the proof, we see that this can be written as: 

$$
N(h) > 2^i \times N(h - 2i)
$$

The largest $i$ we can put in there is $i = \frac{h}{2} - 1$:

<details class="resource">
<summary>
Why is this value of $i$ chosen as $\frac{h}{2} - 1$?
</summary>

This allows the expression to be equal to either $1$ or $2$, depending on if $h$ is even or odd. 
  * Even $h$: $h - 2i = h - (h - 2) = 2$
  * Odd $h$: $h - 2i = h - (2(\frac{h}{2}) - 2) = h - ((h + 1)-2) = 1$

</details>

So we have:

$$
N(h) > 2^i \times (h-2i) > 2^{\frac{h}{2}} \times N(h - h) > 2^{\frac{h}{2}}
$$

<div class="note">

So we showed the minimum number of nodes, $n=N(h)$ in a BBST of height $h$, is **at least** $2^{\frac{h}{2}}$:  

$$
n > 2^{\frac{h}{2}}
$$

</div>

What does this say about height, $h$? First, let's take the logarithm of both sides:

$$
\lg n > \lg 2^{\frac{h}{2}} \Rightarrow h < 2\lg(n)
$$

So, $h \in \Omicron(\lg n)$.