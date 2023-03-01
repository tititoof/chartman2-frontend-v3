<template>
  <v-responsive id="ror-design-introduction" >
    <v-row>
      <v-col col="12">
        <div class="d-flex justify-center">
          <v-icon role="img" size="300" :icon="mdiLanguageRubyOnRails" color="red" class="justify-center"/>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex text-h1 justify-center">Design pattern</div>
        <div class="d-flex text-subtitle-1 justify-center pt-2">
          Créé le 30 Septembre 2022
        </div>
      </v-col>
    </v-row>
    <v-container>
      <BlogMyrordesignIntroduction />
      <BlogMyrordesignRorDesign />
      <BlogMyrordesignMyRorDesign />
      <BlogMyrordesignExemple />
      <BlogMyrordesignConclusion />
    </v-container>
  </v-responsive>
</template>
<script setup>
import { mdiLanguageRubyOnRails } from "@mdi/js";
</script>