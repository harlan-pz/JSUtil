/*
* data - 排序数组
* low - 数组最左端索引
* height - 数组最右端索引
*/
function quickSort(data, low, height) {
  let sortData = data
  let isLeft = true
  let left = low,
    right = height,
    temp = sortData[left]
  if (low >= height) {
    return sortData
  }
  while (left !== right) {
    if (isLeft) {
      if (sortData[right] < temp) {
        sortData[left] = sortData[right]
        isLeft = !isLeft
      } else {
        right--
      }
    } else {
      if (sortData[left] > temp) {
        sortData[right] = sortData[left]
        isLeft = !isLeft
      } else {
        left++
      }
    }
  }
  sortData[left] = temp
  quickSort(sortData, low, left - 1)
  quickSort(sortData, left + 1, height)
  return sortData
}