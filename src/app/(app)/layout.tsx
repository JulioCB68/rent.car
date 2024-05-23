import { inter } from '@/config/font'
import { metaData } from '@/config/meta'

import '../styles/globals.css'

export const metadata = metaData

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
