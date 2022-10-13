'use strict';

const Queue = require('./queue.js');

class Knode {
  constructor(value, idx) {
    this.value = value;
    this.children = new Array(idx);
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }

  add(input, idx) {
    let temp = new Knode(input, idx);
    if (!this.root) {
      this.root = temp;
    }
    else {
      let queue = new Queue();
      let current = this.root;
      queue.enqueue(current);
      while (!queue.isEmpty()) {
        let current = queue.dequeue();
        for (let i = 0; i < current.children.length; i++) {
          if (current.children[i] !== undefined) {
            queue.enqueue(current.children[i]);
          }
          else if (current.children[i] === undefined) {
            current.children[i] = temp;
            break;
          }
        }
      }
    }
  }
  toJson() {
    let arr = [];
    let current = this.root;
    let queue = new Queue();
    queue.enqueue(current);
    while (!queue.isEmpty()) {
      current = queue.dequeue();
      arr.push(current.value);
      for (let i in current.children) {
        queue.enqueue(current.children[i]);
      }
    }
    return arr;
  }
}

function fizzBuzzTree(inputTree) {
  let newTree = inputTree;
  let current = inputTree.root;
  let queue = new Queue();
  queue.enqueue(current);
  while (queue.isEmpty() === false) {
    current = queue.dequeue();
    if (current.value % 5 && current.value % 3) {
      current.value = 'FizzBuzz';
    }
    else if (current.value % 5) {
      current.value = 'Fizz'
    }
    else if (current.value % 3) {
      current.value = 'Buzz'
    }
    for (let i in current.children) {
      if (current.children[i]) {
        queue.enqueue(current.children[i]);
      }
    }
  }
  return newTree;

}

module.exports = {
  KaryTree,
  fizzBuzzTree
}
