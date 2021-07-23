/*
* quadtree 四叉树
* x 
* y
* width 
* height 
* depth 最小深度(层数)
* maxDepth 最大深度(层数)
*/
class QuadTree {
  constructor(x, y, width, height, depth, maxDepth) {
    this.x        = x;  // 
    this.y        = y;
    this.width    = width;
    this.height   = height;
    this.depth    = depth;   //是否
    this.maxDepth = maxDepth;
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
}


//console.log(new QuadTree(0,0,10,10,0,4))