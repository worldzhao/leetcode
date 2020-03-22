/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 *
 * https://leetcode-cn.com/problems/validate-binary-search-tree/description/
 *
 * algorithms
 * Medium (27.60%)
 * Likes:    293
 * Dislikes: 0
 * Total Accepted:    41.2K
 * Total Submissions: 149K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 *
 * 假设一个二叉搜索树具有如下特征：
 *
 *
 * 节点的左子树只包含小于当前节点的数。
 * 节点的右子树只包含大于当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 *
 *
 * 示例 1:
 *
 * 输入:
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入:
 * ⁠   5
 * ⁠  / \
 * ⁠ 1   4
 * / \
 * 3   6
 * 输出: false
 * 解释: 输入为: [5,1,4,null,null,3,6]。
 * 根节点的值为 5 ，但是其右子节点值为 4 。
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

/* <============== 中序遍历-递归 比较数组是否为增序 =================> */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const arr = [];
  inOrder(root, arr);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
};

function inOrder(node, arr) {
  if (!node) return;
  inOrder(node.left, arr);
  arr.push(node.val);
  inOrder(node.right, arr);
}

/* <============== 将结点的值与上界和下界（如果有）比较。然后，对左子树和右子树递归进行该过程  =================> */
// var isValidBST = function(root) {
//   return helper(root, null, null);
// };

// function helper(node, lower, upper) {
//   if (!node) return true;

//   const val = node.val;

//   if (lower !== null && val <= lower) return false;
//   if (upper !== null && val >= upper) return false;

//   if (!helper(node.right, val, upper)) return false;
//   if (!helper(node.left, lower, val)) return false;
//   return true;
// }
