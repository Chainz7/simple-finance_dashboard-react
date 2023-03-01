import React from 'react'
import { motion } from 'framer-motion'

import { icons } from '../../../constants'

function Bottom() {
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
          <span class="font-semibold text-base text-fontSecondary">Activity</span>
          <span class="font-normal text-sm text-fontSecondary cursor-pointer">See All</span>
        </div>  
      </motion.div>
      <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
      <div class="flex gap-4 pr-6">
        <div class="w-full grid justify-items-center gap-2 cursor-pointer">
          {/* Items */}
          <div class="w-full h-full flex justify-start p-3 rounded-md bg-white shadow">
            <div class="w-1/5 h-full flex justify-start">
              <div class="w-11 h-11 relative flex justify-center items-center rounded-full bg-iconSecondary">
                <img src={icons.up} class="w-1/2 h-1/2"/>
              </div>
            </div>
            <div class="w-3/5 h-full flex justify-start">
              <div class="grid ml-0">
                <span class="font-medium text-sm">Deposit</span>
                <span class="mb-3 font-normal text-xs text-primary">Rp. 15.000.000,-</span>
                <div class="flex items-center gap-1">
                  <div class="w-4 h-4 relative flex justify-center items-center">
                    <img src={icons.location} class="w-full h-full"/>
                  </div>
                  <span class="font-medium text-xs text-fontSecondary">Bank Mandiri ATM</span>
                </div>
              </div>
            </div>
            <div class="w-1/5 h-full flex justify-end">
              <div class="grid gap-8">
                <span class="font-medium text-xs text-fontSecondary">11 maret</span>
                <span class="font-medium text-xs text-fontSecondary">11:22 AM</span>
              </div>
            </div>
          </div>
          {/* Items */}
          <div class="w-full h-full flex justify-start p-3 rounded-md bg-white shadow">
            <div class="w-1/5 h-full flex justify-start">
              <div class="w-11 h-11 relative flex justify-center items-center rounded-full bg-iconTertiary">
                <img src={icons.down} class="w-1/2 h-1/2"/>
              </div>
            </div>
            <div class="w-3/5 h-full flex justify-start">
              <div class="grid ml-0">
                <span class="font-medium text-sm">Deposit</span>
                <span class="mb-3 font-normal text-xs text-tertiary">Rp. 15.000.000,-</span>
                <div class="flex items-center gap-1">
                  <div class="w-4 h-4 relative flex justify-center items-center">
                    <img src={icons.location} class="w-full h-full"/>
                  </div>
                  <span class="font-medium text-xs text-fontSecondary">Bank Mandiri ATM</span>
                </div>
              </div>
            </div>
            <div class="w-1/5 h-full flex justify-end">
              <div class="grid gap-8">
                <span class="font-medium text-xs text-fontSecondary">11 maret</span>
                <span class="font-medium text-xs text-fontSecondary">11:22 AM</span>
              </div>
            </div>
          </div>
          {/* Items */}
          <div class="w-full h-full flex justify-start p-3 rounded-md bg-white shadow">
            <div class="w-1/5 h-full flex justify-start">
              <div class="w-11 h-11 relative flex justify-center items-center rounded-full bg-iconSecondary">
                <img src={icons.up} class="w-1/2 h-1/2"/>
              </div>
            </div>
            <div class="w-3/5 h-full flex justify-start">
              <div class="grid ml-0">
                <span class="font-medium text-sm">Deposit</span>
                <span class="mb-3 font-normal text-xs text-primary">Rp. 15.000.000,-</span>
                <div class="flex items-center gap-1">
                  <div class="w-4 h-4 relative flex justify-center items-center">
                    <img src={icons.location} class="w-full h-full"/>
                  </div>
                  <span class="font-medium text-xs text-fontSecondary">Bank Mandiri ATM</span>
                </div>
              </div>
            </div>
            <div class="w-1/5 h-full flex justify-end">
              <div class="grid gap-8">
                <span class="font-medium text-xs text-fontSecondary">11 maret</span>
                <span class="font-medium text-xs text-fontSecondary">11:22 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  )
}

export default Bottom