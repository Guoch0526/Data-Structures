/**
 * 冒泡排序 (时间复杂度 O(n²))
 */
function bubbleSort (array) {
  let length = array.length
  let count = 0     // 记录循环次数
  for (let i = 0; i < length; i++) {
    count++
    // length - i - 1: 避免多余的 i 次循环
    for (let j = 0; j < length - i - 1; j++) {
      count++
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }

  return array
}
