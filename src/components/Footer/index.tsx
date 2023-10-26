import Image from 'next/image'
import { List } from './List'
import { Logo } from '../Logo'
import Link from 'next/link'
import { NAV_LINKS } from '@/utils/nav-links'

export function Footer() {
  return (
    <footer className=" mt-24 bg-orange-500">
      <div className="container flex w-full flex-col items-center justify-items-end gap-4 py-6 sm:grid sm:grid-cols-2 sm:items-start md:grid-cols-3 md:gap-0 lg:grid-cols-4">
        <div className="justify-self-start">
          <Logo size={120} />
        </div>
        <div className="justify-self-start lg:justify-self-auto">
          <List
            title="Contact us"
            items={[
              <>
                <Image src="/icons/phone.svg" width={16} height={16} alt="" />
                (34) 3333-3333
              </>,
              <>
                <Image
                  src="/icons/whatsapp.svg"
                  width={16}
                  height={16}
                  alt=""
                />
                (34) 9 3333-3333
              </>,
              <>
                <Image src="/icons/mail.svg" width={16} height={16} alt="" />
                sac@johnsburguer.com
              </>,
            ]}
          />
        </div>
        <div className="justify-self-start lg:justify-self-auto">
          <List
            title="What are you looking for?"
            items={NAV_LINKS.map((navLink) => (
              <Link key={navLink.title} href={navLink.href}>
                {navLink.title}
              </Link>
            ))}
          />
        </div>
        <div className="justify-self-start lg:justify-self-auto">
          <List
            direction="row"
            title="Where find us?"
            items={[
              <Link
                key="whatsapp"
                href="#"
                className="grid place-content-center rounded-full bg-zinc-900 p-1"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </Link>,
              <Link
                key="instagram"
                href="#"
                className="grid place-content-center rounded-md bg-zinc-900 p-1"
              >
                <Image
                  src="/icons/instagram.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </Link>,
              <Link
                key="facebook"
                href="#"
                className="grid place-content-center rounded-md bg-zinc-900 p-1"
              >
                <Image
                  src="/icons/facebook.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </Link>,
            ]}
          />
        </div>
      </div>
    </footer>
  )
}
