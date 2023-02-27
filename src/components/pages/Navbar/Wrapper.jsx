import React from 'react'
import styled from 'styled-components'

import { vari, icons } from '../../../constants'
import Left from './Left'
import Right from './Right'

function Wrapper() {
  const Container = styled.div`

  `
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  )
}

export default Wrapper