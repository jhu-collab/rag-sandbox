# Exercise XI

<div id="outcomes"><details><summary></summary>

* Rank asymptotic complexities from smallest to largest.

</details></div>

You are the CEO of a startup software company. The app your company is building requires a component that performs an image processing task. Your intern is told to survey the literature for potential solutions to this computational task. Upon studying the literature, the intern finds three algorithms that solve the problem at hand. The algorithms have the following runtimes: $\Omicron(\lg n)$, $\Omicron(2^n)$, and $\Omicron(n)$. 

<span class="tag">Exercise</span> Which algorithm will you choose to be implemented?

A) The one with $\Omicron(n)$ runtime. \
B) The one with $\Omicron(2^n)$ runtime. \
C) The one with $\Omicron(\lg n)$ runtime. 

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

The answer we are looking for here is the one with $\Omicron(\lg n)$ runtime. 

<div class="note">

The $\lg n$ grows slower than $n$, and they both grow much slower than $2^n$, as $n$ gets arbitrarily large.

</div>

So an algorithm with runtime proportional to $\lg n$ is faster than one with runtime proportional to $n$. Moreover, they both are much quicker than one with runtime proportional to $2^n$, <u>when the input size gets arbitrarily large</u>.

Please note:

* In reality, you need to consider other information for choosing a solution. Information such as the resources required to implement/run each algorithm, their tradeoffs other than their runtime, etc.

* We are considering the use of Big-Oh notion in _conversational language_ that programmers use to describe how fast algorithms run. To be pedantic, Big-Oh describes an upper-bound on the growth rate of a function. Relying only on the mathematical definition of Big-Oh, these three algorithms might all have the same runtime! We will explore this point further in the next chapter.

</details>
