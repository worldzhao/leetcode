/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (54.90%)
 * Likes:    231
 * Dislikes: 0
 * Total Accepted:    38.3K
 * Total Submissions: 69.7K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 *
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 * 示例 1:
 *
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 *
 * ⁠       [1,2,3],   [1,2,3]
 *
 * 输出: true
 *
 * 示例 2:
 *
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 *
 * ⁠       [1,2],     [1,null,2]
 *
 * 输出: false
 *
 *
 * 示例 3:
 *
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 *
 * ⁠       [1,2,1],   [1,1,2]
 *
 * 输出: false
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/* <============== 用一个栈去遍历比较 ==================> */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//   const stack = [p, q];
//   while (stack.length) {
//     const q1 = stack.pop();
//     const p1 = stack.pop();
//     if (!q1 && !p1) continue;
//     if (!q1 || !p1) return false;
//     if (q1.val !== p1.val) return false;
//     stack.push(p1.left, q1.left);
//     stack.push(p1.right, q1.right);
//   }
//   return true;
// };

/* <============== 递归解法 ==================> */

var isSameTree = function (p, q) {
  return _isSameTree(p, q);
};

function _isSameTree(p, q) {
  if (!q && !p) return true;
  if (!q || !p) return false;
  if (q.val !== p.val) return false;
  return _isSameTree(p.left, q.left) && _isSameTree(p.right, q.right);
}

// console.log(
//   isSameTree(
//     { val: 1, left: { val: 2 }, right: { val: 3 } },
//     { val: 1, left: { val: 2 }, right: { val: 3 } }
//   )
// );

// console.log(
//   isSameTree({ val: 1, left: { val: 2 } }, { val: 1, right: { val: 2 } })
// );

// console.log(
//   isSameTree(
//     { val: 1, left: { val: 2 }, right: { val: 1 } },
//     { val: 1, left: { val: 1 }, right: { val: 2 } }
//   )
// );
