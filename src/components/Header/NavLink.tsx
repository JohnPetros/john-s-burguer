import { Icon } from '@phosphor-icons/react'
import Link from 'next/link'

interface NavLinkProps {
  title: string
  href: string
  icon: Icon
}

export function NavLink({ title, href, icon: Icon }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 font-bold text-gray-100"
    >
      <Icon className="text-gray-100" />
      {title}
    </Link>
  )
}
