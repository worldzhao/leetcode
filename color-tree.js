const inOrder = root => {
  const stack = [0, root];
  const res = [];
  while (stack.length) {
    const node = stack.pop();
    const color = stack.pop();
    if (node) {
      // 访问过
      if (color) {
        res.push(node.val);
      } else {
        stack.push(0, node.right);
        stack.push(1, node);
        stack.push(0, node.left);
      }
    }
  }
  return res;
};

const preOrder = root => {
  const stack = [0, root];
  const res = [];
  while (stack.length) {
    const node = stack.pop();
    const color = stack.pop();
    if (node) {
      // 访问过
      if (color) {
        res.push(node.val);
      } else {
        stack.push(0, node.right);
        stack.push(0, node.left);
        stack.push(1, node);
      }
    }
  }
  return res;
};

const postOrder = root => {
  const stack = [0, root];
  const res = [];
  while (stack.length) {
    const node = stack.pop();
    const color = stack.pop();
    if (node) {
      // 访问过
      if (color) {
        res.push(node.val);
      } else {
        stack.push(1, node);
        stack.push(0, node.right);
        stack.push(0, node.left);
      }
    }
  }
  return res;
};
