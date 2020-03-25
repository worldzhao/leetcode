/**
 * 对数组进行部分调整
 * @param arr 原始数组
 * @param l   需要调整的数组上界索引
 * @param r   需要调整的数组下届索引
 * @returns {number} 调整后基准数的位置
 */
const partition = (arr, l, r) => {
  // 选取第一个数作为基准数
  const pivotVal = arr[l];
  let i = l;
  let j = r;
  while (i < j) {
    while (i < j && arr[j] >= pivotVal) {
      j--;
    }
    if (i < j) {
      arr[i] = arr[j];
      i++;
    }
    while (i < j && arr[i] <= pivotVal) {
      i++;
    }
    if (i < j) {
      arr[j] = arr[i];
      j--;
    }
  }

  arr[i] = pivotVal;
  return i;
};

const sort = (arr, l, r) => {
  if (l < r) {
    const pivotKey = partition(arr, l, r);
    sort(arr, l, pivotKey - 1);
    sort(arr, pivotKey + 1, r);
  }
};

const quickSort = (arr) => {
  sort(arr, 0, arr.length - 1);
  return arr;
};

console.log(quickSort([18, 2, 3, 1, 52, 5, 63, 21, 4]));

