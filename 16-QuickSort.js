/**
 * 快速排序 (时间复杂度(nlogⁿ))
 */

function partition (array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  while (i < j) {
    while (array[i] < pivot) {      // 中间左侧第一个大于中间值的索引
      i++
    }

    while (pivot < array[j]) {      // 中间右侧第一个小于中间值的索引
      j--
    }

    if (i <= j) {     // 交换位置
      let temp = array[j]
      array[j] = array[i]
      array[i] = temp
      i++
      j--
    }
  }

  return i
}

function quick (array, left, right) {
  let index = 0
  if (array.length > 1) {
    // 找到数组中的 中元
    index = partition(array, left, right)

    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }

    return array
  }
}

function quickSort (array) {
  return quick(array, 0, array.length - 1)
}
