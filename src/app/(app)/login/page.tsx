'use client'

import Image from 'next/image'
import Link from 'next/link'

import Audi from '../../../../public/home-audi-car.svg'
import RectangleGroup from '../../../../public/home-rectangle-group.svg'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/lib/axios'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  email: z.string().min(4, { message: 'E-mail field required' }),
  password: z.string().min(4, { message: 'Password field required' }),
})

type FormSchema = z.infer<typeof formSchema>

export default function Login() {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  async function handleLogin({ email, password }: FormSchema) {
    try {
      await api
        .post('/login', {
          email,
          password,
        })
        .then(() => route.push('/app'))
    } catch (error) {
      console.error(error)
    }
  }

  const isFormIsEmpty: boolean = !!(
    touchedFields.email === undefined || touchedFields.password === undefined
  )

  return (
    <div className="flex h-full w-full items-center justify-center lg:container">
      <div className="relative hidden w-full cursor-pointer items-center justify-center lg:flex">
        <Image
          src={Audi}
          alt="Audi"
          width={500}
          height={500}
          className="absolute z-10"
        />
        <Image
          src={RectangleGroup}
          alt="Rectangle group"
          width={500}
          height={500}
          className="absolute opacity-45 grayscale"
        />
      </div>
      <form onSubmit={handleSubmit(handleLogin)} className="container w-full">
        <div className="flex flex-col items-center">
          <div className="flex h-[30rem] flex-col items-start justify-between">
            <h3 className="text-3xl font-semibold text-dark-gray">
              Estamos quase lá.
            </h3>

            <p className="w-80 text-light-gray">
              Faça seu login para começar uma experiência incrível.
            </p>
            <Input
              type="email"
              placeholder="E-mail"
              className="w-80 md:w-96"
              {...register('email')}
            />
            {errors.email?.message && <p>{errors.email.message}</p>}
            <Input
              type="password"
              placeholder="Senha"
              className="w-80 md:w-96"
              {...register('password')}
            />
            {errors.password?.message && <p>{errors.password.message}</p>}

            <Link href="" className="text-sm text-light-gray">
              Esqueci minha senha
            </Link>

            <Button
              type="submit"
              className="w-80 md:w-96"
              disabled={isSubmitting || isFormIsEmpty}
            >
              login
            </Button>
            <Link href="/sign-up">
              <Button className="w-80 md:w-96" variant={'outline'}>
                criar conta gratuita
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
