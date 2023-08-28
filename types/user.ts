export interface IUser {
  data: {
    id: string
    type: string
    attributes: {
      id: string
      email: string
      createdAt: string
      isAdmin: boolean
    }
  }
}