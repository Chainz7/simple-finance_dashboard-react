import React from 'react'
import { motion } from 'framer-motion'

import { icons } from '../../../constants'
import { Link } from 'react-router-dom'

function Top() {
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
    <div class="grid gap-8 pt-2 pb-8 bg-gradient-to-r from-blue-600 to-cyan-300 -ml-3 pl-3">
      <div class="w-screen h-auto flex justify-start items-center pr-6">
        <div class="w-5/6 h-auto flex justify-start items-center gap-2">
          <Link to="/">
            <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
              <div class="w-4 h-4 relative flex justify-center items-center">
                <img src={icons.left} alt="visa" class="w-full h-full"/>
              </div>
            </motion.div>
            </Link>
            <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
              <span class="font-medium text-base text-white">Account Finance</span>
            </motion.div>
        </div>
        <div class="w-1/6 h-auto flex justify-end items-center">
          <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
            <div class="w-5 h-5 relative flex justify-center items-center">
              <img src={icons.help2} alt="visa" class="w-full h-full"/>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
        <div class="w-screen h-auto flex flex-col justify-center items-start">
          <span class="font-medium text-lg text-white">Rp. 25.550.000,-</span>
          <span class="font-light text-sm text-white">12 June 2022</span>
        </div>
      </motion.div>
    </div>
  )
}
export default Top