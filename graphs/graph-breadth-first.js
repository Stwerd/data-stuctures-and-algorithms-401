'use strict'

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencies = new Map(); // this is a built in HashTable
  }

  /**
   * Adds a new Vertex to the Graph Adjacency list
   * @param {any} value
   */
  addVertex(value) {
    let vertex = new Vertex(value);
    this.adjacencies.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight = 1) {
    if (this.adjacencies.has(startVertex) && this.adjacencies.has(endVertex)) {
      let edges = this.adjacencies.get(startVertex); // []
      edges.push(new Edge(endVertex, weight));
    } else {
      throw new Error('Invalid input Vertex');
    }
  }
  size() {
    const iterator = this.adjacencies.keys();
    let size = 0;
    let currentKey = iterator.next();
    while(!currentKey.done) {
      size++;
      currentKey = iterator.next();
    }
    return size;
  }
}