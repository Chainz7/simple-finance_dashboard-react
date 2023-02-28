import React from 'react'
import { motion } from 'framer-motion'

import { icons } from '../../../constants'

function Middle() {
  return (
    <div class="grid gap-3">
      <div class="w-screen h-auto flex justify-between pr-6 items-center">
        <span class="font-semibold text-base text-fontSecondary">Activity</span>
        <span class="font-normal text-sm text-fontSecondary cursor-pointer">See All</span>
      </div>  
      <div class="flex gap-4 pr-6">
        <div class="w-full h-full flex justify-center items-center gap-8">
          <div class="w-full grid justify-items-center gap-2 cursor-pointer">
            <div class="w-full h-11 relative flex justify-center items-center rounded-md bg-white shadow">
              <span class="font-semibold text-xs">Card</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle