/**
 * 有一个数组和一个值，需要求大于等于该值的最小长度。
 * 例如[2, 3, 4, 7]和5，那么最小就是1，因为7大于5，
 * 如果数字是8，那么最小就是2, 因为4 + 7大于8
 */

const b1 = (target, nums) => {
  const len = nums.length;
  let sum = 0;
  let left = 0;
  let res = Number.MAX_SAFE_INTEGER;
  for (let right = 0; right < len; right++) {
    sum += nums[right];
    if (sum < target) {
      continue;
    }
    while (sum >= target) {
      res = Math.min(res, right - left + 1);
      sum = sum - nums[left];
      left = left + 1;
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};
