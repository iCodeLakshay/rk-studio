'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { createScrollAnimation, animations } from '../../utils/gsap'

const Homepage_Hero = () => {
  const heroRef = useRef(null);
  const titleMobileRef = useRef(null);
  const titleDesktopRef = useRef(null);
  const descriptionMobileRef = useRef(null);
  const descriptionDesktopRef = useRef(null);
  const buttonMobileRef = useRef(null);
  const buttonDesktopRef = useRef(null);

  useEffect(() => {
    // Hero entrance animations
    if (titleMobileRef.current) {
      createScrollAnimation(titleMobileRef.current, animations.fadeInUp, {
        scrollTrigger: { start: "top 90%" }
      });
    }
    
    if (titleDesktopRef.current) {
      createScrollAnimation(titleDesktopRef.current, animations.fadeInLeft, {
        scrollTrigger: { start: "top 90%" }
      });
    }

    if (descriptionMobileRef.current) {
      createScrollAnimation(descriptionMobileRef.current, animations.fadeInUp, {
        scrollTrigger: { start: "top 85%", delay: 0.2 }
      });
    }

    if (descriptionDesktopRef.current) {
      createScrollAnimation(descriptionDesktopRef.current, animations.fadeInRight, {
        scrollTrigger: { start: "top 85%", delay: 0.2 }
      });
    }

    if (buttonMobileRef.current) {
      createScrollAnimation(buttonMobileRef.current, animations.scaleIn, {
        scrollTrigger: { start: "top 80%", delay: 0.4 }
      });
    }

    if (buttonDesktopRef.current) {
      createScrollAnimation(buttonDesktopRef.current, animations.scaleIn, {
        scrollTrigger: { start: "top 80%", delay: 0.4 }
      });
    }
  }, []);

  return (
    <section ref={heroRef} className='relative h-screen w-full overflow-hidden'>
      {/* Background Image Placeholder */}
      <div className='absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-300 to-amber-400'>
        {/* Replace this div with your actual image */}
        <img src="/hero_section.jpg" alt="Hero" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className='relative z-10 h-full flex flex-col justify-end px-8 md:px-16'>
        {/* Mobile Layout: Stacked Vertically */}
        <div className='flex flex-col md:hidden gap-6 mb-12'>
          {/* Main Heading */}
          <h1 ref={titleMobileRef} className='font-italiana text-white text-4xl font-light leading-tight'>
            YOUR STORY<br />
            PERFECTLY <span className='text-amber-200'>FRAMED</span>
          </h1>

          {/* Description */}
          <p ref={descriptionMobileRef} className='text-white text-base leading-relaxed'>
            Let us tell your unique story through stunning visuals and professional craftsmanship.
          </p>

          {/* CTA Button */}
          <Link href="/contact" ref={buttonMobileRef} className='bg-white text-black px-4 md:px-8 py-1 md:py-3 hover:bg-gray-100 transition-colors w-fit md:font-medium text-center'>
            Reserve Call
          </Link>
        </div>

        {/* Desktop Layout: Side by Side */}
        <div className='hidden md:flex items-end justify-between gap-52 mb-20'>
          {/* Main Heading */}
          <h1 ref={titleDesktopRef} className='font-italiana text-white text-5xl md:text-6xl lg:text-7xl leading-tight'>
            YOUR STORY<br />
            PERFECTLY <span className='text-amber-200'>FRAMED</span>
          </h1>

          {/* Description and CTA */}
          <div className='flex flex-col md:items-start md:justify-between gap-8'>
            <p ref={descriptionDesktopRef} className='text-white text-base md:text-lg max-w-md leading-relaxed'>
              Let us tell your unique story through<br />
              stunning visuals and professional<br />
              craftsmanship.
            </p>

            <Link href="/contact" ref={buttonDesktopRef} className='bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors w-fit font-medium text-center'>
              Reserve Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage_Hero