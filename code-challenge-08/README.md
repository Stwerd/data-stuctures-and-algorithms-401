# Linked-Lists-Insertions

## Challenge

- Write a function called zip lists.
- Arguments: 2 linked lists.
- Return: New Linked List, zipped as noted below.
- Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.  
- Try and keep additional space down to O(1).
- You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.  

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

You have access to the Node class and all the properties on the Linked List class.

Write tests to prove the following functionality:

[ x ] Function works in ideal conditions

[ x ] When one or more linked list are empty

[ x ] When one linked list is larger than the other

[ x ] When one linked list is of a size 1

## Whiteboard Process

<!-- Embedded whiteboard image -->
![Whiteboard](./CC08.jpg)

## Approach & Efficiency

<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

I at first took an approach of first zipping while both inputs contained data then running a while loop for the remaining inputted list until both inputs.next's are null. However that was majorly inefficient, instead after a bit of errors with my code I went back to whiteboards and used a new approach where each loop in my while, it checks separately for each input if its at the end of its links or not before adding to the end of the new Linked list.

## TO test yourself

Npm Init
Npm Install jest
Run [npm test code-challenge-08] to run tests.
