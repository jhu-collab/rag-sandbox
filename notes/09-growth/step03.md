# The Gist!

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic running time of a program given its precise running time as a function of input size.

</details></div>


It turns out, in an expression like $12754n^{2} + 4353n + 834\lg n + 13546$, those constant factors will change based on how you *express* an algorithm. 

For example, consider these three code snippets:

```java
public void countUp(int num) {
  for (int i = 1; i <= num; i++) {    
      System.out.println(i);                          
  }
}
```

```java
public void countUp(int num) {
  int count = 1;
  for (int i = 0; i < num * 2; i+=2) {    
      System.out.println(count++);                          
  }
}
```

```java
public void countUp(int num) {
  int count = 1;
  int upper = num * 2;
  for (int i = 1; i <= upper; i+=2) {    
      System.out.println(count++);                          
  }
}
```

The three programs above do the same thing (printing out numbers from $1$ to $N$ where $N$ is the value of `num`). So the running time of all three will be in the form of a first-degree polynomial $T(N) = aN + b$ where the coefficients $a$ and $b$ will be different for each program. In general, the coefficients (constant factors) depend on the following factors.

* How we express an algorithm. 
* The programming language used to implement the algorithm
* The compiler which converts the program to machine instructions.
* The [Instruction Set Architecture](https://en.wikipedia.org/wiki/Instruction_set_architecture) of the hardware it will eventually run on. 

> To normalize these variations, we can drop the constants (set the coefficients to $1$).


So $T_1(n) = 12754n^{2} + 4353n + 834\lg n + 13546$ becomes $T_2(n) = n^{2} + n + \lg n + 1$.

Moreover, when the input gets larger and larger, the highest-order term, $n^{2}$, is going to be much much larger than all the lower-order terms combined (i.e., $n + \lg n + 1$). 

<div class="player">

<iframe src="https://www.desmos.com/calculator/phxvsnuelz?embed" style="border: 1px solid #ccc" frameborder=0></iframe>

</div>

> So, when the input gets arbitrarily large, the performance comes down to the _dominant_ term.

<details class="resource">
<summary>Why does the dominant term dictate the performance?</summary>

The following table is from the book "Algorithm Design" by Jon Kleinberg and Eva Tardos (2006). You can see how functions' runtime grows with increasing the input size.

<div class="center">
<img src="../../img/09/2020-09-22-23-51-51.png" width="100%">
</div>

</details>

<div class="note">

**So the Big-Oh notation says:**

* Suppress constant factors as they are dependent on how the algorithm is expressed.
* Ignore lower-order terms as they are irrelevant when the input gets arbitrarily large.

</div>

<details class="resource">
<summary>Resources</summary>

* freeCodeCamp has a nice article, [Big O Notation — Simply explained with illustrations and video](https://www.freecodecamp.org/news/big-o-notation-simply-explained-with-illustrations-and-video-87d5a71c0174/).
* Khan Academy has an article on [Asymptotic notation](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/asymptotic-notation).
* This is an interesting article: [Big-O notation explained by a self-taught programmer](https://justin.abrah.ms/computer-science/big-o-notation-explained.html).
* Chapter 2: Basics of Algorithm Analysis in the book "Algorithm Design" by Jon Kleinberg and Eva Tardos, 2006.

</details>
