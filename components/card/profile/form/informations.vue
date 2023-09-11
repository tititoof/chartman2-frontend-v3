<template>
  <v-form
    v-model="profileFormValid"
    class="py-6"
    @submit.prevent="handleSubmit"
  >
    <v-card
      class="mx-auto"
      color="info-container"
      rounded="lg"
    >
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-card
              class="mx-auto"
              color="secondary-container"
              rounded="lg"
            >
              <v-card-text>
                <v-text-field
                  v-model="firstName"
                  :label="$t('profile.first_name')"
                  :rules="[rules.required]"
                  :prepend-icon="mdiAccountOutline"
                  required
                />
                <v-text-field
                  v-model="lastName"
                  :label="$t('profile.last_name')"
                  :rules="[rules.required]"
                  :prepend-icon="mdiAccountTieOutline"
                  required
                />
                <v-text-field
                  v-model="nickname"
                  :label="$t('profile.nickname')"
                  :rules="[rules.required]"
                  :prepend-icon="mdiCardAccountDetailsOutline"
                  required
                />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-card
              class="mx-auto"
              color="secondary-container"
              rounded="lg"
            >
              <v-card-text>
                <v-text-field
                  v-model="phone"
                  :label="$t('profile.phone')"
                  :rules="[rules.required]"
                  :prepend-icon="mdiPhone"
                  required
                />
                <v-text-field
                  v-model="formatDate"
                  :label="$t('profile.date_of_birth')"
                  :prepend-icon="mdiCakeVariantOutline"
                  :rules="[rules.required]"
                  @update:focused="dialog = true"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card
              class="mx-auto"
              color="secondary-container"
              rounded="lg"
            >
              <v-card-text>
                <v-autocomplete
                  v-model="country"
                  :label="$t('profile.country')"
                  :items="countries"
                  item-value="id"
                  item-title="attributes.name"
                  :rules="[rules.required]"
                  :prepend-icon="mdiEarth"
                  @update:model-value="handleSelectCountry"
                >
                  <template #item="{ props, item }">
                    <v-list-item
                      color="secondary"
                      base-color="secondary"
                      variant="tonal"
                      v-bind="props"
                      :title="item?.raw?.attributes.name"
                    >
                      <template #prepend>
                        <v-avatar
                          size="56"
                          tile
                          class="px-2"
                        >
                          {{ item?.raw?.attributes.emoji }}
                        </v-avatar>
                      </template>
                    </v-list-item>
                  </template>
                </v-autocomplete>
                <v-autocomplete
                  v-model="state"
                  :label="$t('profile.state')"
                  :items="states"
                  item-value="id"
                  item-title="attributes.name"
                  :prepend-icon="mdiMap"
                  :rules="[rules.required]"
                  @update:model-value="handleSelecState"
                >
                  <template #item="{ props, item }">
                    <v-list-item
                      color="secondary"
                      base-color="secondary"
                      variant="tonal"
                      v-bind="props"
                      :title="item?.raw?.attributes.name"
                    />
                  </template>
                </v-autocomplete>
                <v-autocomplete
                  v-model="city"
                  :label="$t('profile.city')"
                  :items="cities"
                  item-value="id"
                  item-title="attributes.name"
                  :prepend-icon="mdiCity"
                  :rules="[rules.required]"
                >
                  <template #item="{ props, item }">
                    <v-list-item
                      color="secondary"
                      base-color="secondary"
                      variant="tonal"
                      v-bind="props"
                      :title="item?.raw?.attributes.name"
                    />
                  </template>
                </v-autocomplete>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn
          :disabled="!profileFormValid"
          color="info"
          block
          variant="outlined"
          rounded="lg"
          @click="handleSubmit"
        >
          {{ $t('form.buttons.save') }}
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-date-picker
        v-model="dateOfBirth"
        locale="fr"
        elevation="24"
        :input-text="$t('profile.date_of_birth')"
        @click:save="dialog = false"
      />
    </v-dialog>
  </v-form>
</template>
<script setup>
  import {
    mdiCity,
    mdiPhone,
    mdiCakeVariantOutline,
    mdiCardAccountDetailsOutline,
    mdiAccountOutline,
    mdiAccountTieOutline,
    mdiEarth,
    mdiMap,
  } from '@mdi/js'
  import { useProfilesStore } from '~/store/profilesStore'
  import { useLocationsStore } from '~/store/locationsStore'

  const { $dayjs } = useNuxtApp()
  const emit = defineEmits(['onSubmit', 'onCountrySelect', 'onStateSelect'])
  const { t } = useI18n()

  const profilesStore = useProfilesStore()
  const locationsStore = useLocationsStore()

  const countries = computed(() => locationsStore.getCountries)
  const states = computed(() => locationsStore.getStates)
  const cities = computed(() => locationsStore.getCities)
  const profile = computed(() => profilesStore.get)
  const formatDate = computed(() => {
    return $dayjs(dateOfBirth.value).isValid()
      ? $dayjs(dateOfBirth.value).format('DD/MM/YYYY')
      : ''
  })

  const dialog = ref(false)
  const profileFormValid = ref(false)
  const firstName = ref('')
  const lastName = ref('')
  const nickname = ref('')
  const phone = ref('')
  const dateOfBirth = ref('')
  const country = ref(null)
  const state = ref(null)
  const city = ref(null)
  const rules = reactive({
    required: (value) => !!value || t('form.rules.required'),
    min: (v) => v.length >= 8 || t('form.rules.min_8_caracters'),
    image: (value) =>
      !value ||
      !value.length ||
      value[0].size < 2000000 ||
      'Avatar size should be less than 2 MB!',
  })

  const handleSelectCountry = () => {
    emit('onCountrySelect', country.value)
  }

  const handleSelecState = () => {
    emit('onStateSelect', state.value)
  }

  const handleSubmit = () => {
    if (!profileFormValid) return

    emit(
      'onSubmit',
      firstName.value,
      lastName.value,
      nickname.value,
      phone.value,
      $dayjs(dateOfBirth.value).format('YYYY-MM-DD'),
      city.value
    )
  }

  watch(profile, (newVal) => {
    if (newVal !== null) {
      firstName.value = newVal.attributes.firstName
      lastName.value = newVal.attributes.lastName
      nickname.value = newVal.attributes.nickname
      phone.value = newVal.attributes.phone
      dateOfBirth.value = newVal.attributes.dateOfBirth
      country.value = newVal.attributes.countryId
      handleSelectCountry()
      state.value = newVal.attributes.stateId
      handleSelecState()
      city.value = newVal.attributes.cityId
    }
  })
</script>
