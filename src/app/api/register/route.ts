import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userExists) {
      return NextResponse.json(
        {
          error: 'Cadastro não realizado!',
          message: 'Endereço de e-mail utilizado.',
        },
        { status: 400 },
      )
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })

    const response = NextResponse.json(user, { status: 201 })
    response.cookies.set('@rentcar:userId', user.id, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    })
    return response
  } catch (error) {
    console.error('Erro ao processar cadastro:', error)
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
