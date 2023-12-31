# Using an Abstract Class

<div id="outcomes"><details><summary></summary>

- Recognize the use of abstract classes and abstract methods to provide code reuse as well as a common interface among subtypes.
- Identify the syntax of Java Abstract Classes.

</details></div>


Now we look at a better design where `Roster` is an **abstract** class:

<div class="center">
<img src="/img/03/abstract_roster.png" width="60%">
</div>

Here is how the _abstract_ `Roster` is defined: 

```java
public abstract class Roster {
  protected Student[] students;
  protected int numStudents;

  public Roster(int size) {
    students = new Student[size];
    numStudents = 0;
  }

  public abstract void add(Student s);

  public abstract void remove(Student s);

  public abstract Student find(String email);
}
```

<div class="note">

An **abstract** class is declared with the `abstract` keyword. It signals that it cannot be instantiated (even that it has a constructor).

</div>

An abstract class typically contains one or more abstract methods.

<div class="note">

An **abstract method** is a method that is declared with the `abstract` keyword and <u>without</u> an implementation.

</div>

Instead of curly brackets (`{ }`), an abstract method's signature ends with a semicolon (`;`).

<div class="note">

Any (non-abstract) sub-class that extends an abstract class is responsible for implementing its abstract methods.

</div>

<span class="tag">Exercise</span> Why is the design above better than those presented earlier?

<details class="solution" data-release="Sep 6, 2023 17:00:00">
<summary>Solution</summary>

* It defines semantically sound "is-a" relationships. 
  
* We can leverage from type substitution. For example, we can have an array of type `Roster` and store rosters of type `JhuRoster` and `MoocRoster` in there.
  
* `Roster` does not implement the core operations. Yet, it provides a unifying signature. The sub-classes must adhere to the "interface" (method signatures of core operations) provided by the `Roster`.
  
* `Roster` cannot be instantiated (which gets around the problem of declaring it as a regular class and leaving implementations as stubs).

</details>

**Aside:** An example of a (non-abstract) method that can be implemented in the abstract class `Roster` is 

```java
public int getNumStudents() {
  return numStudents;
}
```

This method can be used by all classes that extend `Roster`.

<details class="resource">
<summary>Resources</summary>

* The BeginnersBook has an article, [Abstract Class in Java with example](https://beginnersbook.com/2013/05/java-abstract-class-method/), which you may find helpful to review.

</details>
