# Exercise IV

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic runtime of a program.

</details></div>


Consider the following program

```java
public boolean hasCommonElement (int[] a, int[] b) {
  for (int i = 0; i < a.length; i++) {
    for (int j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        return true;
      }
    }
  }

  return false; 
}
```

<span class="tag">Exercise</span> What is the asymptotic running time of the code above for checking for a common element, as a function of the array lengths $n$? Assume both arrays are of the same size.

A) $\Omicron(n^2)$ \
B) $\Omicron(n!)$ \
C) $\Omicron(n)$

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

The answer is $\Omicron(n^2)$. The program performs a constant number of operations for each loop iteration (for each choice of the indices `i` and `j`). However, for each iteration of the outer for loop, the code performs $n$ iterations of the inner for-loop. This gives $n \times n = n^2$ iterations in all.

</details>