function ListNode(val) {
  this.val = val;
  this.next = null;
}

/* 测试用例头结点工厂函数 */
function getLinkList(arr) {
  const dummyHead = new ListNode(-1);
  let p = dummyHead;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const node = new ListNode(val);
    p.next = node;
    p = p.next;
  }
  return dummyHead.next;
}

/* 测试用例头结点构造函数 */
function ListNodeHead(arr) {
  this.val = arr[0];
  this.next = null;
  let cur = this;
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    const node = new ListNode(val);
    cur.next = node;
    cur = cur.next;
  }
}

console.log(new ListNodeHead([1, 2, 3, 4, 5, 2, 31]));
console.log(getLinkList([1, 2, 3, 4, 5, 2, 31]));
