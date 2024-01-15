import React, {useRef} from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from '../../styles';

const Forms = () => {
  
  const ref = useRef()
  const formRef = useRef()

  const isInView = useInView(ref, {margin: "-100px"}) 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c9y1vft', 'template_nb3r8f5', formRef.current, 'PHr-bJTA0DMSxEvbt')
      .then((response) => {
        alert('Email sent successfully:', response);
        formRef.current.reset();
      })
      .catch((error) => {
        alert('Error sending email:', error);
      });
  };

  return (
  <motion.div ref={ref}>
    <div className="flex justify-center sm:items-center items-start">
      <motion.div 
        className="absolute" 
        initial={{opacity:1}} 
        whileInView={{opacity:0}}
        transition={{delay:4, duration: 1}}
        viewport={{ once: true }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.86 40.73" className="sm:w-[500px] w-[320px]">
          <motion.path className="cls-1" initial={{pathLength:0}}
                  animate={isInView && {pathLength:1}}
                  transition={{duration:3}}
          d="M44.78,39.73H2.08A1.08,1.08,0,0,1,1,38.65V16a1.27,1.27,0,0,1,1.27-1.27L22.9,26.4a1.08,1.08,0,0,0,1.07,0L44.59,14.68A1.27,1.27,0,0,1,45.86,16v22.7A1.08,1.08,0,0,1,44.78,39.73Z">
          </motion.path>
          <motion.path className="cls-1" initial={{pathLength:0}}
                  animate={isInView && {pathLength:1}}
                  transition={{duration:4}}
          d="M24,26.4l18.6-10.57a1.08,1.08,0,0,0,.55-.94V2.08A1.08,1.08,0,0,0,42,1H4.82A1.08,1.08,0,0,0,3.74,2.08V14.89a1.08,1.08,0,0,0,.55.94L22.9,26.4A1.08,1.08,0,0,0,24,26.4Z">
          </motion.path>
          <motion.line className="cls-1" initial={{pathLength:0}}
                      animate={{pathLength:1}}
                      transition={{duration:2}} x1="1.91" y1="39.5" x2="18.47" y2="24.5"></motion.line>
          <motion.line className="cls-1" initial={{pathLength:0}}
                      animate={{pathLength:1}}
                      transition={{duration:2}} x1="45.41" y1="39.5" x2="28.86" y2="24.5"></motion.line>
        </svg>
      </motion.div>
      
      <motion.div 
        className="w-full mt-2" 
        initial={{opacity:0}} 
        whileInView={{opacity:1}}
        transition={{delay:5, duration: 1}}
        viewport={{ once: true }}
      >
        <div className="w-full py-[30px] px-[30px] bg-bgSecondary rounded-[30px] box relative">
          <h1 className={`${styles.heading4} text-lightWhite text-center`}>
            Let's Work Together
          </h1>
          <form
            className="flex flex-col gap-2 mt-5"
            onSubmit={sendEmail}
            ref={formRef}
          >
            <label className="text-primary flex flex-col gap-1 sm:text-[16px] text-[14px]"> Your Email 
              <input type="email" placeholder="Email..." name="email" required className="py-[5px] px-[15px] rounded-[5px] bg-[#22222e] text-lightWhite focus:outline-none text-[15xpx]"/>
            </label>
            <label className="mt-4 text-primary flex flex-col gap-1 sm:text-[16px] text-[14px]"> Message 
              <textarea rows="8" placeholder="Message..." name="message" required className="py-[5px] px-[15px] rounded-[5px] h-[150px] bg-[#22222e] text-lightWhite focus:outline-none text-[15xpx]"></textarea>
            </label>
            <div className="mt-5 flex justify-center items-center">
              <motion.button 
                className="w-[125px] p-[12px] text-lightWhite font-[400] border-solid border-[1px] border-secondary rounded-[10px] bg-[#4769e323] hover:bg-[#4769e314] cursor-pointer"
                whileHover={{scale:1.1}}
                whileTap={{scale:1}}
              >
                Submit
              </motion.button>
            </div>
            
          </form>
        </div>
      </motion.div>
    </div>
  </motion.div>
  )
}

export default Forms