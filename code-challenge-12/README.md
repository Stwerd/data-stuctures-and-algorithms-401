# Feature Tasks  

    Create a class called AnimalShelter which holds only dogs and cats.
    The shelter operates using a first-in, first-out approach.
    Implement the following methods:
        enqueue
            Arguments: animal
                animal can be either a dog or a cat object.
        dequeue
            Arguments: pref
                pref can be either "dog" or "cat"
            Return: either a dog or a cat, based on preference.
                If pref is not "dog" or "cat" then return null.

## Stretch Goal

If a cat or dog isn’t preferred, return whichever animal has been waiting in the shelter the longest.

## Approach & Efficiency

Since we're using FiFo, my initial thoughts are to construct a queue and stack in the constructor.

I'll look through the data structures for nodes with 'cat' and 'dog' data values and return the first one I find. I'll move the cat and dog nodes between the two data structures, so that the data is ready for the next call.
