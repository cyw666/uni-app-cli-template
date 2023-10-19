export interface ResponseHeaderInfos {
  code: string
  reason: string
}
export interface CommonSystem {
  provinceCode?: string | null | undefined // 省份集团编码(10.2新增)
  recommender?: string | null | undefined // 插码推荐码(10.2新增)
  sceneId?: string | null | undefined // 大数据场景id(10.2新增)
}
export interface CommonLink extends CommonSystem {
  link: string // 跳转地址
  linkType: string // 跳转链接类型
  title: string // 标题
  iconUrl?: string // 图标地址
  titleColor?: string // 标题颜色
}
export interface CommonLinkWithType extends CommonLink {
  textId: string // 发送消息ID
  // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
  type: '1' | '2' | '3' | '4' | '5' | '6'
}
// 超链接跳转列表
export interface AnswerLink extends CommonLink {}

// 消息文本
export interface AnswerText extends CommonSystem {
  textId?: string
  answerText?: string // 文本提示语
  answerVoice?: string // 是否显示播放按钮( 0否 1是)
  replayMsg?: string // 重播文本
  answerLinkList?: AnswerLink[]
  iconUrl?: string // 图片
}
// 消息图片
export interface AnswerImage extends CommonLinkWithType {}

export interface BottomButton extends CommonLinkWithType {}

export interface CommonMenuItem extends CommonLinkWithType {
  active?: boolean
}
// 常规菜单
export interface CommonMenu {
  commonMenuType: '1' | '2' | '3' // 菜单样式：（1：一行一个、2：一行两个、3：一行三个）
  bottomButton: BottomButton | null
  commonMenuList: CommonMenuItem[]
}
// 提示说明
export interface TipsItem {
  title: string // 标题
  value: string // 数值
}
// 数据说明
export interface ContentAreaDataInfo {
  title: string // 标题
  value: string // 数值
  valueColor: string // 字体颜色 (红色 #f04857  黑色#333333  蓝色 #0e8cff)
  tipsType: '1' | '2' // 提示类型，1：明细说明（灰色）、2：气泡提示（红色
  tipsList: TipsItem[]
}

export interface ContentAreaDataItem {
  title: string // 标题
  value: string // 数值
  valueColor: string // 字体颜色 (红色 #f04857  黑色#333333  蓝色 #0e8cff)
  tipsType: '1' | '2' // 提示类型，1：明细说明（灰色）、2：气泡提示（红色
  connector: string // 连接符
  tipsList: TipsItem[]
}

export interface ContentAreaButtonItem extends CommonLinkWithType {
  buttonType: '1' | '2' // 按钮样式 1：白底蓝字、2：蓝底白字
}

export interface ContentAreaItem {
  // 类型：1：弹窗标题、2：弹窗内容、3：数据展示一、4：数据展示二（列表）、5：按钮列表、6：间距楼层
  type: '1' | '2' | '3' | '4' | '5' | '6'
  title: string | null // 弹窗标题
  content: string | null // 弹窗内容
  dataInfo: ContentAreaDataInfo | null // 数据说明
  dataList: ContentAreaDataItem[] | null // 数据列表
  buttonList: ContentAreaButtonItem[] | null // 按钮列表
}
//	通用卡片
export interface ContentArea {
  dialogType: '1' | '2' // "类型：1：大卡片、2：小卡片"
  contentAreaList: ContentAreaItem[]
}
// 搜索结果
export interface SearchCardSearchItem extends CommonLinkWithType {
  traceData: string // 打点数据
  id: string // 数据ID
}
// 搜索卡片
export interface SearchCard extends CommonSystem {
  cardType: '1' | '2' | '3' // 卡片类型：1：服务卡片、2：生活卡片、3：商城卡片"
  highLight: string // 高亮字段
  title: string //	标题
  subTitle: string //	 标题
  subTitleLink: string //	副标题跳转链接
  subTitleLinkType: string // 副标题跳转类型
  // 搜索结果列表
  searchList: SearchCardSearchItem[]
}
export interface SpecialCardContentItem {
  title: string //	标题
  titleContent: string // 标题对应内容
}
//特殊卡片
export interface SpecialCard extends CommonLinkWithType {
  buttonType: '1' | '2' // 按钮样式（1：白底蓝字、2：蓝底白字）
  // 内容列表
  contentList: SpecialCardContentItem[]
}

// 延迟跳转
export interface DelayLink extends CommonLinkWithType {
  delayTime: string // 延迟时长（单位：ms）
  isTrigger?: boolean
}

// 互动动效
export interface InterActiveImage {
  imageUrl: string // 图片url
  playTime: string //	 播放时长（单位：ms）
  showType: string // 显示位置，1显示在下面，2显示在上面手部开始（默认当1处理）
}
// 欢迎菜单
export interface WelcomeMenuItem extends CommonLinkWithType {}
// 服务评价
export interface EvaluateMenuItem extends CommonLinkWithType {}

export interface CategoryDataItem extends CommonLinkWithType {
  label: string // 分类标签，返回图片类型url
  traceData: string
}

export interface TopDataItem extends CommonLinkWithType {
  traceData: string
}

// 分类整合卡片
export interface CategoryReplyCard {
  categoryDataList: CategoryDataItem[] // 分类列表
  categoryDataListTitle: string // 分类列表标题
  findMoreBean: CommonLinkWithType // 查看更多
  highLight: string // 高亮字段
  topDataList: TopDataItem[] // 置顶列表
  topDataListTitle: string // 置顶列表标题
}

export interface ActivityItem extends CommonLinkWithType {}

// 活动托底卡片
export interface MarketingCard {
  title: string // 分类列表标题
  activityList: ActivityItem[]
}

export interface AnswerItem {
  // 消息类型（-1:问题 1：文本、2：图片、3：欢迎菜单、4：常规菜单、5：评价、6：通用卡片、7：搜索卡片、8：特殊卡片、9：延迟跳转、10：互动动效、13：卡片整合 time:时间）
  answerType:
    | '-1'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | 'time'
  answerText?: AnswerText | null
  answerImage?: AnswerImage | null // 消息图片
  commonMenu?: CommonMenu | null // 常规菜单
  contentArea?: ContentArea | null //	通用卡片
  searchCard?: SearchCard | null // 搜索卡片
  specialCard?: SpecialCard | null //	特殊卡片
  delayLink?: DelayLink | null // 延迟跳转
  interActiveImage?: InterActiveImage | null // 互动动效
  welcomeMenuList?: WelcomeMenuItem[] | null // 欢迎菜单
  evaluateMenuList?: EvaluateMenuItem[] | null // 服务评价
  timeValue?: number // 时间值
  categoryReplyCard?: CategoryReplyCard | null // 整合卡片
  marketingCard?: MarketingCard | null // 活动托底卡片
}

export interface RecommendItem {
  id: string
  content: string
  actionParam: string
  answer: string
  iconUrl: string
  link: string
  linkType: string
  title: string
}
export interface ResponseInnerData {
  phone: string // 手机号
  channelId?: string
  answerList: AnswerItem[] | null // 消息列表
  backgroundImage?: string // 背景图片地址
  provinceCode: string // 省编码
  cityCode: string // 城市编码
  dateTime: string // 消息时间戳
  dialogueId: string // 会话ID
  intention: string // 意图
  intentionAction?: string // 意图动作
  intentionType?: '0' | '1' | '2' | '3' | '4' | '9' // 意图类型 0搜索 1小知 2闲聊 3卡片 4.多轮 9 未识别
  replayMsg: string // 重播文本
  recommendList: RecommendItem[] | null // 随销位列表
  videoStreamUrl?: string // 直播流地址
  videoStreamUrlType?: string // 直播推流地址类型 1:m3u8 2:flv 3:rtmp
  voiceMsg?: string // 音频文本
  identifyResults?: string // 语音转成文字的结果
}

export interface ResponseData<T> {
  resultCode: string
  resultDesc: string
  attach?: string
  data: T
}

export interface HeaderInfos {
  code: string
  reason: string
}
export interface FullResponseData {
  headerInfos: HeaderInfos
  responseData: ResponseData<ResponseInnerData>
}

// 设置小翼响应类型
interface SettingItem {
  title: string
  iconUrl?: string | null
  flagSelected: '0' | '1'
  settingCode: string
  loading?: boolean
}
interface LanguageList {
  settingList: SettingItem[]
  settingType: '1' | '2' // 设置类型 1：语言 2：形象
  title: string // 标题
  subTitle: string // 副标题
}

interface StyleList extends LanguageList {}

interface SettingInnerData {
  languageList: LanguageList
  styleList?: StyleList
}

export interface SettingResponseData {
  headerInfos: HeaderInfos
  responseData: ResponseData<SettingInnerData>
}

export interface CommonResponseData {
  headerInfos: HeaderInfos
  responseData: ResponseData<any>
}
