import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { icons } from '../../../constants'

function Right() {
  return (
    <div class="w-1/2 h-full flex justify-end items-center">
      <div class="w-12 h-12 flex justify-center items-center relative">
        <img src={icons.up} class="w-full h-full rounded-full object-cover"/>
      </div>
    </div>
  )
}

export default Right