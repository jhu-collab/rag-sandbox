# Exercise VII

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic runtime of a program.

</details></div>

Consider the following program

```java
public int indexOf (String str, char target) {
  for (int i = 0; i < str.length; i++) {
    if (str.charAt(i) == target) {
      return i;
    }
  }
  return NOT_FOUND; 
}
```

We have counted the number of steps `indexOf` takes to execute and expressed it as a function $T(N)$ where $N$ is the size of the input String (`str`). 

| Scenario   | Exact running time | Asymptotic running time |
| :--------- | :----------------: | :---------------------: |
| Best-case  | $T(N) = 4$         |                         |
| Worst-case | $T(N) = 4N + 3$    |                         |

<span class="tag">Exercise</span> Complete the table above. Use Big-Oh for expressing asymptotic running time.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

| Scenario | Exact running time | Asymptotic running time |
| :------- | :-----------------: | :----------------------: |
| Best-case | $T(N) = 4$ |  $\Omicron(1)$ |
| Worst-case | $T(N) = 4N + 3$ | $\Omicron(N)$ |

The $\Omicron(1)$ represents the running time that does not depend on the input size. However, it does not mean it only takes one step!
  
</details>