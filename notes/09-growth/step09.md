# Exercise VI

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic runtime of a program.

</details></div>

Consider the following program

```java
public int myStrangeSum (int num) {
  int sum = 0;
  for (int i = 1; i < num; i *= 2) {
    sum += i;
  }

  return sum; 
}
```

<span class="tag">Exercise</span> What is the asymptotic running time of the code above as a function of $n$ where $n$ is the value of `num`?

A) $\Omicron(n^2)$ \
B) $\Omicron(\lg n)$ \
C) $\Omicron(2^n)$

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

The answer is $\Omicron(\lg n)$. 

It might be easier to understand this if, without lack of generality, we assume `num` is a power of $2$ and rewrite the loop as 

```java
for (int i = num / 2; i > 0; i /= 2) {
  sum += i;
}
```

How many times can you divide `num` (i.e., $n$) to get to $1$? We answered this question when we analyzed the running time of the binary search algorithm. The answer was $\lg n$.

</details>

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Resources</summary>

This video might be helpful: [Deeply Understanding Logarithms In Time Complexities & Their Role In Computer Science](https://youtu.be/M4ubFru2O80).

</details>
