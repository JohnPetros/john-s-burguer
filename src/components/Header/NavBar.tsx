'use client'

import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { Nav } from './Nav'

const navAnimations: Variants = {
  down: {
    y: '100vh',
  },
  up: {
    y: 0,
  },
}

export function NavBar() {
  const [isVisible, setIsVisible] = useState(false)

  function handleHamburguerMenu() {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <button className=" block md:hidden z-50" onClick={handleHamburguerMenu}>
        {isVisible ? (
          <X
            size={32}
            className="text-white"
            weight="bold"
          />
        ) : (
          <List
            size={32}
            className="text-white"
            weight="bold"
          />
        )}
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={navAnimations}
            initial="down"
            animate={isVisible ? 'up' : 'down'}
            className="md:hidden absolute inset-0 absolute h-screen w-screen "
          >
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden md:block">
        <Nav />
      </div>
    </>
  )
}
