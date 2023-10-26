import type { Metadata } from 'next'
import { Open_Sans, Pacifico } from 'next/font/google'
import './globals.css'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
})

export const metadata: Metadata = {
  title: "John's Burguer",
  description: 'A burguer delevery app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${open_sans.variable} ${pacifico.variable}`}>
      <body>{children}</body>
    </html>
  )
}
