import React from 'react';
import { motion } from 'framer-motion';
import { firstBackground } from '../../../public';
import { loadingText, loadingVariants } from '../../utils/motion';

const Loading = () => {
  return (
    <motion.div 
      className={`flex items-center justify-center w-full h-screen absolute left-0 top-0 z-0`} 
      initial={{opacity:1}}
      animate={{opacity:0}}
      transition={{delay:1.5, duration: .5}}
    >
      <motion.div 
        className="sm:h-[400px] h-[300px] sm:w-[50%] w-[80%]"
        variants={loadingVariants}
        initial="initial"
        animate="animate"
      >
        <img src={firstBackground} alt="bg" className="h-full w-full rounded-[30px]"/>
      </motion.div>
      <div className="absolute sm:leading-[100px] leading-[60px]">
        <motion.h1 
          className="font-poppins font-[800] sm:text-[85px] text-[40px] sm:text-primary text-lightWhite"
          variants={loadingText}
          initial="initial"
          animate="animate"
        >
          HEY, I'M FRANCIS
        </motion.h1>
        <motion.h1 
          className="font-poppins font-[800] sm:text-[85px] text-[40px] font-outline"
          variants={loadingText}
          initial="initial"
          animate="animate"
        >
          HEY, I'M FRANCIS
        </motion.h1>
        <motion.h1 
          className="font-poppins font-[800] sm:text-[85px] text-[40px] sm:text-primary text-lightWhite"
          variants={loadingText}
          initial="initial"
          animate="animate"
        >
          HEY, I'M FRANCIS
        </motion.h1>
      </div>
    </motion.div>
  )
}

export default Loading