/**
 * [416].分割等和子集-partition-equal-subset-sum
 */

// 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
//
// 注意:
//
//
// 每个数组中的元素不会超过 100
// 数组的大小不会超过 200
//
//
// 示例 1:
//
// 输入: [1, 5, 11, 5]
//
// 输出: true
//
// 解释: 数组可以分割成 [1, 5, 5] 和 [11].
//
//
//
//
// 示例 2:
//
// 输入: [1, 2, 3, 5]
//
// 输出: false
//
// 解释: 数组不能分割成两个元素和相等的子集.
//
//
//
// Related Topics 动态规划

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 如果和为奇数 不可以
  const sum = nums.reduce((accu, curr) => accu + curr, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = [];
  for (let i = 0; i <= nums.length; i++) {
    dp[i] = typeof dp[i] === "undefined" ? [] : dp[i];
    for (let j = 0; j <= target; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
      } else if (i === 0) {
        dp[i][j] = false;
      } else if (j === 0) {
        dp[i][j] = true;
      } else {
        if (j - nums[i - 1] >= 0) {
          // 装或不装
          dp[i][j] = dp[i - 1][j - nums[i]] || dp[i - 1][j];
        } else {
          // 如果背包装不下当前元素
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
  }
  console.log(dp);
  return dp[nums.length][target];
};
//leetcode submit region end(Prohibit modification and deletion)
