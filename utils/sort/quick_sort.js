function quickSort(arr) {
  const _sort = (left, right) => {
    if (left < right) {
      let pivot = partition(left, right);
      _sort(left, pivot - 1);
      _sort(pivot + 1, right);
    }
  };

  const partition = (left, right) => {
    let i = left;
    let j = right;
    let base = arr[i];

    while (i < j) {
      while (i < j && arr[j] >= base) {
        j--;
      }

      if (i < j) {
        arr[i] = arr[j];
      }

      while (i < j && arr[i] <= base) {
        i++;
      }

      if (i < j) {
        arr[j] = arr[i];
      }
    }
    arr[i] = base;
    return i;
  };

  _sort(0, arr.length - 1);
  return arr;
}

console.log(quickSort([18, 2, 3, 1, 52, 5, 63, 21, 4]));
