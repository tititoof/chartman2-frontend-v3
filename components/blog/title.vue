<template>
  <v-container>
    <v-row class="d-flex">
      <v-col cols="12" sm="12" class="d-flex justify-center">
        <div>
          <v-icon
            role="img"
            size="300"
            :icon="icon"
            color="red"
            class="justify-center"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col cols="12" sm="12" class="d-flex text-h4 justify-center">
        {{ title }}
      </v-col>
    </v-row>
    <v-row class="d-flex">
      <v-col
        cols="12"
        sm="12"
        class="d-flex text-subtitle-1 justify-center pt-2"
      >
        {{ subtitle }}
      </v-col>
    </v-row>

    <button-article />
  </v-container>
</template>
<script setup>
import { mdiLanguageRubyOnRails, mdiNuxt } from '@mdi/js'

const props = defineProps(['title', 'icon', 'subtitle'])

const icon = computed(() => {
  switch (props.icon) {
    case 'mdiLanguageRubyOnRails':
      return mdiLanguageRubyOnRails
    case 'mdiNuxt':
      return mdiNuxt
  }
})
</script>
