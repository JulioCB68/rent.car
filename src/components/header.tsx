'use client'

import { getUser } from '@/services/user'
import { useQuery } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { Button } from './ui/button'

export default function Header() {
  const { data: user } = useQuery({
    queryKey: ['get-user'],
    queryFn: getUser,
  })

  return (
    <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-20">
      {!!user && (
        <>
          <h1>
            Olá, <strong>{user?.name}</strong>
          </h1>
          <Button className="gap-2">
            <LogOut className="size-5" />
          </Button>
        </>
      )}
    </header>
  )
}
