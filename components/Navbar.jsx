'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Planets
      </h2>

      <nav>
      <ul className="justify flex text-white">
          <li className="mr-4 mt-1">Home</li>
          <li className="mr-4 mt-1">About</li>
      </ul>
      </nav>

{/*
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    */}
    <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
