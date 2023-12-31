# Exercise II

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic runtime of a program.

</details></div>


Consider the following program

```java
public boolean contains (int[] arr, int target) {
  for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return true;
    }
  }
  return false; 
}
```

<span class="tag">Exercise</span> What is the asymptotic running time of the code above for searching one array, as a function of the array length $n$?

A) $\Omicron(n)$ \
B) $\Omicron(\lg n)$ \
C) $\Omicron(n^2)$

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

The correct answer is $\Omicron(n)$. The key observation is that the code performs a constant number of operations for each array entry. <u>Here "constant" means some number independent of $n$.</u> In the Big-Oh notation, we suppress the constant factors.

Reminder: we are considering the worst-case scenario. 

</details>
