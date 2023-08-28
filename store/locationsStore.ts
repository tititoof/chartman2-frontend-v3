import { defineStore, acceptHMRUpdate } from 'pinia'
import { ICity } from '~/types/locations/cities'
import { IState } from '~/types/locations/states'
import { ICountry } from '~/types/locations/country'

export const useLocationsStore = defineStore('locations', {
  state: () => ({
    cities: [] as ICity[],
    countries: [] as ICountry[],
    states: [] as IState[],
  }),
  getters: {
    getCities: (state) => state.cities,
    getCountries: (state) => state.countries,
    getStates: (state) => state.states,
  },
  actions: {
    setCities(cities: ICity[]) {
      this.cities = cities
    },
    setCountries(countries: ICountry[]) {
      this.countries = countries
    },
    setStates(states: IState[]) {
      this.states = states
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLocationsStore, import.meta.hot))
}
