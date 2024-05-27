import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const cars = await prisma.car.findMany()

  return NextResponse.json(cars, {
    status: 200,
  })
}
