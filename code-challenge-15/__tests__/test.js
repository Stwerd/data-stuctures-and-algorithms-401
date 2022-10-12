'use strict';

const BinarySearchTree = require('../BST.js')

describe('Testing the abilities of my Binary Tree', ()=> {
  test('Can successfully instantiate an empty tree',()=>{
    //Not fucking do a empty binary tree, if you make it, it needs to have a head value get wrecked please.
    let tree = new BinarySearchTree();
    expect(tree).toEqual({root:null});
  });
  test('Can successfully instantiate a tree with a single root node',()=>{
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    expect(tree).toEqual({"root": {"left": null, "right": null, "value": 1}});
  });
  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node',()=>{
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(0);
    tree.add(2);
    expect(tree).toEqual({"root": {"left": {"left": null, "right": null, "value": 0}, "right": {"left": null, "right": null, "value": 2}, "value": 1}});
  });
  test('Can successfully return a collection from a preOrder traversal',()=>{
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(0);
    tree.add(2);
    let arr = [];
    tree.preOrder(tree.root, arr)
    expect(arr).toEqual(["1 ","0 ","2 "]);
  });
  test('Can successfully return a collection from a inOrder traversal',()=>{
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(0);
    tree.add(2);
    let arr = [];
    tree.inOrder(tree.root, arr)
    expect(arr).toEqual(["0 ", "1 ", "2 "]);
  });
  test('Can successfully return a collection from a postOrder traversal',()=>{
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(0);
    tree.add(2);
    let arr = [];
    tree.postOrder(tree.root, arr)
    expect(arr).toEqual(["2 ", "1 ", "0 "]);
  });
  test('Returns true 	false for the contains method, given an existing or non-existing node value',()=>{
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(0);
    tree.add(2);
    expect(tree.contains(1)).toEqual(true);
    expect(tree.contains(3)).toEqual(false);
  });
})
