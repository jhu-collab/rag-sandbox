# How to organize data?

<div id="outcomes"><details><summary></summary>

* Differentiate when binary search can be used vs. when to use linear search.

</details></div>


<span class="tag">Exercise</span> When would you use linear/binary search to implement `Roster.find`? Does implementation of `find` affect the implementation of other operations?

<details class="solution" data-release="Aug 30, 2023 17:00:00">
<summary>Solution</summary>

To have different implementations for `find`, we must _organize_ the data in different ways. For binary search, the `students` array must be kept sorted as we `add` or `remove` students. 

Keeping the `students` array sorted imposes an extra cost: while a naive `add` would append the `students` array with a new student, the "diligent" `add` must add a new `student` in a slot where `students` array remains sorted. That means `add` must make due diligence to find the right spot, shift elements around to make a gap, and only then insert a new student. This process would be, at least, as costly as performing a linear search.

<div class="note">

The _choice_ of implementing binary vs. linear search must be made based on the specification of the problem. 

</div>

For example: If we happen to have a roster where we add and remove more frequently than search, then we must not impose extra work on those operations. It would be advisable to leave the `students` array unsorted and have `find` implement the linear search.

</details>

<details class="resource">
<summary>Resources</summary>

* There is an [article on Medium](https://medium.com/@timothy.kaing/searching-algorithms-for-dummies-binary-vs-linear-87711ed2d84c) that reviews Linear vs. Binary search. 
* [Here](https://medium.com/better-programming/three-smart-ways-to-use-binary-search-in-coding-interviews-250ba296cb82) is another Medium article that may be of interest to some of you who want to go beyond the scope of this course.

</details>
