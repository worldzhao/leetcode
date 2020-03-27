/**
 * [141].环形链表-linked-list-cycle
 */

// 给定一个链表，判断链表中是否有环。
//
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
//
//
//
// 示例 1：
//
// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。
//
//
//
//
// 示例 2：
//
// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。
//
//
//
//
// 示例 3：
//
// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。
//
//
//
//
//
//
// 进阶：
//
// 你能用 O(1)（即，常量）内存解决此问题吗？
// Related Topics 链表 双指针

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针
 * 快指针走两步 慢指针走一步
 * 快指针追慢指针 每次追一步 必会相遇
 * 假如快指针距离慢指针一步 下次即会相遇
 * 假如快指针距离慢指针两步 下一次变成一步，转为上一种情况
 * 以此类推 如果有环 一定会相遇
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head.next;
  if (!slow) return false;
  let fast = head.next.next;
  while (fast) {
    if (fast === slow) return true;
    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }
  return false;
};
//leetcode submit region end(Prohibit modification and deletion)
