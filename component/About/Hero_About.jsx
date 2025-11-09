'use client'
import React, { useEffect, useRef } from 'react'
import { FaPlay } from "react-icons/fa";
import gsap from 'gsap'

const Hero_About = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Complex title animation with split text effect
    if (titleRef.current) {
      gsap.set(titleRef.current.querySelectorAll('span'), { 
        y: 100, 
        opacity: 0,
        rotateX: -90
      });
      
      tl.to(titleRef.current.querySelectorAll('span'), {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.7)"
      });
    }

    // Subtitle with typewriter effect simulation
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 0 });
      tl.to(subtitleRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");
    }

    // Video zoom and fade effect
    if (videoRef.current) {
      gsap.set(videoRef.current, { 
        scale: 1.2, 
        opacity: 0,
        filter: "blur(10px)"
      });
      
      tl.to(videoRef.current, {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power2.out"
      }, "-=0.8");
    }
  }, []);
  return (
    <section className='relative min-h-screen w-full'>
      {/* Top Text Section */}
      <div className='bg-[#f5f0eb] pb-15 pt-30 px-8 md:px-16 lg:px-24'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 ref={titleRef} className='font-italiana text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6'>
            <span className='text-[#a77f5d]'>DISCOVER</span> <span>THE</span> <span>ART</span><br />
            <span>BEHIND</span> <span>EVERY</span> <span>SHOT</span>
          </h1>
          <p ref={subtitleRef} className='text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto'>
            Photography is more than just taking pictures—it's about capturing the moments that matter and turning them into timeless memories.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className='relative w-full h-[400px] md:h-[500px] lg:h-[50rem] overflow-hidden'>
        {/* Video Element - Replace src with your video URL */}
        <video
          ref={videoRef}
          className='w-full h-full object-cover object-start'
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.svg"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay (Optional - for visual effect) */}
        {/* <div className='absolute inset-0 flex items-center justify-center'>
          <button 
            className='w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform'
            aria-label='Play video'
          >
            <FaPlay className='w-4 h-4 md:w-7 md:h-7 text-gray-800 ml-1' /> 
          </button>
        </div> */}

        {/* Optional: Dark overlay for better contrast */}
        <div className='absolute inset-0 bg-black/10 pointer-events-none'></div>
      </div>
    </section>
  )
}

export default Hero_About
