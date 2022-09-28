# Linked-Lists-Insertions

## Challenge

<!-- Description of the challenge -->
Write the following methods for the Linked List class:

### kth From End

  argument: a number, k, as a parameter.
  Return the node’s value that is k places from the tail of the linked list.
  You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

### Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

You have access to the Node class and all the properties on the Linked List class.

Write tests to prove the following functionality:

[ x ] Where k is greater than the length of the linked list

[ x ] Where k and the length of the list are the same

[ x ] Where k is not a positive integer

[ x ] Where the linked list is of a size 1

[ x ] "Good Path" where k is not at the end, but somewhere in the middle of the linked list

## Whiteboard Process

<!-- Embedded whiteboard image -->
![Whiteboard](./CC07.jpg)

## Approach & Efficiency

<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

I took the approach of putting everything in an array and using k and the length of the array to index to the proper value away from the end of the array, taking into account that arrays are zero indexed, which when trying to find x spaces from the end of an array can get a little convoluted.

Run [npm test code-challenge-07] to run tests.
