import { NAV_LINKS } from '@/utils/nav-links'
import Image from 'next/image'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <header className="fixed w-full bg-orange-500 py-2">
      <div className="container justify-between">
        <a href="/">
          <Image
            src="/images/logo.png"
            width={70}
            height={70}
            className="rounded-full"
            alt="John's Burguer"
          />
        </a>

        <nav className="flex items-center">
          {NAV_LINKS.map((navLink) => (
            <NavLink
              key={navLink.title}
              icon={navLink.icon}
              title={navLink.title}
              href={navLink.href}
            />
          ))}
        </nav>
      </div>
    </header>
  )
}
