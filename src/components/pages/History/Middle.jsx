import React from 'react'
import { motion } from 'framer-motion'

import { vari, icons } from '../../../constants'

function Middle() {
  return (
    <div class="grid gap-3 mb-16">
      <div class="w-screen h-auto flex justify-between pr-6 items-center">
        <span class="font-semibold text-base text-fontSecondary">Statistics</span>
        <span class="font-normal text-base text-sm text-fontSecondary cursor-pointer">See All</span>
      </div>  
    </div>
  )
}

export default Middle