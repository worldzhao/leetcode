/**
 * [面试题 08.09].括号-bracket-lcci
 */

//括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。
//
// 说明：解集不能包含重复的子集。
//
// 例如，给出 n = 3，生成结果为：
//
//
//[
//  "((()))",
//  "(()())",
//  "(())()",
//  "()(())",
//  "()()()"
//]
//
// Related Topics 字符串 回溯算法

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const process = (s, l, r) => {
    if (l > r) return;
    if (l === 0 && r === 0) res.push(s);
    l > 0 && process(`${s}(`, l - 1, r);
    r > 0 && process(`${s})`, l, r - 1);
  };
  process("", n, n);
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)
