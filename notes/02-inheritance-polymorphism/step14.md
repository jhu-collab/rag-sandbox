# Dynamic (Runtime) Polymorphism 

<div id="outcomes"><details><summary></summary>

- Explain runtime polymorphism. 
- Identify instances of runtime polymorphism in code.
- Describe how Java's method dispatch process works.
- Distinguish between runtime vs. compile-time polymorphism.

</details></div>

There is another flavor of polymorphism called **dynamic** or **runtime** polymorphism where the Java Virtual Machine (JVM) decides at runtime which method to _dispatch_.

<div class="note"> 

**Method Dispatch** 

The process to decide which implementation of a method to use where there are multiple implementations available (as a result of method overriding that will be discussed next).

</div>

The dynamic polymorphism relates to the ability of a child class to **override** the behavior of its parent class. 

Example: Consider the following classes

```java
public class CourseAssistant {

  public double getBaseSalary() {
    return 500.00; //dollars
  }

  public double getHourlyPayRate() {
    return 15.00; // dollars
  }
}
```

```java
public class ExperiencedCourseAssistant extends CourseAssistant {

  @Override
  public double getHourlyPayRate() {
    return 1.1 * super.getHourlyPayRate(); 
  }
}
```

The `ExperiencedCourseAssistant` inherits the methods `getBaseSalary()` and `getHourlyPayRate()` from `CourseAssistant` but it **overrides** the `getHourlyPayRate()` method to implement a 10% higher (than the base) pay rate.

<span class="tag">Exercise</span> Assume we have the following method

```java
public double calcPayment(CourseAssistant ca, int hoursWorked) {
  return ca.getBaseSalary() + 
    hoursWorked * ca.getHourlyPayRate();
}
```

What does `calcPayment` return in the following cases?

```java
CourseAssistant tom = new CourseAssistant();
CourseAssistant mona = new ExperiencedCourseAssistant();

calcPayment(tom, 10); 
calcPayment(mona, 10); 
```

(a) both call return $650$ \
(b) both call return $665$ \
(c) first call returns $650$ and second one returns $665$ \
(d) first call returns $665$ and second one returns $650$

<details class="solution" data-release="Sep 1, 2023 17:00:00">
<summary>Solution</summary>

* `calcPayment(tom, 10); //-> 650`

When `tom` is passed to `calcPayment`, the return statement evaluates to:

$$
500.00 + 10 \times 15.00
$$ 

* `calcPayment(mona, 10); //-> 665`

When `mona` is passed to `calcPayment`, the return statement evaluates to:

$$
500.00 + 10 \times (1.1 \times 15.00)
$$

So `mona` gets more because `ca.getHourlyPayRate()` resolves to the overridden implementation in `ExperiencedCourseAssistant` class. In other words, JVM looks at the **actual type** of the `ca` object to figure out **how** `getHourlyPayRate()` is implemented.

<div class="note">

JVM method dispatch starts at the instantiated/actual type and then looks up the hierarchy until it finds an implementation.

</div>

</details>