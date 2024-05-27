import { api } from '@/lib/axios'

export enum FuelType {
  Gasolina = 'Gasolina',
  Hibrido = 'Hibrido',
  Eletrico = 'Elétrico',
}

export interface CarsData {
  id: string
  model: string
  name: string
  description: string
  price: number
  imageUrl: string
  speed: number
  up: number
  type: FuelType
  typeCambium: string
  capacity: number
  strength: number
}

export async function getCars(): Promise<CarsData[]> {
  const response = await api.get('/cars')
  return response.data
}
