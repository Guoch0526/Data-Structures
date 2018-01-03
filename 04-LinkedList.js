/**
 * 单向链表实现
 */

function LinkedList () {
  let Node = function (element) {
    this.element = element
    this.next = null
  }

  let length = 0
  let head = null

  //  往尾部添加项
  this.append = function (element) {
    let node = new Node(element)
    let current = null
    if (head === null) {     // 链表为空
      head = node
    } else {
      current = head
      while (current.next) {    // 循环链表，找到最后一项
        current = current.next
      }
      current.next = node
    }
    length++
  }

  // 在指定位置添加项
  this.insert = function (postition, element) {
    // 验证 position 无越界
    if (positon > -1 && position < length) {
      let node = new Node(element)    // 创建要插入的项
      let current = head
      let previous = null
      let index = 0

      // 插入第一个位置
      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }

      length++
      return true
    } else {
      return false
    }
  }

  // 移除指定索引的项
  this.removeAt = function (position) {
    // 验证 position 无越界
    if (position > -1 && position < length) {
      let current = head
      let previous = null
      let index = 0

      // 移除第一个元素
      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {    // 找出指定位置 position 的那一项以及前一项
          previous = current
          current = current.next
        }
        // 将前一项的指针指向 要移除项的 下一项，从而跳过 current
        previous.next = current.next
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  // 移除指定值的项
  this.remove = function (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 查找指定项的索引
  this.indexOf = function (element) {
    let index = 0
    let current = head

    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  // 判空
  this.isEmpty = function () {
    return length === 0
  }

  // 返回长度
  this.size = function () {
    return length
  }

  // 将链表值转成字符串
  this.toString = function () {
    let current = head
    let string = ''
    while (current) {
      string += current.element
      current = current.next
    }
    return string
  }

  this.getHead = function () {
    return head
  }
}

module.exports = LinkedList
