# 链表
![link_list.svg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d47ba1fba8514a4f8b31a9b96e84a8d5~tplv-k3u1fbpfcp-watermark.image)

> 链表是一种物理[存储单元](https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E5%8D%95%E5%85%83/8727749)上非连续、非顺序的[存储结构](https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84/350782)，[数据元素](https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%85%83%E7%B4%A0/715313)的逻辑顺序是通过链表中的[指针](https://baike.baidu.com/item/%E6%8C%87%E9%92%88/2878304)链接次序实现的。链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成。每个结点包括两个部分：一个是存储[数据元素](https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%85%83%E7%B4%A0)的数据域，另一个是存储下一个结点地址的[指针](https://baike.baidu.com/item/%E6%8C%87%E9%92%88/2878304)域。【来源百度百科】


## 链表特点
-   用一组任意的内存空间去存储数据元素（这里的内存空间可以是连续的，也可以是不连续的）
-   每个节点(node)都由数据本身和一个指向后续节点的指针组成
-   整个链表的存取必须从头指针开始，头指针指向第一个节点
-   最后一个节点的指针指向空（NULL）

> JS中并没有指针，上述节点的指针只是借用的C语言中的概念。
## 链表复杂度
### 时间复杂度

Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |    O(1)   |   O(1)

### 空间复杂度

**O(n)**



## 单向链表的实现

#### 链表中的几个主要操作

-   初始化链表/节点
-   头部插入节点
-   搜索/遍历节点
-   删除节点
-   ...

**初始化链表中的节点**

```
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next; // 初始化为null
    }
}
```

**初始化单向链表**
```
class LinkedList {
    constructor() {
        // 初始空指针
        this.head = null;
    }
}
```

**头部追加节点(append) **
```
append(value) {
    // 新建节点
    const newNode = new LinkedListNode(value, this.head);
    // 将值赋予head 为了下次新建
    this.head = newNode;
 }
```

**删除节点**
```
delete(value) {
    // 如果不存在节点 return null
    if (!this.head) {
      return null;
    }
    // 如果删除的是第一个节点
    let deletedNode = null;

    // 如果删除的第一个元素
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    // 非第一个节点,遍历查找
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
  ```

# 结语

链表部分还有双向链表,操作还有链表反转(reverse),删除(头,尾),转换数据结构等等..下一篇进行介绍