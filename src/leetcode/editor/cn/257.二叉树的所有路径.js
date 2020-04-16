/**
 * [257].二叉树的所有路径-binary-tree-paths
 */

// 给定一个二叉树，返回所有从根节点到叶子节点的路径。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例:
//
// 输入:
//
//   1
// /   \
//2     3
// \
//  5
//
// 输出: ["1->2->5", "1->3"]
//
// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
// Related Topics 树 深度优先搜索

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  const res = [];
  const _preorder = (node, path) => {
    path = node === root ? `${node.val}` : `${path}->${node.val}`;
    if (!node.left && !node.right) {
      res.push(path);
    }
    if (node.left) {
      _preorder(node.left, path);
    }
    if (node.right) {
      _preorder(node.right, path);
    }
  };
  _preorder(root, "");
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)

// 使用栈辅助遍历，同时使用一个栈记录每一个节点的路径
// var binaryTreePaths = function (root) {
//     if (!root) return [];
//     const res = [];
//     const pathStack = [`${root.val}`];
//     const nodeStack = [root];
//     while (nodeStack.length) {
//         const node = nodeStack.pop();
//         const path = pathStack.pop();
//         if (!node.right && !node.left) {
//             res.push(path);
//         }
//         if (node.right) {
//             nodeStack.push(node.right);
//             pathStack.push(`${path}->${node.right.val}`);
//         }
//         if (node.left) {
//             nodeStack.push(node.left);
//             pathStack.push(`${path}->${node.left.val}`);
//         }
//     }
//     return res;
// };
