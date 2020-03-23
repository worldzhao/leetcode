/**
 * [面试题21].调整数组顺序使奇数位于偶数前面-diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof
 */

// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
//
//
//
// 示例：
//
// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4]
// 注：[3,1,2,4] 也是正确的答案之一。
//
//
//
// 提示：
//
//
// 1 <= nums.length <= 50000
// 1 <= nums[i] <= 10000
//
//

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  const isOdd = (num) => num % 2 === 1;
  const isEven = (num) => num % 2 === 0;
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (isOdd(nums[i]) && isEven(nums[j])) {
      i++;
      j--;
    } else if (isEven(nums[i]) && isOdd(nums[j])) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    } else if (isOdd(nums[i]) && isOdd(nums[j])) {
      i++;
    } else if (isEven(nums[i]) && isEven(nums[j])) {
      j--;
    }
  }
  return nums;
};
//leetcode submit region end(Prohibit modification and deletion)
