/**
 * 散列表实现 (散列算法能尽可能快速的在数据结构中找到一个值)
 * 解决冲突：线性探查法(在往某一索引位置存储数据时，如该位置 index 已存储了数据，则尝试往 index + 1 位置存储，以此类推)
 */

function HashTable() {
  let table = []
  // 散列函数
  let loseloseHashCode = function (key) {
    let hash = 5381
    for (let i = 0, len = key.length; i < len; i++) {
      hash = hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013
  }

  // 辅助类
  let ValuePair = function (key, value) {
    this.key = key
    this.value = value
  }

  // 添加或更新
  this.put = function (key, value) {
    let index = loseloseHashCode(key)
    let values = new ValuePair(key, value)
    if (table[index] === undefined) {
      table[index] = values
    } else {
      let i = ++index
      while (table[i] !== undefined) {
        i++
      }
      table[i] = values
    }
  }

  this.remove = function (key) {
    let index = loseloseHashCode(key)
    if (table[index] !== undefined) {
      if (table[index].key === key) {
        table[index] = undefined
      } else {
        let i = ++index
        while (table[i] === undefined || table[i].key !== key) {
          i++
        }
        if (table[i].key === key) {
          table[index] = undefined
        }
      }
    }
    return undefined
  }

  this.get = function (key) {
    let index = loseloseHashCode(key)
    if (table[index] !== undefined) {
      if (table[index].key === key) {
        return table[index].value
      } else {
        let i = ++index
        while (table[i] === undefined || table[i].key !== key) {
          i++
        }
        if (table[i].key === key) {
          return table[i].value
        }
      }
    }
    return undefined
  }
}
