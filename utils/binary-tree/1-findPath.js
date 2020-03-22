const TreeNode = require('./TreeNode');

/**
 * 寻找二叉树到叶子节点的全部路径
 * 输入
 *    1
 *  /   \
 * 2     3
 *  \
 *   5
 * 输出 ["1->2->5", "1->3"]
 */

const node4 = new TreeNode(5, null, null);
const node3 = new TreeNode(3, null, null);
const node2 = new TreeNode(2, null, null);
const node1 = new TreeNode(1, null, null);

node2.right = node4;
node1.left = node2;
node1.right = node3;

/**
 * 递归解法
 * @param {TreeNode} root
 */
function findPathR(root) {
  if (!root) return [];
  const res = [];
  const _findPath = (node, path) => {
    // string值传递 不会影响之前的path
    path = path === '' ? `${node.val}` : `${path}->${node.val}`;
    if (!node.left && !node.right) {
      res.push(path);
    }
    if (node.left) _findPath(node.left, path);
    if (node.right) _findPath(node.right, path);
  };
  _findPath(root, '');
  return res;
}

console.log(findPathR(node1));

/**
 * 非递归解法 用栈 同时维护节点栈和路径栈
 * @param {TreeNode} root
 */
function findPathS(root) {
  if (!root) return [];
  const paths = [];
  const path_stack = ['' + root.val];
  const node_stack = [root];
  while (node_stack.length) {
    const node = node_stack.pop();
    const path = path_stack.pop();
    if (node.left === null && node.right === null) {
      paths.push(path);
    }
    if (node.right) {
      node_stack.push(node.right);
      path_stack.push(`${path}->${node.right.val}`);
    }
    if (node.left) {
      node_stack.push(node.left);
      path_stack.push(`${path}->${node.left.val}`);
    }
  }
  return paths;
}

console.log(findPathS(node1));
