/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (43.98%)
 * Total Accepted:    226K
 * Total Submissions: 513.9K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 *
 * 示例:
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 *
 */
// 2到了，先看有没有人找自己，没有的话，记录下了自己的对象7，并留言，我的位置是0，
// 7到了，看到2找自己，并知道了2的位置，返回2的位置与自己的位置
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//leetcode submit region begin(Prohibit modification and deletion)
const twoSum = (nums, target) => {
  const arr = [];
  for (let i = 0; i < nums.length; i += 1) {
    const currentNum = nums[i];
    const mirrorNum = target - currentNum;
    if (arr[currentNum] !== undefined) return [arr[currentNum], i];
    arr[mirrorNum] = i;
  }
};
//leetcode submit region end(Prohibit modification and deletion)
