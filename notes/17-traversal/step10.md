# In-order Traversal: Iterative Implementation

<div id="outcomes"><details><summary></summary>

* Implement in-order traversal.

</details></div>

<span class="tag">Exercise</span> Open the starter code and complete the implementation of `BstOrderedSet.iterator`.

**Hint 1:** You cannot do this recursively (in Java). The iterator needs to "pause," so to speak, and wait for a call to `next` to generate (retrieve) the next element. 

**Hint 2:** You will need an auxiliary data structure in the iterator class to keep track of some of the nodes as you traverse the tree so that you can visit those nodes later. This auxiliary data structure will make a less efficient iterator (space complexity greater than $\Omicron(1)$).  

<details class="solution" data-release="Oct 16, 2023 17:00:00">
<summary>Solution</summary>

Please refer to the posted solution code.

</details>

<details class="resource">
<summary>Resources</summary>

You may find this article on Medium useful: [Binary Search Tree Iterator](https://medium.com/algorithm-problems/binary-search-tree-iterator-19615ec585a).

The approach posted in the solution (and the article above) needs an auxiliary data structure. To perform the iteration in $\Omicron(1)$ space, you should perform Morris traversal and implement [Threaded binary tree](https://en.wikipedia.org/wiki/Threaded_binary_tree).

</details>