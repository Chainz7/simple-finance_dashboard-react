import React from 'react'

import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'

function Wrapper() {
  
  return (
    <div class="w-full h-full grid justify-between items-start gap-4 px-3">
      <Top />
      <Middle />
      <Bottom />
    </div>
  )
}

export default Wrapper