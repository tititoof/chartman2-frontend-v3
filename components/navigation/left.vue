<template>
  <v-navigation-drawer
    v-model="drawer"
    color="primary-container"
    temporary
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      />
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
      >
        <v-btn
          color="info"
          :nuxt="true"
          :to="item.to"
          variant="plain"
        >
          {{ $t(item.name) }}
        </v-btn>
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
          value="myfiles"
        />
      </v-list>
    </template>
  </v-navigation-drawer>
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

  const navsStore = useNavsStore()
  const drawer = ref(false)
  const storeDrawer = computed(() => navsStore.isLeft)
  const menu = reactive([
    {
      name: 'home.dashboard',
      icon: mdiViewDashboard,
      to: '/home',
    },
    {
      name: 'home.organizations',
      icon: mdiDomain,
      to: '/home',
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
    drawer.value = newVal
  })

  watch(drawer, (newVal) => {
    navsStore.setLeft(newVal)
  })
</script>
