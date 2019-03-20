const binarySearch = (arr, val) => {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
      const mid = Number(l + (r - l) / 2);
      if (arr[mid] === val) return mid;
      if (arr[mid] < val) l = mid + 1;
      if (arr[mid] > val) r = mid - 1;
    }
    return -1;
  };
  