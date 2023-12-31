# Object-Oriented Terminology

<div id="outcomes"><details><summary></summary>

* Identify selected object-oriented concepts in action

</details></div>


<span class="tag">Exercise</span> Use the `Student` class to describe the following terms: Class, Object, Encapsulation, Abstraction, Data type.

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


<details class="solution" data-release="Aug 28, 2023 17:00:00">
<summary>Solution</summary>

* `Student` is a **class** (declared with the keyword `class`), and we can use it to make (instantiate) **objects** (using the `new` operator)

  ```java
  Student john = new Student("John Doe", "john@email.com");
  Student jane = new Student("Jane Doe", "jane@email.com");
  ```

* An **object** represents an individual, identifiable item, unit, or entity, either real or abstract, with a well-defined role in the problem domain. 

* A **class** defines the attributes, structure, and operations that are common to a set of objects, including how the objects are created.
    

* A class provides an **encapsulation** by bundling related _data_ (fields) and _behaviors_ (methods) into one cohesive unit. 


* `Student` is an **abstraction**; there is so much information we could capture to represent (model) a student, but we only store what matters to us (to the problem we are trying to solve). In our case, the information of interest are `name` and `email`.

* Classes allow us to define our own data types. A **data type** consists of a _type_ (a collection of values) together with a collection of _operations_ to manipulate the type. 
  * For example, an _integer variable_ is a member of the _integer data type_. Integer arithmetic is an example of _operations_ allowed on the integer data type. Boolean arithmetic is an example of _operations_ not allowed on the integer data type.

</details>

<details class="resource">
<summary>Resources</summary>

* Oracle's Java Tutorial: [What is a class?](https://docs.oracle.com/javase/tutorial/java/concepts/class.html)
* Oracle's Java Tutorial: [What is an object?](https://docs.oracle.com/javase/tutorial/java/concepts/object.html)
* OOPortal has a [glossary of object-oriented terminology](https://www.ooportal.com/object-oriented-analysis/object-oriented-analysis-glossary.php).
* 101computing.net has an [interactive Domino Activity on Object-Oriented Programming Terminology](https://www.101computing.net/object-oriented-programming-terminology/).
* Quizlet has a [deck of public flashcards on Object-Oriented Glossary](https://quizlet.com/67144448/oop-glossary-flash-cards/).

</details>
