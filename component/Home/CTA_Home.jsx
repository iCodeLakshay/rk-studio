import React from 'react'
import Image from 'next/image'

const CTA_Home = () => {
  return (
    <section className='bg-[#f5f0eb] relative h-[500px] md:h-[600px] w-full overflow-hidden '>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image 
          src="/cta.jpg" 
          alt="CTA Background" 
          fill
          className="object-cover"
          priority
        />
        {/* Optional dark overlay for better text readability */}
        <div className='absolute inset-0 bg-black/30'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 h-full flex items-end pb-6 md:pb-10 px-8 md:px-16 lg:px-24'>
        <div className='w-full flex flex-col md:flex-row md:justify-between md:items-end gap-4'>
          {/* Heading */}
          <div className=''>
          <h2 className='md:w-3xl font-italiana text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-2 md:mb-6'>
            READY TO CAPTURE YOUR MOMENTS WITH <span className='text-amber-300'>VIEWLIGHT</span>?
          </h2>

          {/* Description */}
          <p className='text-white text-base md:text-lg leading-relaxed mb-2 md:mb-8 max-w-lg'>
            Contact us today to book your session and start creating memories that last a lifetime.
          </p>
        </div>
          {/* CTA Button */}
          <button className= 'w-fit bg-white text-black px-4 py-1 md:px-8 md:py-3 hover:bg-gray-100 transition-colors font-medium'>
            Reserve Call
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA_Home
