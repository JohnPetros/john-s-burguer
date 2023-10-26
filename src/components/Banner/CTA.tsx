import Image from 'next/image'
import { Button } from '../Bton'

export function CTA() {
  return (
    <div>
      <span className="font-cursive text-lg text-yellow-400">
        Está com fome?
      </span>
      <h1 className="text-lg uppercase text-white">
        PEÇA SEU BURGUER DO JOHN AGORA. <br />
        ENTREGA RÁPIDA!
      </h1>
      <div className="mt-3 flex flex-col gap-3 md:flex-row">
        <Button>Fazer pedido online</Button>
        <Button>
          <Image src="/icons/whatsapp.svg" width={16} height={16} alt="" />
          Comprar pelo whatsapp
        </Button>
      </div>
    </div>
  )
}
