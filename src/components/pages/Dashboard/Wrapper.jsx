import React from 'react'
import styled from 'styled-components'

import { vari, icons } from '../../../constants'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'

function Wrapper() {
  const Container = styled.div`
  
  `
  return (
    <Container>
      <Top />
      <Middle />
      <Bottom />
    </Container>
  )
}

export default Wrapper