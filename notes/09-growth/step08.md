# Exercise V

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic runtime of a program.

</details></div>


Consider the following program

```java
public boolean hasDuplicates (int[] a) {
  for (int i = 0; i < a.length; i++) {
    for (int j = i + 1; j < a.length; j++) {
      if (a[i] == a[j]) {
        return true;
      }
    }
  }

  return false; 
}
```

<span class="tag">Exercise</span> What is the asymptotic running time of the code above for checking for duplicates as a function of the array lengths $n$?

A) $\Omicron(n^2)$ \
B) $\Omicron(\lg n)$ \
C) $\Omicron(n)$

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

The answer is the same as before: $\Omicron(n^2)$. The running time is proportional to the number of nested loops iterations (with a constant number of operations per iteration). 

So how many iterations are there? The answer is roughly $n^2$:

* One way to see this is to remember that the program performs roughly half the work in the previous exercise (since the inner loop starts at `j = i + 1` rather than `j = 0`). 
  
* A second way is to observe when `i = 0` the inner loop runs $(n - 1)$ times. When `i = 1` the inner loop runs $(n-2)$ times. $\dots$ When `i = n - 1`, the inner loop runs $0$ times. So the total number of times the inner loop runs (which is where the program does its most work) is: 

$$
(n-1) + (n-2) + \dots + 0 = \frac{n(n-1)}{2} \in \Omicron(n^2)
$$

</details>