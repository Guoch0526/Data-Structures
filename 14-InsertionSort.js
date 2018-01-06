/**
 * 插入排序 (时间复杂度 O(2n))
 */

function insertionSort (array) {
  let len = array.length
  let temp = ''
  let j = 0

  for (let i = 1; i < len; i++) {
    j = i
    temp = array[i]
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1]
      j--
    }

    array[j] = temp
  }

  return array
}
