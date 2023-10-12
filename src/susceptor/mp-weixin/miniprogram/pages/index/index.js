const plugin = requirePlugin('digital-human-plugin')
Page({
  data: {},
  onLoad() {
    // 调用插件 export 的方法
    plugin.sayHello('Plugin')
  },
})
