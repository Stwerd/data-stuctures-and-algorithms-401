'use strict';

// import the `Node` class from the linked list class
const { Node } = require('./linkedlists.js');

class Queue {
  constructor() {
    this.front = null;
    this.last = null;
  }

  // - `enqueue`
  //     - Arguments: `value`
  //     - adds a new node with that value to the `back` of the queue with an O(1) Time performance.
  enqueue(value) {
    let temp = new Node(value);
    if (this.isEmpty()) {
      this.front = temp;
      this.last = temp;
    } else {
      this.last.next = temp;
      this.last = temp;
    }
  }
  //   - `dequeue`
  //     - Arguments: none
  //     - Returns: the value from `node` from the front of the `queue`
  //     - Removes the `node` from the front of the `queue`
  //     - Should raise exception when called on empty `queue`
  dequeue() {
    if (this.isEmpty()) {
      return "this queue is empty";
    }
    let temp = this.front.value;
    this.front = this.front.next;
    return temp;
  }
  //   - `peek`
  //     - Arguments: none
  //     - Returns: Value of the `node` located at the front of the `queue`
  //     - Should raise exception when called on empty `stack`
  peek() {
    if (this.isEmpty()) {
      return "this queue is empty";
    }
    return this.front.value;
  }
  //   - `is empty`
  //     - Arguments: none
  //     - Returns: Boolean indicating whether or not the `queue` is empty
  isEmpty(){
    if(this.front){
      return false
    } else {
      return true;
    }
  }
}


module.exports = Queue;