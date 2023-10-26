import Image from 'next/image'
import { CTA } from './CTA'

export function Banner() {
  return (
    <section
      id="home"
      className="relative flex h-[24rem] w-full items-center  md:h-[32rem]"
    >
      <span className="absolute inset-0 z-30 block h-full w-full bg-black opacity-50" />
      <Image
        src="/images/banner-1.jpg"
        fill
        sizes="100vw"
        alt="hamburguer"
        style={{ objectFit: 'cover' }}
      />
      <div className="container z-30 h-max w-max">
        <CTA />
      </div>
    </section>
  )
}
