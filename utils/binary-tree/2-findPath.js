const TreeNode = require('./TreeNode');

const node9 = new TreeNode(4, null, null);
const node8 = new TreeNode(7, null);
const node7 = new TreeNode(8, null);
const node6 = new TreeNode(0, null);
const node5 = new TreeNode(2, node8, node9);
const node4 = new TreeNode(6, null, null);
const node3 = new TreeNode(1, node6, node7);
const node2 = new TreeNode(5, node4, node5);
const node1 = new TreeNode(3, node2, node3);

//       _______3______
//      /              \
//   __5__            __1__
//  /      \         /     \
// 6        2       0       8
//        /  \
//       7    4

/**
 * 寻找到某个节点的路径
 * example
 * 输入 node1 node8
 * 输出 [node1, node2, node5, node8]
 */

function findPath(node, target) {
  const path = [];
  const _findPath = (n, t) => {
    if (!n) return false;
    path.push(n);
    if (n == t) {
      return true;
    }
    const len = path.length;
    if (_findPath(n.left, t)) return true;
    path.length = len;
    return _findPath(n.right, t);
  };
  _findPath(node, target);
  return path;
}

// len    1   2   3
// path   3   5   6    

console.log(findPath(node1, node8));
