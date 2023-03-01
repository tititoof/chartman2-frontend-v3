<template>
  <v-app-bar app color="white" elevation="1" height="80">
    <v-img
      src="/img/android-chrome-512x512.png"
      class="mx-3"
      contain
      max-width="48"
      width="100%"
    />

    <v-app-bar-title> chartman².fr </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn
      v-show="userStore.getIsPhone === true"
      variant="text"
      :icon="mdiDotsVertical"
      @click.stop="toggle"
    />
    <LazyBarTopDesktop v-show="userStore.getIsPhone === false" />
  </v-app-bar>
</template>

<script setup lang="ts">
import { mdiDotsVertical } from "@mdi/js";
import { useSidebarsStore } from "~/store/sidebars";
import { useUserStore } from "~/store/user";
import { useDisplay } from "vuetify";

const userStore = useUserStore();
const sidebarsStore = useSidebarsStore();
const toggle = () => {
  sidebarsStore.toggleBottom();
};

const { mobile } = useDisplay();

onMounted(() => {
  userStore.setIsPhone(mobile.value);
});
</script>
