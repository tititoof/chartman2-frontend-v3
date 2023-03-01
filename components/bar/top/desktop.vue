<template>
  <v-btn-toggle v-model="toggleMenu" class="hidden-sm-and-down px-12">
    <v-btn
      v-for="(item, i) in visibledItems"
      :key="i"
      router
      :to="item.route"
      min-width="180"
      max-width="180"
      selected-class="blue"
      variant="plain"
      color="primary"
    >
      {{ $t(item.name) }}
    </v-btn>
  </v-btn-toggle>
</template>

<script setup lang="ts">
// Barmenu type
import { useMenuStore } from "~/store/menu";
import { storeToRefs } from "pinia";

const menuStore = useMenuStore();
const { visibledItems } = storeToRefs(menuStore);
const toggleMenu = ref(null);
</script>

