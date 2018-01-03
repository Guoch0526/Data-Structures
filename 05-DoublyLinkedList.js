/**
 * 双向链表实现
 */

function DoublyLinkedList () {
  let Node = function (element) {
    this.element = element
    this.next = null
    this.prev = null
  }

  let length = 0
  let head = null     // 头部
  let tail = null     // 尾部

  //  往尾部添加项
  this.append = function (element) {
    let node = new Node(element)
    let current = null
    if (head === null) {     // 链表为空
      head = node
      tail = node
    } else {
      tail.next = node
      node.prev = tail
      tail = node
    }
    length++
  }

  // 往指定位置中插入元素
  this.insert = function (position, element) {
    // 验证 position 无越界
    if (position >= 0 && position <= length) {
      let node = new Node(element)
      let current = head
      let previous = null
      let index = 0
      
      if (position === 0) {       // 在头部添加
        if (!head) {
          head = node
          tail = node
        } else {
          current.prev = node
          node.next = current
          head = node
        }
      } else if (position === length) {   // 在尾部添加
        current = tail
        current.next = node
        node.prev = current
        tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = node
        node.next = current
        current.prev = node
        node.prev = previous
      }

      length++
      return true
    } else {
      return false
    }
  }

  // 移除指定位置的元素
  this.removeAt = function (position) {
    // 验证 position 无越界
    if (position > -1 && position < length) {
      let current = head
      let previous = null
      let index = 0
      if (position === 0) {   // 移除第一个元素
        head = current.next
        if (length === 1) {   // 只有一个元素
          tail = null
        } else {
          head.prev = null
        }
      } else if (position === length - 1) {     // 移除最后一个元素
        current = tail
        tail = current.prev
        tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous
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
}
