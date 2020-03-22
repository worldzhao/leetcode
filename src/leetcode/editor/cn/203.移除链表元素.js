/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (39.33%)
 * Total Accepted:    17.1K
 * Total Submissions: 43.5K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 *
 * 示例:
 *
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/**
 * 删除节点：找到需要被删除节点的前一个节点（头节点除外需要特殊处理）
 * 解法一：使用dummyHead避免头结点需要被删除的特殊情况，使头结点也变成中间节点，特殊 => 不特殊
 * 解法二：先保证头节点不是要删除的节点（即先把要删除的头结点删了）
 * 解法三：使用递归
 */

// var removeElements = function(head, val) {
//   const dummyHead = new ListNode(-1)
//   dummyHead.next = head
//   let p = dummyHead
//   while (p) {
//     if (p.next && p.next.val === val) {
//       p.next = p.next.next
//     } else {
//       p = p.next
//     }
//   }
//   return dummyHead.next
// }

// var removeElements = function(head, val) {
//   while (head && head.val === val) {
//     const delNode = head
//     head = head.next
//     delNode.next = null
//   }
//   let p = head
//   while (p) {
//     if (p.next && p.next.val === val) {
//       let delNode = p.next
//       p.next = delNode.next
//       delNode.next = null
//     } else {
//       p = p.next
//     }
//   }
//   return head
// }

var removeElements = function (head, val) {
  if (head === null) {
    return null;
  }
  const res = removeElements(head.next, val);
  if (head.val === val) {
    return res;
  } else {
    head.next = res;
    return head;
  }
};
