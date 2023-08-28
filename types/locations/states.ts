export interface IState {
  id: string
  type: string
  attributes: {
    id: string
    name: string
    code: string
    countryId: string
  }
}

export interface IStateResponse {
  data: IState[]
}
