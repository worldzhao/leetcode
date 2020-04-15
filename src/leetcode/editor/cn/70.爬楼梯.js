/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (46.72%)
 * Likes:    637
 * Dislikes: 0
 * Total Accepted:    83.4K
 * Total Submissions: 178.4K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 *
 *
 */
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
// 自底向上迭代 优化空间复杂度
var climbStairs = function (n) {
  if (n === 0 || n === 1) return 1;
  let pre1 = 1;
  let pre2 = 1;
  for (let i = 2; i <= n; i++) {
    const next = pre1 + pre2;
    const temp = pre2;
    pre2 = next;
    pre1 = temp;
  }
  return pre2;
};
//leetcode submit region end(Prohibit modification and deletion)

// 1. 自顶向下递归
// var climbStairs = function (n) {
//   if (n === 0 || n === 1) return 1;
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };

// 2. 带备忘录的递归 缓存一下 用空间换时间

// 3. 自底向上迭代
// var climbStairs = function (n) {
//   const dp = [1, 1];
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[n - 1] + dp[n - 2];
//   }
//   return dp[n];
// };

// f(0) = 1
// f(1) = 1
// f(2) = f(1) + f(0)
// f(3) = f(1) + f(2)
// f(4) = f(3) + f(2)
// f(n) = f(n-1) + f(n-2)
