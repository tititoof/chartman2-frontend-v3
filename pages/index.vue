<template>
  <v-responsive>
    <PartialPresentation />
    <PartialAboutMe />
    <PartialSkills />
    <PartialTechnologies />
    <PartialArticles />
  </v-responsive>
</template>
<script setup>
import { useHead } from '#imports'

useHead({
  charset: 'UTF-8',
  author: 'Christophe Hartmann',
  title: 'chartman2.fr - Site de Christophe Hartmann, artisan en développement web',
  description: "Découvrez le site de Christophe Hartmann, passionné de judo et d'informatique. Consultez ses compétences en développement frontend et backend avec VueJS, NuxtJS, Ruby on Rails, Laravel, Symfony, MySQL et PostgreSQL. Apprenez-en plus sur son parcours et sa méthode de travail.",
  keywords: ' Christophe Hartmann, judo, informatique, développement web, frontend, backend, VueJS, NuxtJS, Ruby on Rails, Laravel, Symfony, MySQL, PostgreSQL, CI/CD, Gitea, Jenkins, SonarQube, Openproject, design pattern'
})
</script>
