<template>
  <h2 class="display-2 font-weight-bold mb-3">
    {{ title }}
  </h2>

  <v-responsive class="mx-auto mb-12" width="56">
    <v-divider class="mb-1" />

    <v-divider />
  </v-responsive>
</template>

<script setup>
const props = defineProps(['title'])
</script>