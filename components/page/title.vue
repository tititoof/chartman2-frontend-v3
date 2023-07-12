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
        :icon="mdiScaleBalance"
      />
      <span class="text-h6 font-weight-light align-center pl-2">
        {{ props.title }}
      </span>
    </v-col>
  </v-row>
</template>
<script setup>
import { mdiScaleBalance } from '@mdi/js'

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
