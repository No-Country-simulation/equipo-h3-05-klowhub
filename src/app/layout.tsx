import type { Metadata } from 'next'
import './globals.css'

import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'KlowHub',
  description: 'Aprende, Descubre, Enseña'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased home_bg h-full min-h-screen`}>
        <Toaster position='top-center' />
        {children}
      </body>
    </html>
  )
}
