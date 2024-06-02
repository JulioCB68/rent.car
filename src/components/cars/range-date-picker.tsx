'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Calendar } from '@/components/ui/calendar'
import { Button } from '../ui/button'
import { formatDate } from './helpers'

const bookingFormSchema = z.object({
  dateRange: z.object({
    from: z.date(),
    to: z.date(),
  }),
})

type BookingFormSchema = z.infer<typeof bookingFormSchema>

interface IRangeDatePickerProps {
  closeModal: () => void
}

export default function RangeDatePicker({ closeModal }: IRangeDatePickerProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const { control, handleSubmit, watch } = useForm<BookingFormSchema>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      dateRange: {
        from: startDate ? new Date(startDate) : undefined,
        to: endDate ? new Date(endDate) : undefined,
      },
    },
  })

  async function onSubmit({ dateRange: { from, to } }: BookingFormSchema) {
    params.set('startDate', from.toISOString())
    params.set('endDate', to.toISOString())

    router.push(`${pathname}?${params}`)
    closeModal()
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
            {date?.from ? formatDate(String(date?.from)) : ''}
          </p>
          <div className="w-full">
            <label htmlFor="" className="text-xs uppercase text-light-gray">
              Até
            </label>
            <div className="mb-8 w-full border-b-2">
              <p>
                {date?.to !== undefined ? formatDate(String(date?.to)) : ''}
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
