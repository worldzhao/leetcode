const swap = (arr, i, j) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

const parent = i => parseInt((i - 1) / 2, 10)

const leftChild = i => 2 * i + 1

const rightChild = i => 2 * i + 2

const heapify = (arr, i, len) => {
  while (leftChild(i) < len) {
    let tempIndex = leftChild(i)
    if (rightChild(i) < len && arr[rightChild(i)] > arr[leftChild(i)]) {
      tempIndex = rightChild(i)
    }
    if (arr[i] > arr[tempIndex]) break
    swap(arr, i, tempIndex)
    i = tempIndex
  }
}

const heapSort = arr => {
  const len = arr.length
  const index = parent(len - 1)
  for (let i = index; i >= 0; i--) {
    heapify(arr, i, len)
  }

  for (let j = 0; j < len; j++) {
    swap(arr, 0, len - j - 1)
    heapify(arr, 0, len - j - 1 - 1)
  }
  return arr
}
