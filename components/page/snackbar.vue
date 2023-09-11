<template>
  <v-snackbar
    v-model="snackbar"
    :color="category"
    :timeout="4000"
    location="top"
  >
    <v-icon :icon="icon" />
    {{ message }}

    <template v-slot:actions>
      <v-btn
        density="compact"
        :icon="mdiCloseCircle"
        @click="handleCloseClick"
      />
    </template>
  </v-snackbar>
</template>
<script setup>
  import {
    mdiCloseCircle,
    mdiCheckCircle,
    mdiAlertCircle,
    mdiInformation,
  } from '@mdi/js'
  import { useSnackbarStore } from '~/store/snackbarStore'

  const { t } = useI18n()
  const snackbarStore = useSnackbarStore()
  const snackbar = computed({
    get: () => snackbarStore.getShow,
    set: (show) => snackbarStore.setShow(show),
  })
  const message = computed(() => t(snackbarStore.getMessage))
  const category = computed(() => snackbarStore.getCategory)
  const icon = computed(() => {
    switch (category.value) {
      case 'success':
        return mdiCheckCircle
      case 'error':
        return mdiAlertCircle
      case 'info':
        return mdiInformation
    }
  })

  const handleCloseClick = () => {
    snackbarStore.setShow(false)
  }
</script>
