/**
 * 栈实现 (LIFO - 后进先出)
 */

function Stack () {
  let items = []

  // 添加元素
  this.push = function (element) {
    items.push(element)
  }

  // 移除栈顶元素并返回
  this.pop = function (element) {
    items.pop()
  }

  // 返回栈顶元素
  this.peek = function () {
    return items[items.length - 1]
  }

  // 判空
  this.isEmpty = function () {
    return items.length === 0
  }

  // 获取栈长度
  this.size = function () {
    return items.length
  }

  // 清空栈
  this.clear = function () {
    items = []
  }

  this.print = function () {
    console.log(items.toString())
  }
}
