<template>
  <section id="articles">
    <div class="py-12" />

    <v-container>
      <h2 class="text-h2 font-weight-bold mb-3 text-uppercase text-center">
        Articles
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1" />

        <v-divider />
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ type, src, color, text, title, link }, i) in articles"
          :key="i"
          cols="12"
          md="4"
        >
          <v-card class="mx-auto" max-width="300">
            <v-icon v-if="type === 'icon'" role="img" size="300" :icon="src" :color="color" />

            <v-img v-else color="primary" size="300" :image="src" />
            <v-card-title>
              <div class="font-weight-black text-uppercase">
                {{ title }}
              </div>
            </v-card-title>
            <v-card-text>
              <div class="title font-weight-light mb-5">{{ text }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="font-weight-black"
                color="primary"
                :nuxt="true"
                :to="link"
                variant="outlined"
                block
              >
              <span class="text-blue text-darken-1 font-weight-bold">
                Lire
              </span>
              </v-btn>
            </v-card-actions>
          </v-card>
          <div class="d-flex justify-center"></div>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12" />
  </section>
</template>
<script setup>
import { mdiLanguageRubyOnRails, mdiNuxt } from "@mdi/js";

const articles = [
  {
    type: "icon",
    src: mdiLanguageRubyOnRails,
    color: 'red',
    title: "Design pattern",
    text: "Mon design pattern utilisé au quotidien avec Ruby on Rails.",
    link: "/blog/my_ror_design",
  },
  {
    type: "icon",
    src: mdiNuxt,
    color: 'green',
    title: "Nuxt 3",
    text: "Petite explication sur le framework Nuxt.",
    link: "/blog/nuxt_3_introduction",
  },
];
</script>