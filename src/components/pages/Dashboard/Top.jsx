import React from 'react'
import { motion } from 'framer-motion'

import { icons } from '../../../constants'

function Top() {
  return (
    <div class="grid gap-3 overflow-hidden">
      <div class="w-screen h-auto flex justify-between pr-6 items-center">
        <span class="font-semibold text-base text-fontSecondary">Your Visa</span>
        <span class="font-normal text-base text-sm text-fontSecondary cursor-pointer">See All</span>
      </div>  
      <div class="flex gap-4">
        <div class="w-60 h-full grid gap-2 pt-3 pb-1 px-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-300 text-fontPrimary text-sm cursor-pointer">
          <div class="w-full h-auto flex justify-between items-start mb-6">
            <div class="w-8 h-6 relative flex justify-center items-center pt-1">
              <img src={icons.chip} alt="visa"/>
            </div>
            <span>Premium</span>
          </div>
          <span>4000 5127 2123 2018</span>
          <div class="w-full h-auto flex justify-between items-center">
            <span class="font-semibold">Aurellia</span>
            <div class="w-8 h-8 flex justify-center items-start relative">
              <img src={icons.visa} alt="visa"/>
            </div>
          </div>
        </div>
        <div class="w-60 h-full grid gap-2 pt-3 pb-1 px-3 rounded-lg bg-gradient-to-r bg-white shadow-lg text-fontSecondary text-sm cursor-pointer">
          <div class="w-full h-auto flex justify-between items-start mb-6">
            <div class="w-8 h-6 relative flex justify-center items-center pt-1">
              <img src={icons.chipOff} alt="visa"/>
            </div>
            <span>Premium</span>
          </div>
          <span>4000 5127 2123 2018</span>
          <div class="w-full h-auto flex justify-between items-center">
            <span class="font-semibold">Aurellia</span>
            <div class="w-8 h-8 flex justify-center items-start relative">
              <img src={icons.visa} alt="visa"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top