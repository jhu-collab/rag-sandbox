# Size of the Input

<div id="outcomes"><details><summary></summary>

* Describe the runtime as a function of the input size.

</details></div>


Consider the following program:

```java
public class Arrays {
  public static <T> void print(T[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i]);
    }
  }
}
```

To determine the runtime of `Arrays.print`, we need to know the size of the input array (`arr`). 

<div class="note">

The runtime here, as in many cases, is a _function_ of the input size.

</div>

<span class="tag">Exercise</span> Count the number of steps `Arrays.print` takes to execute. Write the count as a function $T(N)$ where $N$ is the size of the input array.

<details class="solution" data-release="Sep 18, 2023 17:00:00">
<summary>Solution</summary>

```java
public class Arrays {
  public static <T> void print(T[] arr) {
    for (int i = 0; i < arr.length; i++) { // 1 + N+1 + N
      System.out.println(arr[i]);          // 1 * N
    }
  }
}
```

$$
T(N) = 3N + 2
$$

We assumed memory access is "free" under the RAM model (i.e., `arr.length` and `arr[i]` are free operations).

</details>
