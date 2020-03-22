const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const partition = (arr, l, r) => {
  // 选取第一个数作为基准数
  const pivotVal = arr[l];
  while (l < r) {
    while (l < r && arr[r] >= pivotVal) {
      r--;
    }
    swap(arr, l, r);
    while (l < r && arr[l] <= pivotVal) {
      l++;
    }
    swap(arr, l, r);
  }
  return l;
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
