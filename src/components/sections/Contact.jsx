import React from 'react';
import styles from '../../styles';
import { motion } from 'framer-motion';
import Forms from './Forms';
import { upShow } from '../../utils/motion';

const Contact = () => {
  return (
    <div id='contact' className={`${styles.padding2} w-full`}>
      <motion.div className={`sm:px-10 flex sm:flex-row flex-col sm:gap-8 gap-6`} variants={upShow} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <div className="w-full flex-1 flex flex-col justify-center items-center gap-8">
          <h1 className={`${styles.heading3}  text-secondary w-[max-content] h-[max-content] heading1 relative`}>
            Get In Touch
          </h1>
          <p className="text-center text-lightWhite sm:text-[16px] text-[14px] sm:w-[80%]">
            I am actively pursuing a Jr. Front-end Web Developer position, eager to contribute my skills to actual projects while expanding my knowledge of various technologies. If this opportunity aligns with your needs, please don't hesitate to reach out via email. I welcome messages at any time.
          </p>
        </div>
        <div className="flex-1">
          <Forms/>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact