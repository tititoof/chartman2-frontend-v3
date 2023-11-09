export interface IOrganization {
  data: {
    id: string
    type: string
    attributes: {
      id: number
      activity_description: string
      activity_sector: string
      address: string
      annual_turnover: number
      borned_at: string
      email_address: string
      kind: string
      legal_status: string
      name: string
      number_of_employees: number
      phone_number: string
      registration_number: string
      website: string
      city_id: number
      country_id: number
    }
  }
}