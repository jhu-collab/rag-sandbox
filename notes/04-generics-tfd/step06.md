# Generic Implementation

<div id="outcomes"><details><summary></summary>

* Implement the generic IndexedList ADT with a concrete Java class.

</details></div>


We must also update the implementation of the `ArrayIndexedList` since the `IndexedList` ADT uses generics.

1. Update the class declaration, parameters, and return types.
    ```java
    public class ArrayIndexedList<T> implements IndexedList<T> {

      @Override
      public void put(int index, T value) {
        // stub
      }

      @Override
      public T get(int index) {
        return null; // stub
      }

      @Override
      public int length() {
        return 0; // stub
      }
    }
    ```

    Notice the `<T>` follows class name <u>and</u> interface name.

2. Define the fields with a generic type. Here we need a generic array.
    ```java
    private T[] data;
    ```

3. Initialize the fields in a constructor (instantiate when needed). We will leave this for the next lesson!
   
4. Implement the methods.

    Here are implementations for `get` and `length`
    ```java
    @Override
    public T get(int index) {
      return data[index];
    }

    @Override
    public int length() {
      return data.length;
    }
    ```

    <span class="tag">Exercise</span> Implement `put`.

    <details class="solution" data-release="Sep 8, 2023 17:00:00">
    <summary>Solution</summary>

    ```java
    @Override
    public void put(int index, T value) {
      data[index] = value;
    }
    ```

    Notice the implementation of `get`, `length` and `put` are identical to before using generics. This is the beauty of it: using generics in most cases requires very little change to your code. 
    
    </details>
  