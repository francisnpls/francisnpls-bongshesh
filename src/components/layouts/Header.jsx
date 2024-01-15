import React from 'react';
import styles from '../../styles';
import { logo } from '../../../public';
import { navLink } from '../../utils/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from 'react';
import { mobileNav, mobileMenuLink } from '../../utils/motion';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full bg-bgPrimary sm:py-3 py-5 fixed top-0 flex justify-between items-center z-50`}>
      <Link to="#hero">
        <motion.div 
          className="flex gap-3 items-center cursor-pointer"
          initial={{y: -30, opacity:0}}
          animate={{y:1, opacity:1}}
          transition={{delay:1.8, duration:1}}
        >
          <img src={logo} alt="logo" className="h-[23px] mt-[-2px]"/>
          <span className="text-[18px] font-[800] text-lightWhite">
            Bongshesh
          </span>
        </motion.div>
      </Link>
      

      {/* DESKTOP */}
      <div className="hidden sm:block">
        <motion.ul 
          className="flex gap-[50px] items-center" 
          initial={{y: -30, opacity:0}}
          animate={{y:1, opacity:1}}
          transition={{delay:1.8, duration:1}}
        >
          {navLink.map((link) => (
            <Link key={link.id} to={link.path}>
              <motion.li 
                className="text-lightWhite cursor-pointer text-[15px]"
                initial={{scale:1}}
                whileHover={{scale:1.1, color: "#4769E3"}}
                whileTap={{scale:.9}}
              >
                {link.title}
              </motion.li>
            </Link>
            
          ))}
          <Link to="#contact">
            <motion.button 
              className="text-lightWhite w-[130px] py-[10px] font-[500] text-[15px] border-solid border-[1px] border-secondary rounded-[10px] bg-[#4769e323] hover:bg-[#4769e314]"
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              whileTap={{scale:1}}
            >
              Let's Talk
            </motion.button>
          </Link>
          
        </motion.ul>
      </div>

      {/* TABLET */}
      <motion.div className="sm:hidden block">
        <motion.button 
          onClick={() => setOpen(prev => !prev)}
          className="w-[25px] h-[25px] bg-red flex justify-center items-center rounded-full bg-bgPrimary"
          initial={{y: -30, opacity:0}}
          animate={{y:1, opacity:1}}
          transition={{delay:1.8, duration:1}}
        >
          <HiMiniBars3BottomRight className="text-lightWhite" />
        </motion.button>
        
        <AnimatePresence>
          {
            isOpen &&
            <motion.div 
              className="fixed top-[65px] left-0 w-full h-screen bg-bgPrimary"
              variants={mobileNav}
              initial="hidden"
              animate="show"
              transition="transition" 
              exit="exit"
            >
              <ul className="absolute h-screen w-full flex flex-col items-center gap-8 pt-[250px]">
                {navLink.map((link, index) => (
                  <Link key={index} to={link.path}>
                    <motion.li  
                      onClick={() => setOpen(prev => !prev)}
                      className="text-center text-lightWhite text-[20px]"
                      variants={mobileMenuLink(index * 0.2, .8 - `0.${index}`, index * 0)} 
                      initial="hidden" 
                      animate="show" 
                      transition="transition" 
                      exit="exit"
                    >
                      {link.title}
                    </motion.li>
                  </Link>
                ))}
                <div
                >
                  <Link to="#contact">
                    <motion.button 
                      onClick={() => setOpen(prev => !prev)}
                      className="text-lightWhite w-[130px] py-[10px] border-solid border-[1px] border-secondary rounded-[10px] bg-[#4769e323] hover:bg-[#4769e314]"
                      variants={mobileMenuLink(0.7, .7, 0)} 
                      initial="hidden" 
                      animate="show" 
                      transition="transition" 
                      exit="exit"
                    >
                      Let's Talk
                    </motion.button>
                  </Link>
                  
                </div>
              </ul>
            </motion.div>
          }
        </AnimatePresence>
      </motion.div>
    </nav>
  )
}

export default Navbar