/**
 * 二叉搜索树实现 (当前键的值大于左侧键的值，小于右侧键的值)
 */

function BinarySearchTree () {
  let Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null

  let insertNode = function (node, newNode) {
    if (node.key > newNode.key) {     // 往左侧插入
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {                          // 往右侧插入
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  let inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  let preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  let postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  let findMinNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node
    }
    return null
  }

  let minNodeKey = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }
      return node.key
    }
    return null
  }

  let maxNodeKey = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  let searchNode = function (node, key) {
    if (node === null) {
      return false
    }
    if (node.key > key) {
      return searchNode(node.left, key)
    } else if (node.key < key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }

  let removeNode = function (node, key) {
    if (node === null) {
      return null
    }
    if (node.key > key) {
      node.left = removeNode(node.left, key)
      return node
    } else if (node.key < key) {
      node.right = removeNode(node.right, key)
      return node
    } else {
      // 一个叶节点
      if (node.left === null && node.right === null) {
        node = null
        return node       // 将当前叶节点的父节点指向 null
      }

      // 只有一个子节点的节点
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // 有两个子节点的节点
      let tempNode = findMinNode(node.right)    // 找到当前节点的右侧子节点树的最小节点
      node.key = tempNode.key                   // 把最小节点替换当前节点
      node.right = removeNode(node.right, tempNode.key)     // 移除右侧节点树的最小节点
      return node
    }
  }

  // 插入元素
  this.insert = function (key) {
    let newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  // 中序遍历 - 按大小顺序处理树中的每一个键 (左 - 中 - 右)
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback)
  }

  // 先序遍历 - 以优先于后代节点的顺序来访问节点 (中 - 左 - 右)
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  }

  // 后序遍历 - 先访问后代节点再访问当前节点 (左 - 右 - 中)
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback)
  }

  // 查找树中最小值
  this.min = function () {
    return minNodeKey(root)
  }

  // 查找树中最大值
  this.max = function () {
    return maxNodeKey(root)
  }

  // 查找指定的值是否存在
  this.search = function (key) {
    return searchNode(root, key)
  }

  // 移除节点
  this.remove = function (key) {
    root = removeNode(root, key)
  }
}
