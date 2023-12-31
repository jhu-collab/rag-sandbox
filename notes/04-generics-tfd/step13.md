# Unit Tests: Exercise 

<div id="outcomes"><details><summary></summary>

* Write simple unit tests using the JUnit framework.

</details></div>


<span class="tag">Exercise</span> complete the implementation of the following unit tests:

```java
@Test
@DisplayName("get() returns the default value after IndexedList is instantiated.")
void testGetAfterConstruction() {
  // TODO Implement me!
}

@Test
@DisplayName("put() changes the default value after IndexedList is instantiated.")
void testPutChangesValueAfterConstruction() {
  // TODO Implement me!
}

@Test
@DisplayName("put() overwrites the existing value at given index to provided value.")
void testPutUpdatesValueAtGivenIndex() {
  // TODO Implement me!
}
```

When you run your tests, they must all pass. 

<details class="solution" data-release="Sep 8, 2023 17:00:00">
<summary>Solution</summary>

```java
@Test
@DisplayName("get() returns the default value after IndexedList is instantiated.")
void testGetAfterConstruction() {
  IndexedList<Integer> numbers = new ArrayIndexedList<>(5, 10);
  for (int index = 0; index < numbers.length(); index++) {
    assertEquals(10, numbers.get(index));
  }
}

@Test
@DisplayName("put() changes the default value after IndexedList is instantiated.")
void testPutChangesValueAfterConstruction() {
  IndexedList<Integer> numbers = new ArrayIndexedList<>(5, 10);
  numbers.put(2, 7);
  assertEquals(7, numbers.get(2));
}

@Test
@DisplayName("put() overwrites the existing value at given index to provided value.")
void testPutUpdatesValueAtGivenIndex() {
  IndexedList<Integer> numbers = new ArrayIndexedList<>(5, 10);
  numbers.put(1, 8);
  assertEquals(8, numbers.get(1));
  numbers.put(1, -5);
  assertEquals(-5, numbers.get(1));
}
```

</details>

<span class="tag">Exercise</span> What other unit tests can we add to `IndexedListTest`? You don't need to write the tests, only describe them.

<details class="solution" data-release="Sep 8, 2023 17:00:00">
<summary>Solution</summary>

Here are some ideas:
* Test `get` and `length` have no side effects; that is, calling it will not cause any changes to the data structure. 
* Test `put` has no unintended effects; for example, it does not change the size of the data structure, nor does it change a value at another index.

</details>
