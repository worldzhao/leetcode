/**
 * [77].组合-combinations
 */

// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
//
// 示例:
//
// 输入: n = 4, k = 2
// 输出:
// [
//  [2,4],
//  [3,4],
//  [2,3],
//  [1,2],
//  [1,3],
//  [1,4],
// ]
// Related Topics 回溯算法
// 👍 307 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];

  const _backTrace = (list, start) => {
    if (list.length === k) {
      res.push(list.slice());
      return;
    }

    for (let i = start; i < n + 1; i++) {
      list.push(i);
      _backTrace(list, i + 1);
      list.pop();
    }
  };

  _backTrace([], 1);
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(combine(4, 2));
