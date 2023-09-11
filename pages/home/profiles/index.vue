<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container class="py-12">
      <page-title
        :title="$t('home.profile')"
        icon="mdiAccount"
        subtitle=""
      />
      <card-profile-form-informations
        @on-country-select="onCountrySelect"
        @on-state-select="onStateSelect"
        @on-submit="onSubmit"
      />
      <card-profile-form-avatar />
    </v-container>
  </v-row>
</template>

<script setup>
  definePageMeta({
    middleware: ['auth']
  })

  const { $procedures, $services } = useNuxtApp()

  $procedures.profiles.getCurrentUser()

  const onCountrySelect = (countryId) => {
    $services.locations.getStates(countryId)
  }

  const onStateSelect = (stateId) => {
    $services.locations.getCities(stateId)
  }

  const onSubmit = async (
    firstName,
    lastName,
    nickname,
    phone,
    dateOfBirth,
    city
  ) => {
    await $services.profiles.setCurrentUser(
      firstName,
      lastName,
      nickname,
      phone,
      dateOfBirth,
      city
    )
  }
</script>
