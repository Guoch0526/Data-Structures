/**
 * 顺序搜索 (效率很低)
 */

function sequentialSearch (array, item) {
  for (let i = 0, len = array.length; i < len; i++) {
    if (array[i] === item) {
      return i
    }
  }

  return -1
}
