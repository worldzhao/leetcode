/**
 * [2].两数相加-add-two-numbers
 */

// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
//
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
//
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
//
// 示例：
//
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
//
// Related Topics 链表 数学

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(-1);
  let cur = dummyHead;
  let carryOne = false;
  while (l1 || l2) {
    let val = 0;
    if (l1 === null) {
      val = carryOne ? l2.val + 1 : l2.val;
      l2 = l2.next;
    } else if (l2 === null) {
      val = carryOne ? l1.val + 1 : l1.val;
      l1 = l1.next;
    } else {
      val = carryOne ? l1.val + l2.val + 1 : l1.val + l2.val;
      l1 = l1.next;
      l2 = l2.next;
    }
    carryOne = val > 9;
    cur.next = new ListNode(val % 10);
    cur = cur.next;
  }
  if (carryOne) cur.next = new ListNode(1);

  return dummyHead.next;
};
//leetcode submit region end(Prohibit modification and deletion)
