# Cost of Resizing

<div id="outcomes"><details><summary></summary>

* Determine the cost of dynamically resizing an array-based implementation of a stack.

</details></div>

Here is the implementation of `push`. 

```java
@Override
public void push(T value) {
  data[numElements++] = value;
  if (numElements == capacity) {
    grow();
  }
}
```

We know `grow()` is $\Omicron(n)$.

<span class="tag">Exercise</span> What is the running time of `push`?

<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

The worst-case asymptotic running time of `push` is also $\Omicron(n)$.

</details>


Consider the `data` array is constructed initially with the capacity of $n$. We then perform $n+1$ "push" operation one after another. 

<span class="tag">Exercise</span> What is the worst-case running time of `push` **per operation** (rather than *per algorithm*). 

<details class="resource">
<summary>Hint</summary>

We know the `grow` operation will only be called for the $n^{th}$ push. Therefore,  
* the first time we call `push`, its cost is really $\Omicron(1)$, 
* the second time we call `push` its cost is $\dots$ 
* $\dots$
* the $n^{th}$ time we call `push` $\dots$
* $\dots$

</details>

<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

The cost of `push` is $\Omicron(1)$ for the first $n - 1$ pushes. Then, for the $n^{th}$ push, we must grow the array, and so it will cost $\Omicron(n)$. After that, the $n+1$ push is again $\Omicron(1)$.

</details>
