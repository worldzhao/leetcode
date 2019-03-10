/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 *
 * https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (51.50%)
 * Total Accepted:    2.7K
 * Total Submissions: 5.3K
 * Testcase Example:  '[1,null,3,2]'
 *
 * 给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。
 *
 * 示例 :
 *
 *
 * 输入:
 *
 * ⁠  1
 * ⁠   \
 * ⁠    3
 * ⁠   /
 * ⁠  2
 *
 * 输出:
 * 1
 *
 * 解释:
 * 最小绝对差为1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
 *
 *
 * 注意: 树中至少有2个节点。
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  /** 对二叉搜索树进行中序遍历可得到排序
   * 或者遍历一波直接sort?
   */
  const sortedVals = []
  const inOrder = node => {
    if (!node) return
    inOrder(node.left)
    sortedVals.push(node.val)
    inOrder(node.right)
  }
  inOrder(root)
  let ans = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < sortedVals.length - 1; i++) {
    ans = Math.min(ans, Math.abs(sortedVals[i] - sortedVals[i + 1]))
  }
  return ans
}
