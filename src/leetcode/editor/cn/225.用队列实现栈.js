/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 *
 * https://leetcode-cn.com/problems/implement-stack-using-queues/description/
 *
 * algorithms
 * Easy (55.48%)
 * Total Accepted:    6.4K
 * Total Submissions: 11.5K
 * Testcase Example:  '["MyStack","push","push","top","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * 使用队列实现栈的下列操作：
 *
 *
 * push(x) -- 元素 x 入栈
 * pop() -- 移除栈顶元素
 * top() -- 获取栈顶元素
 * empty() -- 返回栈是否为空
 *
 *
 * 注意:
 *
 *
 * 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty
 * 这些操作是合法的。
 * 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 * 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
 *
 *
 */
// /**
//  * Initialize your data structure here.
//  */
// var MyStack = function() {
//   this.queue1 = [] // 只能使用push以及shift以及去除第一个元素
//   this.queue2 = []
// }

// /**
//  * Push element x onto stack.
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//   if (this.queue1.length === 0 && this.queue2.length === 0) {
//     this.queue1.push(x)
//   } else if (this.queue1.length === 0) {
//     this.queue2.push(x)
//   } else {
//     this.queue1.push(x)
//   }
//   return x
// }

// /**
//  * Removes the element on top of the stack and returns that element.
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//   if (this.empty()) {
//     return null
//   }

//   if (this.queue1.length) {
//     while (this.queue1.length !== 1) {
//       const top = this.queue1.shift()
//       this.queue2.push(top)
//     }
//     return this.queue1.shift()
//   }

//   if (this.queue2.length) {
//     while (this.queue2.length !== 1) {
//       const top = this.queue2.shift()
//       this.queue1.push(top)
//     }
//     return this.queue2.shift()
//   }
// }

// /**
//  * Get the top element.
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//   if (this.empty()) {
//     return null
//   }

//   if (this.queue1.length) {
//     while (this.queue1.length !== 1) {
//       const top = this.queue1.shift()
//       this.queue2.push(top)
//     }
//     const ret = this.queue1.shift()
//     this.queue2.push(ret)
//     return ret
//   }

//   if (this.queue2.length) {
//     while (this.queue2.length !== 1) {
//       const top = this.queue2.shift()
//       this.queue1.push(top)
//     }
//     const ret = this.queue2.shift()
//     this.queue1.push(ret)
//     return ret
//   }
// }

// /**
//  * Returns whether the stack is empty.
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//   if (this.queue1.length === 0 && this.queue2.length === 0) {
//     return true
//   }
//   return false
// }
// 使用一个队列
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  let length = this.queue.length;
  this.queue.push(x);
  while (length--) {
    this.queue.push(this.queue.shift());
  }
  return x;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !Boolean(this.queue.length);
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// const s = new MyStack()
// console.log(s.push(1))
// console.log(s)
// console.log(s.push(2))
// console.log(s)
// console.log(s.top())
// console.log(s)
// console.log(s.pop())
// console.log(s)
// console.log(s.pop())
// console.log(s)
// console.log(s.empty())
// console.log(s)
