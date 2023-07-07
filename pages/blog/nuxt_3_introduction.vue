<template>
  <v-responsive id="nuxt-3-introduction">
    <blog-title
      title="Nuxt 3 - Introduction"
      icon="mdiNuxt"
      subtitle="Créé le 28 Février 2023"
    />
    <v-container>
      <partial-blog-nuxtthird-introduction />
    </v-container>
  </v-responsive>
</template>
<script setup>
import { useHead } from '#imports'

useHead({
  title: 'chartman2.fr - Nuxt 3 - Introduction',
  ogTitle: 'chartman2.fr - Nuxt 3 - Introduction',
  description:
    "Découvrez comment NuxtJS 3 simplifie la création d'applications web avec VueJS grâce à son routage intégré, ses fonctionnalités supplémentaires et sa prise en charge de TypeScript. Évitez les tracas de la configuration et concentrez-vous sur le développement de votre application avec NuxtJS 3",
  ogDescription:
    "Découvrez comment NuxtJS 3 simplifie la création d'applications web avec VueJS grâce à son routage intégré, ses fonctionnalités supplémentaires et sa prise en charge de TypeScript. Évitez les tracas de la configuration et concentrez-vous sur le développement de votre application avec NuxtJS 3",
  keywords: 'Christophe Hartmann, Nuxt 3, NuxtJS, VueJS, Introduction',
})
</script>
