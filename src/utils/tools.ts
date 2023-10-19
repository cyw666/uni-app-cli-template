/**
 * 判断是否为空对象
 * Object.keys()方法，返回对象的属性名组成的一个数组，若长度为0，则为空对象（ES6的写法）
 * */
export const isEmptyObj = (obj: any) => {
  return Object.keys(obj).length == 0 ? true : false
}
