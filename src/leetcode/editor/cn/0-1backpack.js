/**
 * 给你一个可装载重量为 W 的背包和 N 个物品，每个物品有重量和价值两个属性。
 * 其中第 i 个物品的重量为 wt[i]，价值为 val[i]，现在让你用这个背包装物品，最多能装的价值是多少？
 *
 * 举个简单的例子，输入如下：
 * N = 3, W = 4
 * wt = [2, 1, 3]
 * val = [4, 2, 3]
 *
 * 算法返回 6，选择前两件物品装进背包，总重量 3 小于 W，可以获得最大价值 6。
 */

/**
 *
 * @param {number} n
 * @param {number} w
 * @param {number[]} wt
 * @param {number[]} val
 */
function solution(n, w, wt, val) {
  const dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp[i] = typeof dp[i] === "undefined" ? [] : dp[i];
    for (let j = 0; j < w + 1; j++) {
      if (i === 0) {
        dp[i][j] = 0;
      } else if (j === 0) {
        dp[i][j] = 0;
      } else {
        // 能装
        if (j - wt[i - 1] >= 0) {
          // 取装或不装里的最大值
          dp[i][j] = Math.max(
            dp[i - 1][j],
            dp[i - 1][j - wt[i - 1]] + val[i - 1]
          );
        } else {
          // 不能装
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
  }
  return dp[n][w];
}

console.log(solution(3, 4, [2, 1, 3], [4, 2, 3]));
