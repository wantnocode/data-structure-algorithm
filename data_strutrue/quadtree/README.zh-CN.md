# 四叉树

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c6be774f78d480992d6e9d361ed0f2b~tplv-k3u1fbpfcp-watermark.image)


## 概述

> 四元树又称四叉树是一种树状数据结构，在每一个节点上会有四个子区块。四元树常应用于二维空间数据的分析与分类。 它将数据区分成为四个象限。数据范围可以是方形或矩形或其他任意形状。【百度百科】


> 简单来说,四叉树是一种数据结构,特点是每个节点最多有四个子树。

> 四叉树属于空间划分树, 应用方向有图像表示,二维碰撞侦测,地形数据隐藏面等等。


## 特点

-   可分解成为各自的区块 。
-   每个区块都有节点容量。当节点达到最大容量时，节点分裂。
-   树状数据结构依靠造四元树法加以区分。

## 四叉树复杂度
### 时间复杂度

Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) |

### 空间复杂度

**O(n)**

## 四叉树的实现
1. 创建四叉树
2. 添加节点
3. 删除节点
5. 碰撞检测

### 创建四叉树 
```
function QuadTree(x, y, width, height, depth, maxDepth) {
    this.x        = x;  
    this.y        = y;
    this.width    = width;
    this.height   = height;
    this.depth    = depth;   //最小层数
    this.maxDepth = maxDepth; //最大分几层  下面规则就是每次4分直到到达规定最大层数
    if (depth < maxDepth) {
      this.children = [
        // Top left
        new QuadTree(x, y, width / 2, height / 2, depth + 1, maxDepth),
        // Top right
        new QuadTree(x + width / 2, y, width / 2, height / 2, depth + 1, maxDepth),
        // Bottom left
        new QuadTree(x, y + height / 2, width / 2, height / 2, depth + 1, maxDepth),
        // Bottom right
        new QuadTree(x + width / 2, y + height / 2, width / 2, height / 2, depth + 1, maxDepth)
      ]
    } else {
      this.children = []
    }
}
// new QuadTree(0,0,10,10,0,4)
```
> 添加/删除/更新/碰撞明天完善一下发出来,准备放在[数据可视化和图形学](https://juejin.cn/column/6966134135991566344)那个专栏,大家可以关注关注。 嘻嘻,到家太晚了。为了不食言 我先更一部分。。抱歉抱歉。明天更新剩下的。然后顺便分析下D3的代码 小技巧太多了 不太好文字描述出来。但是但是最近也会更一版本。




# 结语
四叉树作为树的一种结构,更多是作用于空间的划分(计算机科学中其他树结构还有二叉树,B树等等),目前我这边更多是用于2d碰撞(牺牲空间来换时间)。多试着写几遍,了解它的概念就会很简单。




