<template>
  <v-form
    v-model="avatarFormValid"
    class="py-6"
    @submit.prevent="handleSubmit"
  >
    <v-row>
      <v-col cols="12">
        <v-card
          class="mx-auto"
          color="secondary-container"
          rounded="lg"
        >
          <v-card-text>
            <v-file-input
              v-model="avatar"
              accept="image/png, image/jpeg"
              :label="$t('profile.avatar')"
              :prepend-icon="mdiCamera"
              :rules="[rules.required, rules.image]"
            />
          </v-card-text>
          <v-card-actions>
            <v-btn
              :disabled="!avatarFormValid"
              color="info"
              block
              variant="outlined"
              rounded="lg"
              @click="handleSubmit"
            >
              {{ $t('form.buttons.update') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>
<script setup>
  import { mdiCamera } from '@mdi/js'

  const { $services } = useNuxtApp()
  const { t } = useI18n()

  const avatarFormValid = ref(false)
  const avatar = ref([])
  const rules = reactive({
    required: (value) => value.length > 0 || t('form.rules.required'),
    image: (value) =>
          !value || !value.length || value[0].size < 2000000 || t('form.rules.lessThan2Mb')
  })

  const handleSubmit = () => {
    if (!avatarFormValid.value) return

    $services.profiles.setAvatar(avatar.value)
  }
</script>
