# Critique Design Decisions

<div id="outcomes"><details><summary></summary>

* Criticize design decisions for a simple type hierarchy in Java made by employing the inheritance mechanism.

</details></div>


<span class="tag">Exercise</span> critique the design decisions below.

1. `MoocRoster` extends `JhuRoster` (or the other way around)

    <details class="solution" data-release="Sep 6, 2023 17:00:00">
    <summary>Solution</summary>

    * The advantage of having one type of roster extend the other one lies in type substitution benefits. For example, suppose `MoocRoster` extends `JhuRoster`. In that case, we can have an array of type `JhuRoster` and store rosters of `MoocRoster` there.

    * The main issue with this design is a minimal incentive for an inheritance; if `MoocRoster` extends `JhuRoster` (or the other way around), it must override all of its operations. There goes the incentive on code reuse. Besides, the semantic meaning of inheritance is not firmly met here either. It is not clear that `MoocRoster` is a `JhuRoster` (or the other way around).

    </details>

2. `JhuRoster` and `MoocRoster` are entirely different data types (or "data structures" if you like).

    <details class="solution" data-release="Sep 6, 2023 17:00:00">
    <summary>Solution</summary>

    * The advantage of having two independent types, `JhuRoster` and `MoocRoster`, is that we avoid the need to find a semantic "is-a" relationship. (It is not clear that `MoocRoster` is a `JhuRoster` or the other way around.)
      
    * The disadvantages, on the other hand, are twofold: 

      * It will add complexity (and possibly duplicate code) in clients of these types (i.e., all classes that need to maintain a roster of students).
 
      * The two types of rosters may evolve independently and diverge from having a unified interface. That means more work for clients of these rosters as they must learn to work with two potentially different interfaces.

    </details>

3. There is a `Roster` class where both `MoocRoster` and `JhuRoster` extend it.

    <details class="solution" data-release="Sep 6, 2023 17:00:00">
    <summary>Solution</summary>

    The final design, like the first one, benefits from the potentials of type substitution. It further offers a more justified inheritance relationship; indeed, `JhuRoster` is a `Roster` and `MoocRoster` is a `Roster`.
      
    The problem with this design occurs when implementing the base type `Roster`. We have two choices: 
      
    * Implement `Roster` as if it was a `JhuRoster` or `MoocRoster`. In this case, one of the `JhuRoster` or `MoocRoster` will be an _alias_ for the `Roster` class. The criticism applied to the first design will be applicable here.

    * Don't implement `Roster`! Instead, put stubs in place of its methods. The issue with this approach is that one can still instantiate the `Roster` even though its methods have no implementation!  
      ```java
      Student john = new Student("John Doe", "john@email.com");
      Roster myRoster = new Roster(30);
      myRoster.add(john); // what will happen??!
      ```

    </details>