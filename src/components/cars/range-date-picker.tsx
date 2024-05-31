'use client'

import { Controller, useForm } from 'react-hook-form'

import { Calendar } from '@/components/ui/calendar'
import { addBooking } from '@/services/booking'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { Button } from '../ui/button'
import { formatData } from './helpers'

const bookingFormSchema = z.object({
  dateRange: z.object({
    from: z.date(),
    to: z.date(),
  }),
})

type BookingFormSchema = z.infer<typeof bookingFormSchema>

interface IRangeDatePickerProps {
  carId: string
  onFormSubmit: () => void
}

export default function RangeDatePicker({
  carId,
  onFormSubmit,
}: IRangeDatePickerProps) {
  const { control, handleSubmit, watch } = useForm<BookingFormSchema>({
    resolver: zodResolver(bookingFormSchema),
  })

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const { mutateAsync: CreateBookingMutation } = useMutation({
    mutationFn: addBooking,
    onSuccess: () => {
      onFormSubmit()
    },
  })

  async function onSubmit({ dateRange: { from, to } }: BookingFormSchema) {
    try {
      await CreateBookingMutation({
        startDate: from,
        endDate: to,
        carId,
      })
    } catch (error) {}
  }

  const date = watch('dateRange')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col py-4 md:flex-row"
    >
      <Controller
        name="dateRange"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Calendar
            mode="range"
            selected={value}
            onSelect={onChange}
            disabled={{ before: today }}
            className="rounded-md border"
          />
        )}
      />
      <div className="flex w-full flex-col items-start justify-between md:px-12">
        <div className="w-full py-6">
          <label htmlFor="" className="text-xs uppercase text-light-gray">
            De
          </label>
          <p className="mb-8 w-full border-b-2">
            {date?.from ? formatData(String(date?.from)) : ''}
          </p>
          <div className="w-full">
            <label htmlFor="" className="text-xs uppercase text-light-gray">
              Até
            </label>
            <div className="mb-8 w-full border-b-2">
              <p>
                {date?.to !== undefined ? formatData(String(date?.to)) : ''}
              </p>
            </div>
          </div>
        </div>

        <Button type="submit" size={'2xl'} className="w-full">
          confirmar
        </Button>
      </div>
    </form>
  )
}
