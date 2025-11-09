'use client'
import React, { useEffect, useRef } from 'react'
import { createScrollAnimation, animations } from '../../utils/gsap'

const HeroSection_Contact = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      createScrollAnimation(titleRef.current, animations.fadeInUp, {
        scrollTrigger: { start: "top 85%" }
      });
    }

    if (descriptionRef.current) {
      createScrollAnimation(descriptionRef.current, animations.fadeInUp, {
        scrollTrigger: { start: "top 80%", delay: 0.3 }
      });
    }
  }, []);
  return (
    <section className='w-full bg-[#F6F2EC] py-16 md:py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto text-center'>
        <h1 ref={titleRef} className='font-italiana text-[#4A3B35] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight'>
          GET IN <span className='text-[#C4956B]'>TOUCH</span><br />
          WITH US
        </h1>
        <p ref={descriptionRef} className='text-[#6B5D54] text-base md:text-lg max-w-3xl mx-auto'>
          Have a question or ready to book your session? We're here to help!<br className='hidden md:block' />
          Reach out to ViewLight and let us bring your vision to life.
        </p>
      </div>
    </section>
  )
}

export default HeroSection_Contact
