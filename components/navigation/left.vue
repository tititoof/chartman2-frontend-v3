<template>
  <client-only>
    <v-navigation-drawer
      v-model="drawer"
      color="primary-container"
      temporary
    >
      <v-list>
        <v-list-item
          :title="title"
          :subtitle="subtitle"
        >
          <template #prepend>
            <v-avatar
              v-if="storeAvatar !== null"
              :image="avatarImg"
            />
            <v-avatar
              v-else
              image="/img/gitea.png"
            />
          </template>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list
        density="compact"
        nav
      >
        <v-list-item
          v-for="(item, index) in menu"
          :key="index"
          :prepend-icon="item.icon"
          :value="item.name"
          :link="true"
          :to="item.to"
          @click="goTo(item.to)"
        >
          {{ $t(item.name) }}
        </v-list-item>
      </v-list>
      <template #append>
        <v-list
          density="compact"
          nav
        >
          <v-list-item
            :prepend-icon="mdiLogoutVariant"
            :title="$t('auth.log_out')"
            value="logOut"
          />
        </v-list>
      </template>
    </v-navigation-drawer>
  </client-only>
</template>

<script setup>
  import {
    mdiLogoutVariant,
    mdiFolderPoundOutline,
    mdiViewDashboard,
    mdiSourceBranchCheck,
    mdiDomain,
    mdiSourceRepositoryMultiple,
    mdiShieldBugOutline,
    mdiAccount,
  } from '@mdi/js'
  import { useNavsStore } from '~/store/navsStore'
  import { useProfilesStore } from '~/store/profilesStore'

  const { $services } = useNuxtApp()
  const router = useRouter()
  const navsStore = useNavsStore()
  const profilesStore = useProfilesStore()

  await useAsyncData(() => $services.profiles.getAvatar())

  const drawer = ref(false)
  const storeDrawer = computed(() => navsStore.isLeft)
  const profile = computed(() => profilesStore.get)
  const storeAvatar = computed(() => profilesStore.getAvatar)
  const avatarImg = (storeAvatar !== null) ? useObjectUrl(storeAvatar) : null

  const title = (profile.value !== null) ? `${profile.value.attributes.firstName} ${profile.value.attributes.lastName}` : ''
  const subtitle = (profile.value !== null) ? profile.value.attributes.nickname : ''
  const menu = ref([
    {
      name: 'home.dashboard',
      icon: mdiViewDashboard,
      to: '/home',
    },
    {
      name: 'home.organizations',
      icon: mdiDomain,
      to: '/home/organizations',
    },
    {
      name: 'home.projects',
      icon: mdiFolderPoundOutline,
      to: '/home',
    },
    {
      name: 'home.repositories',
      icon: mdiSourceRepositoryMultiple,
      to: '/home',
    },
    {
      name: 'home.source_check',
      icon: mdiSourceBranchCheck,
      to: '/home',
    },
    {
      name: 'home.code_quality',
      icon: mdiShieldBugOutline,
      to: '/home',
    },
    {
      name: 'home.profile',
      icon: mdiAccount,
      to: '/home/profiles',
    },
  ])

  watch(storeDrawer, (newVal) => {
    if (drawer.value !== newVal) {
      drawer.value = newVal
    }
  })

  watch(drawer, (newDrawerValue) => {
    navsStore.setLeft(newDrawerValue)
  })

  const goTo = (page) => {
    navsStore.setLeft(false)

    router.push({ path: page })
  }
</script>
