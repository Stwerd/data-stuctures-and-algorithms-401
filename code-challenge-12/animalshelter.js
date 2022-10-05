'use strict';

let Stack = require('./stack.js');

class AnimalShelter {
  constructor(){
    this.top = new Stack();
  }

  enqueue(animal){
    this.top.push(animal);
  }
  dequeue(pref){
    if(pref){
      let temp = this.top
      //expect the animal object has a type (dog or cat) as well as other properties
      while(temp.value.type !== pref){
        temp = temp.next;
      }
      let holder = temp.value;
      
    }
  }
}

//Note to self, change the stack to a queue, we want a first in first out, not first in last out.
