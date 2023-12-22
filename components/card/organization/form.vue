<template>
  <v-form
    v-model="organizationFormValid"
    class="py-1"
    @submit.prevent="handleSubmit"
  >
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="mx-auto mt-3 mb-2"
            color="info-container"
            rounded="lg"
          >
            <v-card-text>
              <v-text-field
                v-model="name"
                :label="$t('organization.name')"
                :rules="[rules.required]"
                :prepend-icon="mdiTownHall"
                required
              />
              <v-textarea
                v-model="activityDescription"
                :label="$t('organization.activity_description')"
                :rules="[rules.required]"
                :prepend-icon="mdiPencil"
                required
              />
              <v-autocomplete
                v-model="activitySector"
                :label="$t('organization.activity_sector')"
                item-value="value"
                item-title="name"
                clearable
                :items="activitySectors"
                :prepend-icon="mdiApplicationCogOutline"
              />
              <v-autocomplete
                v-model="kind"
                :label="$t('organization.kind')"
                item-value="value"
                item-title="name"
                clearable
                :items="kinds"
                :prepend-icon="mdiApplicationCogOutline"
              />
              <v-autocomplete
                v-model="legalStatus"
                :label="$t('organization.legal_status')"
                item-value="value"
                item-title="name"
                clearable
                :items="legalStatusOptions"
                :prepend-icon="mdiApplicationCogOutline"
              />
            </v-card-text>
          </v-card>
          <v-card
            class="mx-auto mt-3 mb-2"
            color="info-container"
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
              <v-text-field
                v-model="address"
                :label="$t('organization.address')"
                :rules="[rules.required]"
                :prepend-icon="mdiMapMarker"
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
            class="mx-auto mt-3 mb-2"
            color="info-container"
            rounded="lg"
          >
            <v-card-text>
              <v-text-field
                v-model="emailAddress"
                :label="$t('organization.email_address')"
                :rules="[rules.required]"
                :prepend-icon="mdiEmailOutline"
                required
              />
              <v-text-field
                v-model="phoneNumber"
                :label="$t('organization.phone_number')"
                :rules="[rules.required]"
                :prepend-icon="mdiPhone"
                required
              />
              <v-text-field
                v-model="website"
                :label="$t('organization.website')"
                :rules="[rules.required]"
                :prepend-icon="mdiWeb"
                required
              />
              <v-text-field
                v-model="formatDate"
                :label="$t('organization.borned_at')"
                :rules="[rules.required]"
                :prepend-icon="mdiCreation"
                required
                @update:focused="dialog = true"
              />
              <v-text-field
                v-model="annualTurnover"
                :label="$t('organization.annual_turnover')"
                :rules="[rules.required]"
                :prepend-icon="mdiBank"
                required
              />
              <v-text-field
                v-model="numberOfEmployees"
                :label="$t('organization.number_of_employees')"
                :rules="[rules.required]"
                :prepend-icon="mdiAccountGroupOutline"
                required
              />
              <v-text-field
                v-model="registrationNumber"
                :label="$t('organization.registration_number')"
                :rules="[rules.required]"
                :prepend-icon="mdiOfficeBuildingCogOutline"
                required
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            :disabled="!organizationFormValid"
            color="info"
            block
            variant="outlined"
            rounded="lg"
            @click="handleSubmit"
          >
            {{ $t('form.buttons.save') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-form>
  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <v-date-picker
      v-model="bornedAt"
      locale="fr"
      elevation="24"
      :input-text="$t('organization.borned_at')"
      @update:model-value="dialog = false"
      @click:save="dialog = false"
    />
  </v-dialog>
</template>
<script setup>
  import {
    mdiCity,
    mdiPhone,
    mdiOfficeBuildingCogOutline,
    mdiEmailOutline,
    mdiCreation,
    mdiAccountGroupOutline,
    mdiWeb,
    mdiPencil,
    mdiApplicationCogOutline,
    mdiTownHall,
    mdiBank,
    mdiMapMarker,
    mdiEarth,
    mdiMap,
  } from '@mdi/js'
  import { useLocationsStore } from '~/store/locationsStore'
  import { useOrganizationsStore } from '~/store/organizationsStore'

  const emit = defineEmits(['onSubmit'])
  const props = defineProps({
    id: {
      type: String,
      default: null,
    },
  })

  const { $dayjs, $services } = useNuxtApp()

  const { t } = useI18n()
  const locationsStore = useLocationsStore()
  const organizationStore = useOrganizationsStore()

  await useAsyncData(() => $services.locations.getCountries())

  const dialog = ref(false)
  const organizationFormValid = ref(false)
  const name = ref('')
  const activityDescription = ref('')
  const activitySector = ref(null)
  const kind = ref(null)
  const legalStatus = ref(null)
  const address = ref('')
  const country = ref(null)
  const state = ref(null)
  const city = ref(null)
  const website = ref('')
  const registrationNumber = ref('')
  const phoneNumber = ref('')
  const numberOfEmployees = ref('')
  const emailAddress = ref('')
  const bornedAt = ref('')
  const annualTurnover = ref('')
  const countries = computed(() => locationsStore.getCountries)
  const states = computed(() => locationsStore.getStates)
  const cities = computed(() => locationsStore.getCities)
  const rules = reactive({
    required: (value) => !!value || t('form.rules.required'),
    min: (v) => v.length >= 8 || t('form.rules.min_8_caracters'),
    image: (value) =>
      !value ||
      !value.length ||
      value[0].size < 2000000 ||
      'Avatar size should be less than 2 MB!',
  })
  const organization = computed(() => organizationStore.getCurrent)
  const activitySectors = ref([])
  const kinds = ref([])
  const legalStatusOptions = ref([])
  activitySectors.value = $services.organizations.activitySectors()
  kinds.value = $services.organizations.kinds()
  legalStatusOptions.value = $services.organizations.legalStatus()

  const formatDate = computed(() => {
    return $dayjs(bornedAt.value).isValid()
      ? $dayjs(bornedAt.value).format('DD/MM/YYYY')
      : ''
  })

  const handleSelectCountry = () => {
    $services.locations.getStates(country.value)
  }

  const handleSelecState = () => {
    $services.locations.getCities(state.value)
  }

  const handleSubmit = () => {
    if (!organizationFormValid.value) return

    const formData = {
      organization: {
        activity_description: activityDescription.value,
        activity_sector: activitySector.value,
        address: address.value,
        borned_at: bornedAt.value,
        annual_turnover: annualTurnover.value,
        email_address: emailAddress.value,
        kind: kind.value,
        legal_status: legalStatus.value,
        name: name.value,
        number_of_employees: numberOfEmployees.value,
        phone_number: phoneNumber.value,
        region: state.value,
        registration_number: registrationNumber.value,
        website: website.value,
        city_id: city.value,
        country_id: country.value,
      },
    }

    emit('onSubmit', formData)
  }

  if (props.id !== null) {
    await useAsyncData(() => $services.organizations.get(props.id))

    name.value = organization.value.attributes.name
    activityDescription.value =
      organization.value.attributes.activityDescription
    activitySector.value = organization.value.attributes.activitySector
    kind.value = organization.value.attributes.kind
    legalStatus.value = organization.value.attributes.legalStatus
    address.value = organization.value.attributes.address
    country.value = organization.value.attributes.countryId
    state.value = organization.value.attributes.stateId
    city.value = organization.value.attributes.cityId
    website.value = organization.value.attributes.website
    registrationNumber.value = organization.value.attributes.registrationNumber
    phoneNumber.value = organization.value.attributes.phoneNumber
    numberOfEmployees.value = organization.value.attributes.numberOfEmployees
    emailAddress.value = organization.value.attributes.emailAddress
    bornedAt.value = organization.value.attributes.bornedAt
    annualTurnover.value = organization.value.attributes.annualTurnover
  }
</script>
