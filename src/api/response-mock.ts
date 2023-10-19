const mockResponse = {
  headerInfos: {
    code: '0000',
    reason: '操作成功',
  },
  responseData: {
    resultCode: '0000',
    resultDesc: '操作成功',
    attach: '',
    data: {
      videoStreamUrl:
        'webrtc://rtpdigitalhuman.189.cn:28937/live/6440d2ffb421f7ad02d7be03', // 直播流地址
      videoStreamUrlType: '4', // 直播推流地址类型 1:m3u8 2:flv 3:rtmp
      backgroundImage: null, // 背景图片地址
      dialogueId: '6440d2ffb421f7ad02d7be03', // 会话ID
      dateTime: '20230420135159', // 消息时间戳
      phone: '19910781740', // 消息时间戳
      answerList: [
        // 消息列表
        {
          answerType: '1', // 消息类型（1：文本、2：图片、3：欢迎菜单、4：常规菜单、5：评价、6：通用卡片、7：搜索卡片、8：特殊卡片、9：延迟跳转、10：互动动效）
          answerText: {
            answerText:
              '您好，如果您的电信产品暂时不用、保留号码，可办理停机保号业务；若您想要终止使用电信的通信服务，可办理注销业务。请根据您的需求进行选择：温馨提醒：如果您是多个电信融合产品套餐（如手机+宽带等产品）想办理拆停机业务或还有其他问题想了解，您可以直接<@超链接>咨询客服MM（服务时间：9:30-22:30）。',
            answerVoice: '1',
            replayMsg:
              '您好，如果您的电信产品暂时不用、保留号码，可办理停机保号业务；若您想要终止使用电信的通信服务，可办理注销业务。请根据您的需求进行选择：温馨提醒：如果您是多个电信融合产品套餐（如手机+宽带等产品）想办理拆停机业务或还有其他问题想了解，您可以直接点击这里咨询客服MM（服务时间：9:30-22:30）。',
            provinceCode: null,
            recommender: null,
            sceneId: null,
            answerLinkList: [
              {
                link: 'https://wapzj.189.cn/svchub/phoneCharges?channelCode=WEITING&ticket=weiting&channel=wxzj1&params=$ticket$',
                linkType: '2',
                title: '点击这里',
                provinceCode: null,
                recommender: null,
                sceneId: null,
              },
            ],
          },
          answerImage: null, // 消息图片
          commonMenu: null, // 常规菜单
          contentArea: null, //	通用卡片
          searchCard: null, // 搜索卡片
          specialCard: null, //	特殊卡片
          delayLink: null, // 延迟跳转
          interActiveImage: null, // 互动动效
          welcomeMenuList: null, // 欢迎菜单
          evaluateMenuList: null, // 服务评价
        },
        {
          answerType: '1',
          answerText: {
            answerText: '欢迎<@超链接>一<@超链接>',
            answerVoice: '1',
            replayMsg: '欢迎123一456',
            provinceCode: null,
            recommender: null,
            sceneId: null,
            answerLinkList: [
              {
                link: 'https://wapzj.189.cn/svchub/traffic?channelCode=HUANGOAPP&ticket=$ticket$',
                linkType: '2',
                title: '123',
                provinceCode: null,
                recommender: null,
                sceneId: null,
              },
              {
                link: 'https://wapzj.189.cn/svchub/traffic?channelCode=HUANGOAPP&ticket=$ticket$',
                linkType: '2',
                title: '456',
                provinceCode: null,
                recommender: null,
                sceneId: null,
              },
            ],
          },
          answerImage: null,
          commonMenu: null,
          contentArea: null,
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '2', // 图片
          answerText: {
            answerText: '您可以对我说',
            answerVoice: '0',
            replayMsg: null,
            provinceCode: null,
            recommender: null,
            sceneId: null,
            answerLinkList: null,
          },
          answerImage: {
            iconUrl:
              'https://pic.thea.cn/Public/Uploadpic/20200722/1595414515.jpg', // 图标地址
            link: 'https://www.baidu.com?ticket=$ticket$', // 跳转链接
            linkType: '2', // 跳转链接类型
            title: '', // 标题
            provinceCode: '', // 省份、集团编码
            recommender: '', // 插码推荐码
            sceneId: '', // 大数据场景id
            textId: '', // 发送消息ID
            type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
          },
          commonMenu: null,
          contentArea: null,
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '3', // 欢迎菜单
          answerText: null,
          answerImage: null,
          commonMenu: null,
          contentArea: null,
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: [
            {
              iconUrl: '', // 图标地址
              link: '19', // 跳转链接
              linkType: '1', // 跳转链接类型
              title: '查余额', //	 标题
              titleColor: null, // 标题颜色
              provinceCode: null, // 省份、集团编码
              recommender: null, // 插码推荐码
              sceneId: null, // 大数据场景id
              textId: null, // 发送消息ID
              type: 'null', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
            },
            {
              iconUrl: null,
              link: 'http://www.baidu.com',
              linkType: '2',
              title: '话费查询',
              titleColor: null,
              provinceCode: null,
              recommender: null,
              sceneId: null,
              textId: null,
              type: 'null',
            },
            {
              iconUrl: null,
              link: 'http://www.baidu.com',
              linkType: '2',
              title: '积分查询',
              titleColor: null,
              provinceCode: null,
              recommender: null,
              sceneId: null,
              textId: null,
              type: 'null',
            },
            {
              iconUrl: null,
              link: 'http://www.baidu.com',
              linkType: '2',
              title: '语音查询',
              titleColor: null,
              provinceCode: null,
              recommender: null,
              sceneId: null,
              textId: null,
              type: 'null',
            },
            {
              iconUrl: null,
              link: 'http://www.baidu.com',
              linkType: '2',
              title: '短信查询',
              titleColor: null,
              provinceCode: null,
              recommender: null,
              sceneId: null,
              textId: null,
              type: 'null',
            },
            {
              iconUrl: null,
              link: 'http://www.baidu.com',
              linkType: '2',
              title: '语音详单',
              titleColor: null,
              provinceCode: null,
              recommender: null,
              sceneId: null,
              textId: null,
              type: 'null',
            },
            {
              iconUrl: null,
              link: 'http://www.baidu.com',
              linkType: '2',
              title: '流量详单',
              titleColor: null,
              provinceCode: null,
              recommender: null,
              sceneId: null,
              textId: null,
              type: 'null',
            },
            {
              iconUrl: null,
              link: 'https://www.baidu.com?ticket=$ticket$',
              linkType: '2',
              title: '话费预存返还',
              titleColor: null,
              provinceCode: null,
              recommender: null,
              sceneId: null,
              textId: null,
              type: '2',
            },
          ],
          evaluateMenuList: null,
        },
        {
          answerType: '4', // 常规菜单
          answerText: null,
          answerImage: null,
          commonMenu: {
            commonMenuType: '1',
            bottomButton: {
              iconUrl: 'http://www.189.cn/client/iconUrl/SZRYDTS.png',
              link: null,
              linkType: null,
              title: '不是我想要的',
              titleColor: '#FFFFFF',
              provinceCode: null,
              recommender: null,
              sceneId: null,
              textId: null,
              type: '1',
            },
            commonMenuList: [
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '5G手机网络测速',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '1',
              },
              {
                iconUrl: null,
                link: 'https://www.baidu.com?ticket=$ticket$',
                linkType: '2',
                title: '宽带测速',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '2',
              },
            ],
          },
          contentArea: null,
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '4', // 常规菜单
          answerText: null,
          answerImage: null,
          commonMenu: {
            commonMenuType: '2',
            bottomButton: {
              iconUrl: 'http://www.189.cn/client/iconUrl/SZRYDTS.png',
              link: null,
              linkType: null,
              title: '不是我想要的',
              titleColor: '#FFFFFF',
              provinceCode: null,
              recommender: null,
              sceneId: null,
              textId: null,
              type: '1',
            },
            commonMenuList: [
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '5G手机网络测速',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '1',
              },
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '宽带测速',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '1',
              },
            ],
          },
          contentArea: null,
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '5', // 评价
          answerText: null,
          answerImage: null,
          commonMenu: null,
          contentArea: null,
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: [
            {
              iconUrl: 'https://i.niupic.com/images/2023/04/20/alC8.png', // 图标地址
              link: '', // 跳转链接
              linkType: '', // 跳转链接类型
              title: '不满意', //	 标题
              titleColor: '', // 标题颜色
              provinceCode: '', // 省份、集团编码
              recommender: '', // 插码推荐码
              sceneId: '', // 大数据场景id
              textId: '', // 发送消息ID
              type: '1', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
            },
            {
              iconUrl: 'https://i.niupic.com/images/2023/04/20/alC9.png', // 图标地址
              link: '', // 跳转链接
              linkType: '', // 跳转链接类型
              title: '一般', //	 标题
              titleColor: '', // 标题颜色
              provinceCode: '', // 省份、集团编码
              recommender: '', // 插码推荐码
              sceneId: '', // 大数据场景id
              textId: '', // 发送消息ID
              type: '1', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
            },
            {
              iconUrl: 'https://i.niupic.com/images/2023/04/20/alCa.png', // 图标地址
              link: '', // 跳转链接
              linkType: '', // 跳转链接类型
              title: '满意', //	 标题
              titleColor: '', // 标题颜色
              provinceCode: '', // 省份、集团编码
              recommender: '', // 插码推荐码
              sceneId: '', // 大数据场景id
              textId: '', // 发送消息ID
              type: '', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
            },
          ],
        },
        {
          answerType: '4', // 常规菜单
          answerText: null,
          answerImage: null,
          commonMenu: {
            commonMenuType: '3',
            commonMenuList: [
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '回复慢',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '5',
              },
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '无法办理业务',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '5',
              },
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '答非所问',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '5',
              },
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '回复慢',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '5',
              },
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '无法办理业务',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '5',
              },
            ],
          },
          contentArea: null,
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '6', // 通用卡片（居中显示）
          answerText: null,
          answerImage: null,
          commonMenu: null,
          contentArea: {
            dialogType: '2', // "类型：1：大卡片、2：小卡片"
            contentAreaList: [
              {
                type: '1',
                title: '当前号码余额(元)',
                content: null,
                dataInfo: null,
                dataList: null,
                buttonList: null,
              },
              {
                type: '3',
                title: null,
                content: null,
                dataInfo: {
                  title: null,
                  value: '5.10',
                  valueColor: '#0e8cff',
                  tipsType: '1',
                  tipsList: [
                    {
                      title: '包含通用余额',
                      value: '2.10元',
                    },
                    {
                      title: '包含专用余额',
                      value: '3.00元',
                    },
                  ],
                },
                dataList: null,
                buttonList: null,
              },
              {
                type: '6',
                title: null,
                content: null,
                dataInfo: null,
                dataList: null,
                buttonList: null,
              },
              {
                type: '5',
                title: null,
                content: null,
                dataInfo: null,
                dataList: null,
                buttonList: [
                  {
                    buttonType: '1',
                    title: '查询余额',
                    link: 'https://www.baidu.com',
                  },
                  {
                    buttonType: '2',
                    title: '充值',
                    link: 'https://www.baidu.com',
                  },
                ],
              },
            ],
          },
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '6',
          answerText: null,
          answerImage: null,
          commonMenu: null,
          contentArea: {
            dialogType: '1',
            contentAreaList: [
              {
                type: '1',
                title: '2022年12月账单',
                content: null,
                dataInfo: null,
                dataList: [],
                buttonList: null,
              },
              {
                type: '4',
                title: null,
                content: null,
                dataInfo: null,
                dataList: [
                  {
                    title: '应付金额(元)',
                    value: '25.00',
                    valueColor: '#f04857',
                    connector: '=',
                    tipsType: '2',
                    tipsList: [
                      {
                        title: '本期已结清',
                        value: null,
                      },
                    ],
                  },
                  {
                    title: '实际消费(元)',
                    value: '25.00',
                    valueColor: '#333333',
                    connector: '-',
                    tipsType: null,
                    tipsList: null,
                  },
                  {
                    title: '缴费抵扣(元)',
                    value: '0.00',
                    valueColor: '#333333',
                    connector: null,
                    tipsType: null,
                    tipsList: null,
                  },
                ],
                buttonList: null,
              },
              {
                type: '6',
                title: null,
                content: null,
                dataInfo: null,
                dataList: null,
                buttonList: null,
              },
              {
                type: '5',
                title: null,
                content: null,
                dataInfo: null,
                dataList: null,
                buttonList: [
                  {
                    iconUrl: null,
                    link: 'http://wapjs.189.cn/tysh/pages/new_zd/oldZD.html?ztInterSource=500100&ticket=$ticket$',
                    linkType: '5',
                    title: '账单明细',
                    provinceCode: null,
                    recommender: null,
                    sceneId: null,
                    textId: null,
                    type: '2',
                    buttonType: '2',
                  },
                ],
              },
            ],
          },
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '6',
          answerText: null,
          answerImage: null,
          commonMenu: null,
          contentArea: {
            dialogType: '2',
            contentAreaList: [
              {
                type: '1',
                title: '本月账单',
                content: null,
                dataInfo: null,
                dataList: [],
                buttonList: null,
              },
              {
                type: '4',
                title: null,
                content: null,
                dataInfo: null,
                dataList: [
                  {
                    title: '实际消费(元)',
                    value: '1.67',
                    valueColor: '#0e8cff',
                    connector: null,
                    tipsType: null,
                    tipsList: null,
                  },
                ],
                buttonList: null,
              },
              {
                type: '6',
                title: null,
                content: null,
                dataInfo: null,
                dataList: null,
                buttonList: null,
              },
              {
                type: '5',
                title: null,
                content: null,
                dataInfo: null,
                dataList: null,
                buttonList: [
                  {
                    iconUrl: null,
                    link: 'http://wapjs.189.cn/tysh/pages/new_zd/oldZD.html?ztInterSource=500100&ticket=$ticket$',
                    linkType: '5',
                    title: '话费账单',
                    provinceCode: null,
                    recommender: null,
                    sceneId: null,
                    textId: null,
                    type: '2',
                    buttonType: '2',
                  },
                ],
              },
            ],
          },
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '7', // 搜索卡片（居中显示
          answerText: null,
          answerImage: null,
          commonMenu: null,
          contentArea: null,
          searchCard: {
            // 搜索卡片
            cardType: '1', // 卡片类型：1：服务卡片、2：生活卡片、3：商城卡片"
            highLight: '套餐', // 高亮字段
            provinceCode: '', // 省份、集团编码
            recommender: '', // 插码推荐码
            sceneId: '', // 大数据场景id
            title: '套餐服务', //	 标题
            subTitle: '', //	 副标题
            subTitleLink: '', //	 副标题跳转链接
            subTitleLinkType: '', // 副标题跳转类型
            searchList: [
              // 搜索结果列表
              {
                iconUrl:
                  'https://www.189.cn/images/2020/11/20/000000004598B8BA30E6474AB5C7D99D181059D7.png', // 图标地址
                link: 'http://wapjs.189.cn/mall/pages/newBusinessHall/index.html?ztInterSource=500100&ticket=$ticket$', // 跳转链接
                linkType: '1', // 跳转链接类型
                title: '5G套餐', //	 标题
                titleColor: '', // 标题颜色
                provinceCode: '', // 省份、集团编码
                recommender: '', // 插码推荐码
                sceneId: '', // 大数据场景id
                textId: '', // 发送消息ID
                type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
                traceData: '', // 打点数据
                id: '', // 数据ID
              },
              {
                iconUrl:
                  'https://www.189.cn/images/2020/11/16/00000000CE49079EB7E8401DA5EDCFCBFEE6B482.png', // 图标地址
                link: 'http://wapjs.189.cn/mall/pages/newBusinessHall/index.html', // 跳转链接
                linkType: '1', // 跳转链接类型
                title: '5G套餐', //	 标题
                titleColor: '', // 标题颜色
                provinceCode: '', // 省份、集团编码
                recommender: '', // 插码推荐码
                sceneId: '', // 大数据场景id
                textId: '', // 发送消息ID
                type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
                traceData: '', // 打点数据
                id: '', // 数据ID
              },
              {
                iconUrl:
                  'https://www.189.cn/images/2020/11/20/000000004598B8BA30E6474AB5C7D99D181059D7.png', // 图标地址
                link: '19', // 跳转链接
                linkType: '1', // 跳转链接类型
                title: '5G套餐', //	 标题
                titleColor: '', // 标题颜色
                provinceCode: '', // 省份、集团编码
                recommender: '', // 插码推荐码
                sceneId: '', // 大数据场景id
                textId: '', // 发送消息ID
                type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
                traceData: '', // 打点数据
                id: '', // 数据ID
              },
              {
                iconUrl:
                  'https://www.189.cn/images/2020/11/16/00000000CE49079EB7E8401DA5EDCFCBFEE6B482.png', // 图标地址
                link: '19', // 跳转链接
                linkType: '1', // 跳转链接类型
                title: '5G套餐', //	 标题
                titleColor: '', // 标题颜色
                provinceCode: '', // 省份、集团编码
                recommender: '', // 插码推荐码
                sceneId: '', // 大数据场景id
                textId: '', // 发送消息ID
                type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
                traceData: '', // 打点数据
                id: '', // 数据ID
              },
            ],
          },
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '7', // 搜索卡片（居中显示
          answerText: null,
          answerImage: null,
          commonMenu: null,
          contentArea: null,
          searchCard: {
            // 搜索卡片
            cardType: '2', // 卡片类型：1：服务卡片、2：生活卡片、3：商城卡片"
            highLight: '套餐', // 高亮字段
            provinceCode: '', // 省份、集团编码
            recommender: '', // 插码推荐码
            sceneId: '', // 大数据场景id
            title: '生活卡片', //	 标题
            subTitle: '', //	 副标题
            subTitleLink: '', //	 副标题跳转链接
            subTitleLinkType: '', // 副标题跳转类型
            searchList: [
              // 搜索结果列表
              {
                iconUrl: 'https://i.niupic.com/images/2023/04/20/alCb.png', // 图标地址
                link: '19', // 跳转链接
                linkType: '1', // 跳转链接类型
                title: '升级5G套餐享福利', //	 标题
                titleColor: '', // 标题颜色
                provinceCode: '', // 省份、集团编码
                recommender: '', // 插码推荐码
                sceneId: '', // 大数据场景id
                textId: '', // 发送消息ID
                type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
                traceData: '', // 打点数据
                id: '', // 数据ID
              },
              {
                iconUrl: 'https://i.niupic.com/images/2023/04/20/alCb.png', // 图标地址
                link: '19', // 跳转链接
                linkType: '1', // 跳转链接类型
                title: '5G套餐', //	 标题
                titleColor: '', // 标题颜色
                provinceCode: '', // 省份、集团编码
                recommender: '', // 插码推荐码
                sceneId: '', // 大数据场景id
                textId: '', // 发送消息ID
                type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
                traceData: '', // 打点数据
                id: '', // 数据ID
              },
              {
                iconUrl: 'https://i.niupic.com/images/2023/04/20/alCb.png', // 图标地址
                link: '19', // 跳转链接
                linkType: '1', // 跳转链接类型
                title: '5G套餐', //	 标题
                titleColor: '', // 标题颜色
                provinceCode: '', // 省份、集团编码
                recommender: '', // 插码推荐码
                sceneId: '', // 大数据场景id
                textId: '', // 发送消息ID
                type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
                traceData: '', // 打点数据
                id: '', // 数据ID
              },
            ],
          },
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '7', // 搜索卡片（居中显示
          answerText: null,
          answerImage: null,
          commonMenu: null,
          contentArea: null,
          searchCard: {
            // 搜索卡片
            cardType: '3', // 卡片类型：1：服务卡片、2：生活卡片、3：商城卡片"
            highLight: '套餐', // 高亮字段
            provinceCode: '', // 省份、集团编码
            recommender: '', // 插码推荐码
            sceneId: '', // 大数据场景id
            title: '商城卡片', //	 标题
            subTitle: '', //	 副标题
            subTitleLink: '', //	 副标题跳转链接
            subTitleLinkType: '', // 副标题跳转类型
            searchList: [
              // 搜索结果列表
              {
                iconUrl: 'https://i.niupic.com/images/2023/04/20/alCb.png', // 图标地址
                link: '19', // 跳转链接
                linkType: '1', // 跳转链接类型
                title: '套餐变更', //	 标题
                titleColor: '', // 标题颜色
                provinceCode: '', // 省份、集团编码
                recommender: '', // 插码推荐码
                sceneId: '', // 大数据场景id
                textId: '', // 发送消息ID
                type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
                traceData: '', // 打点数据
                id: '', // 数据ID
              },
              {
                iconUrl: 'https://i.niupic.com/images/2023/04/20/alCb.png', // 图标地址
                link: '19', // 跳转链接
                linkType: '1', // 跳转链接类型
                title: '5G套餐', //	 标题
                titleColor: '', // 标题颜色
                provinceCode: '', // 省份、集团编码
                recommender: '', // 插码推荐码
                sceneId: '', // 大数据场景id
                textId: '', // 发送消息ID
                type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
                traceData: '', // 打点数据
                id: '', // 数据ID
              },
              {
                iconUrl: 'https://i.niupic.com/images/2023/04/20/alCb.png', // 图标地址
                link: '19', // 跳转链接
                linkType: '1', // 跳转链接类型
                title: '5G套餐', //	 标题
                titleColor: '', // 标题颜色
                provinceCode: '', // 省份、集团编码
                recommender: '', // 插码推荐码
                sceneId: '', // 大数据场景id
                textId: '', // 发送消息ID
                type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
                traceData: '', // 打点数据
                id: '', // 数据ID
              },
            ],
          },
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        {
          answerType: '8', // 特殊卡片（居中显示）
          answerText: null,
          answerImage: null,
          commonMenu: null,
          contentArea: null,
          searchCard: null,
          specialCard: {
            iconUrl: '', // 图标地址
            link: '', // 跳转链接
            linkType: '', // 跳转链接类型
            title: '确认充值', //	 标题
            titleColor: '', // 标题颜色
            provinceCode: '', // 省份、集团编码
            recommender: '', // 插码推荐码
            sceneId: '', // 大数据场景id
            textId: '', // 发送消息ID
            type: '', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
            buttonType: '2', // 按钮样式（1：白底蓝字、2：蓝底白字）
            contentList: [
              {
                title: '充值号码',
                titleContent: '13371728454',
              },
              {
                title: '充值金额',
                titleContent: '2',
              },
            ],
          },
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
        // {
        //   answerType: '9', // 延迟直接跳转
        //   answerText: null,
        //   answerImage: null,
        //   commonMenu: null,
        //   contentArea: null,
        //   searchCard: null,
        //   specialCard: null,
        //   delayLink: {
        //     iconUrl: '', // 图标地址
        //     link: 'https://www.baidu.com?ticket=$ticket$',
        //     linkType: '2', // 跳转链接类型
        //     title: '好的，正在为您跳转', //	 标题
        //     provinceCode: '', // 省份、集团编码
        //     recommender: '', // 插码推荐码
        //     sceneId: '', // 大数据场景id
        //     textId: '', // 发送消息ID
        //     type: '2', // 按钮类型（1：发送消息、2：普通广告位跳转、3：通讯录选择、4：数字人-断开连接、5：选中非选中、6：拨打电话）
        //     delayTime: '2000', // 延迟时长（单位：ms）
        //   },
        //   interActiveImage: null,
        //   welcomeMenuList: null,
        //   evaluateMenuList: null,
        // },
        // {
        //   answerType: '10', // 互动动效
        //   answerText: null,
        //   answerImage: null,
        //   commonMenu: null,
        //   contentArea: null,
        //   searchCard: null,
        //   specialCard: null,
        //   delayLink: null,
        //   interActiveImage: {
        //     // 互动动效
        //     imageUrl: '', // 图片url
        //     playTime: '2000', //	 播放时长（单位：ms）
        //     showType: '', // 显示位置，1显示在下面，2显示在上面手部开始（默认当1处理）
        //   },
        //   welcomeMenuList: null,
        //   evaluateMenuList: null,
        // },
        {
          answerType: '13',
          categoryReplyCard: {
            highLight: '流量',
            topDataListTitle: '服务',
            topDataList: [
              {
                iconUrl:
                  'https://www.189.cn/images/2020/11/16/00000000CE49079EB7E8401DA5EDCFCBFEE6B482.png',
                id: '98FFCC9AFCE90614E053B61410AC7DF720002',
                link: '83006',
                linkType: '1',
                title:
                  '流量查询流量查询流量查询流量查询流量查询流量查询流量查询流量查询流量查询',
                traceData:
                  '{"searchType":"1","docId":"1660928880471883776","logid":"2887342066-1685522708720"}',
                type: '2',
              },
              {
                iconUrl:
                  'https://www.189.cn/images/2020/12/17/00000000EE3A4E1B7A3D4DD8A890E232BEC0DE97.png',
                id: '923EEEBAFE315EE4E053B81410AC3B3C20002',
                link: 'https%3A%2F%2Fwww.189.cn%2Fclient%2Fwap%2Fwapproject%2Fnewwap%2FunsubscribeFlow%2FunsubscribeFlow_list.html%3Fct%3D1%26ticket%3D%24ticket%24',
                linkType: '5',
                title: '流量包退订',
                traceData:
                  '{"searchType":"1","docId":"1646806089342185560","logid":"2887342066-1685522708720"}',
                type: '2',
              },
              {
                iconUrl:
                  'https://www.189.cn/images/2020/12/17/0000000032EE9F48A90C4735A086AA9CCA897F77.png',
                id: 'C3AADDA01592374AE053B81410ACD29720002',
                link: 'https%3A%2F%2Fwww.189.cn%2Fclient%2Fwap%2Fwapproject%2Fwapclient%2Fflowhistory%2Fflowhistory_index.html%3Fticket%3D%24ticket%24%26cmpid%3Dcxbl-llsyls-Android',
                linkType: '5',
                title: '流量使用历史',
                traceData:
                  '{"searchType":"1","docId":"1660928886704619520","logid":"2887342066-1685522708720"}',
                type: '2',
              },
              {
                iconUrl:
                  'https://www.189.cn/images/2020/12/17/000000003D8198C33D594E4FA1559845C1462C22.png',
                id: 'A25A6D304CB95D1EE053B81410AC5DE320002',
                link: '100009',
                linkType: '1',
                title: '流量包订购',
                traceData:
                  '{"searchType":"6","docId":"1569726511829639234","logid":"2887342066-1685522708720"}',
                type: '2',
              },
              {
                iconUrl:
                  'https://www.189.cn/images/2020/12/17/000000003D8198C33D594E4FA1559845C1462C22.png',
                id: 'A25A6D304CB95D1EE053B81410AC5DE320002',
                link: '100009',
                linkType: '1',
                title: '流量包订购',
                traceData:
                  '{"searchType":"6","docId":"1569726511829639234","logid":"2887342066-1685522708720"}',
                type: '2',
              },
            ],
            categoryDataListTitle: '生活',
            categoryDataList: [
              {
                iconUrl:
                  'https://w.189.cn/bigdata/2023/2/1/111675218710183450.png',
                id: '13075520002',
                link: 'https%3A%2F%2Fwapbj.189.cn%2Fwap2017%2Findex%2Fsso_login.html%3Fticket%3D%24ticket%24%26imei%3D%24imei%24%26IMurl%3D253246696E6465782532467072654465706F736974486967685069635F636865636B2E68746D6C25334663616D706169676E4964253344313636393138353731343733373638323125323676657273696F6E253344563125323675746D5F636825334468675F61707025323675746D5F73636825334468675F77645F7764667725323675746D5F6166253344626A',
                linkType: '5',
                title: '特惠流量语音包',
                label:
                  'http://www.189.cn/client/iconUrl/searchLabel_activity.png',
                traceData:
                  '{"searchType":"2","docId":"1621041125065818177","logid":"2887342066-1685522708720"}',
                type: '2',
              },
              {
                iconUrl:
                  'https://w.189.cn/bigdata/2023/2/1/111675218710183450.png',
                id: '13075520002',
                link: 'https%3A%2F%2Fwapbj.189.cn%2Fwap2017%2Findex%2Fsso_login.html%3Fticket%3D%24ticket%24%26imei%3D%24imei%24%26IMurl%3D253246696E6465782532467072654465706F736974486967685069635F636865636B2E68746D6C25334663616D706169676E4964253344313636393138353731343733373638323125323676657273696F6E253344563125323675746D5F636825334468675F61707025323675746D5F73636825334468675F77645F7764667725323675746D5F6166253344626A',
                linkType: '5',
                title:
                  '特惠流量语音包特惠流量语音包特惠流量语音包特惠流量语音包特惠流量语音包特惠流量语音包特惠流量语音包特惠流量语音包特惠流量语音包',
                label:
                  'http://www.189.cn/client/iconUrl/searchLabel_activity.png',
                traceData:
                  '{"searchType":"2","docId":"1621041125065818177","logid":"2887342066-1685522708720"}',
                type: '2',
              },
            ],
            findMoreBean: {
              title: '查看更多',
              link: '{"sceneType":"1","source":"","keyWord":"流量"}',
              linkType: '50',
              type: '2',
            },
          },
        },
        {
          answerType: '14',
          marketingCard: {
            title: '活动',
            activityList: [
              {
                iconUrl:
                  'https://zsc.189.cn/bigdata/2023/4/20/111681999697050892.png',
                link: 'http://www.baidu.com',
                linkType: '2',
                provinceCode: '609001',
                recommender:
                  'cc-010001002000.rmc-hg_cxbl_tpsx.fd-2.od-1.eoc-1977600385',
                sceneId:
                  'hg_cxbl_tpsx##2732##default##1977600385##010001002000##3##N##15##1##N##N##19776',
                title: '数字人营销活动',
                type: '2',
              },
              {
                iconUrl:
                  'https://zsc.189.cn/bigdata/2023/4/20/111681999459376328.png',
                link: 'http://www.baidu.com',
                linkType: '2',
                provinceCode: '609001',
                recommender:
                  'cc-010001002000.rmc-hg_cxbl_tpsx.fd-2.od-2.eoc-1977600397',
                sceneId:
                  'hg_cxbl_tpsx##2732##default##1977600397##010001002000##3##N##15##2##N##N##19776',
                title: '数字人营销活动',
                type: '2',
              },
              {
                iconUrl:
                  'https://zsc.189.cn/bigdata/2023/4/20/111681999554677277.png',
                link: 'http://www.baidu.com',
                linkType: '2',
                provinceCode: '609001',
                recommender:
                  'cc-010001002000.rmc-hg_cxbl_tpsx.fd-2.od-3.eoc-1977600399',
                sceneId:
                  'hg_cxbl_tpsx##2732##default##1977600399##010001002000##3##N##15##3##N##N##19776',
                title: '数字人营销活动',
                type: '2',
              },
              {
                iconUrl:
                  'https://zsc.189.cn/bigdata/2023/4/20/111681999644146511.png',
                link: 'http://www.baidu.com',
                linkType: '2',
                provinceCode: '609001',
                recommender:
                  'cc-010001002000.rmc-hg_cxbl_tpsx.fd-2.od-4.eoc-1977600401',
                sceneId:
                  'hg_cxbl_tpsx##2732##default##1977600401##010001002000##3##N##15##4##N##N##19776',
                title: '数字人营销活动',
                type: '2',
              },
            ],
          },
        },

        {
          answerType: '15', // 常规菜单
          answerText: null,
          answerImage: null,
          commonMenu: {
            commonMenuType: '1',
            bottomButton: {
              iconUrl: 'http://www.189.cn/client/iconUrl/SZRYDTS.png',
              link: null,
              linkType: null,
              title: '不是我想要的',
              titleColor: '#FFFFFF',
              provinceCode: null,
              recommender: null,
              sceneId: null,
              textId: null,
              type: '1',
            },
            commonMenuList: [
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '手机信号',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '1',
              },
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '宽带资费',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '1',
              },
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: '固话网络',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '1',
              },
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: 'APP客服机器人',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '1',
              },
              {
                iconUrl: null,
                link: null,
                linkType: null,
                title: 'APP人工客服',
                titleColor: null,
                provinceCode: null,
                recommender: null,
                sceneId: null,
                textId: null,
                type: '1',
              },
            ],
          },
          contentArea: null,
          searchCard: null,
          specialCard: null,
          delayLink: null,
          interActiveImage: null,
          welcomeMenuList: null,
          evaluateMenuList: null,
        },
      ],
      recommendList: [
        // 随销位列表
        {
          id: null,
          content: null,
          actionParam: null,
          answer: null,
          iconUrl: 'https://i.niupic.com/images/2023/04/20/alCb.png',
          link: 'https://www.baidu.com?ticket=$ticket$',
          linkType: '2',
          title: '充值-浮窗-Android',
        },
      ],
      intention: '创建数字人链接', // 意图
      intentionAction: 'A_U_Hello_O', // 意图动作
      intentionType: null, // 意图类型 0搜索 1小知 2闲聊 3卡片 4.多轮 9 未识别
      replayMsg: '您好，我是电信小翼 您可以对我说', // 重播文本
      voiceMsg: null, // 音频文本
    },
  },
}

export default mockResponse
