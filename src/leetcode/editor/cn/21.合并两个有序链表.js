/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (52.66%)
 * Total Accepted:    46.7K
 * Total Submissions: 88.4K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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

/* 笨方法 取值 排序 生成链表 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// const getVals = l => {
//   const stack = [l]
//   const vals = []
//   while (stack.length) {
//     const top = stack.pop()
//     if (top) {
//       vals.push(top.val)
//       if (top.next) stack.push(top.next)
//     }
//   }
//   return vals
// }

// var mergeTwoLists = function(l1, l2) {
//   const vals = [...getVals(l1), ...getVals(l2)].sort((a, b) => a - b)
//   //   console.log(vals)

//   const nodes = vals.map(v => new ListNode(v, null))
//   let i = 0
//   while (i < nodes.length - 1) {
//     nodes[i].next = nodes[i + 1]
//     i++
//   }
//   return nodes[0] || null
// }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  let dummyHead = new ListNode(0);
  let cur = dummyHead;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      cur.next = l1;
      cur = cur.next;
      l1 = l1.next;
    } else {
      cur.next = l2;
      cur = cur.next;
      l2 = l2.next;
    }
  }
  while (l1 !== null) {
    cur.next = l1;
    cur = cur.next;
    l1 = l1.next;
  }

  while (l2 != null) {
    cur.next = l2;
    cur = cur.next;
    l2 = l2.next;
  }
  return dummyHead.next;
};
// const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } }
// const l2 = { val: 5, next: { val: 6, next: { val: 7, next: null } } }
// console.log(JSON.stringify(mergeTwoLists(l1, l2)))
