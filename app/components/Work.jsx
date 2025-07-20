import { assets, workData } from '@/assets/assets';
import React from 'react'
import Image from 'next/image';
import {motion, scale} from "motion/react"
export default function Work() {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{y:-20, opacity: 0 }}
        whileInView={{y:0, opacity: 1 }}
        transition={{delay:0.5, duration: 1 }}
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        className="text-center text-5xl "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        My latest work
      </motion.h2>

      <motion.p
        className="text-center mx-w-2xl mx-auto mt-5 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasting my expertise in front-end development.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-600 group-hover:bottom-7 ">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-blue-800 ">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9  aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition ">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.a
        href=""
        className="w-max flex items-center justify-center gap-2  bg-black/80 text-white rounded-full py-3 px-10 mx-auto my-20 hover:bg-black duration-500"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
}
