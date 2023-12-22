<template>
  <v-card
    class="mx-auto mt-6 mb-4"
    color="info-container"
    rounded="lg"
  >
    <v-card-text>
      <v-expansion-panels
        v-model="organizationPanel"
        color="info-container"
      >
        <v-expansion-panel bg-color="secondary-container">
          <v-expansion-panel-title>
            {{ $t('organization.new') }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <lazy-card-organization-form @on-submit="handleSubmit" />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script setup>
  const { $services } = useNuxtApp()

  await useAsyncData(() => $services.locations.getCountries())

  const organizationPanel = ref()

  const handleSubmit = async (formData) => {
    await $services.organizations.create(formData)

    await useAsyncData(() => $services.organizations.getList())
  }
</script>
