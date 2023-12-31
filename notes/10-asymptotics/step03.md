# Exercise I

<div id="outcomes"><details><summary></summary>

* Express the space requirements for a given code segment as a function of the input size in the worst-case scenario.

</details></div>


Consider the following implementation of `countup`:

```java
public static void countup(int n) {
  for (int i = 1; i <= n; i++) {
    System.out.println(i);
  }
}
```

```java
public static void countup(int n) {
  if (n > 1) {
    countup(n - 1);
  } 
  System.out.println(n);
}
```

<span class="tag">Exercise</span> Complete the following table. Use Big-Oh notation to asymptotically describe time/space complexities.

| `countup` | Time Complexity | Space Complexity | Input Space | Auxiliary Space |
| --------- | --------------- | ---------------- | ----------- | --------------- |
| First program |   |    |   |   |
| Second prog. |   |    |   |   |


<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

| `countup` | Time Complexity | Space Complexity | Input Space | Auxiliary Space |
| --------- | :---------------: | :----------------: | :-----------: | :---------------: |
| First | $\Omicron(n)$      |    $\Omicron(1)$        |  $\Omicron(1)$     |  $\Omicron(1)$         |
| Second | $\Omicron(n)$  |    $\Omicron(n)$        |  $\Omicron(1)$     |  $\Omicron(n)$  |

Each recursive call creates a *function activation record* (or **stack frame**) in memory. Each activation record is a memory allocation for the function with space for local variables, etc. Each activation record for the recursive `countup` requires $\Omicron(1)$ space, and there will be $n$ of them, thus $\Omicron(n)$ total space.

</details>

<details class="resource">
<summary>Resources</summary>

* [Activation Record](https://wiki.c2.com/?ActivationRecord) entry on C2 Wiki.
* Wikipedia's entry on [Call stack](https://en.wikipedia.org/wiki/Call_stack).

</details>
