# Static (Compile-time) Polymorphism

<div id="outcomes"><details><summary></summary>

- Define polymorphism. 
- Associate polymorphism with type substitution.
- Develop an example of static polymorphism.

</details></div>

Polymorphism (the idea of "having many forms") is closely related to type substitution. You have already seen a flavor of it in action: you can pass an argument of type `GradStudent` to a method like `add` that takes a parameter of type `Student` because the compiler honors type substitution and _implicitly_ casts from the subtype (`GradStudent`) to the base type (`Student`). This is called **static** or **compile-time** polymorphism. 

<span class="tag">Exercise</span> Make up an example to showcase compile-time polymorphism for the following type hierarchy.

<div class="center">
<img src="/img/02/polymorphisim_01.png" width="55%">
</div>

<details class="solution" data-release="Sep 1, 2023 17:00:00">
<summary>Solution</summary>

Suppose we have the following class:

```java
public class Shelter {
  private Animal[] animals;
  private int numAnimals;

  // Constructor not shown to save space

  public add(Animal a) {
    animals[numAnimals++] = a;
  }
}
```

Objects of type `Dog` and `Cat` can be passed to the `add` method and be stored in the `animals` array. 

</details>