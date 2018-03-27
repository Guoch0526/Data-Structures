/**
 * 散列表实现 (散列算法能尽可能快速的在数据结构中找到一个值)
 * 解决冲突：分离链接法(散列表的每一项由链表来存储数据)
 */

let LinkedList = require('./04-LinkedList')

function HashTable() {
  let table = []
  let loseloseHashCode = function (key) {
    let hash = 0
    for (let i = 0, len = key.length; i < len; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }

  // 辅助类
  let ValuePair = function (key, value) {
    this.key = key
    this.value = value
  }

  // 添加或更新
  this.put = function (key, value) {
    let index = loseloseHashCode(key)
    if (table[index] === undefined) {
      table[index] = new LinkedList()
    }
    table[index].append(new ValuePair(key, value))
  }

  this.remove = function (key) {
    let index = loseloseHashCode(key)
    if (table[index] !== undefined) {
      let current = table[index].getHead()
      while (current.next) {  // 遍历链表
        if (current.element.key === key) {
          table[index].remove(current.element)
          if (table[index].isEmpty()) {
            table[index] = undefined
          }
          return true
        }
        current = current.next
      }

      if (current.element.key === key) {
        table[index].remove(current.element)
        if (table[index].isEmpty()) {
          table[index] = undefined
        }
        return true
      }
    }
    return false
  }

  this.get = function (key) {
    let index = loseloseHashCode(key)
    if (table[index] !== undefined) {
      let current = table[index].getHead()
      while (current.next) {  // 遍历链表
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }

      if (current.element.key === key) {    // 头或尾情况
        return current.element.value
      }
    }
    return undefined
  }
}
