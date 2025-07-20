import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import  IMG_1975  from "../components/IMG_1976.png";
import {motion }from "motion/react"
export default function About() {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%} py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-5xl "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        About Me
      </motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 ml-30 ">
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, sacle: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image src={IMG_1975} alt="user" className="w-full rounded-3xl "/>
        </motion.div>
        <motion.div
          className="flex-1 mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>
            Hello! I'm Rutul Soni, a frontend developer who enjoys turning ideas
            into responsive and interactive web experiences. I work primarily
            with React.js, JavaScript, Tailwind CSS. <br />
            <br />
            Over the past few months, I’ve worked on various personal projects
            including a Netflix-inspired landing page, Spotify landing page ,
            and a portfolio site (this one!). I love writing clean code, solving
            UI/UX problems, and continuously improving as a developer. <br />
            <br /> I'm currently seeking a frontend development role where I can
            grow, learn from experienced mentors, and build meaningful digital
            products.
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl py-10">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-cyan-500 duration-500 hover:-translate-y-4   "
              >
                <Image src={icon} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
