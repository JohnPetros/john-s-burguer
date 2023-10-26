import Image from 'next/image'
import { Button } from '../Button'

export function CTA() {
  return (
    <>
      <span className="font-cursive text-3xl text-yellow-400">
        Are you hungry?
      </span>
      <h1 className="mt-4 text-xl uppercase text-white">
        Order your John&apos; burguer now!
        <br />
        Fast delivery.
      </h1>
      <div className="mt-4 flex flex-col gap-3 md:flex-row">
        <Button>Fazer pedido online</Button>
        <Button>
          <Image src="/icons/whatsapp.svg" width={16} height={16} alt="" />
          Comprar pelo whatsapp
        </Button>
      </div>
    </>
  )
}
