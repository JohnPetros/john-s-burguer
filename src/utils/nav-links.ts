import { Icon } from '@/@types/icon'

type NavLink = {
  title: string
  icon: Icon
  href: string
}

export const NAV_LINKS: NavLink[] = [
  {
    title: 'Home',
    icon: 'home',
    href: '#home',
  },
  {
    title: 'Info',
    icon: 'info',
    href: '#info',
  },
  {
    title: 'Menu',
    icon: 'book-open-text',
    href: '#menu',
  },
  {
    title: 'Contact',
    icon: 'phone',
    href: '#contact',
  },
]
