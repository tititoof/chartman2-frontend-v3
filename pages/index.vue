<template>
  <v-responsive>
    <partial-home-presentation />
    <partial-home-about-me />
    <partial-home-skills />
    <partial-home-technologies />
    <partial-home-articles />
    <partial-home-contact-me />
  </v-responsive>
</template>

<script setup>
import {
  mdiDotsVertical,
  mdiAlertCircle,
  mdiAlertDecagram,
  mdiCheckCircle,
  mdiInformation,
} from '@mdi/js'

const doc = reactive({
  title: 'test'
})

const testColors = ref([
  {
    container: 'primary-container',
    text: 'on-primary-container',
    icon: mdiDotsVertical,
  },
  {
    container: 'secondary-container',
    text: 'on-secondary-container',
    icon: mdiDotsVertical,
  },
  {
    container: 'info-container',
    text: 'on-info-container',
    icon: mdiInformation,
  },
  {
    container: 'error-container',
    text: 'on-error-container',
    icon: mdiAlertDecagram,
  },
  {
    container: 'success-container',
    text: 'on-success-container',
    icon: mdiCheckCircle,
  },
  {
    container: 'warning-container',
    text: 'on-warning-container',
    icon: mdiAlertCircle,
  },
])

const testAccentColors = ref([
  { container: 'primary', text: 'on-primary' },
  { container: 'secondary', text: 'on-secondary' },
  { container: 'info', text: 'on-info' },
  { container: 'error', text: 'on-error' },
  { container: 'success', text: 'on-success' },
  { container: 'warning', text: 'on-warning' },
])

const reveal = ref(false)
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
