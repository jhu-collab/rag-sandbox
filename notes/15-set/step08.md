# Set Iterator

<div id="outcomes"><details><summary></summary>

* Implement an iterator for the Set ADT.

</details></div>

We know Set is an *unordered* collection.

<span class="tag">Exercise</span> How should we implement the iterator for Set ADT?

A) Iterate in the same order the elements have been added. \
B) Iterate in the order that corresponds to the natural ordering of the elements (e.g., smallest first, largest last). \
C) To ensure this is an _unordered_ collection, we must iterate over the elements in random order. \
D) Iterate over the elements from `head` to `tail` in `LinkSet` and from index `0` to `numElements - 1` in `ArraySet`.

<details class="solution" data-release="Oct 9, 2023 17:00:00">
<summary>Solution</summary>

The correct answer is **D**. It is the cheapest strategy. 

The statement that "set is an _unordered_ collection" implies that a client shall **not** expect the iteration is done in any particular order. However, we don't need to go out of our way to ensure an un-orderly iteration!

</details>
