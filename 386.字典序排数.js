/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 *
 * https://leetcode-cn.com/problems/lexicographical-numbers/description/
 *
 * algorithms
 * Medium (63.37%)
 * Likes:    47
 * Dislikes: 0
 * Total Accepted:    3.1K
 * Total Submissions: 4.8K
 * Testcase Example:  '13'
 *
 * 给定一个整数 n, 返回从 1 到 n 的字典顺序。
 *
 * 例如，
 *
 * 给定 n =1 3，返回 [1,10,11,12,13,2,3,4,5,6,7,8,9] 。
 *
 * 请尽可能的优化算法的时间复杂度和空间复杂度。 输入的数据 n 小于等于 5,000,000。
 *
 */
/**
 * @param {number} n
 * @return {number[]}
 */
// function lexicalOrder(n) {
//   const res = [];
//   for (let i = 1; i <= 9; i++) {
//     //横向
//     if (i <= n) {
//       res.push(i);
//       dfs(i, res, n); //纵向
//     }
//   }
//   return res;
// }

// function dfs(i, res, n) {
//   for (let j = 0; j < 10; j++) {
//     // 横向
//     const next = i * 10 + j;
//     if (next <= n) {
//       res.push(next);
//       dfs(next, res, n); // 纵向
//     } else {
//       break;
//     }
//   }
// }

function lexicalOrder(n) {
  const res = [];
  for (let i = 1; i <= 9; i++) {
    traverse(n, i, res);
  }
  return res;
}

function traverse(n, i, res) {
  if (i > n) return;
  res.push(i);
  for (let j = 0; j <= 9; j++) {
    traverse(n, i * 10 + j, res);
  }
}
