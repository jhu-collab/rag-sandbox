# BST Operation: Remove (How it works)

<div id="outcomes"><details><summary></summary>

* Explain and trace the core operations of a Binary Search Tree.

</details></div>

The `remove` operation in a BST implementation of OrderedSet ADT is a somewhat involved process! We will break it down into three scenarios.


- ***Node to be removed is a leaf:*** Simply remove from the tree!

  ```text
                50                             50
              /     \         remove(20)      /   \
            30      70       --------->    30     70 
            /  \    /  \                     \    /  \ 
          20   40  60   80                   40  60   80
  ```

- ***Node to be removed has only one child:*** Copy the child value into the node and delete the child node.

  ```text 
                50                             50
              /     \         remove(30)      /   \
            30      70       --------->    40     70 
              \    /  \                          /  \ 
              40  60   80                       60   80
  ```

- ***Node to be removed has two children:***
    1. Find the smallest value in the node's right subtree (*in-order* successor). 
    2. Copy the value key of the in-order successor to the target node and delete the in-order successor. 

  ```text
                50                           60
              /    \         remove(50)     /   \
            40      70       --------->    40    70 
                    /  \                            \ 
                  60   80                           80
  ```

    - Note that the largest value in the left subtree (in-order predecessor) can also be used.


<span class="tag">Exercise</span> Remove $17$ from the following BST.

<div class="center">
<img src="/img/16/bst02.png" width="70%">
</div>

<details class="solution" data-release="Oct 11, 2023 17:00:00">
<summary>Solution</summary>

Either replace $17$ with the smallest value in its right subtree:

<div class="center">
<img src="/img/16/bst12.png" width="70%">
</div>

Or replace $17$ with the largest value in its left subtree:

<div class="center">
<img src="/img/16/bst13.png" width="75%">
</div>

</details>

