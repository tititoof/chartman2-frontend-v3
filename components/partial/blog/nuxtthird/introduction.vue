<template>
  <div class="justify-center text-h3">
    <v-icon size="large" color="green" :icon="mdiVuejs" />
    Hello !
  </div>
  <div class="justify-center text-body-1 py-6">
    Aujourd'hui on va parler de Nuxt 3 <br />
  </div>

  <div class="justify-center text-h3">Framework de framework ?</div>

  <div class="justify-center text-body-1 py-6">
    Si tu es développeur web, tu as  certainement entendu parler de VueJS, un framework de JavaScript très populaire pour la création d'interfaces utilisateur dynamiques et réactives. Cependant, as-tu déjà entendu parler de NuxtJS ? NuxtJS est un framework construit sur VueJS, mais qui va plus loin en résolvant certains des problèmes que l'on peut rencontrer lorsque l'on travaille avec VueJS.
  </div>

  <div class="justify-center text-body-1 py-6">
    Comme on vient de le voir, NuxtJS est un framework de framework. En d'autres termes, il s'agit d'un framework construit sur le framework VueJS, qui utilise ses fonctionnalités principales tout en ajoutant ses propres fonctionnalités et outils pour résoudre les problèmes courants rencontrés lors du développement d'applications web avec VueJS.
  </div>

  <div class="justify-center text-h3">Pourquoi l'utiliser ?</div>
  <div class="justify-center text-body-1 py-6">
    L'un des problèmes les plus courants lors de la création d'applications Vue.js est la gestion des routes et des vues. VueJS propose bien sûr son propre système de routage (VueRouter), mais il peut être fastidieux de le configurer correctement pour chaque application. Avec NuxtJS, le routage est déjà intégré et configuré, ce qui nous permet de nous concentrer sur le développement de l'application plutôt que sur la configuration du routage.
  </div>

  <div class="justify-center text-body-1 py-6">
    NuxtJS offre également des fonctionnalités supplémentaires pour la gestion des composants, des fichiers statiques, des fichiers de configuration et plus encore. On peut ainsi se concentrer sur la création de notre application sans avoir à se soucier de la mise en place de ces éléments.
  </div>

  <div class="justify-center text-body-1 py-6">
    De plus, NuxtJS est facilement extensible grâce à son système de modules. De nombreux modules sont disponibles pour ajouter des fonctionnalités supplémentaires à l'application. Il est également possible de créer ses propres modules pour répondre à des besoins spécifiques.
  </div>

  <div class="justify-center text-h3">Typescript ?</div>
  <div class="justify-center text-body-1 py-6">
    Enfin, un autre avantage de NuxtJS est qu'il prend en charge TypeScript nativement. TypeScript est un langage de programmation qui permet de mieux typer son code JavaScript, ce qui améliore la lisibilité et la maintenabilité du code. NuxtJS prend en charge TypeScript dès le départ, ce qui facilite son intégration dans les projets.
  </div>

  <div class="justify-center text-h3">En conclusion</div>
  <div class="justify-center text-body-1 py-6">
    NuxtJS est un framework puissant qui simplifie considérablement le processus de développement d'applications web avec VueJS. Grâce à son routage intégré, à ses fonctionnalités supplémentaires et à sa prise en charge de TypeScript, les développeurs peuvent se concentrer sur la création de leur application plutôt que sur la configuration et la gestion des fonctionnalités de base de VueJS.
  </div>
</template>
<script setup>
import { mdiVuejs } from "@mdi/js";
</script>