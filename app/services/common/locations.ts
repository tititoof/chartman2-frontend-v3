import { useLocationsStore } from '~/store/locationsStore'
import { ICityResponse } from '~/types/locations/cities'
import { ICountryResponse } from '~/types/locations/country'
import { IStateResponse } from '~/types/locations/states'

class LocationsModule {
  static moduleName = 'locations'

  async getCities(stateId: string) {
    const { $api } = useNuxtApp()
    const locationsStore = useLocationsStore()

    let result = false

    // @ts-ignore
    await $api.locations
      .fetchCities(stateId)
      .then((response: ICityResponse) => {
        locationsStore.setCities(response.data)

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }

  async getCountries() {
    const { $api } = useNuxtApp()
    const locationsStore = useLocationsStore()

    let result = false

    // @ts-ignore
    await $api.locations
      .fetchCountries()
      .then((response: ICountryResponse) => {
        locationsStore.setCountries(response.data)

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }

  async getStates(countryId: string) {
    const { $api } = useNuxtApp()
    const locationsStore = useLocationsStore()

    let result = false

    // @ts-ignore
    await $api.locations
      .fetchStates(countryId)
      .then((response: IStateResponse) => {
        locationsStore.setStates(response.data)

        result = true
      })
      .catch(() => {
        result = false
      })

    return result
  }
}

export default LocationsModule