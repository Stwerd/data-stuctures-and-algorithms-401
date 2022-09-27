'use strict';

const LinkedList = require('./linkedlist.js');

describe('testing the Linked List data structure', () => {
  
  test('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList;
    expect(list.head).toEqual(null);
  });

  test('Can properly insert into the linked list', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":null}}');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList;
    list.insert('a');
    list.insert('b');
    expect(JSON.stringify(list)).toEqual('{"head":{"value":"b","next":{"value":"a","next":null}}}')
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList;
    list.insert('first insert');
    list.insert('second insert');
    expect(JSON.stringify(list)).toEqual('{"head":{"value":"second insert","next":{"value":"first insert","next":null}}}')
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList;
    list.insert('first insert');
    list.insert('second insert');
    expect(list.includes('first insert')).toEqual(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList;
    list.insert('first insert');
    list.insert('second insert');
    expect(list.includes('banana')).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList;
    list.insert('first insert');
    list.insert('second insert');
    expect(list.toString()).toEqual(" second insert first insert");
  });
});
