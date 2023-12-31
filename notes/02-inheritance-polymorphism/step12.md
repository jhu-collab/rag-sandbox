# Apparent vs. Actual Type 

<div id="outcomes"><details><summary></summary>

- Label apparent and actual types of objects.
- Explain the relationship between apparent and actual type.

</details></div>

Consider the following statement:

```java
Student jane = new GradStudent("Jane", "jan@e.mail");
```

Notice `jane` is _declared_ as `Student` but instantiated using `GradStudent`. We can break the statement into two statements for clarity:

```java
Student jane;  // Declare jane's type is "Student"
// Then, instantiate it as GradStudent
jane = new GradStudent("Jane", "jan@e.mail");
```

The disparity between the types is allowed (as long as `GradStudent` is a subtype of `Student`). However, how shall we answer the question: what is `jane`'s data type? 

To answer this question, we need to make a distinction between the _apparent_ vs. _actual_ type of an object: 

- When you **declare** a variable (`SomeClass obj`), you are setting its **apparent type** to be the declared type.

- When you **instantiate** an object (`obj = new SomeClass()`) you are setting its **actual type** to be the instantiated type.

Therefore, the apparent type of `jane` is `Student`, while the actual type of `jane` is `GradStudent`.

<div class="note">

The type substitution allows the actual type of an object to be a subtype of its apparent type.

</div>


<span class="tag">Exercise</span> Suppose we declared `Student jane` and `GradStudent john`. Which of the following are <u>not</u> valid Java statements? (there may be more than one correct answer)


(a) `jane = new Student("Jane", "jan@e.mail");` \
(b) `jane = new GradStudent("Jane", "jan@e.mail");` \
(c) `john = new GradStudent("John", "john@e.mail");` \
(d) `john = new Student("John", "john@e.mail");` 


<details class="solution" data-release="Sep 1, 2023 17:00:00">
<summary>Solution</summary>

All statements are valid except for (d) which is invalid because in Java <span class="highlight">the apparent type of an object cannot be a subtype of its actual type.</span>. 

</details>

<div class="note">

**Note:** The apparent type determines **what** the object can do, while the actual type determines **how** the object will behave. 

</div>

To understand the above statement, we must explore another pillar of object-oriented programming: *polymorphism*. 

<!-- http://www.eecs.qmul.ac.uk/~mmh/AMCM048/inheritance/hierarchy.html -->