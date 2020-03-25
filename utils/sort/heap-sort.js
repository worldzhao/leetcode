// 1. 从小到大排序 -> 数组最后一个元素（堆尾）为最大值 -> 大顶堆
// 2. 初始数组建堆
// 3. 将堆顶元素与堆尾元素交换
// 4. 堆尾元素固定，将剩余元素重新建堆
// 5. 重复3-4，最后所得数组即为从小到大排序

/**
 * 交换数组元素
 * @param {number[]} arr 数组
 * @param {number} i   需要交换的索引1
 * @param {number} j   需要交换的索引2
 */
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

/**
 * 获取父节点索引
 * @param {number} i 子节点索引
 * @returns {number} 父节点索引
 */
const getParentIndex = (i) => Math.floor((i - 1) / 2);

/**
 * 获取左孩子索引
 * @param {number} i 父节点索引
 * @returns {number} 左孩子索引
 */
const getLeftChildIndex = (i) => 2 * i + 1;

/**
 * 获取右孩子索引
 * @param {number} i 父节点索引
 * @returns {number} 右孩子索引
 */
const getRightChildIndex = (i) => 2 * i + 2;

/**
 * 将原始（子集）数组建堆
 * @param {number[]} arr 原始数组
 * @param {number} i 堆顶索引
 * @param {number} j 堆尾索引
 */
const heapify = (arr, i, j) => {
  /* 堆顶元素节点索引一定小于等于堆尾元素索引 */
  while (i <= j) {
    const leftChildIndex = getLeftChildIndex(i);
    const rightChildIndex = getRightChildIndex(i);
    // 如果左孩子节点索引已经越界 说明当前元素节点为叶子节点 已经下沉到最低 跳出循环
    if (leftChildIndex > j) {
      break;
    }
    // 左孩子节点未越界 右孩子节点越界 比较当前节点与左孩子节点大小即可
    else if (rightChildIndex > j) {
      if (arr[i] >= arr[leftChildIndex]) break;
      swap(arr, i, leftChildIndex);
      i = leftChildIndex;
    }
    // 左右孩子均未越界 当前节点与比较左右孩子中较大的节点进行比较
    else {
      let tempIndex = leftChildIndex;
      if (arr[leftChildIndex] < arr[rightChildIndex]) {
        tempIndex = rightChildIndex;
      }
      if (arr[i] >= arr[tempIndex]) break;
      swap(arr, i, tempIndex);
      i = tempIndex;
    }
  }
  /**
   * 优化循环条件为： 堆顶元素的左孩子索引一定小于等于堆尾元素索引
   * 统一上述情况的判断 getLeftChildIndex(i) <= j 在内部进行右孩子节点索引越界判断
   */
  // while (getLeftChildIndex(i) <= j) {
  //   const leftChildIndex = getLeftChildIndex(i);
  //   const rightChildIndex = getRightChildIndex(i);
  //   let tempIndex = leftChildIndex;
  //   if (rightChildIndex <= j && arr[leftChildIndex] < arr[rightChildIndex]) {
  //     tempIndex = rightChildIndex;
  //   }
  //   if (arr[i] > arr[tempIndex]) {
  //     break;
  //   }
  //   swap(arr, i, tempIndex);
  //   i = tempIndex;
  // }
};

/**
 * 堆排序
 * @param {number[]} arr  需要排序的数组
 * @returns {number[]} 排好序的数组
 */
const heapSort = (arr) => {
  const len = arr.length;
  // 从倒数第一个非叶子节点（最后一个叶子节点的父节点）开始建堆
  for (let i = getParentIndex(len - 1); i >= 0; i--) {
    heapify(arr, i, len - 1);
  }

  // 将最大元素（堆顶元素）与堆尾元素交换，除堆尾元素外的其余元素重新建堆
  for (let j = 0; j < len; j++) {
    swap(arr, 0, len - 1 - j);
    heapify(arr, 0, len - 1 - j - 1);
  }
  return arr;
};

console.log(heapSort([18, 2, 3, 1, 52, 5, 63, 21, 4]));
