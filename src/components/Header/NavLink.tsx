import Link from 'next/link'

import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

interface NavLinkProps {
  title: string
  href: string
  icon: string
  isFilled: boolean
}

export function NavLink({ title, icon, href, isFilled }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        'flex items-center justify-center gap-2 rounded-md px-3 py-2 font-bold text-white duration-200',
        isFilled
          ? 'bg-zinc-900 transition-shadow hover:shadow-md hover:shadow-yellow-400'
          : 'transition-colors hover:bg-zinc-900'
      )}
    >
      <Image src={`/icons/${icon}`} alt="" width={24} height={24} />
      {title}
    </Link>
  )
}
