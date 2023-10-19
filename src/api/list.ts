import request from '@/utils/request'
import responseMockData from './response-mock'
import encrypt from '@/utils/jsencrypt'
import type {
  FullResponseData,
  SettingResponseData,
  CommonResponseData,
} from '#/response'
import type { RequestData } from '#/request'
export async function semanticRecognition(params: RequestData) {
  const res = await request.post<FullResponseData>(
    '/query/semanticRecognition',
    params,
  )
  return res.data
  // return responseMockData
}
// 终端数字人
export async function interruptLink(params: RequestData) {
  const res = await request.post<CommonResponseData>(
    '/query/interruptLink',
    params,
  )
  return res.data
}
// 获取配置数据
export async function getDHStyleConfig(params: RequestData) {
  const res = await request.post<SettingResponseData>(
    '/query/getDHStyleConfig',
    params,
  )
  return res.data
}
// 设置配置数据
export async function setDHStyleConfig(params: RequestData) {
  const res = await request.post<CommonResponseData>(
    '/query/setDHStyleConfig',
    params,
  )
  return res.data
}
// 语音转文字
export async function robotVoiceInter(params: RequestData) {
  const res = await request.post<FullResponseData>(
    '/query/robotVoiceInter',
    params,
  )
  return res.data
}

//获取省渠道单点登录ticket
export function getSecondTicket(phone: string) {
  const account = encrypt(phone)
  return request
    .get(`/query/getSecondTicket`, {
      params: {
        account,
      },
    })
    .then((res) => {
      return res.data.responseData?.data as string
    })
}
// 解析ticket
export function parsingTicket(ticket: string) {
  return request
    .get(`/query/parseTicket`, {
      params: {
        ticket,
      },
    })
    .then((res) => {
      return res.data.responseData?.data?.phone as string
    })
}
