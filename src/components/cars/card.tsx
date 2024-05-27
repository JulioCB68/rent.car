'use client'

import Image from 'next/image'

import { archivo } from '@/config/font'
import { getCars } from '@/services/cars'
import { useQuery } from '@tanstack/react-query'

import {
  Card as CardComponent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getFuelType } from './helpers'

export default function Card() {
  const { data: cars } = useQuery({
    queryKey: ['get-cars'],
    queryFn: getCars,
  })

  return (
    <>
      {cars?.map((item, i) => (
        <>
          <CardComponent
            key={i}
            className={`${archivo.className} min-h-[12rem] rounded-sm`}
          >
            <CardHeader className="flex items-center border-b">
              <CardTitle className="h-[80px] cursor-pointer">
                <Image
                  src={item.imageUrl}
                  alt="Car"
                  width={300}
                  height={300}
                  className="w-full bg-cover"
                />
              </CardTitle>
            </CardHeader>
            <CardFooter className="flex w-full items-center justify-between p-4">
              <div className="flex items-center justify-between gap-8 whitespace-nowrap">
                <div className="cursor-pointer">
                  <p className="text-xs uppercase text-details">{item.name}</p>
                  <p className="text-xl font-medium text-dark-gray">
                    {item.model}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase text-details">ao dia</p>
                  <p className="text-xl font-medium text-red">
                    R$ {item.price}
                  </p>
                </div>
              </div>
              <div className="flex items-center">{getFuelType(item.type)}</div>
            </CardFooter>
          </CardComponent>
        </>
      ))}
    </>
  )
}
