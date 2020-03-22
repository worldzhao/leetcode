/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (53.12%)
 * Total Accepted:    40K
 * Total Submissions: 75.1K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 示例:
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 * 说明:
 *
 *
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const swap = (arr, m, n) => {
    let temp = arr[m];
    arr[m] = arr[n];
    arr[n] = temp;
  };
  const len = nums.length;
  let i = -1;
  for (let j = 0; j < len; j++) {
    const el = nums[j];
    if (el === 0 && nums[i] !== 0) {
      i = j;
    }
    if (el !== 0 && i !== -1) {
      swap(nums, i, j);
      i += 1;
    }
  }

  return nums;
};
