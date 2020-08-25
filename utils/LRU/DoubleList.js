const Node = require("./Node");

class DoubleList {
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.count = 0;
  }

  /**
   * 尾部添加元素
   * @param {Node} x
   */
  addLast(x) {
    x.next = this.tail;
    x.prev = this.tail.prev;
    this.tail.prev.next = x;
    this.tail.prev = x;
    this.count += 1;
  }

  /**
   * 移除元素
   * @param {Node} x
   */
  remove(x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
    this.count -= 1;
  }

  /**
   * 移除首部元素
   */
  removeFirst() {
    if (this.head.next === this.tail) return;
    const first = this.head.next;
    this.remove(first);
    return first;
  }

  size() {
    return this.count;
  }
}

module.exports = DoubleList;
