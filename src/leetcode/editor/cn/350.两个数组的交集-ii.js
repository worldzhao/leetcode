/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (39.41%)
 * Total Accepted:    26.1K
 * Total Submissions: 66.2K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * 示例 1:
 *
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2,2]
 *
 *
 * 示例 2:
 *
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [4,9]
 *
 * 说明：
 *
 *
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 * 进阶:
 *
 *
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * 使用js原生api
 */
// var intersect = function(nums1, nums2) {
//   let result = []
//   for (let i = 0; i < nums1.length; i++) {
//     const e = nums1[i]
//     const targetIndex = nums2.indexOf(e)
//     if (targetIndex !== -1) {
//       result.push(e)
//       nums2.splice(targetIndex, 1)
//     }
//   }
//   return result
// }

/**
 * 使用map
 */
// var intersect = function(nums1, nums2) {
//   const res = []
//   const hashTable = nums2.reduce((acc, cur) => {
//     if (typeof acc[cur] === 'undefined') {
//       acc[cur] = 1
//     } else {
//       acc[cur] += 1
//     }
//     return acc
//   }, {})
//   for (let i = 0; i < nums1.length; i++) {
//     const e = nums1[i]
//     if (typeof hashTable[e] !== 'undefined' && hashTable[e] !== 0) {
//       hashTable[e] -= 1
//       res.push(e)
//     }
//   }
//   return res
// }
/**
 * 如果排好顺序，采用双指针法
 */
var intersect = function (nums1, nums2) {
  const sortedNums1 = nums1.sort((a, b) => a - b);
  const sortedNums2 = nums2.sort((a, b) => a - b);
  const len1 = nums1.length;
  const len2 = nums2.length;
  const res = [];
  let i = 0;
  let j = 0;
  while (i < len1 && j < len2) {
    if (sortedNums1[i] === sortedNums2[j]) {
      res.push(sortedNums1[i]);
      i++;
      j++;
    } else if (sortedNums1[i] < sortedNums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return res;
};
