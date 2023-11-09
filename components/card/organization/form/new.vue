<template>
  <v-card
    class="mx-auto mt-6 mb-4"
    color="info-container"
    rounded="lg"
  >
    <v-form
      v-model="organizationFormValid"
      class="py-1"
      @submit.prevent="handleSubmit"
    >
      <v-card-text>
        <v-expansion-panels
          v-model="organizationPanel"
          color="info-container"
        >
          <v-expansion-panel bg-color="secondary-container">
            <v-expansion-panel-title>
              {{ $t('organization.new') }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
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
                        v-model="bornedAt"
                        :label="$t('organization.borned_at')"
                        :rules="[rules.required]"
                        :prepend-icon="mdiCreation"
                        required
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
                <v-col
                  cols="12"
                >
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
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-form>
  </v-card>
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
    mdiMap, } from '@mdi/js'
  import { useLocationsStore } from '~/store/locationsStore'

  const { $services } = useNuxtApp()

  const { t } = useI18n()
  const locationsStore = useLocationsStore()

  const name = ref('')
  const organizationFormValid = ref(false)
  const activityDescription = ref('')
  const organizationPanel = ref()
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
  const activitySectors = ref([
      { value: 'agriculture_forestry', name: t('organization.activity_sectors.agriculture_forestry') },
      { value: 'energy_utilities', name: t('organization.activity_sectors.energy_utilities') },
      { value: 'finance_insurance', name: t('organization.activity_sectors.finance_insurance') },
      { value: 'government_public_sector', name: t('organization.activity_sectors.government_public_sector') },
      { value: 'healthcare_pharmaceuticals', name: t('organization.activity_sectors.healthcare_pharmaceuticals') },
      { value: 'it_telecommunications', name: t('organization.activity_sectors.it_telecommunications') },
      { value: 'manufacturing_engineering', name: t('organization.activity_sectors.manufacturing_engineering') },
      { value: 'media_entertainment', name: t('organization.activity_sectors.media_entertainment') },
      { value: 'nonprofit_charity', name: t('organization.activity_sectors.nonprofit_charity') },
      { value: 'real_estate_construction', name: t('organization.activity_sectors.real_estate_construction') },
      { value: 'retail_consumer_goods', name: t('organization.activity_sectors.retail_consumer_goods') },
      { value: 'transportation_logistics', name: t('organization.activity_sectors.transportation_logistics') },
      { value: 'travel_hospitality', name: t('organization.activity_sectors.travel_hospitality') },
      { value: 'other_activity', name: t('organization.activity_sectors.other_activity') }
  ])
  const kinds = ref([
      { value: "sole_trader", name: t('organization.kinds.sole_trader') },
      { value: "single_member_llc", name: t('organization.kinds.single_member_llc') },
      { value: "llc", name: t('organization.kinds.llc') },
      { value: "sa", name: t('organization.kinds.sa') },
      { value: "general_partnership", name: t('organization.kinds.general_partnership') },
      { value: "limited_partnership", name: t('organization.kinds.limited_partnership') },
      { value: "partnership_limited_by_shares", name: t('organization.kinds.partnership_limited_by_shares') },
      { value: "association", name: t('organization.kinds.association') },
      { value: "cooperative", name: t('organization.kinds.cooperative') },
      { value: "non_profit_organization", name: t('organization.kinds.non_profit_organization') },
      { value: "public_administration", name: t('organization.kinds.public_administration') },
      { value: "other_kind", name: t('organization.kinds.other_kind') }
  ])
  const legalStatusOptions = ref([
    { value: "entreprise", name: t('organization.legal_status_options.entreprise') },
    { value: "association_status", name: t('organization.legal_status_options.association_status') },
    { value: "cooperative_status", name: t('organization.legal_status_options.cooperative_status') },
    { value: "ngo", name: t('organization.legal_status_options.ngo') },
    { value: "union", name: t('organization.legal_status_options.union') },
    { value: "foundation", name: t('organization.legal_status_options.foundation') },
    { value: "other_status", name: t('organization.legal_status_options.other_status') }
  ])

  const handleSelectCountry = () => {
    $services.locations.getStates(country.value)
  }

  const handleSelecState = () => {
    $services.locations.getCities(state.value)
  }
</script>
