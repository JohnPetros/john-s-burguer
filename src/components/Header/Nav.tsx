'use client'

import React from 'react'
import { NavLink } from './NavLink'
import { NAV_LINKS } from '@/utils/nav-links'

export function Nav() {
  return (
    <nav className="z-40 flex h-full w-full flex-col items-center justify-center gap-8 bg-orange-500 md:static md:h-auto md:w-auto md:flex-row md:gap-0">
      {NAV_LINKS.map((navLink) => (
        <li key={navLink.title}>
          <NavLink
            icon={navLink.icon}
            title={navLink.title}
            href={navLink.href}
            isFilled={false}
          />
        </li>
      ))}
      <li>
        <NavLink
          icon="burguer.svg"
          title="make your own burguer"
          href="/custom-burguer"
          isFilled={true}
        />
      </li>
    </nav>
  )
}
