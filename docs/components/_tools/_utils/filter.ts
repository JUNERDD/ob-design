import { klona } from 'klona'
import type { Obj } from '../_types'
import { ObjPrototype } from '../_prototype'

// 判断对象是否存在key
const hasKay = (obj: Obj, key: string) => ObjPrototype.hasOwnProperty.call(obj, key)

/**
 * 合并默认值对象
 */
export function mergeObjects(defaultObj: Obj, obj1: Obj, obj2: Obj) {
  // 深克隆创建一个新的对象newObj
  const newObj = klona(defaultObj)

  // 遍历obj1的键值对
  for (const key in obj1) {
    // 判断是否存在key
    if (hasKay(newObj, key)) {
      if (obj1[key] !== newObj[key]) {
        // 如果obj1的值与newObj的值不同，则替换newObj的值
        newObj[key] = obj1[key]
      }
    }
    else {
      // 添加
      newObj[key] = obj1[key]
    }
  }

  // 遍历obj2的键值对
  for (const key in obj2) {
    if (hasKay(newObj, key)) {
      // 如果obj2的值与newObj的值不同，则替换newObj的值
      if (obj1[key] === defaultObj[key] && obj2[key] !== newObj[key]) {
        newObj[key] = obj2[key]
      }
    }
    else {
      newObj[key] = obj2[key]
    }
  }

  return newObj
}
