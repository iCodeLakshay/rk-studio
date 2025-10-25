import React from 'react'

const About_Home = () => {
  // Reusable styles
  const statNumberStyle = "text-6xl md:text-7xl font-light text-gray-800";
  const statLabelStyle = "text-sm md:text-base text-gray-600 mt-2";

  // Stats data
  const stats = [
    { number: "56+", label: "Years of Experience" },
    { number: "450+", label: "Projects Nicely Done" },
    { number: "4.9%", label: "Clients' Satisfaction Rate" }
  ];

  return (
    <section className='bg-[#f5f0eb] py-20 lg:py-40 px-8 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          
          {/* Left Side - Heading */}
          <div className=''>
            <div className='inline-block border-2 border-[#C4956B] rounded-full px-2 md:px-5 md:py-2 mb-6 '>
            <span className='text-[#C4956B] text-[10px] md:text-sm tracking-wider font-medium'>
              ABOUT
            </span>
            </div>
            <h2 className='font-italiana text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-800'>
              RK STUDIO AT<br />
              CLOSER SIGHT
            </h2>
          </div>

          {/* Right Side - Description and Stats */}
          <div className='flex flex-col gap-12'>
            {/* Description */}
            <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
              We believe in the power of photography to tell stories and evoke emotions. 
              Our team of professional photographers is dedicated to capturing the beauty 
              in every moment, ensuring that your memories are preserved with the highest 
              quality and creativity.
            </p>

            {/* Stats Grid */}
            <div className='grid grid-cols-3 gap-3 md:gap-6'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center md:text-left'>
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
