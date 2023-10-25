import { House, Icon } from '@phosphor-icons/react'
import { BookOpen, Info, Phone } from 'lucide-react'

type NavLink = {
  title: string
  icon: Icon
  href: string
}

export const NAV_LINKS: NavLink[] = [
  {
    title: 'Home',
    icon: House,
    href: '#home',
  },
  {
    title: 'Info',
    icon: Info,
    href: '#info',
  },
  {
    title: 'Menu',
    icon: BookOpen,
    href: '#menu',
  },
  {
    title: 'Contact',
    icon: Phone,
    href: '#contact',
  },
]
