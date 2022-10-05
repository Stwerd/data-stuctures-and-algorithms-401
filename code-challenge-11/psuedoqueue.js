'use strict';

let Stack = require('./stack.js');

class Pqueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    while (this.stack1.top.next !== null) {
      this.stack2.push(this.stack1.pop());
    }
    let value = this.stack1.pop();
    while (this.stack2.top !== null) {
      this.stack1.push(this.stack2.pop());
    }
    return value;
  }
}