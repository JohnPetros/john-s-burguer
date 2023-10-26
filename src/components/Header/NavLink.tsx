import dynamic from 'next/dynamic'
import Link from 'next/link'

import dynamicIconImports from 'lucide-react/dynamicIconImports'
import type { Icon } from '@/@types/icon'
import { twMerge } from 'tailwind-merge'

interface NavLinkProps {
  title: string
  href: string
  icon: Icon
  isFilled: boolean
}

export function NavLink({ title, icon, href, isFilled }: NavLinkProps) {
  const LinkIcon = dynamic(dynamicIconImports[icon])

  return (
    <Link
      href={href}
      className={twMerge(
        'flex items-center justify-center gap-2 rounded-md  px-3 py-2 font-bold text-white duration-200',
        isFilled
          ? 'bg-zinc-900 transition-shadow hover:shadow-md hover:shadow-yellow-400'
          : 'transition-colors hover:bg-zinc-900'
      )}
    >
      <LinkIcon className="text-white" fontWeight="bold" size={16} />
      {title}
    </Link>
  )
}
