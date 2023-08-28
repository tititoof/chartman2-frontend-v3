export interface ICity {
  id: string
  type: string
  attributes: {
    id: string
    name: string
    latitude: string
    longitude: string
  }
}

export interface ICityResponse {
  data: ICity[]
}
