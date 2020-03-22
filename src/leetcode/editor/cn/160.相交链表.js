/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 *
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/description/
 *
 * algorithms
 * Easy (36.33%)
 * Total Accepted:    16.9K
 * Total Submissions: 46K
 * Testcase Example:  '8\n[4,1,8,4,5]\n[5,0,1,8,4,5]\n2\n3'
 *
 * 编写一个程序，找到两个单链表相交的起始节点。
 *
 * 如下面的两个链表：
 *
 *
 *
 * 在节点 c1 开始相交。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2,
 * skipB = 3
 * 输出：Reference of the node with value = 8
 * 输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为
 * [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 *
 *
 *
 *
 * 示例 2：
 *
 *
 *
 * 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB
 * = 1
 * 输出：Reference of the node with value = 2
 * 输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为
 * [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
 *
 *
 *
 *
 * 示例 3：
 *
 *
 *
 * 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
 * 输出：null
 * 输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为
 * 0，而 skipA 和 skipB 可以是任意值。
 * 解释：这两个链表不相交，因此返回 null。
 *
 *
 *
 *
 * 注意：
 *
 *
 * 如果两个链表没有交点，返回 null.
 * 在返回结果后，两个链表仍须保持原有的结构。
 * 可假定整个链表结构中没有循环。
 * 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
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
 * 解法一：
 */
// var getIntersectionNode = function(headA, headB) {
//   let p = headA
//   let q = headB
//   /**
//    * 获取链表长度
//    */
//   const lenP = getListLength(p)
//   const lenQ = getListLength(q)
//   /**
//    * 抹去较长链表前面多出的部分
//    */
//   if (lenP > lenQ) {
//     let times = lenP - lenQ
//     while (times) {
//       p = p.next
//       times--
//     }
//   }
//   if (lenQ > lenP) {
//     let times = lenQ - lenP
//     while (times) {
//       q = q.next
//       times--
//     }
//   }
//   /**
//    * 比较节点是否相等即可
//    */
//   while (p && q) {
//     if (p === q) {
//       return p
//     }
//     p = p.next
//     q = q.next
//   }
//   return null
// }
/**
 * 解法二
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p = headA;
  let q = headB;
  while (p !== q) {
    // 如果长度相同，且没有交点，在循环到第一轮末尾时，pA和pB会同时为null，这时就相等退出了。
    // 如果长度不同，没有交点，会在第二轮末尾同时为null，相等退出。
    p = p === null ? headB : p.next;
    q = q === null ? headA : q.next;
  }
  return p;
};
