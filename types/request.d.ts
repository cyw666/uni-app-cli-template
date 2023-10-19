export interface RequestHeaderInfos {
  source?: string // 资源写死
  userLoginName?: string // 用户名（手机号）
  code?: string // 请求业务类型(接口名字)
  token?: string // url获取的ticket
  timestamp?: string // 时间戳 20230213112217
  clientType?: string // 客户端类型（不用传）
  sourcePassword?: string // 渠道密码 写死 Sid98s
  shopId?: string //	店铺id 目前都固定20001
  bigScreen?: string // 应用场景:1 厅店,
  transactionId?: string // 交易ID（uuid，当应用场景为厅店时该字段必输，传递给h5底层）
}

export interface RequestFieldData {
  intentionAction?: string // 意图动作  首次连接不用传
  isShowVirtual?: string // 是否显示数字人（1.显示 0 不显示）
  requestType?: string // 请求类型（1.创建连接 2.语意识别 3 .数字人重新合成 4：按下语音识别通知）
  provinceCode?: string // 省编码
  cityCode?: string | number // 市编码
  intentMsg?: string // 语意文本
  isNewConversation?: string | number // 是不是新会话（1.是 0.不是)
  accessAuth?: string | number // 是否开启大数据推荐 0、否 1、是
  isChinatelecom?: string // 本网异网标识：0本网 1异网，未登录传空
  refreshConfig?: string | number // 本次操作是否需要更新数字人配置（1.需要 0.不需要 ）
  intentionType?: string | number // 意图类型 0搜索 1小知 2闲聊 3卡片 4.多轮 9 未识别
  touristId?: string // 游客Id(需加密)
  intention?: string // 意图
  textId?: string // 发送消息ID
  dialogueId?: string // 会话ID
  sceneId?: string // 场景ID
  shopId?: string //	店铺id 目前都固定20001
  channelId?: string // 渠道编码
  scopeType?: string // 知识库标识
  account?: string | undefined // 手机号(需加密)  加密的手机号
  replayMsg?: string // 重播文本
  phoneNum?: string // 手机号
  samplerate?: string // 传入语音格式1：8k16bit 5：16k16bit
  audioFile?: string //语音文件（base64加密，格式wav）
  settingCode?: string // 设置类型值
  settingType?: string // 设置类型 1：语言 2：形象
}

export interface RequestData {
  headerInfos?: RequestHeaderInfos
  content: {
    attach?: string
    fieldData: RequestFieldData
  }
}
