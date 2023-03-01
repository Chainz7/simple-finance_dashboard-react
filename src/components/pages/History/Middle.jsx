import React from 'react'
import { motion } from 'framer-motion'

import { vari, icons } from '../../../constants'

function Middle() {
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
    <div class="grid gap-3 mb-16">
      <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
        <div class="w-screen h-auto flex justify-between pr-6 items-center">
          <span class="font-semibold text-base text-fontSecondary">Statistics</span>
          <span class="font-normal text-base text-sm text-fontSecondary cursor-pointer">See All</span>
        </div>  
      </motion.div>
    </div>
  )
}

export default Middle