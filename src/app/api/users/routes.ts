import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userExists) {
    return res.status(400).json({
      message: 'E-mail already exist.',
    })
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  })

  setCookie({ res }, '@rentcar:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return res.status(201).json(user)
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const { id, name, email, password } = req.body

  const userExists = await prisma.user.findUnique({
    where: { id },
  })

  if (!userExists) {
    return res.status(400).json({
      message: 'User does not exist.',
    })
  }

  await prisma.user.update({
    where: { id },
    data: {
      name,
      email,
      password,
    },
  })

  return res.status(204).end()
}
