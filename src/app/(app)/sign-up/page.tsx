'use client'

import Image from 'next/image'

import RectangleGroup from '../../../../public/home-rectangle-group.svg'
import Dodge from '../../../../public/sign-up-dodge-car.svg'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { api } from '@/lib/axios'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name field required' }),
  email: z.string().min(4, { message: 'E-mail field required' }),
  password: z.string().min(4, { message: 'Password field required' }),
  confirm_password: z
    .string()
    .min(4, { message: 'Confirm password field required' }),
})

type FormSchema = z.infer<typeof formSchema>

export default function SignUp() {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  async function handleLogin({ name, email, password }: FormSchema) {
    try {
      await api
        .post('/register', {
          name,
          email,
          password,
        })
        .then(() => route.push('/app'))
    } catch (error) {
      console.error(error)
    }
  }

  const isFormIsEmpty: boolean = !!(
    touchedFields.name === undefined ||
    touchedFields.email === undefined ||
    touchedFields.password === undefined
  )

  return (
    <div className="flex h-full w-full items-center justify-center lg:container">
      <div className="relative hidden w-full cursor-pointer items-center justify-center lg:flex">
        <Image
          src={Dodge}
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
          className="absolute opacity-75 grayscale"
        />
      </div>
      <form onSubmit={handleSubmit(handleLogin)} className="container w-full">
        <div className="flex flex-col items-center">
          <div className="flex h-[20rem] flex-col items-start justify-between">
            <h3 className="text-3xl font-semibold text-dark-gray">
              Crie sua conta
            </h3>

            <p className="w-80 text-light-gray">
              Faça seu cadastro de forma rápida e fácil.
            </p>

            <Input
              type="name"
              placeholder="Nome"
              className="w-80 md:w-96"
              {...register('name')}
            />
            {errors.name?.message && <p>{errors.name.message}</p>}
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

            <Input
              type="password"
              placeholder="Confirme sua senha"
              className="w-80 md:w-96"
              {...register('confirm_password')}
            />
            {errors.confirm_password?.message && (
              <p>{errors.confirm_password.message}</p>
            )}

            <Button
              type="submit"
              className="w-80 md:w-96"
              disabled={isSubmitting || isFormIsEmpty}
            >
              cadastrar
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
