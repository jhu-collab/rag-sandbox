# Counting Steps

<div id="outcomes"><details><summary></summary>

* Count RAM instructions for a given code snippet.

</details></div>


<span class="tag">Exercise</span> Under the RAM model, what is the total number of *steps* it will take to execute the following code snippet? 

```java
int count = 0;  
for (int i = 0; i < 10; i++) {  
    for (int j = 0; j < 5; j++) {  
        count++;  
    }   
}  
System.out.println(count);  
```

A) about $50$ \
B) about $200$ \
C) about $1000$ 


<details class="solution" data-release="Sep 18, 2023 17:00:00">
<summary>Solution</summary>

**Answer:** about 200.

```java
int count = 0;                     // 1
for (int i = 0; i < 10; i++) {     // 1 + 11 + 10
    for (int j = 0; j < 5; j++) {  // (1 + 6 + 5) * 10
        count++;                   // (1 * 5) * 10
    }   				  
}  					   
System.out.println(count);         // 1
```

Note we ask for approximate because the details can get tricky (e.g. `i < 10` runs 11 times where ten times `i` is less than `10` and one last time it is equal to `10`). 

</details>