'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the head/
  // create a newNode using value
  // set the newNodes's next property equal to the ll.head
  // set the head ll, equal to the new node.
  // inserting at head has 0(1) time complexity, space complexity 0(1)

  // insert at tail
  // create a newNode using value
  // traverse to the end. 0(n)
  // current should be the tail (or close to it),
  // set current.next equal to newNode
  // set ll.tail equal to newNode 0(1)
  insert(value) {
    let insertIdx = this.head;
    let newNode = new Node(value);
    this.head = newNode;
    this.head.next = insertIdx;
  }

  // Does a value exist within the linked list.
  // traverse to the end. 0(n)
  //  if we read a value that equals our input value, return true
  //  if we reach the end of our traversal, return false.
  includes(value) {
    let boolean = false;
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        boolean = true;
      }
      current = current.next;
    }
    return boolean;
  }

  //Appends a new node to the end of the linked list
  append(value) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
    console.log(`Added ${value} to the end of the node.`)
  }

  //inserts directly before a key to search by
  insertBefore(value, key) {
    let node = new Node(value);
    if (this.head.value === key) {
      let head = this.head;
      this.head = node;
      node.next = head;
    }
    else {
      let a = this.head;
      let b = a.next;
      while (b.value !== key ) {
        a = a.next;
        b = b.next;
      }
      a.next = node;
      node.next = b;
    }
  }

  insertAfter(value, key) {
    let current = this.head;
    while (current.value !== key) {
      current = current.next;
    }
    let next = current.next;
    current.next = new Node(value);
    current.next.next = next;
  }


  // read each value stored and append to a string 0(n) space, 0(n) time
  // traverse to the end.
  // for each value, append value to string.
  // return string after traversal is done.
  toString() {
    let total = `{ ${this.head.value} }`;
    let current = this.head.next;
    while (current !== null) {
      total += ` -> { ${current.value} }`;
      current = current.next;
    }
    return total;
  }
}

module.exports = LinkedList;
