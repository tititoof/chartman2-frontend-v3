<template>
  <v-form
    v-model="avatarFormValid"
    class="py-6"
    @submit.prevent="handleSubmit"
  >
    <v-card-text>
      <v-card
        class="mx-auto mx-2"
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
          >
            <template #append-inner>
              <v-avatar
                v-if="storeAvatar !== null"
                :image="avatarImg"
              />
              <v-avatar
                v-else
                image="/img/gitea.png"
              />
            </template>
          </v-file-input>
        </v-card-text>
      </v-card>
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
  </v-form>
</template>
<script setup>
  import { mdiCamera } from '@mdi/js'
  import { useProfilesStore } from '~/store/profilesStore'
  import { useObjectUrl } from '@vueuse/core'

  const { $services } = useNuxtApp()
  const profilesStore = useProfilesStore()
  const { t } = useI18n()
  const emit = defineEmits(['onSubmit'])

  await useAsyncData(() => $services.profiles.getAvatar())

  const avatarFormValid = ref(false)
  const avatar = ref([])
  const rules = reactive({
    required: (value) => value.length > 0 || t('form.rules.required'),
    image: (value) =>
      !value ||
      !value.length ||
      value[0].size < 2000000 ||
      t('form.rules.lessThan2Mb'),
  })
  const storeAvatar = computed(() => profilesStore.getAvatar)
  const avatarImg = (storeAvatar !== null) ? useObjectUrl(storeAvatar) : null

  const handleSubmit = () => {
    if (!avatarFormValid.value) return

    const formData = new FormData()

    formData.append('profile[avatar]', avatar.value[0])

    emit('onSubmit', formData)
  }
</script>
