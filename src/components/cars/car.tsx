'use client'

import Image from 'next/image'

import { archivo } from '@/config/font'

import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CarsData } from '@/services/cars'
import Link from 'next/link'
import { getFuelType } from './helpers'

interface ICarProps {
  data: CarsData
}

export default function Car({ data }: ICarProps) {
  return (
    <Card
      className={`${archivo.className} w-full min-w-80 rounded-sm shadow-md`}
    >
      <CardHeader className="flex items-center border-b">
        <Link href={`/app/car/${data.id}`}>
          <CardTitle className="h-[80px] cursor-pointer">
            <Image
              src={data.imageUrl}
              alt="Car"
              width={300}
              height={300}
              className="w-full bg-cover"
            />
          </CardTitle>
        </Link>
      </CardHeader>
      <CardFooter className="flex w-full items-center justify-between p-4">
        <div className="flex items-center justify-between gap-8 whitespace-nowrap">
          <div className="cursor-pointer">
            <p className="text-xs uppercase text-details">{data.name}</p>
            <p className="text-xl font-medium text-dark-gray">{data.model}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-details">ao dia</p>
            <p className="text-xl font-medium text-red">R$ {data.price}</p>
          </div>
        </div>
        <div className="flex items-center justify-center text-[#AEAEB3]">
          {getFuelType(data.type)}
        </div>
      </CardFooter>
    </Card>
  )
}
