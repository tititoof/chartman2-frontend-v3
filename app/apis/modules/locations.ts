import ApiFactory from '~/app/apis/factory'
import { ICity } from '~/types/locations/cities'
import { ICountry } from '~/types/locations/country'
import { IState } from '~/types/locations/states'

class LocationsModule extends ApiFactory {
  static moduleName = 'locations'

  private COUNTRIES_URL = '/v1/location/countries'
  private STATES_URL = '/v1/location/states'
  private CITIES_URL = '/v1/location/cities'

  async fetchCities(stateId: string): Promise<ICity[]> {
    return await this.call<ICity[]>(
      this.getAuthHeaders(),
      'GET',
      `${this.CITIES_URL}/${stateId}`
    )
  }

  async fetchCountries(): Promise<ICountry[]> {
    return await this.call<ICountry[]>(
      this.getAuthHeaders(),
      'GET',
      this.COUNTRIES_URL
    )
  }

  async fetchStates(countryId: string): Promise<IState[]> {
    return await this.call<IState[]>(
      this.getAuthHeaders(),
      'GET',
      `${this.STATES_URL}/${countryId}`
    )
  }
}

export default LocationsModule
