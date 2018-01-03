/**
 * 字典实现
 */

function Dictionary () {
  let items = {}

  this.set = function (key, value) {
    items[key] = value
  }

  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key]
      return true
    }
    return false
  }

  this.has = function (key) {
    return key in items
  }

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined
  }

  // 清空集合
  this.clear = function () {
    items = {}
  }

  // 返回集合长度
  this.size = function () {
    // 高版本浏览器实现
    // return Object.keys(items).length

    let count = 0
    for (let prop in items) {
      if (items.hasOwnProperty(prop)) {
        ++count
      }
    }
    return count
  }

  this.keys = function () {
    let keys = []
    for (let k in items) {
      if (this.has(k)) {
        keys.push(k)
      }
    }
    return keys
  }

  this.values = function () {
    let values = []
    for (let k in items) {
      if (this.has(k)) {
        values.push(items[k])
      }
    }
    return values
  }

  this.getItems = function () {
    return items
  }
}
