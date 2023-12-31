# Hacking the $\Omicron(n)$ Find

<div id="outcomes"><details><summary></summary>

* Understand the "transpose sequential search" heuristic well enough to implement it.

</details></div>

Recall we can use a *heuristic* that moves the target of a search to the head of a list, so it is found faster next time. This technique is called ["move-to-front heuristic"](https://xlinux.nist.gov/dads/HTML/movefront.html). It speeds up linear search performance in the linked list if the target item is likely to be searched again soon.

<span class="tag">Exercise</span> Can we apply the *move-to-front* heuristic to speed up linear search in an array?

<details class="solution" data-release="Oct 9, 2023 17:00:00">
<summary>Solution</summary>

Maybe! Moving the search target to the front of an array requires shifting all the other elements to the right. This is an additional linear time operation (in addition to the linear search).

**Aside:** It would not be a good idea to implement the "move-to-front" heuristic in an array by swapping the target with the front value (instead of "moving" the target element to the front). (Think why?)

A more common strategy is ["transpose sequential search"](https://xlinux.nist.gov/dads/HTML/transposeSeqSearch.html) heuristic. Look up Wikipedia's entry on [Techniques for rearranging nodes in Self-organizing list](https://en.wikipedia.org/wiki/Self-organizing_list#Techniques_for_rearranging_nodes) for more information.

</details>
