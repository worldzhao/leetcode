/**
 * [239].滑动窗口最大值-sliding-window-maximum
 */

// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
//
//
// 返回滑动窗口中的最大值。
//
//
//
// 进阶：
//
// 你能在线性时间复杂度内解决此题吗？
//
//
//
// 示例:
//
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7]
// 解释:
//
//    滑动窗口的位置                最大值
//  ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4
// 1 <= k <= nums.length
//
// Related Topics 堆 Sliding Window
// 👍 445 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class Queue {
  constructor(data) {
    this.data = data || [];
  }
  push(item) {
    for (let i = this.data.length - 1; i >= 0; i--) {
      const tail = this.data[i];
      if (tail < item) {
        this.data.pop();
      }
    }
    this.data.push(item);
  }
  shift(item) {
    if (item === this.data[0]) {
      this.data.shift();
    }
  }
  getMax() {
    return this.data[0];
  }
}
var maxSlidingWindow = function (nums, k) {
  const res = [];
  const queue = new Queue();
  let i = 0;
  while (i < nums.length) {
    if (i < k - 1) {
      queue.push(nums[i]);
    } else {
      queue.push(nums[i]);
      res.push(queue.getMax());
      queue.shift(nums[i + 1 - k]);
    }
    i++;
  }
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)
