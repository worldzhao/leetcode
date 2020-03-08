/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (31.36%)
 * Likes:    2446
 * Dislikes: 0
 * Total Accepted:    222.3K
 * Total Submissions: 706.1K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */
/* <===============暴力解法 穷举出所有的子串 判断是否存在无重复字符 记录下长度 ==================> */
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   const len = s.length;
//   let ans = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = i; j < len; j++) {
//       if (isUnique(s, i, j)) {
//         ans = Math.max(ans, j - i + 1);
//       }
//     }
//   }
//   return ans;
// };

// const isUnique = (s, i, j) => {
//   const set = new Set();
//   for (let k = i; k <= j; k++) {
//     set.add(s[k]);
//   }
//   if (set.size === j - i + 1) {
//     return true;
//   }
//   return false;
// };

/* <=============== 滑动窗口 使用set 碰到重复的向前走 直到不重复 ==================> */

// var lengthOfLongestSubstring = function(s) {
//   const set = new Set();
//   const len = s.length;
//   let ans = 0;
//   let left = 0;
//   let right = 0;
//   while (left < len && right < len) {
//     if (!set.has(s[right])) {
//       set.add(s[right]);
//       right++;
//     } else {
//       set.delete(s[left]);
//       left++;
//     }
//     ans = Math.max(ans, set.size);
//   }
//   return ans;
// };

/* <=============== 滑动窗口 使用map 碰到重复的向**前**跳 跳到不重复 ==================> */

var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  let ans = 0;
  let left = 0;
  const map = {};
  for (let right = 0; right < len; right++) {
    if (typeof map[s[right]] === 'undefined') {
      map[s[right]] = right;
    } else {
      // 此处有坑 left已经跳到了比记录的重复索引大的索引 不可以再跳回去'abba'
      left = Math.max(left, map[s[right]] + 1);
      // 更新记录位置 'abcabcbb'
      map[s[right]] = right;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
