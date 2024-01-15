import React from 'react';
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import styles from '../../styles';
import { motion } from 'framer-motion';
import { socialIcon } from '../../utils/motion';

const SocialLink = () => {

  const socialMedia = [
    {
        title: "facebook",
        icon: <FaFacebookF/>,
        link: "https://www.facebook.com/francis.napoles.357"
    },
    {
        title: "instagram",
        icon: <FaInstagram/>,
        link: "https://www.instagram.com/bongsheeessh/"
    },
    {
        title: "tiktok",
        icon: <FaTiktok/>,
        link: "https://www.tiktok.com/@bongsheeesh?_t=8j3Em4fcZdZ&_r=1"
    },
    {
        title: "github",
        icon: <FiGithub />,
        link: "https://github.com/francisnpls"
    },
    {
        title: "linkin",
        icon: <FaLinkedinIn/>,
        link: "https://www.linkedin.com/in/francis-napoles-9a446b247/"
    }
  ];

  return (
    <div className="flex gap-6 z-20 items-center mr-2">
      <motion.ul className={`flex gap-3`} variants={socialIcon} initial="initial" animate="animate">
        {socialMedia.map((social, index) => (
          <a href={social.link} key={index} target="_blank">
            <motion.li 
              className={` ${styles.flexCenter} sm:text-[20px] text-[16px] text-primary w-[45px] h-[45px] bg-[#21222f] rounded-full cursor-pointer relative social-link`}
              whileHover={{ scale: 1.1, y:-5 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.li>
          </a>
          
        ))}
      </motion.ul>
    </div>
  )
}

export default SocialLink