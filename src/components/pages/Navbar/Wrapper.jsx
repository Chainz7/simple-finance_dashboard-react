import React from 'react'

import { vari, icons } from '../../../constants'
import Left from './Left'
import Right from './Right'

function Wrapper() {
  return (
    <div class="w-full h-auto flex justify-between items-start mt-2 mb-3 px-3">
      <Left />
      <Right />
    </div>
  )
}
export default Wrapper