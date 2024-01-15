import React from 'react';
import styles from '../../styles';
import { skills } from '../../utils/constants';
import { motion } from 'framer-motion';
import { parentShow, arrowAnimate } from '../../utils/motion';


const Skills = () => {

  return (
    <motion.div 
      id='skills'
      className={`${styles.padding2} w-full flex flex-col gap-9`}
      variants={parentShow}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div className="flex justify-between items-center gap-2" variants={parentShow}>
        <div className="flex flex-col gap-6">
          <h1 className={`${styles.heading3} text-secondary w-[max-content] h-[max-content] heading relative`}>
            Skills
          </h1>
          <p className="text-lightWhite sm:text-[16px] text-[14px]">
            Currently, this is the tech stack and tools that I used in designing and building websites
          </p>
        </div>
        <motion.div className="arrow-alternate sm:block hidden top-[15px]" variants={arrowAnimate} initial="initial" animate="animate"/>
      </motion.div>
      <div className="grid ss:grid-cols-4 md:grid-cols-6 grid-cols-3 gap-[20px]">
        {skills.map((item, i) => (
          <motion.div key={i} className="bg-bgSecondary flex justify-center items-center flex-col gap-4 py-5 rounded-[10px] cursor-default" 
          variants={parentShow} whileHover={{scale: 1.07}}>
            <img src={item.logo} alt="" className="w-[50%] h-[45px] object-contain"/>
            <p className="text-lightWhite font-[500] text-center sm:text-[15px] text-[13px]">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills