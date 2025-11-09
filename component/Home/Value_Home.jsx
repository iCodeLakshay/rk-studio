'use client'
import React, { useEffect, useRef } from 'react'
import { createScrollAnimation, createStaggerAnimation, animations } from '../../utils/gsap'

const Value_Home = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const valuesRef = useRef([]);
  const values = [
    {
      title: "Expert Team of Photographers",
      description: "Our team of highly skilled photographers has years of experience in various styles of photography."
    },
    {
      title: "Quality and Professionalism",
      description: "Our commitment to excellence ensures that every photograph meets the highest standards of quality and precision."
    },
    {
      title: "Customer Satisfaction Oriented",
      description: "We prioritize your experience, working closely with you to understand and fulfill your vision for every shoot."
    },
    {
      title: "Attention to Detail",
      description: "Every element, from lighting to composition, is meticulously crafted to create stunning visuals that stand out."
    },
    {
      title: "Timeless Memories",
      description: "We capture moments that you can cherish forever, creating lasting memories through our lens."
    },
    {
      title: "Capturing Authentic Stories",
      description: "We believe in the power of photography to tell compelling, authentic stories that connect deeply with people."
    }
  ]

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

    // Animate subtitle
    if (subtitleRef.current) {
      createScrollAnimation(subtitleRef.current, animations.fadeInRight, {
        scrollTrigger: { start: "top 75%" }
      });
    }

    // Animate value items with stagger
    if (valuesRef.current.length > 0) {
      createStaggerAnimation(valuesRef.current, animations.staggerFadeInUp, {
        scrollTrigger: { start: "top 70%" },
        stagger: 0.1
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className='w-full bg-[#8d6f51] py-16 md:py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12 md:mb-20'>
          {/* Left Side - Badge and Heading */}
          <div className='flex-1'>
            <div ref={badgeRef} className='inline-block border-2 border-[#C4956B] rounded-full px-2 md:px-5 md:py-2 mb-6'>
              <span className='text-[#C4956B] text-[10px] md:text-sm tracking-wider font-medium'>VALUE</span>
            </div>
            <h2 ref={titleRef} className='font-italiana text-white text-4xl md:text-5xl lg:text-6xl leading-tight'>
              WHAT MAKES US<br />DIFFERENT
            </h2>
          </div>

          {/* Right Side - Subheading with Decorative Line */}
          <div ref={subtitleRef} className='flex-1 flex flex-col items-start md:items-end md:justify-center'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-[2px] bg-pink-400'></div>
            </div>
            <p className='text-white text-base md:text-lg max-w-md md:text-right'>
              We believe in the power of photography to tell stories<br />
              and evoke emotions.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {values.map((value, index) => (
            <div 
              key={index}
              ref={el => valuesRef.current[index] = el}
              className='flex flex-col bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6 md:p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-black/20'
            >
              <h3 className='text-white text-md md:text-2xl font-semibold mb-4 leading-snug'>
                {value.title}
              </h3>
              <p className='text-white/90 text-[12px] md:text-base leading-relaxed'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Value_Home
