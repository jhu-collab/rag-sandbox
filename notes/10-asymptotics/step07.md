# Exercise IV

<div id="outcomes"><details><summary></summary>

* Use the mathematical definition of Big-Oh to prove the asymptotic running time of a given program.

</details></div>

<div class="center">
<img src="../../img/10/2020-09-22-22-19-07.png" width="80%">
</div>

Consider the following facts:

* Baby chicken might be larger than baby turkey at the beginning. 
* But after a certain "breakpoint," the chicken size will be surpassed by the turkey size.
* From the breakpoint on, the chicken size will always be smaller than the turkey size.

<span class="tag">Exercise</span> Which statement is true?

A) chicken size is in $\Omicron($turkey size$)$. \
B) turkey size is in $\Omicron($chicken size$)$.

<details class="solution" data-release="Sep 20, 2023 17:00:00">
<summary>Solution</summary>

Chicken's growth order is smaller than turkey's, or chicken size is in $\Omicron($turkey size$)$.

The breakout point is the $n_0$ in the mathematical definition of Big-Oh.

<div class="center">
<img src="../../img/10/2020-09-22-21-27-20.png" width="50%">
</div>

</details>