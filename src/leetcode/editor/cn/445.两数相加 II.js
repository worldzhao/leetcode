/**
 * [445].两数相加 II-add-two-numbers-ii
 */

// 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
//
// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
//
//
//
// 进阶：
//
// 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
//
//
//
// 示例：
//
// 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 8 -> 0 -> 7
//
// Related Topics 链表

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
  const reverseList = (l) => {
    let prev = null;
    while (l) {
      let next = l.next;
      l.next = prev;
      prev = l;
      l = next;
    }
    return prev;
  };
  let reversedL1 = reverseList(l1);
  let reversedL2 = reverseList(l2);

  let dummyHead = new ListNode(-1);
  let cur = dummyHead;
  let carryOne = false;

  while (reversedL1 || reversedL2) {
    let val = 0;
    if (reversedL1 === null) {
      val = carryOne ? reversedL2.val + 1 : reversedL2.val;
      reversedL2 = reversedL2.next;
    } else if (reversedL2 === null) {
      val = carryOne ? reversedL1.val + 1 : reversedL1.val;
      reversedL1 = reversedL1.next;
    } else {
      val = carryOne
        ? reversedL1.val + reversedL2.val + 1
        : reversedL1.val + reversedL2.val;
      reversedL1 = reversedL1.next;
      reversedL2 = reversedL2.next;
    }

    carryOne = val > 9;
    cur.next = new ListNode(val % 10);
    cur = cur.next;
  }

  if (carryOne) cur.next = new ListNode(1);
  return reverseList(dummyHead.next);
};
//leetcode submit region end(Prohibit modification and deletion)
