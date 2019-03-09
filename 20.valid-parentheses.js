/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (35.96%)
 * Total Accepted:    46.9K
 * Total Submissions: 128.7K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
// const isValid = s => {
//   if (s === '') return true
//   const map = {
//     ')': '(',
//     ']': '[',
//     '}': '{'
//   }
//   const stack = []
//   for (let i = 0; i < s.length; i++) {
//     if (!stack.length) {
//       stack.push(s[i])
//     } else if (map[s[i]] === stack[stack.length - 1]) {
//       stack.pop()
//     } else {
//       stack.push(s[i])
//     }
//   }
//   return !stack.length
// }
const isValid = s => {
  if (s === '') return true
  const leftP = ['(', '[', '{']
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (leftP.includes(s[i])) {
      stack.push(s[i])
    } else {
      const top = stack.pop()
      if (top !== map[s[i]]) {
        return false
      }
    }
  }
  return !stack.length
}
