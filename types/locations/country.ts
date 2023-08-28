export interface ICountry {
  id: string
  type: string
  attributes: {
    id: string
    name: string
    code: string
    emoji: string
    latitude: number
    longitude: number
  }
}

export interface ICountryResponse {
  data: ICountry[]
}
