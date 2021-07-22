class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // 往头部插入数据
  append(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
  }

  find(value) {
    let findNode = this.head;
    while (findNode !== null && findNode.value !== value) {
      findNode = findNode.next;
    }
    return findNode;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;

    // 如果删除的第一个元素
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
    return deletedNode;
  }
}


// 测试
var list = new LinkedList();
list.insert(111)
list.insert(2)
list.insert(333)
console.log(list)


// export 