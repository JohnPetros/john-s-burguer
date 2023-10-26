'use client'
import Image from 'next/image'

export function Header() {
  return (
    <header className="w-full bg-orange-500 py-2">
      <div className="container flex items-center justify-between">
        <a href="/" className="z-50">
          <Image
            src="/images/logo.png"
            width={52}
            height={52}
            className="h-auto w-auto rounded-full"
            style={{ objectFit: 'cover' }}
            alt="John's Burguer"
          />
        </a>

        <button onClick={() => confirm('oi')}>teste</button>

        {/* <NavBar /> */}
      </div>
    </header>
  )
}
