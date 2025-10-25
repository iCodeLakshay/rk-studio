import React from 'react'


const Homepage_Hero = () => {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
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
          <h1 className='font-italiana text-white text-4xl font-light leading-tight'>
            YOUR STORY<br />
            PERFECTLY <span className='text-amber-200'>FRAMED</span>
          </h1>

          {/* Description */}
          <p className='text-white text-base leading-relaxed'>
            Let us tell your unique story through stunning visuals and professional craftsmanship.
          </p>

          {/* CTA Button */}
          <button className='bg-white text-black px-4 md:px-8 py-1 md:py-3 hover:bg-gray-100 transition-colors w-fit md:font-medium'>
            Reserve Call
          </button>
        </div>

        {/* Desktop Layout: Side by Side */}
        <div className='hidden md:flex items-end justify-between gap-52 mb-20'>
          {/* Main Heading */}
          <h1 className='font-italiana text-white text-5xl md:text-6xl lg:text-7xl leading-tight'>
            YOUR STORY<br />
            PERFECTLY <span className='text-amber-200'>FRAMED</span>
          </h1>

          {/* Description and CTA */}
          <div className='flex flex-col md:items-start md:justify-between gap-8'>
            <p className='text-white text-base md:text-lg max-w-md leading-relaxed'>
              Let us tell your unique story through<br />
              stunning visuals and professional<br />
              craftsmanship.
            </p>

            <button className='bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors w-fit font-medium'>
              Reserve Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage_Hero