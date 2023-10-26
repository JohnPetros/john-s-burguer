'use client'

import { Header } from '@/components/Header'

export default function Home() {
  function foo() {
    console.log('teste')
    confirm('oi')
  }

  return (
    <div>
      <Header />
      <button className="bg-red-700" onClick={foo}>
        Teste
      </button>
    </div>
  )
}
