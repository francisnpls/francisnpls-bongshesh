import React from 'react';
import styles from '../../styles';
import { aboutPic, aboutMe } from '../../utils/constants';
import { motion } from 'framer-motion';
import { upShow, arrowAnimate } from '../../utils/motion';


const About = () => {


  return (
    <div id='about' className={`${styles.padding1} w-full flex gap-8 relative overflow-hidden sm:flex-row flex-col-reverse h-full`}>
      <motion.div 
        className="flex-[1.3] py-[50px] px-[30px] bg-bgSecondary rounded-[30px] box relative"
        variants={upShow} initial="initial" whileInView="animate" viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex justify-between mr-3">
            <h1 className={`${styles.heading3}  text-secondary w-[max-content] h-[max-content] heading relative`}>
              About
            </h1>
            <motion.div className="arrow-alternate" variants={arrowAnimate} initial="initial" animate="animate"/>
          </div>
          <p className="sm:text-justify text-lightWhite sm:text-[16px] text-[14px]">
          Hello, I'm Francis Napoles, a 23-year-old currently residing in General Trias, Cavite. I recently earned my degree in Computer Science from Cavite State University - Silang campus in September 2023. I am excited to embark my professional journey, I am actively seeking opportunities to kickstart my career and further enrich my skills in front-end web development.
          </p>
          <p className="sm:text-justify text-lightWhite sm:text-[16px] text-[14px]">
          I invite you to explore my portfolio, where you can witness my dedication to excellence in web development and my commitment to continuous learning and growth.
          </p>
          <div className="flex flex-wrap gap-4">
            {aboutMe.map((item, i) => (
              <span key={i} className="w-[max-content] px-3 py-[2px] text-lightWhite rounded-[30px] font-montagu text-[15px] bg-[#24243b]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="flex-[1.5] flex items-center"
        variants={upShow} initial="initial" whileInView="animate" viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 gap-3 w-full">
          {aboutPic.map((item, i) => (
            <div key={i} className="w-full h-[200px]">
              <motion.img src={item} alt="" 
                className='w-full h-full object-cover rounded-[20px] rotate-[-2deg] sm:opacity-[.4] opacity-[1]'
                initial={{rotate: -2, scale:1}} whileHover={{opacity:1, rotate: 2, scale:1.1}} whileTap={{opacity:1, rotate: 2, scale:1.1}}
              />
            </div>
          ))}
        </div>
      </motion.div>
      
    </div>
  )
}

export default About