# Best vs. Worst Case

<div id="outcomes"><details><summary></summary>

* Differentiate between the best-case vs. the worst-case analysis.

</details></div>


Consider the following program:

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

The runtime of `indexOf` depends on where the `target` value is situated in the input String `str` (if it is to be found at all). Thus, we can consider two extreme cases:

* **Best-case scenario**: the minimum number of steps an algorithm takes for any input size. 
  
* **Worst-case scenario**: the maximum number of steps an algorithm takes for any input size.

<span class="tag">Exercise</span> Count the number of steps `indexOf` takes to execute. Write the count as a function $T(N)$ where $N$ is the size (length) of the input String (`str`). Consider the following cases: 

Assume `charAt` method is similar to array indexing and therefore a "for free" operation. Also note, the `if(/* condition */)` under the RAM model is counted as #steps in `/* condition */` expression plus $1$ for the branching itself.  

* Part 1: Best case: `str.charAt(0) == target` 

    <details class="solution" data-release="Sep 18, 2023 17:00:00">
    <summary>Solution</summary>

    ```java
    public int indexOf (String str, char target) {
      for (int i = 0; i < str.length; i++) { // 1 + 1
        if (str.charAt(i) == target) {       // 1 + 1
          return i;                          // 1
        }
      }
      return NOT_FOUND; 
    }
    ```

    $$
    T(N) = 5
    $$

    </details> 


* Part 2: Worst case: `target` is not to be found in `str`

    <details class="solution" data-release="Sep 18, 2023 17:00:00">
    <summary>Solution</summary>

    ```java
    public int indexOf (String str, char target) {
      for (int i = 0; i < str.length; i++) { // 1 + N+1 + N 
        if (str.charAt(i) == target) {       // (1 + 1) * N
          return i;
        }
      }
      return NOT_FOUND;                      // 1
    }
    ```

    $$
    T(N) = 4N + 3
    $$

    </details> 


<div class="note">

When we measure performance, we typically focus on the worst-case. 

</div>

The best-case analysis is not often useful. It rarely represents a practical, real-life situation and provides little information about the performance of an algorithm.

<details class="resource">
<summary>Resources</summary>

* Wikipedia entry on [Best, worst, and average case](https://en.wikipedia.org/wiki/Best,_worst_and_average_case).

</details>
