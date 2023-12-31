# Exercise I

<div id="outcomes"><details><summary></summary>

* Differentiate binary trees, binary search trees, and balanced binary search trees based on the structure (balance) and ordering properties.

</details></div>

Consider the following tree:

```text
             20
            /  \
          10    30
               /  \
              5   40
```

<span class="tag">Exercise</span> Is this a binary tree, BST, or BBST? Why?

<details class="solution" data-release="Oct 18, 2023 17:00:00">
<summary>Solution</summary>

This tree is a binary tree. The $5$ violates the BST property because it is smaller than $20$ (root), yet it is on the right subtree. All values in the right subtree should be greater than the current node (root in this case). 

If it were a BST, it would have been a BBST because, for any node, its balance factor is $1$, $0$, or $-1$.

</details>

<span class="tag">Exercise</span> Using the following numbers $\\{4, 1, 3, 9, 29, 30, 27, 21\\}$, construct a binary tree (that is not a BST or BBST), a BST (that is not a BBST), and a BBST. 

<details class="solution" data-release="Oct 18, 2023 17:00:00">
<summary>Solution</summary>

Answers may vary. 

Binary tree example: should only satisfy the property that each node has at most two children.

```text
         1 
        / \
       3   29
      / \
     4  21
    / \
   30  9
      /
     27
```

BST example: should satisfy the binary tree property and the BST property.

```text
         21
      /      \
     1       27
      \        \
       3       29
        \       \
         4       30
          \
           9
```

BBST example: needs to satisfy the binary tree property, BST property, and BBST height property.

```text
        9
     /     \
   3        27
 /   \     /   \
1     4   21   29
                 \
                  30 
```

</details>
