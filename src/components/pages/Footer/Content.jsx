import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';

import { vari, icons } from '../../../constants'
import { Link } from 'react-router-dom';

function Content() {
  return (
    <div class="w-full h-full flex justify-between items-center">
      <Link to="/">
        <div class="w-6 h-6 flex justify-center items-center relative">
          <HomeIcon class="w-full h-full rounded-full object-cover"/>
        </div>
      </Link>
      <Link to="/history">
        <div class="w-6 h-6 flex justify-center items-center relative">
          <HistoryIcon class="w-full h-full rounded-full object-cover"/>
        </div>
      </Link>
      <div class="w-6 h-6 flex justify-center items-center relative">
        <ChatIcon class="w-full h-full rounded-full object-cover"/>
      </div>
      <div class="w-6 h-6 flex justify-center items-center relative">
        <PersonIcon class="w-full h-full rounded-full object-cover"/>
      </div>
    </div>
  )
}

export default Content