# Parts of a Java Class

<div id="outcomes"><details><summary></summary>

* Identify parts of a Java class

</details></div>


Suppose we open the file `Student.java` to find the following code snippet: 

```java
public class Student {
  private String name;
  private String email;

  public Student(String name, String email) {
    this.name = name;
    this.email = email;
  }

  public String getName() {
    return name;
  }

  public String getEmail() {
    return email;
  }
}
```

<span class="tag">Exercise</span> Identify the parts of the `Student` class: fields, constructor, methods.


<details class="solution" data-release="Aug 28, 2023 17:00:00">
<summary>Solution</summary>

Parts of the `Student` class:

* Fields (instance variables)
  ```java
  private String name;
  private String email;
  ```
* Constructor
  ```java
  public Student(String name, String email) {
    this.name = name;
    this.email = email;
  }
  ```
* Methods
  ```java
  public String getName() {
    return name;
  }

  public String getEmail() {
    return email;
  }
  ```

</details>

<details class="resource">
<summary>Resources</summary>

* For a quick refresher on Java's syntax, refer to this awesome [Java Programming Cheatsheet](https://introcs.cs.princeton.edu/java/11cheatsheet/).

</details>
