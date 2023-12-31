<!---
lecture: 25
--->

# Hash Table

After reading this chapter and engaging in the embedded activities and reflections, you should be able to:

* Identify the steps of **hashing** (convert to hash code and compression).
* Enumerate the properties of a _good_ hash function.
* Describe the job of Java's `hashCode` method.
* Define what a hash table is.
* Explain what **collision** (in the context of hashing) is and when it happens.
* Describe <u>Open Addressing with Linear Probing</u> as a collision resolution.
* Understand and apply the **tombstone mechanism** when removing an entry from a Hash Table with open addressing schemes.
* Explain what is meant by *contamination* of open address hash tables.
* Understand **rehashing** well enough to implement it.
* Compute the **load factor** of a hash table.
* Determine table size and when to rehash.
* Analyze the efficiency of "open address" hash tables.
* Describe primary (and secondary) **clustering effect** of linear probing.
* Describe other probing strategies (quadratic, double hashing, $\dots$, for open address hash table.
* Differentiate **chaining** collision resolution from open addressing.
* Analyze the efficiency of "separate chaining" hash tables.

> This chapter does not have a starter/solution code because a homework is about implementing hash tables.