'use strict';

let Queue = require('../queue.js');

describe('Testing the abilities of Queue', ()=> {
  test('Add to a queue',()=> {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue).toEqual({"front": {"next": null, "value": 1}, "last": {"next": null, "value": 1}});
  });
  test('Add multiple values to queue', ()=> {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue).toEqual({"front": {"next": {"next": {"next": null, "value": 3}, "value": 2}, "value": 1}, "last": {"next": null, "value": 3}});
  });
  test('Remove a value from a queue',()=>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue).toEqual({"front": {"next": {"next": null, "value": 3}, "value": 2}, "last": {"next": null, "value": 3}});
  })
  test('Expect isEmpty on a empty queue to return true',()=>{
    let queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
  });
  test('Expect isEmpty on a filled queue to return false',()=>{
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.isEmpty()).toEqual(false);
  });
  test('Expect peek on a queue to return the first value added',()=>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  });
})

