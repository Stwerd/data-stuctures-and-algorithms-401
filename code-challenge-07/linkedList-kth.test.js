'use strict';

const LinkedList = require('./linkedList-kth.js');


describe('testing the Linked List data structure', () => {

  test('Where k is greater than the length of the linked list', () => {
    let list = new LinkedList;
    list.insert('A');
    list.append('B');
    list.append('C');
    list.append('D');
    list.append('E');
    expect(list.kthFromEnd(6)).toEqual('Error: K is the same as the length of the list or greater, cannot find a value before the head');
  });

  test('Where k and the length of the list are the same', () => {
    let list = new LinkedList;
    list.insert('A');
    list.append('B');
    expect(list.kthFromEnd(2)).toEqual('Error: K is the same as the length of the list, cannot find a value before the head');
  });

  test('Where k is not a positive integer', () => {
    let list = new LinkedList;
    list.insert('A');
    expect(list.kthFromEnd(-1)).toEqual('Not a positive integer, k > 0')
  });

  test('Where the linked list is a size of 1', () => {
    let list = new LinkedList;
    list.insert('A');
    expect(list.kthFromEnd(0)).toEqual('{ A }');
  });

  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LinkedList;
    list.insert('A');
    list.append('B');
    list.append('C');
    list.append('D');
    list.append('E');
    expect(list.kthFromEnd(2)).toEqual('{ C }');
  });
});
