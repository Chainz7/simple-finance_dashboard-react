import React from 'react'
import { motion } from 'framer-motion'

import { icons } from '../../../constants'

function Top() {
  return (
    <div class="grid gap-8 pt-4 pb-8 bg-gradient-to-r from-blue-600 to-cyan-300 -ml-3 pl-3">
      <div class="w-screen h-auto flex justify-start items-center pr-6">
        <div class="w-5/6 h-auto flex justify-start items-center gap-2">
          <div class="w-4 h-4 relative flex justify-center items-center">
            <img src={icons.left} alt="visa" class="w-full h-full"/>
          </div>
          <span class="font-medium text-base text-white">Account Finance</span>
        </div>
        <div class="w-1/6 h-auto flex justify-end items-center">
          <div class="w-5 h-5 relative flex justify-center items-center">
            <img src={icons.help2} alt="visa" class="w-full h-full"/>
          </div>
        </div>
      </div>
      <div class="w-screen h-auto flex flex-col justify-center items-start">
        <span class="font-medium text-lg text-white">Rp. 25.550.000,-</span>
        <span class="font-light text-sm text-white">12 June 2022</span>
      </div>
    </div>
  )
}

export default Top