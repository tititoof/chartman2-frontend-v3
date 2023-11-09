<template>
  <v-app-bar
    color="primary-container"
    density="compact"
  >
    <template #prepend>
      <v-avatar
        color="primary-container"
        size="42"
        rounded="0"
        :image="src"
        @click="backToHomePage"
      />
    </template>

    <v-app-bar-title>
      <client-only>
        <v-icon
          v-if="isConnected"
          :icon="mdiMenu"
          @click.stop="toggleLeftMenu"
        />
      </client-only>
      {{ $t('global.name') }}
    </v-app-bar-title>

    <template #append>
      <v-btn
        :icon="mdiThemeLightDark"
        @click="toggleTheme"
      />
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            :icon="mdiDotsVertical"
            v-bind="props"
          />
        </template>

        <v-list
          color="primary"
          bg-color="primary-container"
        >
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
          >
            <template #prepend>
              <v-icon
                size="large"
                :icon="item.icon"
              />
            </template>
            <v-list-item-title>
              <v-btn
                color="info"
                :nuxt="true"
                :to="item.to"
                variant="plain"
              >
                {{ $t(item.name) }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>
<script setup>
import { mdiDotsVertical, mdiThemeLightDark, mdiScaleBalance, mdiLoginVariant, mdiMenu } from '@mdi/js'
import { useUsersStore } from '~/store/usersStore'
import { useNavsStore } from '~/store/navsStore'

const router = useRouter()
const usersStore = useUsersStore()
const navsStore = useNavsStore()

const leftNav = computed(() => navsStore.isLeft)
const src = ref('/img/android-chrome-192x192.png')
const menuItems = reactive([
  {
    name: 'legal_notices.title',
    icon: mdiScaleBalance,
    to: '/legal_notices',
  },
  {
    name: 'auth.log_in',
    icon: mdiLoginVariant,
    to: '/auth/log_in',
  }
])

const isConnected = computed(() => usersStore.getIsConnected)

const toggleTheme = () => {
  usersStore.toggleDarkTheme()
}

const backToHomePage = () => {
  router.push({ path: '/' })
}

const toggleLeftMenu = () => {
  navsStore.setLeft(! leftNav.value)
}
</script>
