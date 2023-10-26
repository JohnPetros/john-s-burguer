import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
    <html lang="en">
      <body className={open_sans.className}>{children}</body>
    </html>
  )
}
