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
        link: "#"
    },
    {
        title: "instagram",
        icon: <FaInstagram/>,
        link: "#"
    },
    {
        title: "tiktok",
        icon: <FaTiktok/>,
        link: "#"
    },
    {
        title: "github",
        icon: <FiGithub />,
        link: "#"
    },
    {
        title: "linkin",
        icon: <FaLinkedinIn/>,
        link: "#"
    }
  ];

  return (
    <div className="flex gap-6 z-20 items-center mr-2">
      <motion.ul className={`flex gap-3`} variants={socialIcon} initial="initial" animate="animate">
        {socialMedia.map((social, index) => (
          <motion.li 
            key={index}
            className={` ${styles.flexCenter} sm:text-[20px] text-[16px] text-primary w-[45px] h-[45px] bg-[#21222f] rounded-full cursor-pointer relative social-link`}
            whileHover={{ scale: 1.1, y:-5 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default SocialLink