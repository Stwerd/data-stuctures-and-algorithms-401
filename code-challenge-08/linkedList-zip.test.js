'use strict';

const { LinkedList, zip } = require('./linkedList-zip.js');


describe('testing the Linked List data structure', () => {

  test('Combining two linked lists creates a singular linked list, that changes every step between the two lists', () => {
    let list1 = new LinkedList;
    list1.insert('A');
    list1.append('B');
    list1.append('C');
    
    let list2 = new LinkedList;
    list2.insert('Z');
    list2.append('Y');
    list2.append('X');
    expect(zip(list1, list2)).toEqual('{ A } -> { Z } -> { B } -> { Y } -> { C } -> { X }');
  });

  test('Combining two linked lists of differing length works correctly',() => {
    let list1 = new LinkedList;
    list1.insert('A');
    
    let list2 = new LinkedList;
    list2.insert('Z');
    list2.append('Y');
    list2.append('X');
    expect(zip(list1, list2)).toEqual('{ A } -> { Z } -> { Y } -> { X }');
  });

  test('Handles error when submitting empty linked lists', () => {
    let list1 = new LinkedList;

    let list2 = new LinkedList;
    list2.insert('A')
    expect(zip(list1, list2)).toEqual('Please use two linked lists that contain at least one pointer');
  });

  test('Can handle zipping to linked lists when one has a size of one', () => {
    let list1 = new LinkedList;
    list1.insert('A');
    
    let list2 = new LinkedList;
    list2.insert('Z');
    list2.append('Y');
    list2.append('X');
    expect(zip(list1, list2)).toEqual('{ A } -> { Z } -> { Y } -> { X }');
  });
});
