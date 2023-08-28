<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container class="py-12">
      <page-title
        :title="$t('auth.log_in')"
        icon="mdiLoginVariant"
        subtitle=""
      />

      <card-auth-log-in @on-sign-in="onSignIn" />
    </v-container>
  </v-row>
</template>

<script setup>
const { $procedures } = useNuxtApp()
const snackbar = useSnackbar()
const { t } = useI18n()

const onSignIn = async (email, password) => {
  const result = await $procedures.auth.signIn(email.value, password.value)

  if (result) {
    snackbar.add({
      type: 'success',
      text: t('auth.successed'),
    })

    const router = useRouter()

    router.push({ path: '/home' })
  } else {
    snackbar.add({
      type: 'error',
      text: t('auth.failed'),
    })
  }
}
</script>
