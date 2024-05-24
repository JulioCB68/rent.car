import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          error: 'Login não realizado!',
          message: 'Endereço de e-mail não encontrado.',
        },
        { status: 400 },
      )
    }

    if (
      user &&
      (data.email !== user.email || data.password !== user.password)
    ) {
      return NextResponse.json(
        {
          error: 'Login não realizado!',
          message: 'E-mail ou senha incorreto.',
        },
        { status: 401 },
      )
    }

    return new NextResponse(JSON.stringify(user), {
      status: 200,
      headers: { 'Set-Cookie': `@rentcar:userId=${user.id}` },
    })
  } catch (error) {
    console.error('Erro ao processar login:', error)
    return NextResponse.json(
      {
        error: 'Erro no servidor',
        message:
          'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.',
      },
      { status: 500 },
    )
  }
}
