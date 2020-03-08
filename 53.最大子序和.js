/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (47.45%)
 * Likes:    1236
 * Dislikes: 0
 * Total Accepted:    99.9K
 * Total Submissions: 210.3K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */
/**
 * 暴力法，右侧固定 左侧扫描 计算求和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = Number.MIN_SAFE_INTEGER;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      const sum = calcSum(j, i);
      res = Math.max(res, sum);
    }
  }
  return res;

  function calcSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += nums[i];
    }
    return sum;
  }
};

/**
 * 暴力法，左侧固定 右侧扫描 顺便计算求和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = Number.MIN_SAFE_INTEGER;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      res = Math.max(res, sum);
    }
  }
  return res;
};

/**
 * 动态规划 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let lastMax = 0;
  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (lastMax + nums[i] < nums[i]) {
      lastMax = nums[i];
    } else {
      lastMax = nums[i] + lastMax;
    }
    res = Math.max(res, lastMax);
  }
  return res;
};
