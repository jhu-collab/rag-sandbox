# Exercise

<div id="outcomes"><details><summary></summary>

* Develop an example of runtime polymorphism. 

</details></div>

<span class="tag">Exercise</span> Make up an example to showcase runtime polymorphism for the following type hierarchy:

<div class="center">
<img src="/img/02/polymorphisim_01.png" width="55%">
</div>

<details class="solution" data-release="Sep 1, 2023 17:00:00">
<summary>Solution</summary>

Consider the following implementations for the `makeSound` method:

```java
public class Animal {
  public void makeSound() {
    System.out.println("Grr...");
  }
}
```

```java
public class Cat extends Animal {
  @Override
  public void makeSound() {
    System.out.println("Meow");
  }
}
```

```java
public class Dog extends Animal {
  @Override
  public void makeSound() {
    System.out.println("Woof");
  }
}
```

If we execute the following code, 

```java
Animal[] animals = new Animal[5];
animals[0] = new Animal();
animals[1] = new Cat();
animals[2] = new Dog();
animals[3] = new Dog();
animals[4] = new Cat();

for (Animal a: animals) {
  a.makeSound();
}
``` 

It will print

```text
Grr...
Meow
Woof
Woof
Meow
```

JVM dispatches the implementation of `makeSound` according to _actual type_ of `a` at each iteration, at runtime.

By the way, does this "for loop" look strange to you?

```js
for (Animal a: animals) {
  a.makeSound();
}
```

If yes, please review [Oracle's Java Tutorial: The for Statement](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html). The syntax is referred to as the **enhanced for statement**; it can be used with _Collections_ and _arrays_ to make your loops more compact and easy to read.

</details>