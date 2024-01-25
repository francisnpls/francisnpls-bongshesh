import React from 'react';
import styles from '../../styles';
import { motion,  } from 'framer-motion';
import SocialLink from './SocialLink';
import { resumeButton, arrowDown } from '../../utils/motion';
import Loading from './Loading';

const Hero = () => {
  return (
    <div id='hero' className={`${styles.padding1} h-screen w-full bg-bgPrimary relative`}>
      <Loading/>
      <div className="relative z-10 md:pt-0 ">
        <motion.h3 className="text-secondary font-[500] sm:tracking-[1px]" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.4, duration:1}}> 
          Hi there, I am 
        </motion.h3>
        <div className="flex gap-[80px] items-center">
          <motion.h1 className={`${styles.heading1} text-lightWhite sm:leading-[100px]`} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.7, duration:1}}>
            Francis Napoles
          </motion.h1>
          <motion.div className="arrow sm:block hidden" initial={{opacity:0, x:100}} animate={{opacity:1, x:1}} transition={{delay:2.8, duration:.5}}/>
        </div>
        <motion.p className={`${styles.heading2} text-[#cbcbcb] sm:leading-[70px]`}  initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3, duration:1}}>
          I <span className="text-secondary"> design </span>  and <span className="text-secondary"> develop </span> web stuff.
        </motion.p>
        <motion.p className="text-primary sm:text-[17px] text-[14px] sm:w-full w-[95%] font-[400] mt-2 leading-[30px]" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:3.3, duration:1}}> 
          A Front-end web developer who loves transform ideas into good interfaces and concepts <br className="md:block hidden" /> into captivating websites.
        </motion.p>
        <div className="flex gap-5 sm:items-center item-start mt-5 sm:flex-row flex-col">
          <div className="flex gap-12">
          <a href="https://drive.google.com/file/d/1XjXWaArQgS_Em0IAzFFPrQJ8Ub8TDiUH/view?usp=drive_link" target="_blank">
            <motion.button 
              className="w-[125px] p-[12px] text-lightWhite font-[400] border-solid border-[1px] border-secondary rounded-[10px] bg-[#4769e323] hover:bg-[#4769e314] cursor-pointer"
              variants={resumeButton}
              initial="initial"
              animate="animate"
              whileHover={{scale:1.1}}
              whileTap={{scale:1}}
            > 
              Resume
            </motion.button>
          </a>
          <motion.div className="arrow-left sm:hidden block" initial={{opacity:0, x:100}} animate={{opacity:1, x:1}} transition={{delay:4, duration:.5}}/>
          </div>
          <SocialLink/>
        </div>
        
      </div>

      <div className="md:w-[400px] w-[87%] h-[120px] mt-[20px] flex justify-center md:relative absolute md:bottom-0 xs:bottom-[80px] xx:bottom-[15px]"> 
        <motion.svg width="31" height="80" viewBox="0 0 31 64" fill="none" xmlns="http://www.w3.org/2000/svg"
        variants={arrowDown} initial="initial" animate="animate">
          <line x1="15.5" x2="15.5" y2="63" stroke="#727292f3"/>
          <line x1="0.371496" y1="45.6654" x2="15.4121" y2="62.362" stroke="#727292f3"/>
          <line x1="30.49" y1="46.3364" x2="15.3699" y2="62.9612" stroke="#727292f3"/>
        </motion.svg>
      </div>

      <div className="absolute bottom-0 sm:right-[38px] right-2 flex flex-col gap-6">
        <motion.span 
          className=" text-[#7b7b8a12] font-[900] sm:text-[110px] text-[53px] sm:leading-[80px] leading-[40px] z-10 cursor-default"
          initial={{opacity:0, x:-500}}
          animate={{opacity:1, x:1}}
          transition={{delay:4.2, duration:.8}}
        >
          BONGSHESH
        </motion.span>  
      </div>
    </div>
  )
}

export default Hero