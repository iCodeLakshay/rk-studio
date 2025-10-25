import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'

const Footer = () => {
  // Reusable styles
  const linkStyle = "text-gray-700 hover:text-amber-600 transition-colors text-sm";
  const headingStyle = "font-semibold text-gray-900 mb-4 text-base";
  const studioNameStyle = "font-semibold text-gray-900 mb-3 text-sm";
  const contactItemStyle = "flex items-start gap-2 text-gray-700 text-sm mb-2";

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/projects" },
    { name: "Contact Us", href: "/contact" }
  ];

  const studios = [
    {
      name: "RK Studio",
      address: "1234 Main Street, Suite 101, Metropolis, NY 10001",
      phone: "+91 80030 56563",
      email: "rk.photography800@gmail.com"
    },
  ];

  const socialLinks = [
    { icon: <FaYoutube />, href: "https://www.youtube.com/@rk.photography800", label: "YouTube" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/rk_photography_________", label: "Instagram" },
  ];

  return (
    <footer className='bg-[#f5f0eb] pt-16 pb-8'>
      <div className='max-w-7xl mx-auto px-8 md:px-16 lg:px-24'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12'>
          
          {/* Column 1: Brand & Newsletter */}
          <div>
            <h3 className='text-2xl font-light tracking-widest mb-2'>RK Studio</h3>
            <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
              RK Studio is a full-service photography studio focused on storytelling through light and composition. 
              We specialise in weddings, portraits, and editorial work — delivering timeless imagery with a cinematic touch.
            </p>
            
            {/* Social Media */}
            <div className='mt-8'>
              <h4 className={headingStyle}>Social Media</h4>
              <div className='flex gap-3'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target='_blank'
                    className='w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md text-amber-600 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all'
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className={headingStyle}>Quick Link</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={linkStyle}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Column 3 & 4: Studio Locations */}
          <div className='lg:col-span-1'>
            <div>
              {studios.map((studio, index) => (
                <div key={index}>
                  <h4 className={studioNameStyle}>{studio.name}</h4>
                  <div className={contactItemStyle}>
                    <MdLocationOn className='text-amber-600 mt-1 flex-shrink-0' />
                    <span>{studio.address}</span>
                  </div>
                  <div className={contactItemStyle}>
                    <MdPhone className='text-amber-600 flex-shrink-0' />
                    <span>{studio.phone}</span>
                  </div>
                  <div className={contactItemStyle}>
                    <MdEmail className='text-amber-600 flex-shrink-0' />
                    <span>{studio.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-300 pt-6 text-center md:text-left'>
          <p className='text-gray-600 text-sm'>
            © 2025 RK Studio. All rights reserved. | Created by <a target='_blank' rel='noopener noreferrer' href='https://icodelakshay.tech' className='text-amber-600'>icodelakshay</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
