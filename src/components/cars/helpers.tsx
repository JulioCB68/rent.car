import Image from 'next/image'
import { ReactNode } from 'react'

import { FuelType } from '@/services/cars'

import Energia from '../../../public/Energia.svg'
import Gasolina from '../../../public/Gasolina.svg'
import Hibrido from '../../../public/Hibrido.svg'

export function getFuelType(fuelType: FuelType): ReactNode {
  switch (fuelType) {
    case FuelType.Gasolina:
      return (
        <Image
          src={Gasolina}
          alt={FuelType.Gasolina}
          width={300}
          height={300}
          className="w-full bg-cover"
        />
      )
    case FuelType.Hibrido:
      return (
        <Image
          src={Hibrido}
          alt={FuelType.Hibrido}
          width={300}
          height={300}
          className="w-full bg-cover"
        />
      )
    case FuelType.Eletrico:
      return (
        <Image
          src={Energia}
          alt={FuelType.Eletrico}
          width={300}
          height={300}
          className="w-full bg-cover"
        />
      )
    default:
      return null
  }
}
