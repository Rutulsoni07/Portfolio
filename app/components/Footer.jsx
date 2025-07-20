import React from 'react'
import Image from 'next/image'
  import rutulImg from "../components/Rutul.png";
import { assets } from '@/assets/assets';


export default function Footer() {
  return (
    <div className="mt-18">
      <div className="text-center">
        <Image src={rutulImg} className="w-36 mx-auto mb-2" alt="." />
        <div className="flex items-center gap-2 mx-auto w-max">
          <Image src={assets.mail_icon} className="w-6" alt="." />
          sonirutul18@gmail.com
        </div>
      </div>
      <div className='sm:flex items-center justify-between text-center border-t border-gray-400 mx-[10%] mt-12 py-6' >
        <p>2025 Rutul Soni. All right reserved.</p>
        <ul className='flex items-center justify-center  gap-10 mt-4 sm:mt-0'>
          <li>
            <a target="_blank" href="https://github.com/Rutulsoni07">
              GitHub
            </a>
          </li>
          <li>
            <a target='_blank' href="https://www.linkedin.com/in/rutul-soni-9170aa2b5/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
