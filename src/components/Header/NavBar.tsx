'use client'

import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
// import { motion, Variants, AnimatePresence } from 'framer-motion'
import { Nav } from './Nav'

// const navAnimations: Variants = {
//   down: {
//     y: '100vh',
//   },
//   up: {
//     y: 0,
//   },
// }

export function NavBar() {
  const [isVisible, setIsVisible] = useState(false)

  function handleHamburguerMenu() {
    console.log({ isVisible })
    setIsVisible(!isVisible)
  }

  return (
    <>
      <button onClick={() => console.log('teste')}>Teste</button>
      <button className=" block md:hidden" onClick={() => alert('teste')}>
        {isVisible ? (
          <X
            size={32}
            className="text-white"
            weight="bold"
            onClick={() => alert('teste')}
          />
        ) : (
          <List
            size={32}
            className="text-white"
            weight="bold"
            onClick={() => alert('teste')}
          />
        )}
      </button>

      {/* <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={navAnimations}
            initial="down"
            animate={isVisible ? 'up' : 'down'}
            className="md:hidden"
          >
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden md:block">
        <Nav />
      </div> */}
    </>
  )
}
