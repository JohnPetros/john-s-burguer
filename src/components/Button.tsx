import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="flex items-center justify-center gap-2 rounded-md bg-orange-500 p-2   text-sm font-bold text-white"
    />
  )
}
