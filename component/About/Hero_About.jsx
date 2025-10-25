import React from 'react'
import { FaPlay } from "react-icons/fa";

const Hero_About = () => {
  return (
    <section className='relative min-h-screen w-full'>
      {/* Top Text Section */}
      <div className='bg-[#f5f0eb] pb-15 pt-30 px-8 md:px-16 lg:px-24'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='font-italiana text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight mb-6'>
            <span className='text-[#a77f5d]'>DISCOVER</span> THE ART<br />
            BEHIND EVERY SHOT
          </h1>
          <p className='text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto'>
            Photography is more than just taking pictures—it's about capturing the moments that matter and turning them into timeless memories.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden'>
        {/* Video Element - Replace src with your video URL */}
        <video
          className='w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.svg" // Fallback image while video loads
        >
          <source src="/your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay (Optional - for visual effect) */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <button 
            className='w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform'
            aria-label='Play video'
          >
            <FaPlay className='w-4 h-4 md:w-7 md:h-7 text-gray-800 ml-1' /> 
          </button>
        </div>

        {/* Optional: Dark overlay for better contrast */}
        <div className='absolute inset-0 bg-black/10 pointer-events-none'></div>
      </div>
    </section>
  )
}

export default Hero_About
