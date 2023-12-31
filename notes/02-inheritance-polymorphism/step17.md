# Overriding vs. Overloading

<div id="outcomes"><details><summary></summary>

* Distinguish **method overloading** from **method overriding**.

</details></div>


* Overloading is having two methods with the same name but different types or number of parameters (or both). An example of overloading is the helper `find` method in the previous chapter's recursive implementation of binary search.
 
* A different return type as the sole difference between the two methods is not sufficient for overloading. 

* The overloaded method is usually in the same class, but it can also be in derived classes. 

* The overriding method must have the same signature as the overridden one in the super-class. 

* Overriding never happens in the same class. It always happens in sub-classes. 

<div class="note">

* Java decides at <u>compile time</u> which version of an overloaded method must be invoked (static polymorphism). 

* Java decides at <u>runtime</u> which version of an overridden method shall be dispatched (dynamic polymorphism).

</div>

Consider the following code snippets:

```java
public class Animal {

  // fields and constructors not shown!

  public void makeSound() {
    System.out.println("Grrr.......");
  }

  public void makeSound(int repeat) {
    for (int i = 0; i < repeat; i++) {
      makeSound();
    }
  }
}
```

```java
public class Dog extends Animal {

  @Override
  public void makeSound() {
    System.out.println("Wooof.......");
  }
}
```

```java
public class Cat extends Animal {

  @Override
  public void makeSound() {
    System.out.println("Meow.......");
  }
}
```

```java
Animal[] animals = new Animal[5];
animals[0] = new Animal();
animals[1] = new Dog();
animals[2] = new Cat();
animals[3] = new Cat();
animals[4] = new Dog();

for(Animal a: animals) {
  a.makeSound(2);
}
```

<span class="tag">Exercise</span> Identify examples of method overloading vs. method overriding.

<details class="solution" data-release="Sep 1, 2023 17:00:00">
<summary>Solution</summary>

The `makeSound` method is overloaded in the `Animal` class, and it is overridden in the `Dog` and the `Cat` classes.

</details>


<span class="tag">Exercise</span> Identify examples of static vs. dynamic polymorphism.

<details class="solution" data-release="Sep 1, 2023 17:00:00">
<summary>Solution</summary>

* Static polymorphism: objects of (actual) type `Dog` and `Cat` are stored in an array with a declared type of `Animal`.

* Dynamic polymorphism: `makeSound(2)` inside the for-loop will need to call to overloaded `makeSound` (without argument). During runtime, the dispatch of `makeSound` will be based on the actual type of the Animal object `a`.

</details>

<details class="resource">
<summary>Resources</summary>

* JavaPractices [Overloading can be tricky](http://www.javapractices.com/topic/TopicAction.do?Id=119).

</details>
