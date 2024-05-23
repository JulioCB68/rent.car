import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  const data = await request.json()

  const userExists = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  })

  if (userExists) {
    return new NextResponse('E-mail already exist.', {
      status: 400,
    })
  }

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  })

  return new NextResponse(JSON.stringify(user), {
    status: 201,
    headers: { 'Set-Cookie': `@rentcar:userId=${user.id}` },
  })
}
