<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container class="py-12">
      <client-only>
        <page-title
          :title="$t('home.organizations')"
          icon="mdiDomain"
          subtitle=""
        />

        <lazy-card-organization-form-new />

        <lazy-card-organization-list />
      </client-only>
    </v-container>
  </v-row>
</template>
<script setup>
  definePageMeta({
    middleware: ['auth']
  })

  const { $services } = useNuxtApp()

  await useAsyncData(() => $services.organizations.getList())
</script>