# Array Implementation of OrderedSet

<div id="outcomes"><details><summary></summary>

* Implement the core operations of OrderedSet efficiently (array base).

</details></div>

We want to _efficiently_ implement the OrderedSet ADT with an array as the underlying data structure.

<span class="tag">Exercise</span> Complete the following table. 

| Operation | How? | Runtime   |
| --------- | ---- | :-------: |
| `has`     |      |           |
| `insert`  |      |           |
| `remove`  |      |           |
| `size`    |      |           |

<details class="solution" data-release="Oct 9, 2023 17:00:00">
<summary>Solution</summary>

Except for `size`, all operations require a helper `find` method to check if an element exists. Then, we can perform Binary Search, so `find` and `has` will cost $\Omicron(\lg n)$. The `insert` and `remove` operations will remain linear since we must shift the elements around to keep the values in order.

| Operation | How?                                        | Runtime   |
| --------- | ------------------------------------------- | :-------: |
| `has`     | `return find(t) != -1;`                     |   $\Omicron(\lg n)$  |
| `insert`  | Find where to insert, then shift elements to make room.  |   $\Omicron(n)$  |
| `remove`  | Find the element, shift all element after it to left.   |   $\Omicron(n)$  |
| `size`    | `return numElements;`                       |   $\Omicron(1)$  |
| `find`    | Binary search                               |   $\Omicron(\lg n)$  |

We leave this as an (unsolved) exercise to you: implement the operations of an array-based OrderedSet.

<!-- 

Someone asked to find "where to insert" do we have to do a linear search, or can we do a binary search?
I correctly answered yes, but I choked on it a little!
The answer is obviously yes since we do this in BST.
As I was teaching the starting part of BST, I figured it out.

 -->

</details>