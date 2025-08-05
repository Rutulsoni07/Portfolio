"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import {motion} from "motion/react"

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d86ce5f5-4c00-4185-bb13-ba407d9f39af");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10  scroll-mt-20 bg-[url("/footer-bg-color.png)] bg-no-repeat bg-center bg-length:90%_auto'
    >
      <motion.h4
        className="text-center mb-2 text-lg "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Connect with me
      </motion.h4>

      <motion.h2
        className="text-center text-5xl "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        Get in touch
      </motion.h2>

      <motion.p
        className="text-center mx-w-2xl mx-auto mt-5 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        I'd love to hear from you! If you have any questions , comments or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 mb-8 mt-10">
          <motion.input
            type="text"
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white "
            required
            name="name"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          />
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            required
            name="email"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          />
        </div>
        <motion.textarea
          rows={6}
          placeholder="Enter your message..."
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          name="message"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        ></motion.textarea>

        <motion.button
          type="Submit"
          className="py-3 mt-3 px-8 w-max flex items-center justify-between gap-2 cursor-pointer bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
          whileHover={{scale:1.5}}
          transition={{duration:0.3}}
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="." className="w-4" />
        </motion.button>
      </motion.form>
      <p className="mt-4">{result}</p>
    </div>
  );
}
