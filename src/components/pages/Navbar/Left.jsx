import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

function Left() {
  return (
    <div class="w-1/2 h-auto grid justify-items-start items-start">
      <span class="font-normal text-sm text-fontSecondary">Hello,</span>
      <span class="font-semibold text-lg text-fontTertiary">Aurelia!</span>
    </div>
  )
}

export default Left