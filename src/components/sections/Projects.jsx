import React from 'react';
import styles from '../../styles';
import { projects } from '../../utils/constants';
import { FiGithub } from "react-icons/fi";
import { motion } from 'framer-motion';
import { arrowAnimate, upShow } from '../../utils/motion';

const Projects = () => {
  return (
    <div id='projects' className={`${styles.padding2} w-full`}>
      <motion.div 
        className="flex flex-col gap-6" 
        variants={upShow} initial="initial" whileInView="animate" viewport={{ once: true }}
      >
        <h1 className={`${styles.heading3} text-secondary w-[max-content] h-[max-content] heading relative`}>
          Projects
        </h1>
        <p className="text-lightWhite sm:text-[16px] text-[14px]">
          Here is a list of the featured projects I have built.
        </p>
      </motion.div>

      <div className="flex flex-col md:gap-[60px] gap-[40px] mt-10 ">
        {projects.map((item) => (
          <motion.div key={item.id} 
            className="py-[50px] px-[30px] bg-bgSecondary rounded-[30px] box relative" 
            variants={upShow} initial="initial" whileInView="animate" viewport={{ once: true }}
          >
            <div className="flex gap-5 md:flex-row flex-col">
              <div className="flex-[1.7] md:h-[370px]">
                <img src={item.img} alt="" className="w-full h-full rounded-[10px] object-contain"/>
              </div>

              <div className="flex-1 relative">
                <div className="">
                  <h1 className={`${styles.heading4} text-lightWhite`}>
                    {item.heading}
                  </h1>
                  <span className="text-secondary font-[500] font-montagu">
                    {item.title}
                  </span>
                  <p className="mt-4 text-primary sm:text-[16px] text-[14px]">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-[2px] text-lightWhite rounded-[30px] font-montagu text-[15px] bg-[#24243b]">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 items-center mt-7"> 
                    <a href={item.link} target="_blank">
                    <motion.button 
                      className="w-[125px] p-[12px] text-lightWhite font-[400] border-solid border-[1px] border-secondary rounded-[10px] bg-[#4769e323] hover:bg-[#4769e314] cursor-pointer"
                      whileHover={{scale:1.1}}
                      whileTap={{scale:1}}
                    >
                      {item.btn}
                    </motion.button>
                    </a>
                    <a href={item.github} target="_blank">
                      <motion.div 
                        className={`${styles.flexCenter} sm:text-[20px] text-[16px] text-primary w-[45px] h-[45px] bg-[#21222f] rounded-full cursor-pointer relative social-link`}
                          whileHover={{ scale: 1.1, y:-5 }}
                          whileTap={{ scale: 0.9 }}
                      >
                        <FiGithub />
                      </motion.div>  
                    </a>
                  </div>
                </div>

                <div className="absolute right-[5px] sm:bottom-0 bottom-[-10px]">
                  <motion.div className="arrow-alternate" variants={arrowAnimate} initial="initial" animate="animate"/>
                </div>
              </div>
            </div>
          </motion.div>   
        ))}
      </div>
      
    </div>
  )
}

export default Projects