import { ReactNode } from 'react'
import { getUnits } from './helpers'

interface IDetailProps {
  icon: ReactNode
  text: string | number | undefined
  speed?: boolean
  up?: boolean
  strength?: boolean
  capacity?: boolean
}

export default function Detail({
  icon,
  text,
  speed,
  up,
  strength,
  capacity,
}: IDetailProps) {
  const unit = getUnits({ speed, up, strength, capacity })

  return (
    <div>
      <div className="col-span-1 flex max-h-24 min-h-24 w-full cursor-pointer flex-col items-center justify-center whitespace-nowrap bg-background-gray p-6 shadow-md md:hidden">
        <div>{icon}</div>
        <p className="pt-4 text-xs">
          {text}
          {unit}
        </p>
      </div>

      <div className="col-span-1 hidden w-full cursor-pointer grid-cols-[60px_1fr] gap-0.5 md:grid">
        <div className="flex items-center justify-center bg-background-gray">
          {icon}
        </div>
        <p className="w-full flex-1 items-center justify-center whitespace-nowrap bg-background-gray py-4 text-center text-sm">
          {text}
          {unit}
        </p>
      </div>
    </div>
  )
}
