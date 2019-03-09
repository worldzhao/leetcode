/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (27.64%)
 * Total Accepted:    80.8K
 * Total Submissions: 286.5K
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
/* 暴力破解 超出时间限制 */
// const isUnique = s => {
//   if (s.length === [...new Set(s)].length) {
//     return true
//   }
//   return false
// }

// const lengthOfLongestSubstring = s => {
//   let ans = 0
//   for (let i = 0; i < s.length; i += 1) {
//     for (let j = i; j < s.length; j += 1) {
//       const subStr = s.slice(i, j + 1)
//       if (isUnique(subStr)) {
//         ans = Math.max(subStr.length, ans)
//       }
//     }
//   }
//   return ans
// }
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  const n = s.length
  let ans = 0
  let i = 0
  let j = 0
  const set = new Set()
  while (i < n && j < n) {
    if (!set.has(s[j])) {
      set.add(s[j])
      j = j + 1
      ans = Math.max(ans, set.size)
    } else {
      set.delete(s[i])
      i = i + 1
    }
  }
  return ans
}
