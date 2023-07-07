<template>
  <v-row>
    <v-col cols="12" sm="12">
      <div class="justify-center text-h3">
        <v-icon size="large" color="red">{{ mdiLanguageRuby }}</v-icon>
        Hello !
      </div>
      <p class="justify-center text-body-1 py-6 px-2">
        Pour mon premier article, je vais vous parler de la façon dont je travaille
        avec Ruby on Rails.<br />
        Ruby on Rails (RoR) est un framework web basé sur ... Ruby. (Ruby => Ruby on
        Rails)<br />
        Il utilise l'architecture MVC (Modèle-vue-contrôleur).<br />
        Pour plus d'informations sur le MVC n'hésitez pas à visiter les sites
        <a
          :href="
            $sanitize(
              'https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur'
            )
          "
          target="_blank"
          >Wikipédia</a
        >
        <br />
        Ruby est un langage de programmation que j'affectionne pour sa synaxe, son
        élégance (<a
          :href="$sanitize('https://www.ruby-lang.org/fr/')"
          target="_blank"
          >Ruby lang</a
        >)<br />
        En fonction du besoin, on peut utiliser plusieurs
        <a
          :href="$sanitize('https://refactoring.guru/fr/design-patterns/ruby')"
          target="_blank"
          >design patterns</a
        >
        avec Ruby on Rails<br />
      </p>
    </v-col>
  </v-row>
</template>
<script setup>
import { mdiLanguageRuby } from '@mdi/js'
</script>
