// 手机号校验
export function validPhone(val: string) {
  const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
  return reg.test(val)
}
