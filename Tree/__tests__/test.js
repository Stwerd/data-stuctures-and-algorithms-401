'use strict';

const BinarySearchTree = require('../BST.js')

const { KaryTree, fizzBuzzTree } = require('../k-aryTree.js');

describe('Testing the abilities of my Binary Tree', () => {
  test('Can successfully instantiate an empty tree', () => {
    //Not fucking do a empty binary tree, if you make it, it needs to have a head value get wrecked please.
    let tree = new BinarySearchTree();
    expect(tree).toEqual({ root: null });
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    expect(tree).toEqual({ "root": { "left": null, "right": null, "value": 1 } });
  });
  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(0);
    tree.add(2);
    expect(tree).toEqual({ "root": { "left": { "left": null, "right": null, "value": 0 }, "right": { "left": null, "right": null, "value": 2 }, "value": 1 } });
  });
  test('Can successfully return a collection from a preOrder traversal', () => {
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(0);
    tree.add(2);
    let arr = [];
    tree.preOrder(tree.root, arr)
    expect(arr).toEqual(["1 ", "0 ", "2 "]);
  });
  test('Can successfully return a collection from a inOrder traversal', () => {
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(0);
    tree.add(2);
    let arr = [];
    tree.inOrder(tree.root, arr)
    expect(arr).toEqual(["0 ", "1 ", "2 "]);
  });
  test('Can successfully return a collection from a postOrder traversal', () => {
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(0);
    tree.add(2);
    let arr = [];
    tree.postOrder(tree.root, arr)
    expect(arr).toEqual([2, 1, 0]);
  });
  test('Returns true 	false for the contains method, given an existing or non-existing node value', () => {
    //Do something
    let tree = new BinarySearchTree();
    tree.add(1);
    tree.add(0);
    tree.add(2);
    expect(tree.contains(1)).toEqual(true);
    expect(tree.contains(3)).toEqual(false);
  });
  test('Use of getMax of a binary tree just works', () => {
    let tree = new BinarySearchTree();
    tree.add(7);
    tree.add(2);
    tree.add(5);
    tree.add(4);
    tree.add(11);
    tree.add(20);
    tree.add(8);
    tree.add(13);
    expect(tree.getMax()).toEqual(20);
  });
  test('\"Happy Path\" usage of breadth-first method of binary tree', () => {
    let tree = new BinarySearchTree();
    tree.add(7);
    tree.add(5);
    tree.add(6);
    tree.add(10);
    tree.add(8);
    tree.add(13);
    expect(tree.breadthFirst()).toEqual([7, 5, 10, 6, 8, 13]);
  });
  test('Makes sure my fizzbuzz function works', () => {
    let tree = new KaryTree();
    tree.add(5, 3);
    tree.add(5, 1);
    tree.add(20, 0);
    tree.add(3, 0);
    let test = fizzBuzzTree(tree).toJson();
    expect(test).toEqual(["Buzz", "Buzz", "Buzz", "Fizz", "Buzz"]);
  })
});