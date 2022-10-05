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

  //Appends a new node to the end of the linked list
  append(value) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
  }

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

function zip(first, second) {
  let list1 = first.head;
  let list2 = second.head;
  //first check if both lists contain items

  //if both are good, choose list1 as the first head

  //if a list has reached the end,  only use the other list

  // return the newly created list;
  if (list1 !== null && list2 !== null) {
    let newLL = new LinkedList;
    newLL.insert(list1.value)
    list1 = list1.next;
    newLL.append(list2.value);
    list2 = list2.next;
    while (list1 !== null || list2 !== null) {
      if (list1) {
        newLL.append(list1.value);
        list1 = list1.next;
      }
      if (list2) {
        newLL.append(list2.value);
        list2 = list2.next;
      }
    }
    return newLL.toString();
  }
  else {
    return 'Please use two linked lists that contain at least one pointer';
  }
}

module.exports = {
  LinkedList,
  Node,
  zip,
}
