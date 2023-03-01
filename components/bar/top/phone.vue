<template>
  <v-navigation-drawer
    location="bottom"
    v-model="showDrawer"
  >
    <v-list color="dark" shaped>
      <v-list-item
        v-for="(item, key) in visibledItems"
        :key="key"
        :to="item.route"
        color="purple accent-3"
      >
        <v-list-item-title> {{ $t(item.name) }} </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useSidebarsStore } from "~/store/sidebars";
import { useMenuStore } from "~/store/menu";
import { storeToRefs } from "pinia";
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const sidebarsStore = useSidebarsStore();
const menuStore = useMenuStore()
const sidebarsRef = storeToRefs(useSidebarsStore());
const showDrawer = ref(sidebarsRef.bottom);
const visibledItems = computed(() => menuStore.visibledItems);
</script>