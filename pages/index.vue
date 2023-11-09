<template>
  <v-responsive>
    <lazy-partial-main-presentation />

    <lazy-partial-main-about-me />
    <lazy-partial-main-skills />
    <lazy-partial-main-technologies />
    <lazy-partial-main-articles />
    <lazy-partial-main-contact-me />
  </v-responsive>
</template>

<script setup>
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
