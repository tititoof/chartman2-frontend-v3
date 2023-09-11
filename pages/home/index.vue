<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container class="py-12">
      <page-title
        :title="$t('home.dashboard')"
        icon="mdiGauge"
        subtitle=""
      />
    </v-container>
  </v-row>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
})
</script>