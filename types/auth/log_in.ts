export interface ILoginInput {
  user: {
    email: string
    password: string
  }
}

export interface ILoginResponse {
  id: string
  type: 'user'
  attributes: {
    id: string
    email: string
    date: string
  }
}