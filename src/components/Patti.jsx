import React from 'react'
import { motion } from 'framer-motion'

const Patti = () => {
  return (
    <div className='w-full py-6 bg-[#FACC15] border-t-2 border-b-2 border-yellow-400 overflow-hidden'>
      <div className="flex">
        {[1, 2, 3].map(i => (
          <motion.h1
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
            className='text-[10vw] sm:text-[8vw] md:text-[6vw] font-extrabold leading-none whitespace-nowrap text-[#15294D] pr-16 shrink-0'
          >
            Learn Hardware · Make Friends · Build Cool Stuff · April 19 Lucknow ·&nbsp;
          </motion.h1>
        ))}
      </div>
    </div>
  )
}

export default Patti