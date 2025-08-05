"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import rutulImg from "../components/Rutul.png";

export default function Navbar() {
  const sidebar = useRef();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const openmenu = () => {
    sidebar.current.style.transform = "translate(-16rem)";
  };

  const closemenu = () => {
    sidebar.current.style.transform = "translate(16rem)";
  };

  //  Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="1" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        {/* Logo */}
        <a href="#top">
          <Image src={rutulImg} className="w-40" alt="." />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-8 rounded-full px-12 py-3 bg-opacity-50 bg-white shadow-sm">
          {[
            { name: "Home", href: "#top" },
            { name: "About Me", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "My Work", href: "#work" },
            { name: "Contact Me", href: "#contact" },
          ].map((item) => (
            <li key={item.name} className="relative group overflow-hidden">
              <a href={item.href} className="inline-block transition-colors">
                {item.name}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-400 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Contact / Theme Toggle */}
        <div className="flex items-center gap-4">
          {/* <button>
            <Image src={assets.moon_icon} alt="." className="w-6" />
          </button> */}
          <a
            href="#contact"
            className="hidden lg:flex item-center gap-3 px-10 py-3 rounded-full ml-4 border border-grey-500 hover:bg-sky-400 duration-500"
          >
            Contact <FaLocationArrow className="text-black-200 mt-1" />
          </a>
          <button className="block md:hidden ml-3" onClick={openmenu}>
            <Image src={assets.menu_black} alt="." className="w-6" />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <ul
          ref={sidebar}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-100 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closemenu}>
            <Image
              src={assets.close_black}
              alt="."
              className="cursor-pointer w-5"
            />
          </div>

          {[
            { name: "Home", href: "#top" },
            { name: "About", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "My Work", href: "#work" },
            { name: "Contact me", href: "#contact" },
          ].map((item) => (
            <li key={item.name}>
              <a onClick={closemenu} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
