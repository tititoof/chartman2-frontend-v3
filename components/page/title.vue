<template>
  <v-row class="d-flex">
    <v-col
      cols="12"
      width="100%"
      class="px-12 d-flex"
    >
      <v-icon
        size="x-large"
        left
        :icon="icon"
      />
      <span class="text-h6 font-weight-light align-center pl-2">
        {{ props.title }}
      </span>
    </v-col>
  </v-row>
</template>
<script setup>
  import {
    mdiScaleBalance,
    mdiLoginVariant,
    mdiAlphaXCircleOutline,
    mdiGauge,
    mdiAccount,
    mdiDomain
  } from '@mdi/js'

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'mdiAlphaXCircleOutline',
    },
  })

  const icon = computed(() => {
    switch (props.icon) {
      case 'mdiScaleBalance':
        return mdiScaleBalance
      case 'mdiLoginVariant':
        return mdiLoginVariant
      case 'mdiAlphaXCircleOutline':
        return mdiAlphaXCircleOutline
      case 'mdiGauge':
        return mdiGauge
      case 'mdiAccount':
        return mdiAccount
      case 'mdiDomain':
        return mdiDomain
    }
  })
</script>
