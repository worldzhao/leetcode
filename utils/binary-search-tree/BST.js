const TreeNode = require('./TreeNode')

/**
 * 二叉搜索树 binary-search-tree
 */
class BST {
  constructor() {
    this.root = null
    this.size = 0
  }

  size() {
    return this.size()
  }

  isEmpty() {
    return this.size === 0
  }

  /**
   * 向二分搜索树中添加新的元素 e
   */
  add(e) {
    this.root = this._add(this.root, e)
  }

  /**
   * 向以 node 为根的二分搜索树中插入元素 e,递归算法
   * 返回插入新节点后二分搜索树的根
   */
  _add(node, e) {
    if (node === null) {
      this.size++
      return new TreeNode(e)
    }
    if (e < node.e) {
      node.left = this._add(node.left, e)
    }
    if (e > node.e) {
      node.right = this._add(node.right, e)
    }
    return node
  }

  /**
   * 二分搜索树中是否包含元素e
   */
  contains(e) {
    return this._contains(this.root, e)
  }

  /**
   * 以 node 为根的二分搜索树中是否包含元素e，递归算法
   */
  _contains(node, e) {
    if (node === null) return false
    if (e === node.e) return true
    if (e > node.e) {
      return this._contains(node.right, e)
    } else {
      // e < node.e
      return this._contains(node.left, e)
    }
  }

  /**
   * 前序遍历的非递归写法 - 深度优先遍历
   * 基于栈
   */
  preOrderNR() {
    const stack = []
    stack.push(this.root)
    while (stack.length) {
      const top = stack.pop()
      console.log(top.e)
      if (top.right !== null) {
        stack.push(top.right)
      }
      if (top.left !== null) {
        stack.push(top.left)
      }
    }
  }

  /**
   * 二叉树的前序遍历
   */
  preOrder() {
    this._preOrder(this.root)
  }

  /**
   * 前序遍历以node为根的二叉树，递归算法
   */
  _preOrder(node) {
    if (node !== null) {
      console.log(node.e)
      this._preOrder(node.left)
      this._preOrder(node.right)
    }
  }

  /**
   * 二叉树的中序遍历 - 二叉搜索树中序遍历结果是排好序的
   */
  inOrder() {
    this._inOrder(this.root)
  }

  /**
   * 中序遍历以node为根的二叉树，递归算法
   */
  _inOrder(node) {
    if (node !== null) {
      this._inOrder(node.left)
      console.log(node.e)
      this._inOrder(node.right)
    }
  }

  /**
   * 二叉树的后序遍历
   */
  postOrder() {
    this._postOrder(this.root)
  }

  /**
   * 后序遍历以node为根的二叉树，递归算法
   */
  _postOrder(node) {
    if (node !== null) {
      this._postOrder(node.left)
      this._postOrder(node.right)
      console.log(node.e)
    }
  }

  /**
   * 二叉树的层序遍历 - 广度优先遍历
   * 基于队列
   */
  levelOrder() {
    const queue = []
    queue.push(this.root)
    while (queue.length) {
      const front = queue.shift()
      console.log(front.e)
      if (front.left !== null) {
        queue.push(front.left)
      }
      if (front.right !== null) {
        queue.push(front.right)
      }
    }
  }

  /**
   * 寻找二分搜索树的最小元素
   */
  minimum() {
    if (this.isEmpty()) {
      throw new Error('BST is empty!')
    }
    return this._minimum(this.root).e
  }

  /**
   * 返回以node为根的二分搜索树的最小值所在的节点
   */
  _minimum(node) {
    if (node.left === null) {
      return node
    }
    return this._minimum(node.left)
  }

  /**
   * 寻找二分搜索树的最大元素
   */
  maximum() {
    if (this.isEmpty()) {
      throw new Error('BST is empty!')
    }
    return this._maximum(this.root).e
  }

  /**
   * 返回以node为根的二分搜索树的最大值所在的节点
   */
  _maximum(node) {
    if (node.right === null) {
      return node
    }
    return this._maximum(node.right)
  }

  /**
   * 从二分搜索树中删除最小值所在节点，返回最小值
   */
  removeMin() {
    const ret = this.minimum()
    this.root = this._removeMin(this.root)
    return ret
  }

  /**
   * 删除掉以node为根的二分搜索树中的最小节点
   * 返回删除节点后新的二分搜索树的根
   */
  _removeMin(node) {
    if (node.left === null) {
      const rightNode = node.right
      node.right = null
      this.size--
      return rightNode
    }
    node.left = this._removeMin(node.left)
    return node
  }

  /**
   * 从二分搜索树中删除最大值所在节点，返回最大值
   */
  removeMax() {
    const ret = this.maximum()
    this.root = this._removeMax(this.root)
    return ret
  }

  /**
   * 删除掉以node为根的二分搜索树中的最大节点
   * 返回删除节点后新的二分搜索树的根
   */
  _removeMax(node) {
    if (node.right === null) {
      const leftNode = node.left
      node.left = null
      this.size--
      return leftNode
    }
    node.right = this._removeMax(node.right)
    return node
  }

  /**
   * 从二分搜索树中删除元素为e的节点
   */
  remove(e) {
    this.root = this._remove(this.root, e)
  }

  /**
   * 删除掉以 node 为根的二分搜索树中值为 e 的节点，递归算法
   * 返回删除节点后新的二分搜索树的根
   */
  _remove(node, e) {
    if (node === null) return null
    if (e > node.e) {
      node.right = this._remove(node.right, e)
      return node
    }
    if (e < node.e) {
      node.left = this._remove(node.left, e)
      return node
    }
    if (e === node.e) {
      // 待删除节点左子树为空的情况
      if (node.left === null) {
        const rightNode = node.right
        node.right = null
        this.size--
        return rightNode
      }
      // 待删除节点右子树为空的情况
      if (node.right === null) {
        const leftNode = node.left
        node.left = null
        this.size--
        return leftNode
      }
      // 待删除节点左右子树均不为空的情况
      // 找到比待删除节点大的所有节点中的最小节点，即待删除节点右子树的最小节点
      // 用这个节点顶替待删除节点的位置
      const successor = this._minimum(node.right)
      successor.right = this._removeMin(node.right)
      successor.left = node.left
      node.left = node.right = null
      return successor
    }
  }
}

module.exports = BST
