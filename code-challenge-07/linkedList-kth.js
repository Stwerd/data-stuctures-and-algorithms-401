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

  insert(value) {
    let insertIdx = this.head;
    let newNode = new Node(value);
    this.head = newNode;
    this.head.next = insertIdx;
  }

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

  kthFromEnd(k){
    if(k < 0){
      return 'Not a positive integer, k > 0';
    }
    let current = this.head;
    let arr = [];
    while(current !== null){
      arr.push(current.value);
      current = current.next;
    }
    if(arr.length >= k){
      return 'Error: K is the same as the length of the list or greater, cannot find a value before the head';
    }
    let idx = (arr.length - k - 1);
    return `{ ${arr[idx]} }`;
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
