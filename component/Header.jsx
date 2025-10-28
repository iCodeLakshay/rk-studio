"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the home page
  const isHomePage = pathname === '/';
  
  // Dynamic text colors based on current page
  const textColor = isHomePage ? 'text-white' : 'text-gray-900';
  const separatorColor = isHomePage ? 'text-gray-300' : 'text-gray-400';
  const underline = isHomePage ? 'bg-amber-200' : 'bg-amber-500';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='absolute top-0 left-0 right-0 z-50 bg-transparent'>
      <div className={`flex justify-between items-center px-8 py-6 ${textColor}`}>
        {/* Logo */}
        <div className='text-xl font-light tracking-widest'>
          <Image src="/logo.png" alt="RK Studio Logo" width={30} height={30} />
        </div>

        {/* Right side - Contact info and Menu */}
        <div className='flex items-center gap-6'>
          {/* Contact Info */}
          <div className='hidden md:flex items-center gap-3 text-sm'>
            <span>(+91) 80030 56563</span>
            <span className={separatorColor}>|</span>
            <span>KOTA, RAJASTHAN</span>
          </div>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className='text-2xl hover:opacity-80 transition-opacity'
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <IoClose /> : <CgMenuRightAlt />}
          </button>
        </div>
      </div>

      {/* Navigation Menu - Slides in from right */}
      <nav className={`absolute top-12 right-0 w-35 md:w-44 bg-transparent h-50 transform transition-transform duration-300 ease-in-out translate-x-0`}>
        <div className='flex flex-col w-fit items-center justify-center h-full'>
          <ul className={`flex flex-col gap-4 text-2xl tracking-wide text-start ${textColor}`}>
            <Link href='/'>
              <li
                className={`group cursor-pointer transition-all duration-300 text-[16px] ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
                style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}
              >
                <span className='relative inline-block'>
                  Home
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${underline} transition-all duration-300 group-hover:w-full`}></span>
                </span>
              </li>
            </Link>
            <Link href='/about'>
              <li
                className={`group cursor-pointer transition-all duration-300 text-[16px] ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
              >
                <span className='relative inline-block'>
                  About us
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${underline} transition-all duration-300 group-hover:w-full`}></span>
                </span>
              </li>
            </Link>
            <Link href='/projects'>
              <li
                className={`group cursor-pointer transition-all duration-300 text-[16px] ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
              >
                <span className='relative inline-block'>
                  Our work
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${underline} transition-all duration-300 group-hover:w-full`}></span>
                </span>
              </li>
            </Link>
            <Link href='/contact'>
              <li
                className={`group cursor-pointer transition-all duration-300 text-[16px] ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
              >
                <span className='relative inline-block'>
                  Contact us
                 <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${underline} transition-all duration-300 group-hover:w-full`}></span>
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header