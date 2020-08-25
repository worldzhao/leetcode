function mergeSort(arr) {
  const temp = new Array(arr.length);

  const _sort = (left, right) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      _sort(left, mid);
      _sort(mid + 1, right);
      merge(left, right);
    }
  };

  const merge = (left, right) => {
    let mid = Math.floor((left + right) / 2);
    let i = left;
    let j = mid + 1;
    let start = 0;
    while (i <= mid && j <= right) {
      if (arr[i] < arr[j]) {
        temp[start] = arr[i];
        i++;
        start++;
      } else {
        temp[start] = arr[j];
        j++;
        start++;
      }
    }

    while (i <= mid) {
      temp[start] = arr[i];
      i++;
      start++;
    }

    while (j <= right) {
      temp[start] = arr[j];
      j++;
      start++;
    }

    start = 0;
    i = left;
    while (i <= right) {
      arr[i] = temp[start];
      i++;
      start++;
    }
  };

  _sort(0, arr.length - 1);
  return arr;
}

console.log(mergeSort([18, 2, 3, 1, 52, 5, 63, 21, 4]));
