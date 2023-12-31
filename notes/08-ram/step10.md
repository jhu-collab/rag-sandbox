# Exercise II

<div id="outcomes"><details><summary></summary>

- Express the number of steps for a given code segment as a function of the input size in the worst-case scenario.
- Appreciate it can be tough to work out precisely the exact number of RAM instructions executed.

</details></div>


Consider this program

```java
public int myStrangeSum (int num) {
  int sum = 0;
  int numnum = 3 * num;
  for (int i = 0; i < numnum; i++) {
    for (int j = 0; j < 5; j++) {
      for (int k = i; k > 1; k--) {
        sum++;
      }
    }
  }
  return sum;
}
```

<span class="tag">Exercise</span> Count the number of steps taken by the above program. Write the count as a function $T(N)$ where $N$ is the size of the "input." You need to determine what quantity is a suitable choice for the "size of input" here.

<details class="solution" data-release="Sep 18, 2023 17:00:00">
<summary>Solution</summary>

The runtime can be described as a function of $N$, variable `num`'s value.

```java
public int myStrangeSum (int num) {
  int sum = 0;                         // 1
  int numnum = 3 * num;                // 2
  for (int i = 0; i < numnum; i++) {   // 1 + (3N + 1) + 3N
    for (int j = 0; j < 5; j++) {      // (1 + 6 + 5) * (3N)
      for (int k = i; k > 1; k--) {    // (tricky! let's call it x) * 15N
        sum++;                         //  1 * x * 15N
      }
    }
  }
  return sum;                          // 1
}
```

The variable `k` takes the values of `i`:

| `i` | # iteration inner loop (not considering middle loop) | values of `k` |
| :--- | :---------------------------: | :------------- |
| `0` | will not run                | `0`           |
| `1` | will not run                | `1`           |
| `2` | once                        | `2`, `1`      |
| `3` | twice                       | `3`, `2`, `1` |
| `4` | 3                           | `4`, `3`, `2`, `1` |
| $\vdots$ | $\vdots$               | $\vdots$ |
| `N` | $N-1$                       | `N` $\dots$ `1` |
| $\vdots$ | $\vdots$               | $\vdots$ |
| `3N - 1` | $3N-2$                 | (`3N-1`) $\dots$ `1` |

Let's see how many times each statement in the most inner loop will be executed for different values of `i`:

| `i`  | `int k = i` | `k > 1` | `k--`  | `sum++` |
| :--- | :---------- | :------ | :----- | :------ |
| `0`  | $1$         | $1$     | $0$    | $0$     |
| `1`  | $1$         | $1$     | $0$    | $0$     |
| `2`  | $1$         | $2$     | $1$    | $1$     |
| `3`  | $1$         | $3$     | $2$    | $2$     |
| `4`  | $1$         | $4$     | $3$    | $3$     |
| $\vdots$  | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ |
| `N`  | $1$         | $N$     | $N-1$  | $N-1$   |
| $\vdots$  | $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ |
| `3N - 1` | $1$         | $3N - 1$    | $3N-2$ | $3N-2$ |

Let's add up the number of times each statement is executed throughout the execution of the code snippet.

| Expression | Total count |
| ---------- | ----------- |
| `int k = i` | $5 \times (1 + 1 + 1 + \dots + 1) = 15N$ |
| `k > 1` | $5 \times (1 + 2 + 3 + \dots + (3N-1)) = 5 \times \left ( \frac{9N^2}{2} + \frac{3N}{2} \right )$  |
| `k--`   | $5 \times (1 + 2 + 3 + \dots + (3N-2)) = 5 \times \left ( \frac{9N^2}{2} - \frac{9N}{2} + 1 \right )$
| `sum++` | $5 \times (1 + 2 + 3 + \dots + (3N-2)) = 5 \times \left ( \frac{9N^2}{2} - \frac{9N}{2} + 1 \right )$

The $5$ multiplier is the effect of the second loop.

To calculate the arithmetic sums, I've used the [Gauss formula](https://mathbitsnotebook.com/Algebra2/Sequences/SSGauss.html):

$$
\sum_{i=1}^{n} = \frac{n(n + 1)}{2}
$$

Whew! Let's add up all the _counts_ (for the entire program):

$$
42N + 3 + \left (\frac{135n^2 - 75n + 20}{2} \right ) + 1
$$

Simplifying the expression, we get the following:

$$
T(N) = \frac{135N^2+9N+28}{2}
$$

I hope you will appreciate how tedious it can be to work out precisely the number of RAM instructions executed. I am uncertain as to whether I've made a mistake in counting! 

As it turns out, we will not need such precise calculations. <u>It is sufficient for us to know that the runtime is roughly proportional to the square of the input size!</u> More on this to come!

</details> 