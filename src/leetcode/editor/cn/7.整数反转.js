/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.18%)
 * Total Accepted:    83.3K
 * Total Submissions: 263.7K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0;
  let operation = x >= 0 ? Math.floor : Math.ceil;
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  while (x !== 0) {
    const tail = x % 10;

    if (ans > max / 10 || (ans === max / 10 && tail > 7)) {
      return 0;
    }

    if (ans < min / 10 || (ans === min / 10 && tail < -8)) {
      return 0;
    }

    ans = ans * 10 + tail;
    x = operation(x / 10);
  }
  return ans;
};
