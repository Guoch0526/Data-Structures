/**
 * 二分搜索算法 (需要数组先排序)
 */

let quickSort = require('./16-QuickSort')
function binarySearch (array, item) {
  let sortArray = quickSort(array)
  let low = 0,
      high = sortArray.length - 1,
      mid,
      element

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    element = sortArray[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }

  return -1
}
