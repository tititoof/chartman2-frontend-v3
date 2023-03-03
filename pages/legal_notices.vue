<template>
  <v-container class="d-flex py-12 h-100 w-100">
    <PartialLegalNotices />
  </v-container>
</template>
<script setup>
import { useHead } from '#imports'

useHead({
  charset: 'UTF-8',
  author: 'Christophe Hartmann',
  title: 'chartman2.fr legal notices page',
  description: 'Web artisan, loving ruby on rails, nuxtjs, ci/cd, gitea, jenkins, sonarsource, openproject, php, laravel, symfony',
  keywords: 'Christophe Hartmann, ruby, ruby on rails, nuxt, framework, ci/cd, gitea, sonarsource, openproject, jenkins'
})
</script>
