<template>
  <v-card  color="grey-lighten-3" >
    <v-container id="features" class="text-center py-12">
      <h2 class="display-2 font-weight-bold mb-3">Mes compétences</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1" />

        <v-divider />
      </v-responsive>

      <section
        v-for="({ title, text, skill }, iSkills) in skills"
        :key="iSkills"
        class="pb-4"
      >
        <h3 class="font-weight-bold mb-3 align-justify">
          {{ title }}
        </h3>
        <span class="subtitle-1">
          {{ text }}
        </span>
        <v-row class="d-flex justify-space-around">
          <v-col
            v-for="({ type, src, title, text }, iSkill) in skill"
            :key="iSkill"
            cols="12"
            md="3"
          >
            <v-card class="py-12 px-4" color="grey-lighten-5" flat max-height="300" min-height="300">
              <v-avatar v-if="type === 'icon'" color="primary" size="88" rounded="2">
                <v-icon size="x-large">{{ src }}</v-icon>
              </v-avatar>
              <v-avatar v-else color="primary" size="88" rounded="2">
                <v-avatar color="primary" size="42" rounded="2" :image="src" />
              </v-avatar>
              <v-card-title
                class="justify-center text-subtitle-1 font-weight-black text-uppercase"
              >
                {{ title }}
              </v-card-title>
              <v-card-text class="subtitle-1"> {{ text }} </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </v-card>
</template>
<script setup>
import { mdiVuejs } from "@mdi/js";
import { mdiNuxt } from "@mdi/js";
import { mdiVuetify } from "@mdi/js";
import { mdiLanguageRuby } from "@mdi/js";
import { mdiLanguageRubyOnRails } from "@mdi/js";
import { mdiDatabase } from "@mdi/js";
import { mdiLaravel } from '@mdi/js';
import { mdiSymfony } from '@mdi/js';

const skills = [
  {
    title: "Frontend",
    text: "Tous les éléments du site que l’on voit à l’écran et avec lesquels on peut interagir. Ces éléments sont composés de HTML, CSS et de Javascript contrôlés par le navigateur web de l’utilisateur.",
    skill: [
      {
        type: "icon",
        src: mdiVuejs,
        title: "VueJS",
        text: "Progressive JavaScript framework",
      },
      {
        type: "icon",
        src: mdiNuxt,
        title: "NuxtJS",
        text: "Frontend framework",
      },
      {
        type: "icon",
        src: mdiVuetify,
        title: "Vuetify",
        text: "Material design framework",
      },
    ],
  },
  {
    title: "Backend",
    text: "C'est la partie invisible pour les visiteurs mais qui donne vie au site. Le backend conserve toutes les données du webmaster et de ses clients, un peu comme un grand tableau. les langages comme PHP, Ruby, Python, SQL etc...",
    skill: [
      {
        type: "icon",
        src: mdiLanguageRuby,
        title: "Ruby",
        text: "Dynamic language",
      },
      {
        type: "icon",
        src: mdiLanguageRubyOnRails,
        title: "Ruby on Rails",
        text: "Web framework",
      },
      {
        type: "icon",
        src: mdiLaravel,
        title: "Laravel",
        text: "Web framework",
      },
      {
        type: "icon",
        src: mdiSymfony,
        title: "Symfony",
        text: "Web framework",
      },
      {
        type: "icon",
        src: mdiDatabase,
        title: "Database design",
        text: "MySQL / PostgreSQL",
      },
    ],
  },
  {
    title: "CI/CD",
    text: "L'intégration continue (CI) est un ensemble de pratiques utilisées en génie logiciel consistant à vérifier à chaque modification de code source que le résultat des modifications ne produit pas de régression dans l'application développée. Le déploiement continu ou Continuous deployment (CD) en anglais, est une approche d'ingénierie logicielle dans laquelle les fonctionnalités logicielles sont livrées fréquemment par le biais de déploiements automatisés.",
    skill: [
      {
        type: "image",
        src: "/img/gitea.png",
        title: "Gitea",
        text: "Code hosting",
      },
      {
        type: "image",
        src: "/img/jenkins.png",
        title: "Jenkins",
        text: "Automation",
      },
      {
        type: "image",
        src: "/img/sonarqube.png",
        title: "SonarQube",
        text: "Code quality and security",
      },
      {
        type: "image",
        src: "/img/openproject.jpg",
        title: "Openproject",
        text: "Project managment",
      },
    ],
  },
];
</script>