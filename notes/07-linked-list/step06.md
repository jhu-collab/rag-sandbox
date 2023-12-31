# Follow the References!

<div id="outcomes"><details><summary></summary>

* Trace the basic operations of a (singly) linked-list implementation.

</details></div>

Consider the following linked list:

<div class="center">
<img src="../../img/07/image-20200917113326876.png" width="95%">
</div>

<span class="tag">Exercise</span> In each case, draw a schematic representation of the linked list after the statement is executed. <span class="highlight">For each statement, start with the linked list displayed above.</span>

```java
head = head.next;
```

<details class="solution" data-release="Sep 13, 2023 17:00:00">
<summary>Solution</summary>

<div class="center">
<img src="../../img/07/image-20200917113412161.png" width="95%">
</div>

We effectively removed the first element!

</details>

```java
head.next = head.next.next;
```

<details class="solution" data-release="Sep 13, 2023 17:00:00">
<summary>Solution</summary>

<div class="center">
<img src="../../img/07/image-20200917113442794.png" width="95%">
</div>

We effectively removed the second element!

</details>

```java
head.next.next.next.next = head;
```

<details class="solution" data-release="Sep 13, 2023 17:00:00">
<summary>Solution</summary>
  
<div class="center">
<img src="../../img/07/image-20200917113518867.png" width="95%">
</div>

We effectively created a _circular_ linked list!

</details>

