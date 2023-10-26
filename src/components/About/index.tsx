import Image from 'next/image'
import { Heading } from '../Heading'

export function About() {
  return (
    <section
      id="info"
      className="container mt-24 grid gap-3 lg:grid-cols-[1fr_1fr]"
    >
      <div>
        <Heading title="About ourselves" subtitle="Our delicious history" />
        <div className="mt-6 space-y-6">
          <p className="leading-6">
            The John&apos;s Burger Sandwich Shop opened in early August 2012,
            and its first store was located on Roberto Freire Avenue in Capim
            Macio.
          </p>
          <p className="leading-6">
            The brand started in October 2011 with a discreet sandwich cart,
            also on Roberto Freire Avenue, next to Águia Piscinas. The sandwich
            shop had a limited menu, standing out for offering sandwiches made
            with artisanal burgers.
          </p>
          <p className="leading-6">
            Within five months of the cart&apos;s operation, the number of
            customers doubled, and the space became too small to meet the
            demand. It was then necessary to invest in the construction of a
            larger and more comfortable location. It took five months of work on
            the new space, which is now one of the busiest spots in the
            neighborhood.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-6 sm:flex-row lg:mt-0 lg:items-end lg:justify-end">
        <Image
          src="/images/about-1.jpg"
          width={260}
          height={300}
          className="cursor-pointer rounded-t-md transition-transform duration-200 hover:-translate-y-3"
          alt="hamburguer"
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="/images/about-2.jpg"
          width={260}
          height={300}
          className="cursor-pointer rounded-t-md transition-transform duration-200 hover:-translate-y-3"
          sizes="100vw"
          alt="hamburguer"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  )
}
