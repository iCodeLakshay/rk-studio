'use client'
import React, { useEffect, useRef } from 'react'
import { createScrollAnimation, createStaggerAnimation, animations } from '../../utils/gsap'

const About_Home = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef([]);

  // Reusable styles
  const statNumberStyle = "text-6xl md:text-7xl font-light text-gray-800";
  const statLabelStyle = "text-sm md:text-base text-gray-600 mt-2";

  // Stats data
  const stats = [
    { number: "56+", label: "Years of Experience" },
    { number: "450+", label: "Projects Nicely Done" },
    { number: "4.9%", label: "Clients' Satisfaction Rate" }
  ];

  useEffect(() => {
    // Animate badge
    if (badgeRef.current) {
      createScrollAnimation(badgeRef.current, animations.scaleIn, {
        scrollTrigger: { start: "top 85%" }
      });
    }

    // Animate title
    if (titleRef.current) {
      createScrollAnimation(titleRef.current, animations.fadeInLeft, {
        scrollTrigger: { start: "top 80%" }
      });
    }

    // Animate description
    if (descriptionRef.current) {
      createScrollAnimation(descriptionRef.current, animations.fadeInUp, {
        scrollTrigger: { start: "top 75%" }
      });
    }

    // Animate stats with stagger
    if (statsRef.current.length > 0) {
      createStaggerAnimation(statsRef.current, animations.staggerFadeInUp, {
        scrollTrigger: { start: "top 70%" },
        stagger: 0.15
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className='bg-[#f5f0eb] py-20 lg:py-40 px-8 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          
          {/* Left Side - Heading */}
          <div className=''>
            <div ref={badgeRef} className='inline-block border-2 border-[#C4956B] rounded-full px-2 md:px-5 md:py-2 mb-6 '>
            <span className='text-[#C4956B] text-[10px] md:text-sm tracking-wider font-medium'>
              ABOUT
            </span>
            </div>
            <h2 ref={titleRef} className='font-italiana text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-800'>
              RK STUDIO AT<br />
              CLOSER SIGHT
            </h2>
          </div>

          {/* Right Side - Description and Stats */}
          <div className='flex flex-col gap-12'>
            {/* Description */}
            <p ref={descriptionRef} className='text-gray-700 text-base md:text-lg leading-relaxed'>
              We believe in the power of photography to tell stories and evoke emotions. 
              Our team of professional photographers is dedicated to capturing the beauty 
              in every moment, ensuring that your memories are preserved with the highest 
              quality and creativity.
            </p>

            {/* Stats Grid */}
            <div className='grid grid-cols-3 gap-3 md:gap-6'>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  ref={el => statsRef.current[index] = el}
                  className='text-center md:text-left'
                >
                  <h3 className={`${statNumberStyle} font-italiana2 text-[36px] md:text-[48px]`}>{stat.number}</h3>
                  <p className={`${statLabelStyle} text-[12px] md:text-lg`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About_Home
