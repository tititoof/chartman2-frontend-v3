<template>
  <v-card
    class="mx-auto mt-6 mb-4"
    color="info-container"
    rounded="lg"
  >
    <v-toolbar
      dark
      color="primary"
    >
      <v-btn
        dark
        :icon="mdiClose"
        @click="emit('onClose')"
      />
      <v-toolbar-title>
        {{ $t('common.buttons.edit') }}
      </v-toolbar-title>
    </v-toolbar>
    <lazy-card-organization-form
      :id="props.id"
      @on-submit="onSubmitOrganization"
    />
  </v-card>
</template>
<script setup>
  import { mdiClose } from '@mdi/js'

  const emit = defineEmits(['onClose'])
  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  })

  const { $services } = useNuxtApp()

  const onSubmitOrganization = async (formData) => {
    await $services.organizations.update(props.id, formData)

    await useAsyncData(() => $services.organizations.getList())

    emit('onClose')
  }
</script>
