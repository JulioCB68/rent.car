import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const cookie = cookies()
    const userCookie = cookie.get('@rentcar:userId')
    const userId = userCookie?.value

    if (!userId) {
      return NextResponse.json(
        { error: 'ID do usuário não encontrado' },
        { status: 400 },
      )
    }

    const data = await request.json()

    const booking = await prisma.booking.create({
      data: {
        userId,
        startDate: data.startDate,
        endDate: data.endDate,
        carId: data.carId,
      },
    })

    return NextResponse.json(booking, {
      status: 201,
    })
  } catch (error) {}
}
