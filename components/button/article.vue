<template>
  <v-row class="d-flex">
    <v-col
      cols="12"
      sm="12"
      class="d-flex text-subtitle-1 justify-space-evenly pt-2"
    >
      <v-btn
        to="/"
        variant="tonal"
        color="info"
      >
        <v-icon :icon="mdiHome" />
      </v-btn>
      <v-btn
        to="/articles"
        variant="tonal"
        color="info"
      >
        <v-icon :icon="mdiFileDocumentMultiple" />
      </v-btn>
    </v-col>
  </v-row>
</template>
<script setup>
import { mdiHome, mdiFileDocumentMultiple } from '@mdi/js'
</script>
