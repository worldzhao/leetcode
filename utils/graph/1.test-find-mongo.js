// 你的朋友和你朋友的朋友关系网中是否存在一位芒果供应商呢
// 假设存在以下朋友关系图，名字以'm'结尾的同学就是芒果供应商
// 使用广度优先搜索找到他吧 - 队列
const graph = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: []
};

function findMongoSupplier(graph) {
  const queue = [];
  const searched = [];
  queue.push(...graph.you);
  while (queue.length) {
    const name = queue.shift();
    if (!searched.includes(name)) {
      if (isMongoSupplier(name)) {
        return name;
      }
      queue.push(...graph[name]);
      searched.push(name);
    } else {
      continue;
    }
  }
  return false;
}

function isMongoSupplier(name) {
  return name[name.length - 1] === "m";
}

console.log(findMongoSupplier(graph));
