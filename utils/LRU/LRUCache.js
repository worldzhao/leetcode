const Node = require("./Node");
const DoubleList = require("./DoubleList");

class LRUCache {
  /**
   * @param capacity 最大容量
   */
  constructor(capacity) {
    this.cap = capacity;
    this.map = new Map();
    this.cache = new DoubleList();
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    this.makeRecently(key);
    return this.map.get(key).val;
  }

  put(key, val) {
    if (this.map.has(key)) {
      this.deleteKey(key);
      this.addRecently(key, val);
      return;
    }
    if (this.cache.size() === this.cap) {
      this.removeLeastRecently();
    }
    this.addRecently(key, val);
  }

  /**
   * 添加最近使用的元素
   * @param key
   * @param val
   */
  addRecently(key, val) {
    const x = new Node(key, val);
    // 链表尾部添加元素
    this.cache.addLast(x);
    // mao中添加key的映射
    this.map.put(key, x);
  }

  /**
   * 删除最久未使用的元素
   */
  removeLeastRecently() {
    // 链表头部节点就是最久未使用的
    const deletedNode = this.cache.removeFirst();
    // 从map中移除
    this.map.delete(deletedNode.key);
  }

  /**
   * 将某个key提升为最近使用的
   * @param key
   */
  makeRecently(key) {
    const node = this.map.get(key);
    // 链表中删除该节点
    this.cache.remove(node);
    // 链表尾部插入该节点
    this.cache.addLast(node);
  }

  /**
   * 移除某个key
   * @param key
   */
  deleteKey(key) {
    // 拿到需要删除的节点
    const deletedNode = this.map.get(key);
    // 链表中删除该节点
    this.cache.remove(deletedNode);
    // map中删除该节点
    this.map.delete(key);
  }
}

module.exports = LRUCache;
