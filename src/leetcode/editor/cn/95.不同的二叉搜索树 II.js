/**
 * [95].不同的二叉搜索树 II-unique-binary-search-trees-ii
 */

// 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
//
//
//
// 示例：
//
// 输入：3
// 输出：
// [
//  [1,null,3,2],
//  [3,2,null,1],
//  [3,1,null,null,2],
//  [2,1,3],
//  [1,null,2,null,3]
// ]
// 解释：
// 以上的输出对应以下 5 种不同结构的二叉搜索树：
//
//   1         3     3      2      1
//    \       /     /      / \      \
//     3     2     1      1   3      2
//    /     /       \                 \
//   2     1         2                 3
//
//
//
//
// 提示：
//
//
// 0 <= n <= 8
//
// Related Topics 树 动态规划

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  const _generateTrees = (start, end) => {
    const res = [];
    if (start > end) {
      res.push(null);
    } else if (start === end) {
      res.push(new TreeNode(start, null, null));
    } else {
      for (let i = start; i <= end; i++) {
        const leftTrees = _generateTrees(start, i - 1);
        const rightTrees = _generateTrees(i + 1, end);

        for (let j = 0; j < leftTrees.length; j++) {
          for (let k = 0; k < rightTrees.length; k++) {
            const root = new TreeNode(i, null, null);
            root.left = leftTrees[j];
            root.right = rightTrees[k];
            res.push(root);
          }
        }
      }
    }
    return res;
  };

  return _generateTrees(1, n);
};
//leetcode submit region end(Prohibit modification and deletion)
