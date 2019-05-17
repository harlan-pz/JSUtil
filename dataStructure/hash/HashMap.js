/*
 *使用数组模拟的JavaScript仿Map哈希表
 *使用最简单的线性探测法解决冲突
 */

class HashMap {
  constructor(size) {
    this.table = []
    for(let i = 0; i < size; i++) {
      this.table.push([undefined, 0])
    }
    this.size = 0
  }
  //哈希函数
  hashConversion(index) {
    let keyCode = 0
    for(let item of index) {
      keyCode += item.charCodeAt(0)
    }
    let key = keyCode % this.table.length
    return key
  }
  //set方法，用来向哈希表中填入数据
  set(index, value) {
    let key = this.hashConversion(index)
    while((this.table[key])[0] !== undefined && (this.table[key])[0] !== index) {
      key++
      if(key >= this.table.length) {
        throw new Error('已经没有可用空间')
      }
    }
      if ((this.table[key])[0] !== index) {
        this.size++
        this.table[key][0] = index
        this.table[key][1] = value
      }
  }
  //get方法，用来从哈希表中取值
  get(index) {
    let key = this.hashConversion(index)
    while((this.table[key])[0] !== undefined && (this.table[key])[0] !== index) {
      key++
      if(key >= this.table.length) {
        return undefined
      }
    }
      return (this.table[key])[1]
  }
  //delete方法，用来删除哈希表的数据
  delete(index) {
    let key = this.hashConversion(index)
    while((this.table[key])[0] !== undefined && (this.table[key])[0] !== index) {
      key ++
      if(key >= this.table.length) {
        return false
      }
    }
    this.table[key] = new Array(2)
    this.size--
    return true
  }
  //has方法，判断哈希表中有没有该值
  has(index) {
    let key = this.hashConversion(index)
    while((this.table[key])[0] !== undefined && (this.table[key])[0] !== index) {
      key ++
      if(key >= this.table.length) {
        return false
      }
    }
    if((this.table[key])[0] !== undefined) {
      return true
    } else {
      return false
    }
  }
  //展示存储到哈希表中的所有数据
  showAllData() {
    let result = []
    for (let item of this.table) {
      if(item[0] !== undefined) {
        result.push(item)
      }
    }
    return result
  }
}