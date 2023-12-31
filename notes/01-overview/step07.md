# A recursive implementation! 

<div id="outcomes"><details><summary></summary>

- Understand binary search well enough to implement it.
- Identify selected object-oriented concepts in action.

</details></div>


<span class="tag">Exercise</span> Implement `find` according to the binary search algorithm. Assume the `students` array is sorted.

<details class="solution" data-release="Aug 30, 2023 17:00:00">
<summary>Solution</summary>

Here is a _recursive_ version of `find` that implements Binary Search:

```java
// Binary Search
// Assumption:
// - students' emails are unique
// - students array is sorted (based on emails)
public Student find(String email) {
  // delegate to the helper find method!
  return find(email, 0, numStudents - 1);
}

// helper: recursive binary search
private Student find(String email, int first, int last) {
  // we use first and last indicies to narrow the attention
  // on a portion of the students array. For example:
  // to search only in the first 5 elements: find(email, 0, 6);
  // to search the entire array: find(email, 0, numStudents - 1); 

  // base case
  if (last < first) { // no more element to search
    return null; // if we are here, the target is not in this roster
  }

  int mid = (first + last) / 2;

  if (email.compareTo(students[mid].getEmail()) == 0) {
    // found it!
    return students[mid];
  } else if (email.compareTo(students[mid].getEmail()) > 0) {
    // ignore the first half
    // repeat the search for the second half
    // look in the students array but start from mid point
    return find(email, mid + 1, last);
  } else  {
    // ignore the second half
    // repeat the search for the first half
    // look in the students array from start up to mid point
    return find(email, first, mid - 1);
  }
}
```

Note that `find` makes use of a **private** helper method (also called) `find`:

* The two `find` methods share a name but have a different set of parameters; this is called <span class="highlight">method overloading</span>, which allows you to reuse a method name.
  
* The _helper_ find is declared as a `private` method; this means any _client_ of `Roster` (other classes/code/program that use `Roster`) cannot directly access it. 

<div class="note">

**Information Hiding Principle**: To prevent certain aspects of a class (or software component) from being accessible to its clients. 

</div>

Information hiding shifts the code's dependency onto a well-defined interface. 
For example, clients of the `Roster` class would use `find` with one parameter `email` irrespective of whether `find` implements the linear or binary search.

Another common way where information hiding manifests itself is by making your class attributes (fields) inaccessible from the outside while providing getter and setter methods for attributes that shall be readable/updatable by other classes.

<div class="note">

Java supports [access modifiers](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html) (like `private`) that you can use to observe information hiding principle.

</div>

<details class="resource">
<summary>Resources</summary>

* A good tutorial on how `compareTo` works: [Java String compareTo()](https://www.javatpoint.com/java-string-compareto)
* Techie Delight has a [detailed article](https://www.techiedelight.com/binary-search/) on iterative and recursive implementation of Binary search in C, Java, and Python.
* OpenGenus article on [Iterative and Recursive Binary Search Algorithm](https://iq.opengenus.org/binary-search-iterative-recursive/#:~:text=The%20major%20difference%20between%20the,the%20iterative%20version%20is%20efficient) is also a good resource.

</details>

</details>