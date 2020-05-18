function mergeSort(arr) {
  const temp = []; //在排序前，先建好一个长度等于原数组长度的临时数组，避免递归中频繁开辟空间
  const _sort = (arr, left, right) => {
    if (left < right) {
      const mid = Math.floor(left + (right - left) / 2);
      _sort(arr, left, mid); //左边归并排序，使得左子序列有序
      _sort(arr, mid + 1, right); //右边归并排序，使得右子序列有序
      merge(arr, left, mid, right); //将两个有序子数组合并操作
    }
  };

  const merge = (arr, left, mid, right) => {
    let i = left; //左序列指针
    let j = mid + 1; //右序列指针
    let start = 0; //临时数组指针

    while (i <= mid && j <= right) {
      if (arr[i] < arr[j]) {
        temp[start] = arr[i];
        i++;
        start++;
      } else if (arr[i] >= arr[j]) {
        temp[start] = arr[j];
        j++;
        start++;
      }
    }

    //将左边剩余元素填充进temp中
    while (i <= mid) {
      temp[start] = arr[i];
      i++;
      start++;
    }

    //将右序列剩余元素填充进temp中
    while (j <= right) {
      temp[start] = arr[j];
      j++;
      start++;
    }

    //将temp中的元素全部拷贝到原数组中
    start = 0;
    while (left <= right) {
      arr[left] = temp[start];
      left++;
      start++;
    }
  };

  _sort(arr, 0, arr.length - 1);
  return arr;
}

console.log(mergeSort([18, 2, 3, 1, 52, 5, 63, 21, 4]));
