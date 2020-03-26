/**
 * [面试题63].股票的最大利润-gu-piao-de-zui-da-li-run-lcof
 */

// 假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
//
//
//
// 示例 1:
//
// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
//
//
// 示例 2:
//
// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
//
//
//
// 限制：
//
// 0 <= 数组长度 <= 10^5
//
//
//
// 注意：本题与主站 121 题相同：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
//
// Related Topics 动态规划
// dp[i] = nums[i] - min{nums[0],...,nums[i-1]} > 0 ? nums[i] - min{nums[0],...,nums[i-1]} : 0
// dp[0] = 0
// min{nums[0],...,nums[i-1]} = min{ min{nums[0],...,nums[i-2]}, nums[i-1]}

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  let lastMaxProfit = 0;
  let lastMinPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    lastMinPrice = Math.min(prices[i - 1], lastMinPrice);
    const tempProfit =
      prices[i] - lastMinPrice > 0 ? prices[i] - lastMinPrice : 0;

    lastMaxProfit = Math.max(lastMaxProfit, tempProfit);
  }

  return lastMaxProfit;
};
//leetcode submit region end(Prohibit modification and deletion)
