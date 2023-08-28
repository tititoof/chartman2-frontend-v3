export interface IProfile {
  id: string
  type: string
  attributes: {
    id: string
    address: string
    dateOfBirth: string // Il est préférable de stocker les dates au format ISO 8601 (yyyy-MM-dd) en TypeScript.
    email: string
    firstName: string
    lastName: string
    nickname: string
    phone: string
    cityId: string
    userId: string
  }
}

export interface IProfileResponse {
  data: IProfile
}

export interface IProfileParams {
  profile: {
    address: string
    date_of_birth: string // Ou un type de date approprié en TypeScript.
    email: string
    first_name: string
    last_name: string
    nickname: string
    phone: string
    city_id: string
  }
}
