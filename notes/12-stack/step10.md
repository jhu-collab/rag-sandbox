# Dynamic ArrayStack

<div id="outcomes"><details><summary></summary>

* Implement an array-based Stack that dynamically grows as more space is needed.

</details></div>

Array implementation of Stack can be constructed by allocating an array of fixed-size, typically larger than the number of elements immediately required. Then, elements can be pushed/popped at the end of the array in constant time until this space is entirely consumed. 

What should happen then?

* Well, when the Stack is _full_, and a client invokes "push," we can throw an exception to signal there is no space left.

* Alternatively, we can _grow_ the underlying array. We can allocate a new underlying array and copy each element from the original array. 


Consider the following implementation of `push`. Assume the array `data` has the `capacity` of 10 elements.

```java
@Override
public void push(T value) {
  data[numElements++] = value;
  if (numElements == capacity) {
    grow();
  }
}
```

In the code above, `numElement` is the logical size of the array, whereas the `capacity` is its actual physical size. 

<span class="tag">Exercise</span> Complete the implementation of the helper method `grow`. The new capacity must be double the old one.

```java
private void grow() {
  // TODO: Implement me
}
```

<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

In the following, we double the capacity each time growing the array.

```java
private void grow() {
  capacity *= 2; 
  T[] tmp = (T[]) new Object[capacity];
  for (int i = 0; i < numElements; i++) {
    tmp[i] = data[i];
  }
  data = tmp;
}
```

</details>


<span class="tag">Exercise</span> What is the complexity of the `grow()` operation?

<details class="solution" data-release="Sep 29, 2023 17:00:00">
<summary>Solution</summary>

`grow()` runtime (and required auxiliary space) is $\Omicron(n)$ where $n$ is the number of the elements (stored in the Stack).

</details>

**Aside:** In the implementation of `push`, I have _preemptively_ grew the array when increasing the capacity was not needed yet (not until the next `push`). However, it can be argued that a better approach is to grow the array _reactivity_ when a `push` is requested, and the capacity is full.


<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Dynamic Array](https://en.wikipedia.org/wiki/Dynamic_array).
* InterviewCake entry on [Dynamic Array](https://www.interviewcake.com/concept/java/dynamic-array).

</details>

