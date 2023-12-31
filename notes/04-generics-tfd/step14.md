# `@BeforeEach`

<div id="outcomes"><details><summary></summary>

* Use JUnit's BeforeEach annotation to create setup methods.

</details></div>

Notice every unit test we wrote included the following statement

<pre><code class="language-java">IndexedList<Integer> numbers = new ArrayIndexedList<>(5, 10);</code></pre>

Here, the size and default value are chosen arbitrarily. Of course, we could have varied them in each unit test, but every unit test certainly requires an IndexedList object. 

<div class="note">

JUnit lets you annotate a setup method that will be run before each unit test.

</div>

Here is a _refactored_ `IndexedListTest`:

```java
class IndexedListTest {
  private IndexedList<Integer> numbers;
  private final static int size = 5;
  private final static int defaultValue = 10;

  @BeforeEach
  void setUp() {
    numbers = new ArrayIndexedList<>(size, defaultValue);
  }

  @Test
  @DisplayName("get() returns the default value after IndexedList is instantiated.")
  void testGetAfterConstruction() {
    for (int index = 0; index < numbers.length(); index++) {
      assertEquals(defaultValue, numbers.get(index));
    }
  }

  @Test
  @DisplayName("put() changes the default value after IndexedList is instantiated.")
  void testPutChangesValueAfterConstruction() {
    numbers.put(2, 7);
    assertEquals(7, numbers.get(2));
  }

  @Test
  @DisplayName("put() overwrites the existing value at given index to provided value.")
  void testPutUpdatesValueAtGivenIndex() {
    numbers.put(1, 8);
    assertEquals(8, numbers.get(1));
    numbers.put(1, -5);
    assertEquals(-5, numbers.get(1));
  }

  @Test
  @DisplayName("length() returns the correct size after IndexedList is instantiated.")
  void testLengthAfterConstruction() {
    assertEquals(size, numbers.length());
  }
}
```

Notice I've also used _constant_ fields (`final static`) to declare size and default value. It is considered good practice to store such values in constant (final) variables.