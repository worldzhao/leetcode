/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (58.22%)
 * Total Accepted:    37.5K
 * Total Submissions: 64.2K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
// var reverseList = function(head) {
//   let p, q, r
//   if (!head) return null
//   p = head
//   q = p.next
//   p.next = null
//   while (q) {
//     r = q.next
//     q.next = p
//     p = q
//     q = r
//   }
//   return p
// }

var reverseList = function(head) {
  if (!head) return null
  let temp = head.next
  head.next = null
  const reverse = (prev, cur) => {
    if (!cur) return prev
    const temp = cur.next
    cur.next = prev
    return reverse(cur, temp)
  }
  return reverse(head, temp)
}

// const head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: null
//         }
//       }
//     }
//   }
// }
// console.log(JSON.stringify(reverseList(head)))
