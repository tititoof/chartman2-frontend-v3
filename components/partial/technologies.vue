<template>
  <section id="stats">
    <v-parallax
      :height="userStore.getIsPhone ? 700 : 500"
      src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    >
      <v-container class="">
        <v-row class="d-flex justify-space-evenly pt-12">
          <v-col
            v-for="{ value, title, url } of stats"
            :key="title"
            cols="12"
            md="3"
            class="text-center "
          >
            <div class="text-h3 text-white font-weight-black mb-4 pt-12 justify-center">
              {{ value }}
              <v-icon color="yellow" size="24" :icon="mdiStar" />
            </div>

            <v-btn color="white" :href="url" outlined large target="_blank" variant="outlined">
              <span class="white-text text-darken-1 font-weight-bold">
                {{ title }}
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>
<script setup>
import { useUserStore } from "~/store/user";
import { mdiStar } from "@mdi/js";

const userStore = useUserStore();
const stats = [
  {
    value: "199k+",
    title: "VueJS",
    url: "https://github.com/vuejs/vue",
  },
  {
    value: "41k+",
    title: "NuxtJS",
    url: "https://github.com/nuxt/nuxt.js/",
  },
  {
    value: "19k+",
    title: "Ruby",
    url: "https://github.com/ruby/ruby",
  },
  {
    value: "51k+",
    title: "Ruby on Rails",
    url: "https://github.com/rails/rails",
  },
  {
    value: "72.6k+",
    title: "Laravel",
    url: "https://github.com/laravel/laravel"
  },
  {
    value: "28k+",
    title: "Symfony",
    url: "https://github.com/symfony/symfony"
  },
];
</script>
