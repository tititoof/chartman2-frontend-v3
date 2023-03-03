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
import { useHead } from '#imports'
import { mdiNuxt } from "@mdi/js";

useHead({
  title: 'chartman2.fr - Nuxt 3 - Introduction',
  ogTitle: 'chartman2.fr - Nuxt 3 - Introduction',
  description: "Découvrez comment NuxtJS 3 simplifie la création d'applications web avec VueJS grâce à son routage intégré, ses fonctionnalités supplémentaires et sa prise en charge de TypeScript. Évitez les tracas de la configuration et concentrez-vous sur le développement de votre application avec NuxtJS 3",
  ogDescription: "Découvrez comment NuxtJS 3 simplifie la création d'applications web avec VueJS grâce à son routage intégré, ses fonctionnalités supplémentaires et sa prise en charge de TypeScript. Évitez les tracas de la configuration et concentrez-vous sur le développement de votre application avec NuxtJS 3",
  keywords: 'Christophe Hartmann, Nuxt 3, NuxtJS, VueJS, Introduction',
})
</script>