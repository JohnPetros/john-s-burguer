import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ListProps {
  items: ReactNode[]
  title: string
  direction?: 'row' | 'col'
}

export function List({ items, title, direction = 'col' }: ListProps) {
  return (
    <div className="flex flex-col text-center sm:text-left">
      <strong className="text-white">{title}</strong>
      <ul
        className={twMerge(
          'mt-3 flex items-center gap-2 sm:items-start',
          direction === 'col' ? 'flex-col' : 'flex-row'
        )}
      >
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1 text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
