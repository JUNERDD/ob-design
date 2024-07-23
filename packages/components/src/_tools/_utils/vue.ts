// 判断一个对象是否是组件
export function isComponent(obj: any) {
  return !!(obj && obj.render && typeof obj.render === 'function')
}
