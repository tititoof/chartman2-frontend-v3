<template>
  <v-responsive id="nuxt_3_introduction" >
    <v-row>
      <v-col col="12">
        <div class="d-flex justify-center">
          <v-icon role="img" size="300" :icon="mdiNuxt" color="green" class="justify-center"/>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex text-h1 justify-center">Nuxt 3 - Introduction</div>
        <div class="d-flex text-subtitle-1 justify-center pt-2">
          Créé le 28 Février 2023
        </div>
      </v-col>
    </v-row>
    <v-container>
      <BlogNuxtthirdIntroduction />
    </v-container>
  </v-responsive>
</template>
<script setup>
import { mdiNuxt } from "@mdi/js";

</script>