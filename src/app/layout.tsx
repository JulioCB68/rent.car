import { inter } from '@/config/font'
import { metaData } from '@/config/meta'

import '../styles/globals.css'
import TanstackProvider from '@/providers/TanStackQuery'

export const metadata = metaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  )
}
