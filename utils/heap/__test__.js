const MaxHeap = require('./MaxHeap')
/**
 * 将n个元素逐个插入到一个空堆中，算法复杂度为O(nlogn)
 * n * logn 时间复杂度
 * 而heapify的时间复杂度为O(n)
 */
// const h = new MaxHeap()
// const arr = [21, 2, 1, 54, 23, 14, 52, 32, 51, 44]
// arr.forEach(e => h.add(e))

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
