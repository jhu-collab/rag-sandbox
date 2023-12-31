# Space Complexity

<div id="outcomes"><details><summary></summary>

- Contrast between time vs. space complexity.

</details></div>

Space complexity measures the amount of memory that an algorithm needs to run as a function of its input size. That means how much memory is required in the worst case at any point in the algorithm. 

Similar to time complexity, we're concerned with how the space consumption grows, in asymptotic terms, as the size of the input increases.

<div class="note">

Often space complexity is taken to mean **auxiliary space**.

</div>

* Auxiliary space is the *extra space* or the *temporary space* used by an algorithm during its execution. 
  
* We can say Space Complexity $=$ Auxiliary Space $+$ Input space. 
  
* When we compare two algorithms for solving a computational problem, it is arguably more useful to compare their auxiliary space usage since the input space will be the same for a given problem.

<div class="note">

Auxiliary space and space complexity are not the same. In this class, we will specify when to find auxiliary space, but when asked for space complexity, consider that Space Complexity $=$ Auxiliary Space $+$ Input space.

</div>

<span class="tag">Exercise</span> Complete the following table. Use Big-Oh notation to asymptotically describe time/space complexities.

| Algorithm | Time Complexity | Space Complexity | Input Space | Auxiliary Space |
| :--------- | :---------------: | :----------------: | :----------- | :---------------: |
| Linear search |   |    |   |   |
| Binary search |   |    |   |   |

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

The following is based on the worst-case analysis.

| Algorithm | Time Complexity | Space Complexity | Input Space | Auxiliary Space |
| :--------- | :---------------: | :----------------: | :-----------: | :---------------: |
| Linear search | $\Omicron(n)$      |    $\Omicron(n)$        |  $\Omicron(n)$     |  $\Omicron(1)$         |
| Binary search | $\Omicron(\lg n)$  |    $\Omicron(n)$        |  $\Omicron(n)$     |  $\Omicron(\lg n)$ or $\Omicron(1)$  |

The auxiliary space of binary search depends on its implementation. An iterative implementation takes $\Omicron(1)$, but a recursive implementation could be $\Omicron(\lg n)$ &mdash; unless the programming language used has optimization for _tail recursion_ (beyond the scope of this course).

Please refer to [this](https://iq.opengenus.org/binary-search-iterative-recursive/) article for "Iterative vs. Recursive Binary Search Algorithm." 

</details>

<details class="resource">
<summary>Resources</summary>

* Baeldung's article [Understanding Space Complexity](https://www.baeldung.com/cs/space-complexity).
* StudyTonight's article [Space Complexity of Algorithms](https://www.studytonight.com/data-structures/space-complexity-of-algorithms).
* North Western University's EECS 311 lecture notes on [Space Complexity](https://courses.cs.northwestern.edu/311/html/space-complexity.html).

</details>
