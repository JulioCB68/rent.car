import Image from 'next/image'
import Link from 'next/link'

import Audi from '../../../../public/home-audi-car.svg'
import RectangleGroup from '../../../../public/home-rectangle-group.svg'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Login() {
  return (
    <div className="container flex h-full w-full items-center justify-center">
      <div className="hidden w-full cursor-pointer items-center justify-center lg:flex">
        <Image
          src={Audi}
          alt="Audi"
          width={500}
          height={500}
          className="relative z-10"
        />
        <Image
          src={RectangleGroup}
          alt="Rectangle group"
          width={500}
          height={500}
          className="absolute opacity-45 grayscale"
        />
      </div>
      <div className="container w-full">
        <div className="flex h-[30rem] flex-col items-start justify-between">
          <h3 className="text-3xl font-semibold text-dark-gray">
            Estamos quase lá.
          </h3>

          <p className="w-80 text-light-gray">
            Faça seu login para começar uma experiência incrível.
          </p>

          <Input type="email" placeholder="E-mail" className="w-80 md:w-96" />
          <Input type="password" placeholder="Senha" className="w-80 md:w-96" />

          <Link href="" className="text-sm text-light-gray">
            Esqueci minha senha
          </Link>

          <Button size={'3xl'} className="w-80 md:w-96">
            login
          </Button>
          <Button size={'3xl'} className="w-80 md:w-96" variant={'outline'}>
            criar conta gratuita
          </Button>
        </div>
      </div>
    </div>
  )
}
