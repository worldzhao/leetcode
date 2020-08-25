function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSorted = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        isSorted = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (isSorted) {
      return arr;
    }
  }
  return arr;
}

console.log(bubbleSort([18, 2, 3, 1, 52, 5, 63, 21, 4]));
