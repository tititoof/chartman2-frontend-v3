<template>
  <v-app-bar color="primary-container" density="compact">
    <template v-slot:prepend>
      <v-avatar
        color="primary-container"
        size="42"
        rounded="0"
        :image="src"
        @click="backToHomePage"
      />
    </template>

    <v-app-bar-title>
      {{ $t('global.name') }}
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn :icon="mdiThemeLightDark" @click="toggleTheme" />
      <v-btn :icon="mdiDotsVertical" />
    </template>
  </v-app-bar>
</template>
<script setup>
import { mdiDotsVertical, mdiThemeLightDark } from '@mdi/js'
import { useUsersStore } from '~/store/usersStore'

const router = useRouter()
const usersStore = useUsersStore()
const src = ref('/img/android-chrome-192x192.png')

const toggleTheme = () => {
  usersStore.toggleDarkTheme()
}

const backToHomePage = () => {
  router.push({ path: "/" })
}
</script>
