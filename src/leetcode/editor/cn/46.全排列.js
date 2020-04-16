/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (71.74%)
 * Likes:    386
 * Dislikes: 0
 * Total Accepted:    47.5K
 * Total Submissions: 66K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 */

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const temp = [];
  const len = nums.length;

  const _permute = () => {
    if (temp.length === len) {
      res.push(temp.slice());
      return;
    }

    for (let i = 0; i < len; i++) {
      const num = nums[i];
      // 排除不合法的选择
      if (temp.includes(num)) continue;
      // 做出选择
      temp.push(num);
      // 进入下一步
      _permute();
      // 回退选择
      temp.pop();
    }
  };

  _permute();
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)
