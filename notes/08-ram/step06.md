# Choosing the Input

<div id="outcomes"><details><summary></summary>

* Appreciate what we choose to call the size of input can vary from problem to problem.

</details></div>


Expressing the runtime as a function of the input size allows us to analyze how performance _scales_ with increasing input size.

<div class="note">

What we choose as the input size can vary from problem to problem.

</div>

In the previous example, it was the size of the input array. However, it is the value of the variable `num` in the following example.

```java
public int myStrangeSum (int num) {
  int sum = 0;
  int count = 2 * num;
  for (int i = 0; i < count; i += 4) {
      sum += i;
  }
  return sum;
}
```

<span class="tag">Exercise</span> Count the number of steps `myStrangeSum` takes to execute. Write the count as a function $T(N)$ where $N$ is the value of variable `num`.

<details class="solution" data-release="Sep 18, 2023 17:00:00">
<summary>Solution</summary>

```java
public int myStrangeSum (int num) {
  int sum = 0;                            // 1
  int count = 2 * num;                    // 2
  for (int i = 0; i < count; i += 4) {    // 1 + (N/2 + 1) + N/2
      sum += i;                           // 1 * N/2
  }
  return sum;                             // 1
} 
```

$$
T(N) = \frac{3}{2}N + 6
$$

**Explanation:** At each iteration of the loop, the variable `i` is being incremented by `4`. The loop is running until `i < 2 * N`, so the loop will run $\frac{2 \times N}{4} = \frac{N}{2}$ times

</details> 