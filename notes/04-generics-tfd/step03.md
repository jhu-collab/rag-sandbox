# Limited to Integer Values?!

<div id="outcomes"><details><summary></summary>

* Explain why we use generics in our ADT declaration.

</details></div>


Notice the `IndexedList` ADT can only be used for integer values; the `put` method takes in an integer, and the `get` method returns an integer.

We asked students how we can make `IndexedList` work with types other than the integer. Here are three interesting ideas they came up with:

1. Overload the `put` and `get` methods for different data types.
   
2. Use method overriding to provide multiple concrete implementations of `IndexedList` that work for different data types.
   
3. Change the data type of _value_ from `int` to `Object` as in
   
    ```java
    void put(int index, Object value);
    Object get(int index);
    ```

<span class="tag">Exercise</span> Criticize each of the aforementioned ideas.

<details class="solution" data-release="Sep 8, 2023 17:00:00">
<summary>Solution</summary>

1. It's possible to overload `put` with different data types for `value`. However, we cannot overload `get` by varying its return type because changing the return type is not enough for overloading. Furthermore, even if this was possible, we would only account for types already defined. In other words, `IndexedList` will not work for programmer-defined types that it does not have an overloaded version of. Finally, assuming we knew all the data types in advance, this still would be an inelegant solution, to say the least, that would contain hundreds of overloaded methods. 
   
2. To override methods, the method's signature being overridden in a sub-class must be consistent with the overriding one in the parent class. So, we will not be able to override, e.g., `put` in a sub-class and accept values of type `boolean` instead of `int`.
   
3. This is by far the best idea and one which we used to employ (before Java had Generics -- soon to be explored!). Since every type (class) in Java is a subtype (sub-class) of `Object`, we can leverage type substitution and pass values of any type to the `put` method and return it from the `get` method. We will explore the potential issues with this strategy in the next lesson. 

Let's answer a question you may have: how can one pass primitive types (`int`, `float`, `char`, ...) to a method expecting `Object`? The answer is: you cannot do that!! However, <span class="highlight">every primitive type in Java has a corresponding reference type!</span> For example, `int` has `Integer` **wrapper class** that provides a way to use primitive type `int` as an object.

</details>

<details class="resource">
<summary>Resources</summary>

You may find these resources helpful to familiarize yourself with **wrapper classes** in Java. In particular, it is useful to understand related concepts of **Autoboxing** and **Unboxing**):

* [BeginnersBook article on "Wrapper class in Java"](https://beginnersbook.com/2017/09/wrapper-class-in-java/)
* [TutorialsPoint article on "Why do we need a wrapper class in Java?"](https://www.tutorialspoint.com/why-do-we-need-a-wrapper-class-in-java)
* [Educative post on "What are wrapper classes in Java?"](https://www.educative.io/edpresso/what-are-wrapper-classes-in-java)
* [Baeldung article on "Wrapper Classes in Java"](https://www.baeldung.com/java-wrapper-classes)

</details>