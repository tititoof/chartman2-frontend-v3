<template>
  <p class="font-italic text-caption">
    {{ props.text }}
  </p>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>
