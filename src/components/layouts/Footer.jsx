import React from 'react';
import styles from '../../styles';
import SocialLink from '../sections/SocialLink';
import { react } from '../../../public';


const Footer = () => {
  return (
    <footer className={`${styles.paddingX} py-6 sm:pt-6 pt-[60px]`}>
      <div className='flex sm:flex-row flex-col justify-between sm:items-end items-center gap-4'>
        <SocialLink/>
        <div className="flex gap-1">
          <span className="text-primary"> Built with </span>
          <img src={react} alt="" className="w-[20px] object-contain"/>
          <span className="text-primary"> by Francis Napoles </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer