import { useSearchParams } from 'next/navigation'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { archivo } from '@/config/font'
import RangeDatePicker from './range-date-picker'

import { Calendar, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { calculateRentAndDays, formatDate } from './helpers'

interface ITabProps {
  description: string | undefined
  price: number | undefined
}

export default function Tab({ description, price }: ITabProps) {
  const [open, setOpen] = useState(false)

  const searchParams = useSearchParams()

  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  function handleOpenModal() {
    setOpen(false)
  }

  const totalPrice = calculateRentAndDays(
    price!,
    String(startDate),
    String(endDate),
  )

  return (
    <Tabs defaultValue="description">
      <TabsList className="w-full">
        <TabsTrigger value="description" className="w-full">
          Sobre o carro
        </TabsTrigger>
        <TabsTrigger
          value="booking"
          className="w-full"
          disabled={!startDate && !endDate}
        >
          Período
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <p className="mt-4 text-sm leading-6 text-light-gray">{description}</p>
      </TabsContent>
      <TabsContent value="booking">
        <div className="my-6 w-full">
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full items-center justify-between pr-4">
              <div>
                <p className="text-xs font-medium uppercase text-light-gray">
                  de
                </p>
                <p className="font-medium text-dark-gray">
                  {formatDate(startDate!)}
                </p>
              </div>

              <ChevronRight className="mx-2 size-4 text-light-gray" />

              <div>
                <p className="text-xs font-medium uppercase text-light-gray">
                  até
                </p>
                <p className="font-medium text-dark-gray">
                  {formatDate(endDate!)}
                </p>
              </div>
            </div>
            <Dialog modal={true} open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <div className="cursor-pointer bg-red p-3">
                  <Calendar className="text-white" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[46rem]">
                <RangeDatePicker closeModal={handleOpenModal} />
              </DialogContent>
            </Dialog>
          </div>
          <div className="my-6 h-[1px] w-full shrink-0 bg-border" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase text-light-gray">
                total
              </p>
              <p className="font-medium text-dark-gray">
                R$ {price} x{totalPrice.totalDays} diárias
              </p>
            </div>
            <div>
              <p
                className={`${archivo.className} text-4xl font-medium text-green`}
              >
                R$ {totalPrice.totalRent}
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
