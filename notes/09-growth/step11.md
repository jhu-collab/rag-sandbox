# Exercise IIX

<div id="outcomes"><details><summary></summary>

* Use Big-Oh notation to describe the asymptotic running time of the operations of the data structures we have implemented so far.

</details></div>


Consider the array data structure (i.e., Java's built-in array). Then, we define the following operations:

* **insert front**: insert an element to the front of an array (prepend the array). <span class="highlight">This is <u>not</u> updating the value of an existing element.</span>
* **insert middle**: insert an element at a random index $i$ where $0 < i < \text{length} - 1$
* **insert back**: insert an element to the end of the array (append the array). <span class="highlight">assume array has enough capacity.</span>
* corresponding **delete** operations (delete front, delete middle, delete back).
* **access**: read an element at a random index.

<span class="tag">Exercise</span> Based on your understanding of the array data structure, complete the following table. Use Big-Oh notation for expressing asymptotic runtime.

| Operation     | Asymptotic runtime |
| :------------ | :----------------: |
| insert front  |                    |
| insert middle |                    |
| insert back   |                    |
| delete front  |                    |
| delete middle |                    |
| delete back   |                    |
| access        |                    |

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

| Operation     | Asymptotic runtime |
| :------------ | :------------  |
| insert front  | $\Omicron(n)$ &mdash; shift all elements to right to make room for new one |
| insert middle | $\Omicron(n)$ &mdash; shift elements to make a gap |
| insert back   | $\Omicron(1)$ &mdash; insert at `arr[numElements]` |
| delete front  | $\Omicron(n)$ &mdash; shift all elements to left to fill the gap |
| delete middle | $\Omicron(n)$ &mdash; shift elements to fill a gap |
| delete back   | $\Omicron(1)$ &mdash; decrement `numElements` |
| access        | $\Omicron(1)$ &mdash; performs constant # arithmetic operations! |

Accessing an element at a given position is $\Omicron(1)$:

* It takes a constant number of arithmetic operations to figure out where the element is located in the computer memory; the program knows the beginning of the array and the size of each element. 
* Under the RAM model, it is "free" to access each memory location. In reality, it takes a constant time (a bounded time) to access each address in the computer memory.
* Since finding the address is $\Omicron(1)$, and retrieving the element in it is also $\Omicron(1)$, it gives you a total of $\Omicron(1)$.

Please note that some operations can be implemented differently and will have a different asymptotic runtime. For example, if we don't care for the order in which the values were inserted, we can implement "delete front" and "delete middle" to replace the front or middle element with the last and then perform "delete back." This alternative implementation will be $\Omicron(1)$. 

<!-- Another alternative implementation can have a "pointer" to the front (as in circular array) and increment that for delete front. -->

</details>