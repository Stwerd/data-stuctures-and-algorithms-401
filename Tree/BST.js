'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(node, arr) {
    if (node === null) {
      return;
    }
    /* first print data of node */
    arr.push(node.value + " ");
    /* then recur on left subtree */
    this.preOrder(node.left, arr);
    /* now recur on right subtree */
    this.preOrder(node.right, arr);
  };

  inOrder(node, arr) {
    if(node === null){
      return;
    }
    //goes all the way to the left
    this.inOrder(node.left, arr);
    // adds left most node
    arr.push(node.value + " ");
    //finally gets the right side
    this.inOrder(node.right, arr);
  };
  
  postOrder(node, arr) { 
    if(node === null){
      return;
    }
    //goes all the way to the left
    this.postOrder(node.right, arr);
    // adds left most node
    arr.push(node.value);
    //finally gets the right side
    this.postOrder(node.left, arr);
  };

  getMax(){
    let arr = [];
    this.postOrder(this.root, arr);
    let max = arr[0];
    for(let i in arr){
      console.log(i);
      if(max < arr[i]){
        max = arr[i];
      }
    }
    return max;
  }
}



class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(input) {
    let inputNode = new Node(input);
    let current = this.root
    if(!this.root){
      this.root = inputNode;
    }
    while (current) {
      if (input < current.value) {
        if (current.left) {
          current = current.left;
        }
        else {
          current.left = inputNode;
          break;
        }
      }
      else if (input > current.value) {
        if (current.right) {
          current = current.right;
        }
        else {
          current.right = inputNode;
          break;
        }
      }
    }
  };

  contains(input) {
    let arr = [];
    this.inOrder(this.root, arr);
    if(arr.includes(input + " ")){
      return true;
    } else return false;
  };
}

// console.log(tree.contains(2));
module.exports = BinarySearchTree;