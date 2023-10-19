import dayjs from 'dayjs'
import { Base64 } from 'js-base64'

export function generateMixedString(digit = 10) {
  let num = ''
  digit = Number(digit) > 0 ? digit : 10
  for (let i = 0; i < digit; i++) {
    const id = Math.floor(Math.random() * 10)
    num += id
  }
  return num
}
// 获取现在的时间戳
export function getTimeData() {
  const date = new Date(+new Date()) // 初始化日期
  const year = date.getFullYear() //获取年份
  let month: any = date.getMonth() + 1 // 获取月份
  month = month < 10 ? '0' + month : month
  let day: any = date.getDate() // 获取具体日
  day = day < 10 ? '0' + day : day
  let hour: any = date.getHours() // 获取时
  hour = hour < 10 ? '0' + hour : hour
  let minutes: any = date.getMinutes() // 获取分
  minutes = minutes < 10 ? '0' + minutes : minutes
  let seconds: any = date.getSeconds() // 获取秒
  seconds = seconds < 10 ? '0' + seconds : seconds
  return year + month + day + hour + minutes + seconds
}

export function getUrlParam(name: string) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg) //获取url中"?"符后的字符串并正则匹配
  if (r != null) {
    return decodeURIComponent(r[2])
  }
  return null
}

// 得到加密的手机号
export function encryptUserPhone(phone: string) {
  if (!phone) return ''
  let newStr = ''
  for (let i = 0; i < phone.length; i++) {
    const Num = parseInt(phone[i]) + 2
    if (Num === 10) {
      newStr = newStr + ':'
    } else if (Num === 11) {
      newStr = newStr + ';'
    } else {
      newStr = newStr + Num
    }
  }
  return newStr
}

/**
 * 判断是否是微信环境
 */
export function isWechat(): boolean {
  const ua = navigator.userAgent.toLowerCase()
  return /micromessenger/i.test(ua)
}

// 跳转第三方页面
export function linkOtherPage(url?: string): void {
  if (!url) return
  const w = window.top || window
  w.location.href = url
}

export function dateFormat(
  date: dayjs.ConfigType,
  format = 'YYYY-MM-DD HH:mm:ss',
) {
  if (!date) return
  return dayjs(date).format(format)
}

// Blob转base64
export function fileOrBlobToDataURL(obj: Blob) {
  return new Promise((resolve, reject) => {
    const a = new FileReader()
    a.readAsDataURL(obj)
    a.onload = (e) => {
      resolve(e.target?.result)
    }
    a.onerror = (err) => {
      reject(err)
    }
  })
}

//base64 加密
export function userEncryption(val: string) {
  if (val) {
    return Base64.encode(val)
  } else {
    return false
  }
}

// blob to base64
export function blobToBase64(blob: Blob): Promise<any> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      resolve(e.target?.result)
    }
    // readAsDataURL
    fileReader.readAsDataURL(blob)
    fileReader.onerror = () => {
      reject(new Error('blobToBase64 error'))
    }
  })
}

// 将base64转换为blob
export function dataURLtoFile(dataURI: string, type = '.jpeg') {
  const binary = atob(dataURI.split(',')[1])
  const array = []
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i))
  }

  return new Blob([new Uint8Array(array)], { type })
}
