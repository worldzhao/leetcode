function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [nums[i], nums[min]] = [nums[min], nums[i]];
    }
  }
  return nums;
}

console.log(selectionSort([18, 2, 3, 1, 52, 5, 63, 21, 4]));
