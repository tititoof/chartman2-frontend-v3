<template>
  <v-footer app min-height="72" color="background">
    <v-container>
      <v-row>
        <v-col
          v-for="(s, i) in social"
          :key="i"
          cols="2"
          class="d-flex flex-wrap justify-start"
        >
          <v-btn
            :href="s.route"
            color="background"
            variant="flat"
            target="_blank"
            class="px-0"
          >
            <v-icon size="large" :icon="s.icon" />
          </v-btn>
        </v-col>
        <v-col
          class="d-flex flex-wrap justify-end align-center flex-shrink-1 text-white"
          cols="8"
        >
          <v-btn
            color="info"
            :nuxt="true"
            to="/legal_notices"
            variant="plain"
          >
            {{ $t("legal_notices.title") }}
          </v-btn>
          <template v-if="!mobile">
            Created with&nbsp;
            <template
              v-for="(s, i) in links"
              :key="i"
            >
              <a
                color="info"
                :href="s.href"
                target="_blank"
              >
                {{ s.name }}
              </a>
              <template v-if="i < links.length - 1">
                &nbsp;-&nbsp;
              </template>
            </template>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { mdiFacebook, mdiLinkedin } from "@mdi/js"
import { useTheme, useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const { $dayjs } = useNuxtApp()
// @ts-ignore
const currentYear: number = $dayjs().year();
const currentRangeYears: string =
  currentYear === 2022 ? "2022" : `2022-${currentYear}`

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
]

const links = [
  {
    name: 'NuxtJS',
    href: 'https://nuxt.com/',
  },
  {
    name: 'Vuetify',
    href: 'https://vuetifyjs.com/en/',
  },
  {
    name: 'RoR',
    href: 'https://rubyonrails.org/',
  },
  {
    name: 'Illustrations by IRA Design',
    href: 'https://iradesign.io',
  }
]
</script>