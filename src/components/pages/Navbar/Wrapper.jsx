import React from 'react'
import { motion } from 'framer-motion'

import Left from './Left'
import Right from './Right'

function Wrapper() {
  const opacityIn = {
    whileInView: {
      opacity: [0, 1],
      transition: {
        duration: .7,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
      <div class="w-full h-auto flex justify-between items-start mt-2 mb-3 px-3">
        <Left />
        <Right />
      </div>
    </motion.div>
  )
}
export default Wrapper