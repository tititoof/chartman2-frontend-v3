<template>
  <client-only>
    <v-footer
      app
      min-height="72"
      color="background"
    >
      <v-container>
        <v-row>
          <v-col
            cols="4"
            class="d-flex flex-wrap justify-start"
          >
            <v-btn-group
              v-for="(s, i) in social"
              :key="i"
            >
              <v-btn
                :href="s.route"
                color="background"
                variant="flat"
                target="_blank"
                size="small"
                class="px-0"
              >
                <v-icon
                  size="large"
                  :icon="s.icon"
                />
              </v-btn>
            </v-btn-group>
          </v-col>
          <v-col
            cols="4"
            class="align-self-center text-center"
          >
            {{ currentRangeYears }}
          </v-col>
          <v-col
            v-if="!mobile"
            class="d-flex flex-wrap justify-end align-center flex-shrink-1 text-white"
            cols="4"
          >
            <v-btn-group
              v-for="(s, i) in links"
              :key="i"
            >
              <v-btn
                :href="s.href"
                color="background"
                variant="flat"
                target="_blank"
                size="small"
                class="px-0"
              >
                <v-icon
                  size="large"
                  :icon="s.icon"
                />
              </v-btn>
            </v-btn-group>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </client-only>
</template>

<script setup lang="ts">
import { mdiFacebook, mdiLinkedin, mdiNuxt, mdiLanguageRubyOnRails, mdiVuetify } from "@mdi/js"
import { useDisplay } from 'vuetify'

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
    icon: mdiNuxt,
    href: 'https://nuxt.com/',
  },
  {
    name: 'Vuetify',
    icon: mdiVuetify,
    href: 'https://vuetifyjs.com/en/',
  },
  {
    name: 'RoR',
    icon: mdiLanguageRubyOnRails,
    href: 'https://rubyonrails.org/',
  },
  // {
  //   name: 'Illustrations by IRA Design',
  //   icon: '',
  //   href: 'https://iradesign.io',
  // }
]
</script>