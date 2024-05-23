import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Audi from '../../public/home-audi-car.svg'
import RectangleGroup from '../../public/home-rectangle-group.svg'
import Logo from '../../public/logo.svg'

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-bg-background p-8">
      <div className="container grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <div className="order-2 col-span-2 md:order-1 md:col-span-1">
          <div className="flex h-[15rem] flex-col items-start justify-between md:h-[30rem]">
            <Image src={Logo} alt="Logo" width={100} height={200} />

            <h1 className="w-full text-lg text-white md:text-6xl lg:w-[30rem]">
              Alugue um carro de maneira simples e fácil
            </h1>

            <p className="w-full text-white lg:w-[20rem]">
              Vários modelos para você dirigir seguro, com conforto e segurança.
            </p>

            <Button size={'3xl'}>começar agora</Button>
          </div>
        </div>
        <div className="order-1 col-span-2 flex cursor-pointer items-center justify-center md:order-2 md:col-span-1">
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
            className="absolute hidden lg:block"
          />
        </div>
      </div>
    </div>
  )
}
