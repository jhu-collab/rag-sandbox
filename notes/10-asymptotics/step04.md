# Exercise II

<div id="outcomes"><details><summary></summary>

* Express the space requirements for a given code segment as a function of the input size in the worst-case scenario.

</details></div>


Consider the following implementations of `Arrays.reverse`:

```java
public class Arrays {
  public static <T> void reverse(T[] arr) {
    T temp;
    for (int i = 0, j = arr.length - 1; i < j; i++, j--) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
```

```java
public class Arrays {
  public static <T> void reverse(T[] arr) {
    int n = arr.length;
    T[] tmp = (T[]) new Object[n];

    for (int i = 0; i < n; i++) {
      tmp[i] = arr[n - i - 1];
    }

    for (int i = 0; i < n; i++) {
      arr[i] = tmp[i];
    }
  }
}
```

<span class="tag">Exercise</span> Complete the following table. Use Big-Oh notation to asymptotically describe time/space complexities.

| `Arrays.reverse` | Time Complexity | Space Complexity | Input Space | Auxiliary Space |
| --------- | --------------- | ---------------- | ----------- | --------------- |
| First program |   |    |   |   |
| Second prog. |   |    |   |   |


<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

| `Arrays.revers` | Time Complexity | Space Complexity | Input Space | Auxiliary Space |
| --------- | :---------------: | :----------------: | :-----------: | :---------------: |
| First program | $\Omicron(n)$      |    $\Omicron(n)$        |  $\Omicron(n)$     |  $\Omicron(1)$         |
| Second prog. | $\Omicron(n)$     |    $\Omicron(n)$        |  $\Omicron(n)$     |  $\Omicron(n)$  |

</details>