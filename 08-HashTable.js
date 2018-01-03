/**
 * 散列表实现 (散列算法能尽可能快速的在数据结构中找到一个值)
 * 这种模式下实现的不完善，在添加元素时可能会有冲突：出现后面的元素覆盖前面的元素的情况
 */

function HashTable () {
  let table = []
  let loseloseHashCode = function (key) {
    let hash = 0
    for (let i = 0, len = key.length; i < len; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  }

  // 添加或更新
  this.put = function (key, value) {
    table[loseloseHashCode(key)] = value
  }

  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined
  }

  this.get = function (key) {
    return table[loseloseHashCode(key)]
  }
}
