/**
 * [234].回文链表-palindrome-linked-list
 */

// 请判断一个链表是否为回文链表。
//
// 示例 1:
//
// 输入: 1->2
// 输出: false
//
// 示例 2:
//
// 输入: 1->2->2->1
// 输出: true
//
//
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
// Related Topics 链表 双指针
// 👍 559 👎 0

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  let i = 0;
  while (i < arr.length / 2) {
    if (arr[i] !== arr[arr.length - i - 1]) return false;
    i++;
  }
  return true;
};
//leetcode submit region end(Prohibit modification and deletion)
