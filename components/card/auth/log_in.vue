<template>
  <v-form
    v-model="logInForm.logInFormValid"
    @submit.prevent="onSubmit"
  >
    <v-card
      class="mx-auto my-12"
      color="secondary-container"
      rounded="lg"
    >
      <v-card-text>
        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          :label="$t('auth.email')"
          :prepend-inner-icon="mdiEmailOutline"
          required
        />
        <v-text-field
          v-model="password"
          :rules="[rules.required, rules.min]"
          :label="$t('auth.password')"
          :append-icon="logInForm.showPassword ? mdiEye : mdiEyeOff"
          :type="logInForm.showPassword ? 'text' : 'password'"
          :prepend-inner-icon="mdiLockOutline"
          required
          @click:append="logInForm.showPassword = !logInForm.showPassword"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
          :disabled="!logInForm.logInFormValid"
          color="info"
          block
          variant="outlined"
          rounded="lg"
          @click="onSubmit"
        >
          {{ $t('auth.sign_in') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
<script setup>
import { mdiEye, mdiEyeOff, mdiEmailOutline, mdiLockOutline } from '@mdi/js'

const emit = defineEmits(['onSignIn']);

const { t } = useI18n()
const logInForm = reactive({
  showPassword: false,
  logInFormValid: false
})
const email = ref('')
const password = ref('')
const rules = reactive({
  required: value => !!value || t('form.rules.required'),
  min: v => v.length >= 8 || t('form.rules.min_8_caracters'),
  email: value => /(.+)@(.+){2,}\.(.+){2,}/.test(value) || t('form.rules.email_valid')
})

const onSubmit = () => {
  if (!logInForm.logInFormValid) return

  emit('onSignIn', email, password)
}
</script>