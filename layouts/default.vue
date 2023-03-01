<template>
  <v-app>
    <BarApp />

    <v-main class="d-flex align-center fill-height">
      <slot></slot>
      <LazyBarTopPhone />

      <BarBottomGuest />
    </v-main>
  </v-app>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { useUserStore } from "~/store/user";

const nuxtApp = useNuxtApp();
const userStore = useUserStore();
const { mobile } = useDisplay();

onMounted(() => {
  userStore.setIsPhone(mobile);
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>