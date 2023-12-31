# Exercise II

<div id="outcomes"><details><summary></summary>

* Differentiate binary trees, binary search trees, and balanced binary search trees based on the structure (balance) and ordering properties.

</details></div>


<span class="tag">Exercise</span> Could this tree be a BBST? If not, list every instance of all BBST violations by indicating roots of all non-BBST compliant subtrees.

<div class="center">
<img src="/img/18/bbst01.png" width="90%">
</div>

<details class="solution" data-release="Oct 18, 2023 17:00:00">
<summary>Solution</summary>

A violation of the order property can be seen through an in-order traversal: \
A, <u>C, B,</u> D, E, F, G, M, I, J, <u>M, L, N, K,</u> O, P

A violation of the balance property exists in nodes D, A, and G: 

<div class="center">
<img src="/img/18/bbst02.png" width="95%">
</div>

</details>