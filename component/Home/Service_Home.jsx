import React from 'react'

const Service_Home = () => {
  const services = [
    {
      title: "Portrait Photography",
      description: "Studio and natural-light portraits crafted to capture your personality — ideal for professional profiles, bridal shoots and family portraits across Indian settings.",
      image: "/portrait.png" // Add your image path here
    },
    {
      title: "Event Photography",
      description: "Coverage for weddings, receptions, corporate events and festive celebrations. We capture candid moments and key rituals with sensitivity to Indian customs.",
      image: "/event.png" // Add your image path here
    },
    {
      title: "Photo Editing & Retouching",
      description: "Expert post-processing services to enhance and perfect your images, delivering flawless results.",
      image: "/editing.png" // Add your image path here
    },
    {
      title: "Commercial Photography",
      description: "Product, food and brand photography tailored for Indian markets — clean, styled and ready for e-commerce, catalogs or social campaigns.",
      image: "/commercial.avif" // Add your image path here
    }
  ]

  return (
    <section className='w-full bg-[#F6F2EC] py-16 md:py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col items-center text-center mb-12 md:mb-16'>
          {/* Badge */}
          <div className='inline-block border-2 border-[#C4956B] rounded-full px-2 md:px-5 md:py-2 mb-6'>
            <span className='text-[#C4956B] text-[10px] md:text-sm tracking-wider font-medium'>SERVICES</span>
          </div>
          
          {/* Heading */}
          <h2 className='font-italiana text-[#4A3B35] text-4xl md:text-5xl lg:text-6xl'>
            OUR SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <div 
              key={index} 
              className='group relative h-[300px] md:h-[400px] overflow-hidden rounded-lg cursor-pointer'
            >
              {/* Background Image */}
              <div className='absolute inset-0 bg-gray-300'>
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className='w-full h-full object-top object-cover '
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center text-gray-500'>
                    {/* Placeholder - Add image */}
                  </div>
                )}
              </div>

              {/* Gradient Overlay - Always visible but stronger on hover */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-300'></div>

              {/* Content Container */}
              <div className='absolute inset-0 flex flex-col justify-end p-3 md:p-8'>
                {/* Title - Always visible */}
                <h3 className='text-white text-xl md:text-3xl font-bold md:mb-3 transition-all duration-300'>
                  {service.title}
                </h3>

                {/* Description - Revealed on hover */}
                {service.description && (
                  <p className='text-white/90 text-[12px] md:text-base leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-300 overflow-hidden'>
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service_Home
