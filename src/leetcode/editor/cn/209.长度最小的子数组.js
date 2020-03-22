/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (39.71%)
 * Likes:    131
 * Dislikes: 0
 * Total Accepted:    16.2K
 * Total Submissions: 40.7K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
 *
 * 示例:
 *
 * 输入: s = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 *
 *
 * 进阶:
 *
 * 如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
 *
 */
/**
 * 滑动窗口
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let ans = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  const len = nums.length;
  for (let right = 0; right < len; right++) {
    sum += nums[right];
    if (sum >= s) {
      while (sum - nums[left] >= s) {
        sum -= nums[left];
        left += 1;
      }
      ans = Math.min(ans, right - left + 1);
    }
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};

console.log(minSubArrayLen(100, []));
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
