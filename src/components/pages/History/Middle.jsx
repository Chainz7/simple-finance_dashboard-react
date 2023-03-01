import React from 'react'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { icons } from '../../../constants'

const data = [
  { name: 'Jan', data: 2200 },
  { name: 'Feb', data: 4800 },
  { name: 'Mar', data: 3100 },
  { name: 'Apr', data: 4200 },
  { name: 'May', data: 2000 }
]

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
    <div class="w-full grid gap-3">
      <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
        <div class="w-screen h-auto flex justify-between pr-6 items-center">
          <span class="font-semibold text-base text-fontSecondary">Statistics</span>
          <span class="font-normal text-base text-sm text-fontSecondary cursor-pointer">See All</span>
        </div>  
      </motion.div>
      <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 30, right: 30, bottom: 30, left: -30 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" line={{ strokeWidth: 0 }}/>
            <XAxis tick={{dy: -30}} tickLine={false} axisLine={false} dataKey="name" fontSize={11} stroke="rgb(170, 174, 184)"/>
            <YAxis domain={[0, 'dataMax']} tickLine={false} axisLine={false} ticks={[1000, 2000, 3000, 4000, 5000]} tickFormatter={tick => `${tick / 1000}M`}  fontSize={11} stroke="rgb(170, 174, 184)"/>
            <Tooltip />
            <Line type="monotone" dataKey="data" stroke="rgb(17,115,245)" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div> 
    </div>
  )
}

export default Middle