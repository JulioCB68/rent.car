'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import Cambio from '../../../../../../public/Câmbio.svg'

import { archivo } from '@/config/font'
import { getCarPerId } from '@/services/cars'
import { useMutation, useQuery } from '@tanstack/react-query'

import Detail from '@/components/cars/details'
import { getFuelType } from '@/components/cars/helpers'
import Tab from '@/components/cars/tab'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import RangeDatePicker from '@/components/cars/range-date-picker'
import { addBooking } from '@/services/booking'
import {
  ArrowUpFromLine,
  ChevronLeft,
  Gauge,
  LifeBuoy,
  User,
} from 'lucide-react'

export default function CarDetails({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams()
  const [open, setOpen] = useState(false)

  const { data: car } = useQuery({
    queryKey: ['get-car', params.id],
    queryFn: () => getCarPerId(params.id),
  })

  const { mutateAsync: CreateBookingMutation } = useMutation({
    mutationFn: addBooking,
  })

  function handleOpenModal() {
    setOpen(false)
  }

  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  async function handleAddBooking() {
    await CreateBookingMutation({
      startDate: new Date(startDate as string),
      endDate: new Date(endDate as string),
      carId: params.id,
    })
  }

  return (
    <div className="flex w-full flex-col items-start justify-start px-3 md:mt-6 md:flex-row md:px-0 lg:mx-auto lg:max-w-7xl">
      <Link href="/app" className="md:hidden">
        <ChevronLeft className="size-5" />
      </Link>
      <div className="flex flex-col">
        <div className="order-2 md:order-1 md:mb-12">
          <div
            className={`${archivo.className} flex w-full items-center justify-between md:justify-normal`}
          >
            <Link href="/app" className="hidden pr-5 md:flex">
              <ChevronLeft className="size-5" />
            </Link>
            <div className="mr-6 cursor-pointer">
              <p className="text-xs uppercase text-details">{car?.name}</p>
              <p className="text-xl font-medium text-dark-gray">{car?.model}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-details">ao dia</p>
              <p className="text-xl font-medium text-red">R$ {car?.price}</p>
            </div>
          </div>
        </div>
        <div className="order-1 mt-16 w-full px-12 md:order-2 md:px-0">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
          >
            <CarouselContent className="cursor-pointer">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={car?.imageUrl || ''}
                    alt="Car details"
                    width={300}
                    height={300}
                    className="w-4/5"
                    style={{ objectFit: 'cover' }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        </div>
      </div>
      <div className="order-3 mt-16 w-full md:w-1/2">
        <div className="mt-6 grid w-full grid-cols-2 gap-3">
          <Detail icon={<Gauge />} text={car?.speed} speed />
          <Detail icon={<ArrowUpFromLine />} text={car?.up} up />
          <Detail icon={<LifeBuoy />} text={car?.strength} strength />
          <Detail icon={getFuelType(car?.type)} text={car?.type} />
          <Detail
            icon={
              <Image
                src={Cambio}
                alt="Cambio"
                width={50}
                height={50}
                className="size-7"
              />
            }
            text={car?.typeCambium}
          />
          <Detail icon={<User />} text={car?.capacity} capacity />
        </div>
        <div className="my-16">
          <Tab description={car?.description} price={car?.price} />
        </div>
        {!startDate && !endDate && (
          <Dialog modal={true} open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size={'2xl'} className="order-5 w-full">
                Escolher período do aluguel
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[46rem]">
              <RangeDatePicker closeModal={handleOpenModal} />
            </DialogContent>
          </Dialog>
        )}
        {startDate && endDate && (
          <Button
            size={'2xl'}
            variant={'secondary'}
            className="order-5 w-full"
            onClick={handleAddBooking}
          >
            alugar agora
          </Button>
        )}
      </div>
    </div>
  )
}
