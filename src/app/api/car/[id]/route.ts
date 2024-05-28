import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id

  const car = await prisma.car.findUnique({
    where: { id },
  })

  return NextResponse.json(car, {
    status: 200,
  })
}
