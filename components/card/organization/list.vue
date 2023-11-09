<template>
  <v-card
    class="mx-auto mt-6 mb-4"
    color="info-container"
    rounded="lg"
  >
    <v-card-text>
      <v-alert
        v-if="listOrganizations === null || listOrganizations.length === 0"
        density="compact"
        type="warning"
        :text="$t('organization.no_data')"
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { useOrganizationsStore } from '~/store/organizationsStore'
  const organizationsStore = useOrganizationsStore()
  const { $services } = useNuxtApp()

  await useAsyncData(() => $services.organizations.getList())

  const listOrganizations = computed(() => organizationsStore.getList)
</script>
