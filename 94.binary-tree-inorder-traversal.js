/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (64.09%)
 * Total Accepted:    20.9K
 * Total Submissions: 32.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [1,3,2]
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/* 递归 */
// var inorderTraversal = function(root) {
//   const result = []
//   const inorder = node => {
//     if (node) {
//       inorder(node.left)
//       result.push(node.val)
//       inorder(node.right)
//     }
//   }
//   inorder(root)
//   return result
// }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* 非递归 */
var inorderTraversal = function(root) {
  const stack = []
  const result = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    if (stack.length) {
      p = stack.pop()
      result.push(p.val)
      p = p.right
    }
  }
  return result
}
// const root = {
//   val: 1,
//   left: null,
//   right: {
//     val: 2,
//     right: null,
//     left: {
//       val: 3,
//       left: null,
//       right: null
//     }
//   }
// }
// console.log(inorderTraversal(root))
