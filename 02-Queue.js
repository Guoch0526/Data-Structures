/**
 * 队列实现 (FIFO - 先进先出)
 */

function Queue () {
  let items = []

  // 往队列尾部添加项
  this.enqueue = function (element) {
    items.push(element)
  }

  // 移除队列的第一个项并返回
  this.dequeue = function () {
    return items.shift()
  }

  // 返回队列的第一个项
  this.front = function () {
    return items[0]
  }

  // 判空
  this.isEmpty = function () {
    return items.length === 0
  }

  // 获取队列长度
  this.size = function () {
    return items.length
  }

  // 清空队列
  this.clear = function () {
    items = []
  }
}