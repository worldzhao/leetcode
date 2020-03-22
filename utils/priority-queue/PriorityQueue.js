const MaxHeap = require("../heap/MaxHeap");

class PriorityQueue {
  constructor() {
    this.MaxHeap = new MaxHeap();
  }

  size() {
    return this.MaxHeap.size();
  }

  isEmpty() {
    return this.MaxHeap.isEmpty();
  }

  getFront() {
    return this.MaxHeap.findMax();
  }

  enqueue(e) {
    this.MaxHeap.add(e);
  }

  dequeue() {
    return this.MaxHeap.extractMax();
  }
}

module.exports = PriorityQueue;
