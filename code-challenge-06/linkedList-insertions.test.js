'use strict';

const LinkedList = require('./linkedList-insertions.js');

describe('testing the Linked List data structure', () => {
  
  test('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList;
    list.insert('A');
    list.insert('B');
    list.append('B');
    list.append('C');
    expect(list.toString()).toEqual('{ B } -> { A } -> { B } -> { C }');
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList;
    list.insert('A');
    list.insert('B');
    list.append('B');
    list.append('C');
    expect(list.toString()).toEqual('{ B } -> { A } -> { B } -> { C }');
  });

  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let list = new LinkedList;
    list.insert('A');
    list.append('B');
    list.insertBefore('D', 'B');
    list.append('C');
    expect(list.toString()).toEqual('{ A } -> { D } -> { B } -> { C }');
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList;
    list.insert('A');
    list.append('C')
    list.insertBefore('B', 'A');
    expect(list.toString()).toEqual('{ B } -> { A } -> { C }');
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList;
    list.insert('A');
    list.append('C')
    list.insertAfter('B', 'A');
    expect(list.toString()).toEqual('{ A } -> { B } -> { C }');
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList;
    list.insert('A');
    list.append('C')
    list.insertAfter('B', 'C');
    expect(list.toString()).toEqual('{ A } -> { C } -> { B }')
  });
});
