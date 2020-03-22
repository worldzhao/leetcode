/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前K个高频元素
 *
 * https://leetcode-cn.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (53.72%)
 * Total Accepted:    8.3K
 * Total Submissions: 15.4K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 *
 * 示例 1:
 *
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 *
 *
 * 示例 2:
 *
 * 输入: nums = [1], k = 1
 * 输出: [1]
 *
 * 说明：
 *
 *
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // js原生api做法 有点作弊的嫌疑
  // 正确解法为优先队列（基于最小堆） 即topK问题 复杂度为O(nlogk)
  const frequentMap = nums.reduce((accu, curr) => {
    if (typeof accu[curr] === "undefined") {
      accu[curr] = 1;
    } else {
      accu[curr] += 1;
    }
    return accu;
  }, {});
  return Object.keys(frequentMap)
    .sort((a, b) => frequentMap[b] - frequentMap[a])
    .slice(0, k);
};
