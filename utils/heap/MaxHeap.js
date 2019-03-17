class MaxHeap {
  constructor(initArr) {
    if (Array.isArray(initArr)) {
      this.data = initArr
      this.heapify()
    } else {
      this.data = []
    }
  }

  /**
   * get the size of heap
   * @return {number}
   */
  size() {
    return this.data.length
  }

  /**
   * whether the heap is empty
   * @return {boolean}
   */
  isEmpty() {
    return !this.data.length
  }

  /**
   * Get the parent index of i.
   * @param {number} i
   * @return {number}
   */
  parent(i) {
    if (i === 0) throw new Error("index-0 doesn't have parent")
    return parseInt((i - 1) / 2, 10)
  }

  /**
   * Get the left child index of i.
   * @param {number} i
   * @return {number}
   */
  leftChild(i) {
    return 2 * i + 1
  }

  /**
   * Get the right index of i.
   * @param {number} i
   * @return {number}
   */
  rightChild(i) {
    return 2 * i + 2
  }

  /**
   * swap the element of i and the element of j in data
   * @param {number} i
   * @param {number} j
   */
  swap(i, j) {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  /**
   * add element to the heap
   * 时间复杂度 O(logn) 树的高度
   * @param {*} e
   */
  add(e) {
    this.data.push(e)
    this._siftUp(this.size() - 1)
  }

  /**
   * reheap after add the element
   * @param {number} i
   */
  _siftUp(i) {
    while (i > 0 && this.data[this.parent(i)] < this.data[i]) {
      const parentIndex = this.parent(i)
      this.swap(i, parentIndex)
      i = parentIndex
    }
  }

  /**
   * get the max element in the heap
   */
  findMax() {
    if (this.size() === 0)
      throw new Error('Can not findMax when heap is empty.')
    return this.data[0]
  }

  /**
   * pop the max element in the heap
   * 时间复杂度 O(logn) 树的高度
   * @return {number}
   */
  extractMax() {
    const ret = this.findMax()
    this.swap(0, this.size() - 1)
    this.data.pop()
    this._siftDown(0)
    return ret
  }

  /**
   * reheap after extractMax
   * @param {number} i
   */
  _siftDown(i) {
    while (this.leftChild(i) < this.size()) {
      const leftChildIndex = this.leftChild(i)
      const rightChildIndex = leftChildIndex + 1
      let tempIndex = leftChildIndex
      if (
        rightChildIndex < this.size() &&
        this.data[leftChildIndex] < this.data[rightChildIndex]
      ) {
        tempIndex = rightChildIndex
      }
      if (this.data[i] >= this.data[tempIndex]) {
        break
      }
      this.swap(i, tempIndex)
      i = tempIndex
    }
  }

  /**
   * add a new element after extractMax
   * @param {number} e the element need to add
   * @return {number} the max element in current heap
   */
  replace(e) {
    const ret = this.findMax()
    this.data[0] = e
    this._siftDown(0)
    return ret
  }

  /**
   * 从倒数第一个非叶子节点开始遍历到第一个节点，同时对每一个节点进行sift down操作
   * 倒数第一个非叶子节点为最后一个节点的父节点
   */
  heapify() {
    for (let i = this.parent(this.size() - 1); i >= 0; i--) {
      this._siftDown(i)
    }
  }
}

/**
 * 将n个元素逐个插入到一个空堆中，算法复杂度为O(nlogn)
 * n * logn 时间复杂度
 * 而heapify的时间复杂度为O(n)
 */
// const h = new MaxHeap()
// const testArr = [21, 2, 1, 54, 23, 14, 52, 32, 51, 44]
// testArr.forEach(e => h.add(e))
const h = new MaxHeap([21, 2, 1, 54, 23, 14, 52, 32, 51, 44])
console.log('----------')
console.log('the heap is:', h.data)
console.log('----------')

h.replace(50)
console.log('----------')
console.log('after replaced by 50:', h.data)
console.log('----------')

let res = []

while (!h.isEmpty()) {
  res.push(h.extractMax())
}

console.log('----------')
console.log('after sorting by extractMax:', res)
console.log('----------')
