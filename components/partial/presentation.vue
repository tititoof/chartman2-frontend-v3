

<template>
  <v-card id="hero" color="blue lighten-1">
    <v-img :min-height="imgHeight" src="/backgrounds/hero-2.svg" contain>
      <v-container class="d-flex align-self-center pt-12" fluid>
        <v-row align="center" class="mx-auto pt-12" justify="center">
          <v-col class="text-black text-center pt-12" cols="12" tag="h1">
            <span
              :class="[userStore.getIsPhone ? 'display-1' : 'display-2']"
              class="font-weight-light pb-4 align-self-center"
            >
              Bienvenu sur
            </span>

            <span
              :class="[userStore.getIsPhone ? 'display-3' : 'display-4']"
              class="font-weight-black"
            >
              chartman2.fr
            </span>
          </v-col>

          <v-btn
            class="align-self-end"
            fab
            variant="outlined"
            color="blue"
            :icon="mdiChevronDoubleDown"
            @click="useScroll('about-me')"
          >
          </v-btn>
        </v-row>
      </v-container>
    </v-img>
  </v-card>
</template>

<script setup>
import { useUserStore } from "~/store/user";
import { mdiChevronDoubleDown } from "@mdi/js";

const userStore = useUserStore();
const imgHeight = userStore.getIsPhone ? "45vh" : "70vh";
const goTo = (text) => console.log(text);
</script>