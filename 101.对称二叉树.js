/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (48.50%)
 * Likes:    453
 * Dislikes: 0
 * Total Accepted:    57.4K
 * Total Submissions: 118.2K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 * 说明:
 *
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/* <============== 递归解法 ================> */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//   if (!root) return true;
//   return _isSymmetric(root.left, root.right);
// };

// function _isSymmetric(p, q) {
//   if (!p && !q) return true;
//   if (!p || !q) return false;
//   if (p.val !== q.val) return false;
//   return _isSymmetric(p.left, q.right) && _isSymmetric(p.right, q.left);
// }

/* <============== 非递归解法 使用队列================> */

var isSymmetric = function(root) {
  if (!root) return true;
  const queue = [root.left, root.right];
  while (queue.length) {
    const p = queue.shift();
    const q = queue.shift();
    if (!p && !q) continue;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    queue.push(p.left, q.right);
    queue.push(p.right, q.left);
  }
  return true;
};

// console.log(
//   isSymmetric({
//     val: 1,
//     left: { val: 2, left: { val: 3 }, right: { val: 4 } },
//     right: { val: 2, left: { val: 4 }, right: { val: 3 } }
//   })
// );
