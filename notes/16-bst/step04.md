# Tree Components

<div id="outcomes"><details><summary></summary>

* Identify the various components of a rooted tree structure.

</details></div>

In the tree structure below, each circle that contains a value is called a **node**.

<div class="center">
<img src="/img/16/bst02.png" width="70%">
</div>

The first node from where the tree originates is called the **root** node.

The tree creates a hierarchical structure where except for the root node, every other node has a **parent** and *zero or more* **children**. 

The nodes with no children are called **leaves**.

<span class="tag">Exercise</span> Given the tree structure above, complete the table below:

|                                             | Answer |
|:--------------------------------------------|:------:|
| The **root** is                             |        |
| The **leaves** are                          |        |
| The **parent** of node with value $21$ is   |        |
| The **children** of node with value $5$ are |        |


<details class="solution" data-release="Oct 11, 2023 17:00:00">
<summary>Solution</summary>

|                                             |       Answer       |
|:--------------------------------------------|:------------------:|
| The **root** is                             |        $9$         |
| The **leaves** are                          | $4, 8, 14, 20, 25$ |
| The **parent** of node with value $21$ is   |        $17$        |
| The **children** of node with value $5$ are |       $2, 7$       |

</details>

The nodes which belong to the same "parent" are called *siblings*! 

The _parent-child_ relationship between nodes can be extended to _ancestors_ and _descendants_. 

For example, 

* The nodes $21$, $17$, and $9$ are ancestors of $25$.
* The nodes $2$, $7$, $4$, and $8$ are descendants of $5$.

The root is an ancestor of every node in a tree, and every node is a descendant of the root.

<details class="resource">
<summary>Resources</summary>

* Wikipedia's entry on [Tree (data structure), Terminology](https://en.wikipedia.org/wiki/Tree_(data_structure)#Terminology).

</details>
