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
