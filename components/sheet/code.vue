<template>
  <v-sheet
    class="d-flex align-center mx-auto py-2 px-3 mb-2"
    elevation="4"
    min-height="30"
    rounded
    color="secondary"
    width="100%"
  >
    <client-only>
      <!DOCTYPE html>
      <html
        :class="storeThemeDark === false ? 'light' : 'dark'"
        style="overflow-y: initial"
        lang="fr"
        xml:lang="fr"
      >
        <ContentDoc
          :path="props.path"
          unwrap="p"
          style="width: 85vw;overflow-x: auto; white-space: nowrap"
        />
      </html>
    </client-only>
  </v-sheet>
</template>
<script setup>
import { useUsersStore } from '~/store/usersStore'

const usersStore = useUsersStore()

const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})

const storeThemeDark = computed(() => usersStore.isDarkTheme)
</script>
