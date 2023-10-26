import { NavBar } from './NavBar'
import Link from 'next/link'
import { Logo } from '../Logo'

export function Header() {
  return (
    <header className="w-full bg-orange-500 py-2">
      <div className="container flex items-center justify-between">
        <Link href="/" className="z-50">
          <Logo size={52} />
        </Link>

        <NavBar />
      </div>
    </header>
  )
}
