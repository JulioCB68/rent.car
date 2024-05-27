'use client'

import { getCars } from '@/services/cars'
import { useQuery } from '@tanstack/react-query'
import Car from './car'

export default function List() {
  const { data: cars } = useQuery({
    queryKey: ['get-cars'],
    queryFn: getCars,
  })

  return (
    <div>
      <header className="flex h-14 w-full items-center justify-between border-b">
        <h1 className="text-lg font-semibold text-title">Carros disponíveis</h1>
        <p className="text-sm text-light-gray">Total {cars?.length} carro(s)</p>
      </header>
      <div className="my-6 grid items-center gap-3 md:grid-cols-tableMd 2xl:grid-cols-table2Xl 3xl:grid-cols-table3Xl 4xl:grid-cols-table4Xl">
        {cars?.map((car) => <Car key={car.id} data={car} />)}
      </div>
    </div>
  )
}
