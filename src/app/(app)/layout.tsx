import Header from '@/components/header'
import { inter } from '@/config/font'
import { metaData } from '@/config/meta'

import '@/styles/globals.css'
import { Package2 } from 'lucide-react'

export const metadata = metaData

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen w-full md:grid-cols-[80px_1fr]">
          <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col">
              <div className="flex h-14 items-center justify-center bg-red px-4 text-white lg:h-[60px] lg:px-6">
                <Package2 className="size-6" />
              </div>
              <div className="flex w-full flex-1 items-center justify-center bg-bg-background">
                <nav className="flex w-full flex-col">
                  <div className="flex cursor-pointer items-center justify-center hover:bg-shape">
                    <Package2 className="my-8 size-6 text-light-gray" />
                  </div>
                  <div className="flex cursor-pointer items-center justify-center hover:bg-shape">
                    <Package2 className="my-8 size-6 text-light-gray" />
                  </div>
                  <div className="flex cursor-pointer items-center justify-center hover:bg-shape">
                    <Package2 className="my-8 size-6 text-light-gray" />
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Header />
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:px-24">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
