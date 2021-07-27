---
theme: github
---
# 前言
上文中简单介绍了[数据结构-使用JS实现链表-单链表](https://juejin.cn/post/6987625484758548488);本篇作为一个续集出现.进一步加深对于链表的一些概念与实现。

> 收录于[《进阶不完全指南》](https://juejin.cn/column/6966128556552388639) coding部分采取javascript进行实现。**完整代码在末尾链接**


# 链表

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d21197f01d7b405f9bb3505122741cf3~tplv-k3u1fbpfcp-watermark.image)

> 双向链表也叫双链表，是链表的一种，它的每个数据[结点](https://baike.baidu.com/item/%E7%BB%93%E7%82%B9/9794643)中都有两个[指针](https://baike.baidu.com/item/%E6%8C%87%E9%92%88/2878304)，分别指向直接后继和直接前驱。所以，从双向链表中的任意一个结点开始，都可以很方便地访问它的前驱结点和后继结点。一般我们都构造双向[循环链表](https://baike.baidu.com/item/%E5%BE%AA%E7%8E%AF%E9%93%BE%E8%A1%A8/3228465)。【百度百科】


## 链表特点
-   用一组任意的内存空间去存储数据元素（这里的内存空间可以是连续的，也可以是不连续的）
-   每个节点(node)都由数据本身,**一个指向上一个节点**,一个指向后续节点的指针组成
-   整个链表的存取必须从头指针开始，头指针指向第一个节点。**尾指针结束,尾指针指向最后一个节点。**

> JS中并没有指针，上述节点的指针只是借用的C语言中的概念。

## 链表复杂度
### 时间复杂度

Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |    O(1)   |   O(1)


### 空间复杂度

**O(n)**



## 基础操作实现

### 节点结构
```
//  与单链表区别在于多了之前节点的指向
class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}
```

### 链表初始化
```
class DoublyLinkedList {
  constructor() {
    this.head = null; 
    this.tail = null; //多了尾部
  }
}
```

### Add 插入 (头部和尾部)
```
// 添加致头部
prepend(value) {
    // 节点添加至头部
    const newNode = new DoublyLinkedListNode(value, this.head);

    // 如果有头部节点,那么设置为头部节点先前(previous)节点的引用
    // 将头部节点设置为新节点
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;

    // 如果没有尾部节点,把新节点设置为尾部节点.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
}
// 添加致尾部
append(value) {
    const newNode = new DoublyLinkedListNode(value);

    // 同样判断 如果没有头部节点,那么将新节点设置为头部节点。
    // 同时也是尾部节点
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // 如果存在头部节点(当然也存在尾部节点)
    // 将头部节点添加至链表的尾部
    this.tail.next = newNode;

    // 转换思考一下,当前新节点上一个个节点(previous)也就是当前this指向的尾部
    newNode.previous = this.tail;

    // 将新节点设置为链表的尾部
    this.tail = newNode;

    return this;
}
```

### 删除 
> 为了阅读体验,此处部分非关键代码省略,可以去仓库进行查看。后面会贴链接。
```
delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    let currentNode = this.head;

while (currentNode) {
  if (currentNode.value === value) { // 仓库引入了一个比对js.逻辑很简单
    deletedNode = currentNode;
        // 想想其实就是处理3种情况
        //1. 如果删除的节点是头部节点 需要做什么操作
        //2. 如果删除的节点是尾部节点 需要坐什么操作
        //3. 如果不是头部和尾部而是中间节点 需要做什么操作
    if (deletedNode === this.head) {
     // 如果删除的节点是头部节点
     // 那么将头设置到第二个节点，该节点将成为新头
     // 设置心头的previous为null
      this.head = deletedNode.next;

      if (this.head) {
        this.head.previous = null;
      }

      if (deletedNode === this.tail) {
        this.tail = null;
      }
    } else if (deletedNode === this.tail) {
     // 如果删除是尾部节点,将tail设置为倒数第二个节点，这将成为新的tail
      this.tail = deletedNode.previous;
      this.tail.next = null;
    } else {
      // 如果要删除中间节点
      const previousNode = deletedNode.previous;
      const nextNode = deletedNode.next;

      previousNode.next = nextNode;
      nextNode.previous = previousNode;
    }
  }

  currentNode = currentNode.next;
}

    return deletedNode;
}
```

### 遍历链表 
> coding实现部分在删除中有体现,可自行提取。

```
 // 思路简单来说就是value值比对
 while(){
     // 正向遍历,如果当前没有依次找next 直到尾部
     // 反之 如果没有依次previous 直到头部。
 }
```

# 结语

做个简单总结,双向链表结构简单理解就是一个节点里面 包含当前value,上个previous, 下个next。 然后初始化就是一头一尾 head,tail。然后在这个基础结构进行增删改查。
慢慢理解之后,会感觉很简单。
> 最后不要忘了要在实际场景中多加联系。

