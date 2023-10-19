<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" @click="handleClick" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="text-area">
      <text class="title">{{ isVoiceEnable }}</text>
    </view>

    <uni-badge text="1"></uni-badge>
    <uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { isVoiceEnable, chatList } = storeToRefs(appStore)
const { setVoiceEnable, setChatList } = appStore

const title = ref('This is a plugin page! ')
onLoad(() => {
  console.log('isVoiceEnable', isVoiceEnable.value)
  console.log('chatList', chatList.value)
})

function handleClick() {
  setVoiceEnable(true)
  setChatList([{ answerType: '-1', answerText: { answerText: '111111111' } }])
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
