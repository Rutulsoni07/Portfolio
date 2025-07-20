import React from 'react'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets';
import {motion} from "motion/react";

export default function Services() {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        What I offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        My Services
      </motion.h2>
      <motion.p
        className="text-center mx-w-2xl mx-auto mt-5 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        I develop interactive and fast user interfaces using HTML, CSS,
        JavaScript, and React.js.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden border border-gray-300 rounded-lg px-8 py-12 cursor-pointer group bg-white"
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

            <div className="relative z-10">
              <Image
                src={icon}
                alt=""
                className="w-10 mb-4 transition duration-500 group-hover:invert"
              />
              <h3 className="text-lg mb-2 font-semibold text-gray-900 group-hover:text-white transition duration-500">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 group-hover:text-white transition duration-500">
                {description}
              </p>
              <a
                href={link}
                className="flex items-center text-sm mt-5 text-sky-500 group-hover:text-white transition duration-500"
              >
                Read more
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
