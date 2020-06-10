/**
 * [面试题 08.07].无重复字符串的排列组合-permutation-i-lcci
 */

// 无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。
//
// 示例1:
//
//
// 输入：S = "qwe"
// 输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
//
//
// 示例2:
//
//
// 输入：S = "ab"
// 输出：["ab", "ba"]
//
//
// 提示:
//
//
// 字符都是英文字母。
// 字符串长度在[1, 9]之间。
//
// Related Topics 回溯算法

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const len = S.length;
  const res = [];
  const back_track = (s) => {
    if (s.length === S.length) {
      res.push(s);
      return;
    }
    for (let i = 0; i < len; i++) {
      const char = S[i];
      if (s.includes(char)) {
        continue;
      }
      s += char;
      back_track(s);
      s = s.slice(0, -1);
    }
  };
  back_track("");
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)
