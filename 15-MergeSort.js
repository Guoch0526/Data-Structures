/**
 * 归并排序 (时间复杂度(nlogⁿ))
 */

function merge(left, right) {
  let result = []
  let il = 0
  let ir = 0

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++])
    } else {
      result.push(right[ir++])
    }
  }

  while (il < left.length) {
    result.push(left[il++])
  }

  while (ir < right.length) {
    result.push(right[ir++])
  }

  return result
}

function mergeSort (array) {
  let len = array.length
  if (len === 1) {
    return array
  }
  let mid = Math.floor(len / 2)
  let left = array.slice(0, mid)
  let right = array.slice(mid, len)

  return merge(mergeSort(left), mergeSort(right))
}
