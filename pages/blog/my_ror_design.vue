<template>
  <v-responsive id="ror-design-introduction">

    <blog-title
      title="RoR design pattern"
      icon="mdiLanguageRubyOnRails"
      subtitle="Créé le 30 Septembre 2022"
    />

    <v-container>
      <partial-blog-myrordesign-introduction />

      <partial-blog-myrordesign-ror-design />

      <partial-blog-myrordesign-my-ror-design />

      <partial-blog-myrordesign-exemple />

      <partial-blog-myrordesign-conclusion />
    </v-container>
  </v-responsive>
</template>
<script setup>
import { useHead } from '#imports'


useHead({
  title: 'chartman2.fr - RoR - Design pattern',
  ogTitle: 'chartman2.fr - RoR - Design pattern',
  description:
    "Découvrez comment travailler avec Ruby on Rails, un framework web basé sur Ruby, en suivant les bonnes pratiques d'architecture et de développement - MVC, design patterns, services, procédures, serializer.",
  ogDescription:
    "Découvrez comment travailler avec Ruby on Rails, un framework web basé sur Ruby, en suivant les bonnes pratiques d'architecture et de développement - MVC, design patterns, services, procédures, serializer.",
  keywords:
    'Christophe Hartmann, Ruby on Rails, MVC, design patterns, structure de projet, services, procédures, serializer',
})
</script>
