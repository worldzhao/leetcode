/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (35.49%)
 * Likes:    240
 * Dislikes: 0
 * Total Accepted:    23.4K
 * Total Submissions: 65.8K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 *
 * 示例 1:
 *
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3
 * 解释: 11 = 5 + 5 + 1
 *
 * 示例 2:
 *
 * 输入: coins = [2], amount = 3
 * 输出: -1
 *
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 *
 */
//
/**
 * f(n) = 1 + min{f(n-c1), f(n-c2),...,f(n-ci)}
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 暴力递归
// var coinChange = function(coins, amount) {
//   if (amount === 0) return 0;
//   let ans = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < coins.length; i++) {
//     if (amount - coins[i] < 0) continue;
//     const sub = coinChange(coins, amount - coins[i]);
//     if (sub === -1) continue;
//     ans = Math.min(ans, sub + 1);
//   }
//   return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
// };

// 记忆化递归
// var coinChange = function(coins, amount) {
//   const memo = [0];
//   return helper(coins, amount, memo);
// };

// var helper = function(coins, amount, memo) {
//   if (amount === 0) return 0;
//   if (typeof memo[amount] !== "undefined") return memo[amount];
//   let ans = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < coins.length; i++) {
//     if (amount - coins[i] < 0) continue;
//     const sub = helper(coins, amount - coins[i], memo);
//     if (sub === -1) continue;
//     ans = Math.min(ans, sub + 1);
//   }
//   memo[amount] = ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
//   return memo[amount];
// };

// 记忆化自底向上迭代
// var coinChange = function (coins, amount) {
//   const memo = [0];
//   for (let i = 1; i <= amount; i++) {
//     let count = Number.MAX_SAFE_INTEGER;
//     for (let j = 0; j < coins.length; j++) {
//       const coin = coins[j];
//       if (i - coin >= 0) {
//         if (memo[i - coin] !== -1) {
//           count = Math.min(1 + memo[i - coin], count);
//         }
//       }
//     }
//     memo[i] = count === Number.MAX_SAFE_INTEGER ? -1 : count;
//   }
//
//   return memo[amount];
// };

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * f(11) = 1 + min{f(10), f(9), f(6)}
 * 状态转移方程 => f(i) = 1 + min{f(i-coin[0]), f(i-coin[1] ... f(i-coin[n])}
 *            => dp[i] = 1 + min{dp[i-coin[0]], dp[i-coin[1]] ... dp[i-coin[n]]}
 * base case  => dp[coin[i]] = 1
 * @param coins
 * @param amount
 */
var coinChange = function (coins, amount) {
  const dp = [0];
  for (let i = 0; i < coins.length; i++) {
    dp[coins[i]] = 1;
  }

  for (let i = 1; i <= amount; i++) {
    if (typeof dp[i] !== "undefined") continue;
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < coins.length; j++) {
      // 金币比要凑的数额大 换下一个金币
      if (i - coins[j] < 0) continue;
      min = dp[i - coins[j]] !== -1 ? Math.min(dp[i - coins[j]], min) : min;
    }
    dp[i] = min === Number.MAX_SAFE_INTEGER ? -1 : min + 1;
  }
  return dp[amount];
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1, 2, 5], 100));
