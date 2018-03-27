/**
 * 集合实现 (由一组无序且唯一的项组成)
 */

function Set () {
  let items = {}

  // 往集合中添加值
  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }

  // 移除指定值
  this.remove = function (value) {
    if (this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }

  // 查找集合中是否有指定值
  this.has = function (value) {
    return items.hasOwnProperty(value)
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

  // 返回集合每一项组成的数组
  this.values = function () {
    // 高版本浏览器实现
    // return Object.keys(items)

    let keys = []
    for (let prop in items) {
      if (items.hasOwnProperty(prop)) {
        keys.push(prop)
      }
    }
    return keys
  }

  // 并集操作
  this.union = function (otherSet) {
    let unionSet = new Set()
    let unionValues = this.values()

    for (let i = 0, len = unionValues.length; i < len; i++) {
      unionSet.add(unionValues[i])
    }
    unionValues = otherSet.values()

    for (let i = 0, len = unionValues.length; i < len; i++) {
      unionSet.add(unionValues[i])
    }
    return unionSet
  }

  // 交集操作
  this.intersection = function (otherSet) {
    let intersectionSet = new Set()
    let values = this.values()

    for (let i = 0, len = values.length; i < len; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }

  // 差集操作
  this.difference = function (otherSet) {
    let differenceSet = new Set()
    let values = this.values()

    for (let i = 0, len = values.length; i < len; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }

  // 验证当前集合是否是某个集合的子集
  this.subset = function (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    } else {
      let values = this.values()
      for (let i = 0, len = values.length; i < len; i++) {
        if (!otherSet.has(values[i])) return false
      }
      return true
    }
  }
}
