# Linear Search

<div id="outcomes"><details><summary></summary>

* Understand linear search well enough to implement it

</details></div>


Here is a simple strategy to implement the `find` method: go over elements of the `students` array in sequence till the desired element (student with the given email) is found, or _search space_ is exhausted (that is, we checked all the students and we have not found the target). <span class="highlight">This strategy is called **linear** search.</span>

<span class="tag">Exercise</span> Implement `find` according to the linear search strategy.


<details class="solution" data-release="Aug 28, 2023 17:00:00">
<summary>Solution</summary>

```java
// Assumption: students' emails are unique.
public Student find(String email) {
    for (int i = 0; i < numStudents; i++) {
        if (email.equals(students[i].getEmail())) {
            return students[i];
        }
    }
    return null;
}
```

Notice I've used `.equals` to compare two strings (and not `==`). Generally speaking, you should not use `==` for non-primitive types because with `==`, you are comparing memory locations on objects, not their "values."

**Aside:** The code would have worked with `==` too! It is unfortunate that `==` works for Strings and primitive wrappers (see [Equality and Comparison in Java: Pitfalls and Best Practices](https://medium.com/better-programming/equality-and-comparison-in-java-pitfalls-and-best-practices-96b713e7009)). 

</details>

<details class="resource">
<summary>Resources</summary>

* Daniel Liang has an [interactive demo](http://www.cs.armstrong.edu/liang/animation/web/LinearSearch.html) for linear search.
* [Equality and Comparison in Java: Pitfalls and Best Practices](https://medium.com/better-programming/equality-and-comparison-in-java-pitfalls-and-best-practices-96b713e7009).

</details>
