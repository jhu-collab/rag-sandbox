# Exercise

<div id="outcomes"><details><summary></summary>

- Design robust methods with Exceptions.
- Write JUnit tests to check whether exceptions are thrown when expected.
- Write Java code utilizing Java Exceptions.

</details></div>

<span class="tag">Exercise</span>:

- Update the specification/declaration of `IndexedList.put` to make it robust.
- Write unit tests for `put` to check exception is thrown when it is expected. 
- Update implementation of `ArrayIndexedList.put` to throw exception.


<details class="solution" data-release="Sep 11, 2023 17:00:00">
<summary>Solution</summary>

Update `IndexedList.put`:

```java
/**
 * Change the value at the given index.
 *
 * @param index representing a position in this list.
 * @param value to be written at the given index.
 *              Post: this.get(index) == value
 * @throws IndexOutOfBoundsException when index < 0 or index >= length.
 */
void put(int index, T value) throws IndexOutOfBoundsException;
```

Add the following unit tests to `IndexedListTest`:

```java
@Test
@DisplayName("put() throws exception if index is below the valid range.")
void testPutWithIndexBelowRangeThrowsException() {
  try {
    numbers.put(-1, 10);
    fail("IndexOutOfBoundsException was not thrown for index < 0");
  } catch (IndexOutOfBoundsException ex) {
    return;
  }
}

@Test
@DisplayName("put() throws exception if index is above the valid range.")
void testPutWithIndexAboveRangeThrowsException() {
  try {
    numbers.put(size + 1, 10);
    fail("IndexOutOfBoundsException was not thrown for index > length");
  } catch (IndexOutOfBoundsException ex) {
    return;
  }
}
```

Update `ArrayIndexedList.put`:

```java
@Override
public void put(int index, T value) throws IndexOutOfBoundsException {
  if (index < 0 || index > length()) {
    throw new IndexOutOfBoundsException();
  }
  
  data[index] = value;
}
```

**Aside**: `IndexOutOfBoundsException` is a built-in Java Exception that will be thrown, e.g., when an array is indexed with a value out of the index range. So, the statement `data[index] = value;` will throw `IndexOutOfBoundsException` when `index` is invalid; we didn't need to change the implementation of `ArrayIndexedList.put`. I prefer the updated implementation as it provides more clarity to the behavior of the method.

</details>