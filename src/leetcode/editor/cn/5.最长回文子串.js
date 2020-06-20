/**
 * [5].最长回文子串-longest-palindromic-substring
 */

//给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
//
// 示例 1：
//
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
//
//
// 示例 2：
//
// 输入: "cbbd"
// 输出: "bb"
//
// Related Topics 字符串 动态规划

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  const dp = new Array(len);

  let res = "";
  for (let i = len - 1; i >= 0; i--) {
    if (typeof dp[i] === "undefined") dp[i] = [];
    for (let j = 0; j < len; j++) {
      dp[i][j] = s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1]); // 注意此处短路运算符顺序 关系着填表顺序
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.slice(i, j + 1);
      }
    }
  }
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)

console.log(longestPalindrome("babad"));
