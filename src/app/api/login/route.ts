import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  const data = await request.json()

  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  })

  if (!user) {
    return new NextResponse('User not found.', {
      status: 400,
    })
  }

  return new NextResponse(JSON.stringify(user), {
    status: 200,
    headers: { 'Set-Cookie': `@rentcar:userId=${user.id}` },
  })
}
