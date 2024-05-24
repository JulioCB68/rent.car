import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET() {
  const cookie = cookies()
  const userId = cookie.get('@rentcar:userId')

  if (!userId?.value) {
    return NextResponse.json(
      {
        error: 'Token não encontrado!',
        message:
          'Não foi possível encontrar o token de usuário, faça login para entrar!',
      },
      { status: 401 },
    )
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId.value,
    },
  })

  return NextResponse.json(user, {
    status: 200,
  })
}
