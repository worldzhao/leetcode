/**
 * [279].完全平方数-perfect-squares
 */

// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
//
// 示例 1:
//
// 输入: n = 12
// 输出: 3
// 解释: 12 = 4 + 4 + 4.
//
// 示例 2:
//
// 输入: n = 13
// 输出: 2
// 解释: 13 = 4 + 9.
// Related Topics 广度优先搜索 数学 动态规划
// 👍 493 👎 0

// 13 1 4 9
// f(13) = 1 + min(f(12),f(9),f(4));
// f(12) = 1 + min(f(11),f(8),f(3))
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const nums = [];
  let i = 1;
  while (i * i <= n) {
    nums.push(i * i);
    i++;
  }

  const memo = {};

  const recu = (target) => {
    if (typeof memo[target] !== "undefined") return memo[target];
    let count = Number.MAX_SAFE_INTEGER;
    if (target === 0) return 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > target) break;
      let res = recu(target - nums[j]);
      memo[target] = res;
      count = res === -1 ? count : Math.min(res, count);
    }

    const res = count === Number.MAX_SAFE_INTEGER ? -1 : count + 1;
    memo[target] = res;
    return res;
  };

  return recu(n);
};
//leetcode submit region end(Prohibit modification and deletion)
