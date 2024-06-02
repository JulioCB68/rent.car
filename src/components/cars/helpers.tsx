import { ReactNode } from 'react'

import { FuelType } from '@/services/cars'

import { Droplet, Leaf, Zap } from 'lucide-react'

export function getFuelType(fuelType: FuelType | undefined): ReactNode {
  const commonProps = {
    width: 28,
    height: 28,
  }

  switch (fuelType) {
    case FuelType.Gasolina:
      return <Droplet {...commonProps} />
    case FuelType.Hibrido:
      return <Leaf {...commonProps} />
    case FuelType.Eletrico:
      return <Zap {...commonProps} />
    default:
      return null
  }
}

export const detailUnits = {
  speed: 'km/h',
  up: 's',
  strength: ' HP',
  capacity: ' pessoas',
} as const

type UnitKeys = keyof typeof detailUnits

interface UnitFlags {
  speed?: boolean
  up?: boolean
  strength?: boolean
  capacity?: boolean
}

export function getUnits(unitFlags: UnitFlags): string {
  return Object.keys(unitFlags)
    .filter((key) => unitFlags[key as UnitKeys])
    .map((key) => detailUnits[key as UnitKeys])
    .join('')
}

export function formatDate(dataString: string): string {
  const mounths = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  const date = new Date(dataString)
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const mounth = mounths[date.getMonth()]
  const year = date.getFullYear()
  return `${day} de ${mounth} ${year}`
}

interface IRentCalculation {
  totalRent: number
  totalDays: number
}

export function calculateRentAndDays(
  dailyRate: number,
  startDate: string,
  endDate: string,
): IRentCalculation {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const diffInMs = end.getTime() - start.getTime()
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24) + 1)

  const totalRent = diffInDays * dailyRate

  return {
    totalRent,
    totalDays: diffInDays,
  }
}
