import React from 'react'

const CTA_About = () => {
  return (
    <section className='w-full bg-[#C4956B] py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center text-center'>
          {/* Heading */}
          <h2 className='font-italiana text-white text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight'>
            CAPTURE YOUR MOMENTS<br />
            WITH VIEWLIGHT!
          </h2>

          {/* Subtext */}
          <p className='text-white text-base md:text-lg mb-8 max-w-2xl'>
            Book your session today and create lasting memories!
          </p>

          {/* CTA Button */}
          <button className='bg-white text-[#4A3B35] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors mb-12'>
            Reserve a Call
          </button>

          {/* Photo Collage - 3 Tilted Photos */}
          <div className='relative w-full max-w-5xl h-[200px] md:h-[400px] flex items-center justify-center gap-4 md:gap-8'>
            {/* Left Photo - Tilted Left */}
            <div 
              className='relative w-[28%] md:w-[30%] h-[130px] md:h-[300px] -rotate-12 hover:rotate-0 transition-transform duration-300 shadow-2xl'
              style={{ transformOrigin: 'center' }}
            >
              <div className='w-full h-full bg-white p-3 md:p-4'>
                <img 
                  src='/Lens Glance/4.png' 
                  alt='Photo 1'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Center Photo - Straight, Slightly Larger and Forward */}
            <div 
              className='relative w-[32%] md:w-[34%] h-[160px] md:h-[330px] z-10 hover:scale-105 transition-transform duration-300 shadow-2xl'
              style={{ transformOrigin: 'center' }}
            >
              <div className='w-full h-full bg-white p-3 md:p-4'>
                <img 
                  src='/Lens Glance/1.png' 
                  alt='Photo 2'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Right Photo - Tilted Right */}
            <div 
              className='relative w-[28%] md:w-[30%] h-[130px] md:h-[300px] rotate-12 hover:rotate-0 transition-transform duration-300 shadow-2xl'
              style={{ transformOrigin: 'center' }}
            >
              <div className='w-full h-full bg-white p-3 md:p-4'>
                <img 
                  src='/Lens Glance/3.png' 
                  alt='Photo 3'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA_About
