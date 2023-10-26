import Image from 'next/image'
import React from 'react'

interface LogoProps {
  size: number
}

export function Logo({ size }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      width={size}
      height={size}
      className="h-auto w-auto rounded-full"
      style={{ objectFit: 'cover' }}
      alt="John's Burguer"
    />
  )
}
