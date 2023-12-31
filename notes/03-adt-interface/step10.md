# Class Diagram

<div id="outcomes"><details><summary></summary>

* Catalogue class relationships into is-a and has-a classes and further separate is-a relationships into "extends" and "implements" types.

</details></div>

We have created a simple shape drawing application that can compose basic geometric shapes into more complex ones, such as the smiley face below!

<div class="center">
<img src="/img/03/smiley.png" width="20%">
</div>

Here is a partial class diagram of our software. The links between classes are removed!

<div class="center">
<img src="/img/03/class_diagram_question.png" width="60%">
</div>

<span class="tag">Exercise</span> Add links (arrows) between classes to indicate "is-a" and "has-a" relationship. Catalogue is-a relationships into "extends" and "implements" categories. 

<details class="solution" data-release="Sep 6, 2023 17:00:00">
<summary>Solution</summary>

<div class="center">
<img src="/img/03/class_diagram_solution.png" width="60%">
</div>

There could be an "is-a" link between `SmileyFace` and `Shape` too.

</details>

<span class="tag">Exercise</span> Based on the completed diagram, make up an example to showcase polymorphism. (Do this at home!)

<details class="solution" data-release="Sep 6, 2023 17:00:00">
<summary>Solution</summary>

Imagine there is an `area` method in the `Shape` interface. This method must be implemented appropriately in the `Circle` and `Square` classes. 

Further, assume there is the following method:

```java
public static void printArea(Shape s) {
  System.out.println(s.area());
}
```

The following code exhibits polymorphism:

```java
Circle ci = new Circle(2);
Square sq = new Square(3);

printArea(ci);
printArea(sq);
```

* Static polymorphism: During compile-time, `ci` and `sq` are implicitly upcasted to `Shape` when `printArea` is called.

* Dynamic polymorphism: During runtime, JVM dispatches the correct implementation of `s.area()` based on the actual type of `s` (which is, for example, `Circle` when `ci` is passed to `printArea`).

</details>