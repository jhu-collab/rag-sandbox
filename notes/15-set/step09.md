# Fail-Fast Iterators

<div id="outcomes"><details><summary></summary>

* Implement fail-fast iterators for the Set ADT.

</details></div>

Have you ever thought about what will happen if you *structurally* modify a data structure while iterating over it? 

<div class="note">

A structural modification is any operation that adds or deletes elements or explicitly resizes the data structure.

</div>

Assume you are iterating over an ArraySet. While the iteration is going on, an element you've already visited (iterated over) is removed. This could happen in a _concurrent_ program, but here is a contrived example to showcase this scenario:

```java
for (int num: myArraySet) {
  // do something with num
  if (feelingLucky()) {
    myArraySet.remove(num);
  }
}
```

<span class="tag">Exercise</span> Can you anticipate any issues with iteration?

<details class="solution" data-release="Oct 9, 2023 17:00:00">
<summary>Solution</summary>

It depends on the implementation of the iterator and the remove method. In general, the results of the iteration are undefined under a structural modification.

Suppose we assume the removal strategy is the one we have discussed earlier. In that case, the last element of the array will be swapped with the element to be removed. Thus, effectively we will end the iteration by not visiting (not knowing about) the last element before removal.

</details>

<div class="note">

In Java's Collection Framework, it is (generally) prohibited for one thread (program, process) to modify a Collection while it (or another thread) is iterating over it. 

</div>

When that happens, the iterator will throw [ConcurrentModificationException](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ConcurrentModificationException.html). 

> Iterators that throw an exception to signal the collection was structurally modified during an iteration are known as **fail-fast** iterators. They fail quickly and cleanly, rather than risking arbitrary, non-deterministic behavior at an undetermined time in the future.

<span class="tag">Exercise</span> How can you make an iterator "fail-fast"?

**Hint:** To make an iterator "fail-fast," we need to be able to tell that the data structure has been modified since the iteration started.

<details class="solution" data-release="Oct 9, 2023 17:00:00">
<summary>Solution</summary>
 
Here is one strategy: use a **version number** in the data structure class to achieve this. 

* The number starts at `0` and is incremented whenever a structural modification is performed. 
* Each iterator also "remembers" the version number it was created for. 
* We can then check for modifications by comparing version numbers in the Iterator operations: We raise an exception if we notice a mismatch.

We have implemented this feature in the `LinkedSet`. So, make sure to study it when you get the solution code. Then, try to implement it for `ArraySet`.

</details>


