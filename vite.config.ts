import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
// @ts-ignore
import uniAxiosAdapter from '@uni-helper/axios-adapter/vite'

// https://vitejs.dev/config/

export default defineConfig(({ command, mode, ssrBuild }) => {
  // console.log(JSON.stringify(process.env))
  // 是否是插件
  const isPlugin = process.env.npm_lifecycle_script?.indexOf('--plugin') !== -1

  const commonPlugins = [
    uni(),
    Unocss(),
    uniAxiosAdapter({}),
    AutoImport({
      imports: ['vue'],
      dts: 'types/auto-imports.d.ts',
    }),
  ]

  const copyPlugin = viteStaticCopy({
    targets: [
      {
        src: `src/susceptor/${process.env.UNI_PLATFORM}`,
        dest: '../../',
        rename: `${process.env.UNI_PLATFORM}-plugin`,
      },
    ],
  })

  const copyH5Public = viteStaticCopy({
    targets: [
      {
        src: `public/**`,
        dest: './',
      },
    ],
  })

  const plugins = isPlugin
    ? [...commonPlugins, copyPlugin]
    : process.env.UNI_PLATFORM === 'h5'
    ? [...commonPlugins, copyH5Public]
    : commonPlugins
  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url)),
      },
    },
    // 配置前端服务地址和端口
    server: {
      host: '0.0.0.0',
      port: 8081,
      // 是否开启 https
      https: false,
      proxy: {
        // 测试
        // '/query': 'http://172.16.50.140:30477',
        // 生产
        '/query': 'https://digitalhuman.189.cn',
        // '/query': 'http://10.135.139.53:30477',
        // 本地
        // '/query': 'http://192.168.137.1:8082',
      },
    },
    // esbuild: {
    //   drop: ['console', 'debugger'],
    // },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true,
          // drop_console: false,
          // pure_funcs: ['console.log'],
        },
      },
      // Turning off brotliSize display can slightly reduce packaging time
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
    },
  }
})
