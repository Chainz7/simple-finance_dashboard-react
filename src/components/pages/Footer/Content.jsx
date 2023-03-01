import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';

import { Link } from 'react-router-dom';

function Content() {
  const [iconColors, setIconColors] = useState({
    home: 'action',
    history: 'action',
    chat: 'action',
    person: 'action'
  });
  const handleLinkClick = (icon) => {
    const newColors = { ...iconColors, [icon]: 'primary' };
    Object.keys(iconColors).forEach((key) => {
      if (key !== icon && iconColors[key] === 'primary') {
        newColors[key] = 'action';
      }
    });
    setIconColors(newColors);
  };
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
    <div class="w-full h-full flex justify-between items-center">
      <Link to="/" onClick={() => handleLinkClick('home')}>
        <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
          <IconContainer className="w-6 h-6 flex justify-center items-center relative" animate={{ scale: iconColors.home === 'primary' ? 1.2 : 1 }} transition={{ duration: 0.2 }}>
            <HomeIcon color={iconColors.home}/>
          </IconContainer>
        </motion.div>
      </Link>
      <Link to="/history" onClick={() => handleLinkClick('history')}>
        <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
          <IconContainer className="w-6 h-6 flex justify-center items-center relative" animate={{ scale: iconColors.history === 'primary' ? 1.2 : 1 }} transition={{ duration: 0.2 }}>
            <HistoryIcon color={iconColors.history}/>
          </IconContainer>
        </motion.div>
      </Link>
      <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
        <div class="w-6 h-6 flex justify-center items-center relative">
          <ChatIcon color="disabled"/>
        </div>
      </motion.div>
      <motion.div variant={opacityIn} whileInView={opacityIn.whileInView}>
        <div class="w-6 h-6 flex justify-center items-center relative">
          <PersonIcon color="disabled"/>
        </div>
      </motion.div>
    </div>
  )
}
const IconContainer = styled(motion.div)``
export default Content