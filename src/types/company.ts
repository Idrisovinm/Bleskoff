export interface Company {
  id: number
  name: string
  description: string
  services: Array<string>
  price: number
  rating: number
  companyPhone: string
  image?: string
}
