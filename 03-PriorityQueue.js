/**
 * 优先队列实现
 */

function PriorityQueue () {
  let items = []

  function QueueElement (element, priority) {
    this.element = element
    this.priority = priority
  }

  // 往队列尾部添加项
  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority)

    if (this.isEmpty()) {       // 空队列情况
      items.push(queueElement)
    } else {
      let added = false
      for (let i = 0, len = items.length; i < len; i++) {
        if (queueElement.priority < items[i].priority) {      // priority 越小, 优先级越高
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        items.push(queueElement)
      }
    }
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