<template>
  <v-row class="d-flex align-self-start py-12">
    <v-container class="py-12">
      <client-only>
        <page-title
          :title="$t('home.profile')"
          icon="mdiAccount"
          subtitle=""
        />
        <v-card
          class="mx-auto mt-6 mb-4"
          color="info-container"
          rounded="lg"
        >
          <lazy-card-profile-form-informations
            @on-country-select="onCountrySelect"
            @on-state-select="onStateSelect"
            @on-submit="onSubmitProfil"
          />
        </v-card>

        <v-card
          class="mx-auto"
          color="info-container"
          rounded="lg"
        >
          <lazy-card-profile-form-avatar
            @on-submit="onSubmitAvatar"
          />
        </v-card>
      </client-only>
    </v-container>
  </v-row>
</template>

<script setup>
  definePageMeta({
    middleware: ['auth']
  })

  const { $services } = useNuxtApp()

  const onCountrySelect = (countryId) => {
    $services.locations.getStates(countryId)
  }

  const onStateSelect = (stateId) => {
    $services.locations.getCities(stateId)
  }

  const onSubmitProfil = async (
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

  const onSubmitAvatar = async (avatar) => {
    await $services.profiles.setAvatar(avatar)

    await $services.profiles.getAvatar(avatar)
  }
</script>
