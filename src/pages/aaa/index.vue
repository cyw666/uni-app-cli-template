<template>
  <view class="test">
    <text>测试页面</text>
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
</script>

<style lang="scss">
.test {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
}
</style>
