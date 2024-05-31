import { api } from '@/lib/axios'

interface IBookingBody {
  carId: string
  startDate: Date
  endDate: Date
}

export async function addBooking({ carId, startDate, endDate }: IBookingBody) {
  await api.post('/booking', { carId, startDate, endDate })
}
