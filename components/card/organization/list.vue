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
      <v-list
        v-else
        bg-color="secondary-container"
        lines="one"
      >
        <v-list-item
          v-for="organization in listOrganizations"
          :key="organization.id"
          :title="organization.attributes.name"
          rounded="xl"
        >
          <template #append>
            <v-btn
              color="info"
              variant="outlined"
              :prepend-icon="mdiEyeOutline"
              rounded="lg"
              class="mr-2"
            >
              {{ $t('common.buttons.show') }}
            </v-btn>
            <v-btn
              color="info"
              variant="outlined"
              :prepend-icon="mdiPencil"
              rounded="lg"
            >
              {{ $t('common.buttons.edit') }}
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { mdiEyeOutline, mdiPencil } from '@mdi/js';
  import { useOrganizationsStore } from '~/store/organizationsStore'

  const organizationsStore = useOrganizationsStore()
  const { $services } = useNuxtApp()

  await useAsyncData(() => $services.organizations.getList())

  const listOrganizations = computed(() => organizationsStore.getList)
</script>
