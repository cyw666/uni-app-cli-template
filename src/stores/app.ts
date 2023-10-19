import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import { assign } from 'lodash-es'
import storage from '@/utils/storage'
import { encryptUserPhone } from '@/utils/common'
import {
  TICKET,
  CHANNELID,
  SCOPETYPE,
  PROVINCE_TICKET,
  VOICEFLAG,
  VOICEENABLE,
  NEW_CONVERSATION,
  USER_PHONE,
  AD_LIST,
  CHAT_LIST,
  IS_TERM_START,
  LAST_TIME_REQUEST,
  PROVINCE_CODE,
  CITY_CODE,
} from '@/stores/store-keys'
import type { RecommendItem, AnswerItem } from '#/response'
export const useAppStore = defineStore('app', () => {
  // ticket认证
  const ticket = ref(storage.get(TICKET))
  function setTicket(value: any) {
    ticket.value = value
    storage.set(TICKET, value)
  }

  // 渠道编码
  const channelId = ref(storage.get(CHANNELID))
  function setChannelId(value: any) {
    channelId.value = value
    storage.set(CHANNELID, value)
  }

  //标识语音识别权限参数
  const voiceFlag = ref(storage.get(VOICEFLAG))
  function setVoiceFlag(value: any) {
    voiceFlag.value = value
    storage.set(VOICEFLAG, value)
  }
  // 知识库标识
  const scopeType = ref(storage.get(SCOPETYPE))
  function setScopeType(value: any) {
    scopeType.value = value
    storage.set(SCOPETYPE, value)
  }

  // 目前都固定 20001
  const shopId = ref('20001')

  // 用户手机号
  const userPhone = ref(storage.get(USER_PHONE))
  function setUserPhone(value: string) {
    userPhone.value = value
    storage.set(USER_PHONE, value)
  }

  // 加密的手机号
  const account = computed(() => encryptUserPhone(userPhone.value))

  // 城市编码
  const cityCode = ref(storage.get(CITY_CODE))
  function setCityCode(value: string) {
    cityCode.value = value
    storage.set(CITY_CODE, value)
  }
  // 省编码
  const provinceCode = ref(storage.get(PROVINCE_CODE))
  function setProvinceCode(value: string) {
    provinceCode.value = value
    storage.set(PROVINCE_CODE, value)
  }

  // 会话id
  const dialogueId = ref('')
  // 是否是新会话
  const isNewConversation = ref<boolean>(
    storage.get(NEW_CONVERSATION) === undefined
      ? true
      : storage.get(NEW_CONVERSATION),
  )
  function setIsNewConversation(value: boolean) {
    isNewConversation.value = value
    // 1天后过期
    storage.set(NEW_CONVERSATION, value, Date.now() + 1 * 24 * 60 * 60 * 1000)
  }
  // 跳转省链接携带的ticket
  const provinceTicket = ref(storage.get(PROVINCE_TICKET))
  function setProvinceTicket(value: string) {
    provinceTicket.value = value
    storage.set(PROVINCE_TICKET, value)
  }

  // 对话框样式 chatStyle
  type chatStyle = {
    top: string
    height: string
  }

  let chatStyle = reactive<chatStyle>({
    top: '37%',
    height: '44%',
  })

  function updateChatStyle(payload: chatStyle) {
    chatStyle = assign(chatStyle, payload)
  }

  // 是否显示底部内容
  const isShowFooter = ref(true)
  // 聊天列表距离底部的padding
  const chatInnerBottom = ref('0')
  // 记录聚焦的input元素
  const focusinEl = ref<HTMLElement | null>(null)
  // 底部动态样式
  type dynamicFooterStyle = {
    bottom: string | undefined
  }

  let dynamicFooterStyle = reactive<dynamicFooterStyle>({
    bottom: '0',
  })

  function updateDynamicFooterStyle(payload: dynamicFooterStyle) {
    dynamicFooterStyle = assign(dynamicFooterStyle, payload)
  }
  // chatDom ref
  const chatRef = ref<HTMLElement | null>(null)
  const questionsRef = ref<HTMLElement[]>([])
  // 是否静音
  const isMuted = ref(false)
  // 视频地址
  const videoPlayerUrl = ref('')
  // 音频资源
  const audioDataSource = ref('')

  // 是否开启语音权限
  const isVoiceEnable = ref<boolean>(storage.get(VOICEENABLE))
  function setVoiceEnable(value: boolean) {
    isVoiceEnable.value = value
    const sevenDays = 7 * 24 * 60 * 60 * 1000
    storage.set(VOICEENABLE, value, Date.now() + sevenDays)
  }

  // 记录上次请求时间
  const lastTimeRequest = ref<number>(storage.get(LAST_TIME_REQUEST))
  function setLastTimeRequest(value: number) {
    lastTimeRequest.value = value
    storage.set(LAST_TIME_REQUEST, value)
  }

  // 用户是否触摸过页面
  const isTouched = ref(false)
  // 广告位列表
  const adList = ref<RecommendItem[]>(storage.get(AD_LIST))
  function setAdList(value: RecommendItem[]) {
    adList.value = value
    storage.set(AD_LIST, value)
  }

  // 聊天数据
  const chatList = ref<AnswerItem[]>(storage.get(CHAT_LIST) || [])

  function setChatList(value: AnswerItem[]) {
    chatList.value = value || []
    const oneDays = 1 * 24 * 60 * 60 * 1000
    storage.set(CHAT_LIST, value || [], Date.now() + oneDays)
  }

  function removeChatList() {
    chatList.value = []
    storage.remove(CHAT_LIST)
  }

  // 语音模式下是否在播报状态
  const isHumanSpeaking = ref(false)
  // 模拟播报意图对应的视频
  const simulationActiveVideo = ref(0)
  // 终端大屏标识
  const termFlag = ref('')
  // 厅店大屏数字人是否已经开启服务
  const isTermStart = ref(storage.get(IS_TERM_START))
  function setIsTermStart(value: boolean) {
    isTermStart.value = value
    // 缓存半小时，避免厅店下次开机还是服务态
    const oneHour = 0.5 * 60 * 60 * 1000
    storage.set(IS_TERM_START, value, Date.now() + oneHour)
  }

  function resetAppStore() {
    setUserPhone('')
    setIsNewConversation(true)
    setProvinceTicket('')
    setCityCode('')
    setProvinceCode('')
    setAdList([])
    removeChatList()
    setIsTermStart(false)
    videoPlayerUrl.value = ''
    audioDataSource.value = ''
    dialogueId.value = ''
  }

  return {
    ticket,
    setTicket,
    channelId,
    setChannelId,
    scopeType,
    setScopeType,
    shopId,
    provinceTicket,
    setProvinceTicket,
    chatStyle,
    updateChatStyle,
    isShowFooter,
    focusinEl,
    chatInnerBottom,
    dynamicFooterStyle,
    updateDynamicFooterStyle,
    chatRef,
    questionsRef,
    isMuted,
    videoPlayerUrl,
    audioDataSource,
    voiceFlag,
    setVoiceFlag,
    isVoiceEnable,
    setVoiceEnable,
    lastTimeRequest,
    setLastTimeRequest,
    userPhone,
    setUserPhone,
    account,
    cityCode,
    setCityCode,
    provinceCode,
    setProvinceCode,
    dialogueId,
    isNewConversation,
    setIsNewConversation,
    isTouched,
    adList,
    setAdList,
    chatList,
    setChatList,
    removeChatList,
    isTermStart,
    setIsTermStart,
    termFlag,
    isHumanSpeaking,
    simulationActiveVideo,
    resetAppStore,
  }
})
