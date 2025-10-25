import React from 'react'

const WhyUs_About = () => {
  // Reusable styles
  const headingStyle = "text-2xl md:text-3xl font-semibold text-gray-800 mb-4";
  const descriptionStyle = "text-gray-700 text-base md:text-lg leading-relaxed";

  const features = [
    {
      title: "Expert Team of Photographers",
      description: "Our team of highly skilled photographers has years of experience in various styles of photography."
    },
    {
      title: "Personalized Experience",
      description: "We tailor every session to meet your specific needs and vision. Whether it's a family portrait, a business campaign."
    },
    {
      title: "State-of-the-Art Equipment",
      description: "We use the latest photography and editing technology to guarantee the highest level of quality for every photo."
    }
  ];

  return (
    <section className='bg-[#f5f0eb] py-20 px-8 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          
          {/* Left Side - Heading */}
          <div>
            <span className='inline-block border border-amber-600 text-amber-600 px-4 py-1 rounded-full text-sm mb-6 tracking-wide'>
              WHY US
            </span>
            <h2 className='font-italiana text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800'>
              UNLEASH THE<br />
              MAGIC, MOMENTS<br />
              ELEVATED
            </h2>
          </div>

          {/* Right Side - Features List */}
          <div className='flex flex-col gap-12'>
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className={headingStyle}>{feature.title}</h3>
                <p className={descriptionStyle}>{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyUs_About
