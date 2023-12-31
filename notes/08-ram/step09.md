# Exercise I

<div id="outcomes"><details><summary></summary>

- Express the number of steps for a given code segment as a function of the input size in the worst-case scenario.
- Appreciate that counting the exact number of RAM instructions requires too many details.

</details></div>

Consider the following code snippet:

```java
int sum = 0;
String s = keyboard.nextLine(); // keyboard is an initialized Scanner
String v = "aeiou";
for (int  i = 0; i < v.length(); i++) {
  if (s.indexOf(v.charAt(i)) >= 0) {
    sum++;
  }
}
```

<span class="tag">Exercise</span> Count the number of steps taken by the above program. Write the count as a function $T(N)$ where $N$ is the size of the "input." You need to determine what quantity is a suitable choice for the "size of input" here.

<details class="solution" data-release="Sep 18, 2023 17:00:00">
<summary>Solution</summary>

Note that while `indexOf` may seem like a constant operation, it is actually a linear search; it tells you to search through an array (in this case, a word) until you find the proper position. So, we are effectively running a linear search for each vowel (i.e., a constant number of times)

The running time of `indexOf` on string `s` is a function of the length of the string `s`. The program's running time can then be expressed as a function of $N$ where $N$ is the length of `s`. 

```java
int sum = 0;                            // 1
String s = keyboard.nextLine();         // 1 + 1
String v = "aeiou";                     // 1
for (int  i = 0; i < v.length(); i++) { // 1 + 6 + 5
  if (s.indexOf(v.charAt(i)) >= 0) {    // (1 + (4N + 3) + 1) * 5
    sum++;                              // 1 * 5
  }
}
```

$$
T(N) = 20N + 56
$$

We don't know the _exact_ running time of `indexOf` function. However, we do know it performs a linear search. Therefore, we can consider it $4N + 3$ by assuming its running time is the same as the (worst-case) running time of `indexOf` we analyzed earlier.

<div class="note">

**Case in point:** It requires detailed knowledge of the program's constituents to count the exact number of RAM instructions a program takes to execute.

</div>

</details> 
