import React from 'react'
import styled from 'styled-components'

import { vari, icons } from '../../../constants'
import Content from './Content'

function Wrapper() {
  return (
    <div class="w-full h-auto fixed bottom-0 flex justify-between items-start p-4 px-7">
      <Content />
    </div>
  )
}

export default Wrapper