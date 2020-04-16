/**
 * [112].路径总和-path-sum
 */

// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例:
// 给定如下二叉树，以及目标和 sum = 22，
//
//               5
//             / \
//            4   8
//           /   / \
//          11  13  4
//         /  \      \
//        7    2      1
//
//
// 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  let val = 0;
  const _hasPathSum = (node) => {
    if (node === null) return false;
    val += node.val;
    const preVal = val;
    if (node.left === null && node.right === null && val === sum) {
      return true;
    }
    if (_hasPathSum(node.left)) {
      return true;
    }
    val = preVal;
    if (_hasPathSum(node.right)) {
      return true;
    }
    return false;
  };

  return _hasPathSum(root);
};
//leetcode submit region end(Prohibit modification and deletion)

// 三种解法
// 1. 递归

// var hasPathSum = function (root, sum) {
//     if (root === null) return false;
//     const _hasPathSum = (node, temp) => {
//         temp += node.val;
//         if (node.left === null && node.right === null && temp === sum) {
//             return true;
//         }
//         if (node.left && _hasPathSum(node.left, temp)) {
//             return true;
//         }
//         if (node.right && _hasPathSum(node.right, temp)) {
//             return true;
//         }
//         return false;
//     };
//
//     return _hasPathSum(root, 0);
// };

// 2. 迭代 借助一个辅助栈记录每一个节点对应的路径和

// var hasPathSum = function (root, sum) {
//     if (root === null) return false;
//     const nodeStack = [root];
//     const valStack = [root.val];
//     while (nodeStack.length) {
//         const node = nodeStack.pop();
//         const val = valStack.pop();
//         if (node.left === null && node.right === null && val === sum) {
//             return true;
//         }
//         if (node.right) {
//             nodeStack.push(node.right);
//             valStack.push(node.right.val + val);
//         }
//         if (node.left) {
//             nodeStack.push(node.left);
//             valStack.push(node.left.val + val);
//         }
//     }
//     return false;
// };

// 3. 递归 回溯
