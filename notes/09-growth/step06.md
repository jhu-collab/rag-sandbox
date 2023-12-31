# Exercise III

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic runtime of a program.

</details></div>


Consider the following program

```java
public boolean contains (int[] a, int[] b, int target) {
  for (int i = 0; i < a.length; i++) {
    if (a[i] == target) {
      return true;
    }
  }

  for (int i = 0; i < b.length; i++) {
    if (b[i] == target) {
      return true;
    }
  }

  return false; 
}
```

<span class="tag">Exercise</span> What is the asymptotic running time of the code above for searching two arrays, as a function of the array lengths $n$?

A) $\Omicron(n^2)$ \
B) $\Omicron(2n)$ \
C) $\Omicron(n)$

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

The answer is the same as before, $\Omicron(n)$. The reason is that the worst-case number of operations performed (in an unsuccessful search) is twice that of the program in the previous exercise. This extra factor of 2 contributes only to the leading constant in the running time, and it will be suppressed in Big-Oh notation.

</details>