class MaxHeap {
  constructor() {
    this.data = []
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
      const rightChildIndex = this.rightChild(i)
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
}

const h = new MaxHeap()
const testArr = [21, 2, 1, 54, 23, 14, 52, 32, 51, 44]
testArr.forEach(e => h.add(e))
let res = []
while (!h.isEmpty()) {
  res.push(h.extractMax())
}
console.log('before:', testArr)
console.log('after:', res)
