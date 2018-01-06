/**
 * 选择排序 (时间复杂度 O(n²))
 */

function selectionSort (array) {
  let len = array.length
  let minIndex = 0   // 记录最小值的索引
  let count = 0      // 记录循环次数

  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    count++
    for (let j = i; j < len; j++) {
      count++
      if (array[minIndex] > array[j]) {
        minIndex = j
      }      
    }

    if (minIndex !== i) {
      let temp = array[minIndex]
      array[minIndex] = array[i]
      array[i] = temp
    }
  }

  return array
}
