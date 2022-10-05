'use strict';

// import the `Node` class from the linked list class
const { Node } = require('./linkedlists.js');


class Stack {
  constructor(top = null){
    this.top = top;
  }

  // `push`
  // - Arguments: `value`
  // adds a new node with that value to the top of the stack with an O(1) Time performance.
  push(data){
    let newTop = new Node(data);

    if(this.top){
      newTop.next = this.top;
    }
    this.top = newTop;
  }
  
  // - `pop`
  // - Arguments: none
  // - Returns: the value from node from the top of the stack
  // - Removes the node from the top of the stack
  // - Should raise exception when called on empty stack
  pop(data){
    if(!this.top){
      return "this is empty"
    }
    let saved = this.top.value;
    this.top = this.top.next;
    return saved;
  }
  
  // - `peek`
  // - Arguments: none
  // - Returns: Value of the node located at the top of the stack
  // - Should raise exception when called on empty stack
  peek(){
    if(!this.top){
      return "this is an empty stack";
    }
    return this.top.value;
  }

  // - `is empty`
  // - Arguments: none
  // - Returns: `Boolean` indicating whether or not the stack is empty.
  isEmpty(){
    this.top ? false : true;
  }
}

module.exports = Stack;


