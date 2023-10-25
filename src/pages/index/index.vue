<template>
  <view class="content">
    <image class="logo" src="@/static/logo.png" @click="handleClick" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view class="text-area">
      <text class="title">{{ isVoiceEnable }}</text>
    </view>
    <view text-green5 text-lg>Hello UnoCSS + Vue</view>
    <uni-badge text="1"></uni-badge>
    <uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>

    <view class="action">
      <button @click="() => execute()">execute</button>
      <button @click="() => abort()">abort</button>
      <button @click="link">跳转</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import { getSecondTicket } from '@/api/list'
import { useAxios } from '@vueuse/integrations/useAxios'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter'
import axios from 'axios'
axios.defaults.adapter = createUniAppAxiosAdapter()
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

const {
  data,
  error,
  response,
  isFinished,
  isAborted,
  isCanceled,
  isLoading,
  execute,
  abort,
} = useAxios('/posts/1', instance, {
  immediate: false,
})

const appStore = useAppStore()
const { isVoiceEnable, chatList } = storeToRefs(appStore)
const { setVoiceEnable, setChatList, setProvinceTicket } = appStore

const title = ref('This is a plugin page! ')
function handleClick() {
  setVoiceEnable(true)
  setChatList([{ answerType: '-1', answerText: { answerText: '111111111' } }])
}

function getProviceLinkTicket(phone: string | undefined) {
  if (!phone) return
  getSecondTicket(phone)
    .then((secondTicket) => {
      console.log('secondTicket', secondTicket)
      setProvinceTicket(secondTicket)
    })
    .catch((error) => error)
}

function link() {
  uni.redirectTo({
    url: '/pages/aaa/index?id=1',
  })
}

onLoad(() => {
  console.log('isVoiceEnable', isVoiceEnable.value)
  console.log('chatList', chatList.value)
  getProviceLinkTicket('15036116469')

  execute({
    params: {
      pid: '233',
    },
  })
})
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
