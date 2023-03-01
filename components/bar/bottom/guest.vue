<template>
  <v-footer app min-height="72" color="#000000">
    <v-container>
      <v-row>
        <v-col cols="2" class="d-flex flex-wrap justify-start">
          <v-btn
            v-for="(s, i) in social"
            :key="i"
            :href="$sanitize(s.route)"
            color="#000000"
            icon
            target="_blank"
          >
            <v-icon color="#FFFFFF" size="large" :icon="s.icon" />
          </v-btn>
        </v-col>
        <v-col
          class="d-flex flex-wrap justify-end align-center flex-shrink-1 text-white"
          cols="10"
        >
          Created with&nbsp;
          <a :href="$sanitize('https://nuxt.com/')" target="_blank" class="text-blue"
            >NuxtJS</a
          >,&nbsp;
          <a :href="$sanitize('https://vuetifyjs.com/en/')" target="_blank" class="text-blue"
            >Vuetify</a
          >&nbsp; and&nbsp;
          <a :href="$sanitize('https://rubyonrails.org/')" target="_blank" class="text-blue"
            >RoR</a
          >&nbsp; -&nbsp;
          <a :href="$sanitize('https://iradesign.io')" target="_blank" class="text-blue"
            >Illustrations by IRA Design
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script setup lang="ts">
import { mdiFacebook, mdiLinkedin } from "@mdi/js";

const { $dayjs } = useNuxtApp();
// @ts-ignore
const currentYear: number = $dayjs().year();
const currentRangeYears: string =
  currentYear === 2022 ? "2022" : `2022-${currentYear}`;

const social = [
  {
    name: "Facebook",
    route: "https://www.facebook.com/christophe.hartmann1/",
    icon: mdiFacebook,
  },
  {
    name: "Linkedin",
    route: "https://www.linkedin.com/in/christophe-hartmann-3a297a42/",
    icon: mdiLinkedin,
  },
];
</script>
