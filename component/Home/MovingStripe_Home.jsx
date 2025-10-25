import Image from 'next/image';
import React from 'react'

const MovingStripe_Home = () => {
  // Logo data - duplicate this array to create seamless loop
  const logos = [
    { name: "Logo 1", image: "/brands/canon.png" },
    { name: "Logo 2", image: "/brands/nikon.png" },
    { name: "Logo 3", image: "/brands/fuji.png" },
    { name: "Logo 4", image: "/brands/kodak.png" },
    { name: "Logo 5", image: "/brands/arri.png" },
  ];

  return (
    <section className='bg-[#F6F2EC] py-6 md:py-12 overflow-hidden'>
      <div className='relative flex'>
        {/* Animated wrapper containing all logo sets */}
        <div
          className='flex items-center gap-16 animate-scroll'
          style={{ animationDuration: '40s' }} // <- override here (e.g. '40s' or '60s')
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div 
              key={`set1-${index}`} 
              className='flex items-center justify-center min-w-[80px] md:min-w-[150px]'
            >
              <Image src={logo.image} alt={logo.name} width={120} height={60} className='object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all' />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div 
              key={`set2-${index}`} 
              className='flex items-center justify-center min-w-[80px] md:min-w-[150px]'
              aria-hidden='true'
            >
              <Image src={logo.image} alt={logo.name} width={120} height={60} className='object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all' />
            </div>
          ))}
          
          {/* Third set to ensure no gaps */}
          {logos.map((logo, index) => (
            <div 
              key={`set3-${index}`} 
              className='flex items-center justify-center min-w-[80px] md:min-w-[150px]'
              aria-hidden='true'
            >
              <Image src={logo.image} alt={logo.name} width={120} height={60} className='object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MovingStripe_Home
