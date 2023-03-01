import React from 'react'

import Content from './Content'

function Wrapper() {
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
    <div class="w-full h-auto fixed bottom-0 flex justify-between items-start p-4 px-7 bg-white border-t border-gray-200">
      <Content />
    </div>
  )
}

export default Wrapper