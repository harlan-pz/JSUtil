/*
 *使用数组模拟的JavaScript哈希表
 *使用最简单的线性探测法解决冲突
 */

class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = 0
  }
  //哈希函数
  hashConversion(value) {
    let keyCode = 0
    for(let item of value) {
      keyCode += item.charCodeAt(0)
    }
    let key = keyCode % this.table.length
    return key
  }
  //set方法，用来向哈希表中填入数据
  set(value) {
    let key = this.hashConversion(value)
    while(this.table[key] !== undefined && this.table[key] !== value) {
      key++
      if(key >= this.table.length) {
        throw new Error('已经没有可用空间')
      }
    }
      if (this.table[key] !== value) {
        this.size++
        this.table[key] = value
      }
  }
  //get方法，用来从哈希表中取值
  get(value) {
    let key = this.hashConversion(value)
    while(this.table[key] !== undefined && this.table[key] !== value) {
      key++
      if(key >= this.table.length) {
        return undefined
      }
    }
      return this.table[key]
  }
  //delete方法，用来删除哈希表的数据
  delete(value) {
    let key = this.hashConversion(value)
    while(this.table[key] !== undefined && this.table[key] !== value) {
      key ++
      if(key >= this.table.length) {
        return false
      }
    }
    this.table[key] = undefined
    this.size--
    return true
  }
  //has方法，判断哈希表中有没有该值
  has(value) {
    let key = this.hashConversion(value)
    while(this.table[key] !== undefined && this.table[key] !== value) {
      key ++
      if(key >= this.table.length) {
        return false
      }
    }
    if(this.table[key] !== undefined) {
      return true
    } else {
      return false
    }
  }
  //展示存储到哈希表中的所有数据
  showAllData() {
    let result = []
    for (let item of this.table) {
      if(item !== undefined) {
        result.push(item)
      }
    }
    return result
  }
}