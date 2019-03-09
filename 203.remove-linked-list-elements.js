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
 * 使用dummyHead避免头结点需要被删除的特殊情况，使头结点也变成中间节点
 */

var removeElements = function(head, val) {
  // const dummyHead = new ListNode(-1)
  // dummyHead.next = head
  // let p = dummyHead
  let p = head
  while (p) {
    if (p.next && p.next.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return dummyHead.next
}

// const l = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 6,
//       next: {
//         val: 3,
//         next: { val: 4, next: { val: 5, next: { val: 6, next: null } } }
//       }
//     }
//   }
// }

// console.log(JSON.stringify(removeElements({ val: 1, next: null }, 1)))
