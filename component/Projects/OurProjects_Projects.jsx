import React from 'react'

const OurProjects_Projects = () => {
  const projects = [
    {
      id: 1,
      client: 'Emily Rivera',
      year: '2024',
      title: 'Holiday Joy: Family Photoshoot',
      categories: ['Family Photography', 'Outdoor Shoot'],
      image: '/placeholder.svg'
    },
    {
      id: 2,
      client: 'Floral Designs',
      year: '2023',
      title: 'The Garden Collection',
      categories: ['Product Photography', 'Photo Editing'],
      image: '/placeholder.svg'
    },
    {
      id: 3,
      client: 'TeamX Digital Agency',
      year: '2023',
      title: 'Corporate Headshots for TeamX',
      categories: ['Corporate Photography', 'Headshots'],
      image: '/placeholder.svg'
    },
    {
      id: 4,
      client: 'Wanderlust Chronicles',
      year: '2021',
      title: 'Travel Blog Feature',
      categories: ['Travel Photography', 'On-location Shoot'],
      image: '/placeholder.svg'
    },
    {
      id: 5,
      client: 'Zen Retreats',
      year: '2023',
      title: 'Serenity Motion Yoga',
      categories: ['Event Photography', 'Lifestyle Shoot'],
      image: '/placeholder.svg'
    },
    {
      id: 6,
      client: 'UrbanSpaces',
      year: '2024',
      title: 'The Modern Office',
      categories: ['Commercial Shoot'],
      image: '/placeholder.svg'
    }
  ]

  return (
    <section className='w-full bg-[#F6F2EC] py-16 md:py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <div className='inline-block border-2 border-[#C4956B] rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-4 sm:mb-5 md:mb-6'>
            <span className='text-[#C4956B] text-xs sm:text-sm tracking-wider font-medium'>PROJECTS</span>
          </div>
          <h2 className='font-italiana text-[#4A3B35] text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
            OUR PROJECTS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10'>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className='group cursor-pointer'
            >
              {/* Image Container */}
              <div className='relative aspect-[4/3] overflow-hidden rounded-md md:rounded-lg mb-2 sm:mb-3 md:mb-4 bg-gray-200'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300'></div>
              </div>

              {/* Content */}
              <div className='space-y-1 sm:space-y-2 md:space-y-3'>
                {/* Client and Year */}
                <p className='text-[#6B5D54] text-xs sm:text-sm'>
                  {project.client} - {project.year}
                </p>

                {/* Title */}
                <h3 className='text-[#4A3B35] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-snug group-hover:text-[#C4956B] transition-colors duration-300'>
                  {project.title}
                </h3>

                {/* Categories */}
                <div className='flex flex-wrap gap-1 sm:gap-2'>
                  {project.categories.map((category, index) => (
                    <span 
                      key={index}
                      className='text-[#C4956B] text-xs sm:text-sm'
                    >
                      {category}
                      {index < project.categories.length - 1 && (
                        <span className='text-[#6B5D54] mx-1'>•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Load More Button */}
        {/* <div className='flex justify-center mt-12 md:mt-16'>
          <button className='bg-[#C4956B] text-white px-8 py-3 rounded-md hover:bg-[#9D7556] transition-colors font-medium'>
            View More Projects
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default OurProjects_Projects
