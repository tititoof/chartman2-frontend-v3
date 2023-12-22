import { useOrganizationsStore } from '~/store/organizationsStore'

class OrganizationModule {
  static moduleName = 'organizations'

  async getList() {
    const { $api } = useNuxtApp()
    const organizationsStore = useOrganizationsStore()

    let result = false

    // @ts-ignore
    await $api.organizations
      .getList()
      .then((response: any) => {
        organizationsStore.setList(response.data)

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }

  async get (id: string) {
    const { $api } = useNuxtApp()
    const organizationsStore = useOrganizationsStore()

    let result = false

    // @ts-ignore
    await $api.organizations
      .get(id)
      .then((response: any) => {
        organizationsStore.setCurrent(response.data)

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }

  async create(params: any) {
    const { $api } = useNuxtApp()

    let result = false

    // @ts-ignore
    await $api.organizations
      .create(params)
      .then(() => {

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }

  async update(id: string, params: any) {
    const { $api } = useNuxtApp()

    let result = false

    // @ts-ignore
    await $api.organizations
      .update(id, params)
      .then(() => {

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }

  activitySectors() {
    const { t } = useI18n()

    return [
      {
        value: 'agriculture_forestry',
        name: t('organization.activity_sectors.agriculture_forestry'),
      },
      {
        value: 'energy_utilities',
        name: t('organization.activity_sectors.energy_utilities'),
      },
      {
        value: 'finance_insurance',
        name: t('organization.activity_sectors.finance_insurance'),
      },
      {
        value: 'government_public_sector',
        name: t('organization.activity_sectors.government_public_sector'),
      },
      {
        value: 'healthcare_pharmaceuticals',
        name: t('organization.activity_sectors.healthcare_pharmaceuticals'),
      },
      {
        value: 'it_telecommunications',
        name: t('organization.activity_sectors.it_telecommunications'),
      },
      {
        value: 'manufacturing_engineering',
        name: t('organization.activity_sectors.manufacturing_engineering'),
      },
      {
        value: 'media_entertainment',
        name: t('organization.activity_sectors.media_entertainment'),
      },
      {
        value: 'nonprofit_charity',
        name: t('organization.activity_sectors.nonprofit_charity'),
      },
      {
        value: 'real_estate_construction',
        name: t('organization.activity_sectors.real_estate_construction'),
      },
      {
        value: 'retail_consumer_goods',
        name: t('organization.activity_sectors.retail_consumer_goods'),
      },
      {
        value: 'transportation_logistics',
        name: t('organization.activity_sectors.transportation_logistics'),
      },
      {
        value: 'travel_hospitality',
        name: t('organization.activity_sectors.travel_hospitality'),
      },
      {
        value: 'other_activity',
        name: t('organization.activity_sectors.other_activity'),
      },
    ]
  }

  kinds() {
    const { t } = useI18n()

    return [
      { value: 'sole_trader', name: t('organization.kinds.sole_trader') },
      {
        value: 'single_member_llc',
        name: t('organization.kinds.single_member_llc'),
      },
      { value: 'llc', name: t('organization.kinds.llc') },
      { value: 'sa', name: t('organization.kinds.sa') },
      {
        value: 'general_partnership',
        name: t('organization.kinds.general_partnership'),
      },
      {
        value: 'limited_partnership',
        name: t('organization.kinds.limited_partnership'),
      },
      {
        value: 'partnership_limited_by_shares',
        name: t('organization.kinds.partnership_limited_by_shares'),
      },
      { value: 'association', name: t('organization.kinds.association') },
      { value: 'cooperative', name: t('organization.kinds.cooperative') },
      {
        value: 'non_profit_organization',
        name: t('organization.kinds.non_profit_organization'),
      },
      {
        value: 'public_administration',
        name: t('organization.kinds.public_administration'),
      },
      { value: 'other_kind', name: t('organization.kinds.other_kind') },
    ]
  }

  legalStatus() {
    const { t } = useI18n()

    return [
      {
        value: 'entreprise',
        name: t('organization.legal_status_options.entreprise'),
      },
      {
        value: 'association_status',
        name: t('organization.legal_status_options.association_status'),
      },
      {
        value: 'cooperative_status',
        name: t('organization.legal_status_options.cooperative_status'),
      },
      { value: 'ngo', name: t('organization.legal_status_options.ngo') },
      { value: 'union', name: t('organization.legal_status_options.union') },
      {
        value: 'foundation',
        name: t('organization.legal_status_options.foundation'),
      },
      {
        value: 'other_status',
        name: t('organization.legal_status_options.other_status'),
      },
    ]
  }
}

export default OrganizationModule
