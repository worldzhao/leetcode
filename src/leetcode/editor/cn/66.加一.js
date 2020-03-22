/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (37.96%)
 * Total Accepted:    44K
 * Total Submissions: 115.6K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//   const len = digits.length
//   const res = []
//   let needFurther = false
//   for (let i = len - 1; i >= 0; i--) {
//     const el = digits[i]
//     if (i === len - 1) {
//       if (el === 9) {
//         res.unshift(0)
//         needFurther = true
//       } else {
//         res.unshift(el + 1)
//         needFurther = false
//       }
//     } else if (needFurther) {
//       if (el === 9) {
//         res.unshift(0)
//         needFurther = true
//       } else {
//         res.unshift(el + 1)
//         needFurther = false
//       }
//     } else {
//       res.unshift(el)
//       needFurther = false
//     }
//   }
//   if (res[0] === 0) {
//     return [1, ...res]
//   }
//   return res
// }
var plusOne = function (digits) {
  const len = digits.length;
  digits[digits.length - 1] += 1;
  for (let i = len - 1; i >= 1; i--) {
    const element = digits[i];
    if (digits[i] === 10) {
      digits[i] -= 10;
      digits[i - 1] += 1;
    }
  }
  if (digits[0] === 10) {
    digits[0] -= 9;
    digits.push(0);
  }
  return digits;
};
