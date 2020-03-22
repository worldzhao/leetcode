const BST = require("./BST");

const BSTree = new BST();

for (let i = 0; i < 10; i++) {
  const random = parseInt(Math.random() * 10);
  BSTree.add(random);
}

BSTree.preOrderNR();
console.log("----");

BSTree.preOrder();
console.log("----");

BSTree.inOrder();
console.log("----");

BSTree.postOrder();
console.log("----");

const arr = [];
while (!BSTree.isEmpty()) {
  arr.push(BSTree.removeMin());
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    throw new Error("test false: removeMin");
  }
}

console.log(arr);
