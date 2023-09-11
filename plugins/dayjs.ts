// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dayjs, { type Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js'
import 'dayjs/locale/fr'

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.locale('fr')
  dayjs.extend(relativeTime)

  nuxtApp.provide('dayjs', dayjs)
})

// @ts-ignore
declare module '#app' {
  interface NuxtApp {
    $dayjs: dayjs.Dayjs
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
  }
}