'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade';
import 'swiper/css/pagination'

const Hero_Projects = () => {
  const projects = [
    {
      id: 1,
      category: 'LuxeWear Apparel',
      title: 'SPRING FASHION CAMPAIGN',
      description: 'ViewLight was tasked with capturing the magical moments of Sophia and James\' love story.',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      category: 'Elegant Weddings',
      title: 'ROMANTIC DESTINATION WEDDING',
      description: 'A beautiful celebration of love captured in stunning detail across breathtaking landscapes.',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      category: 'Brand Photography',
      title: 'ARTISAN COFFEE COLLECTION',
      description: 'Showcasing the craftsmanship and passion behind locally roasted specialty coffee.',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      category: 'Corporate Events',
      title: 'TECH SUMMIT 2024',
      description: 'Documenting innovation and networking at the region\'s largest technology conference.',
      image: '/placeholder.svg'
    }
  ]

  return (
    <section className='w-full bg-[#F6F2EC] overflow-hidden'>
      {/* Header Section */}
      <div className='pb-15 pt-30 px-8 md:px-16 lg:px-24'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1 className='font-italiana text-[#4A3B35] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight'>
            <span className='text-[#C4956B]'>TIMELESS</span> MOMENTS,<br />
            MASTERFULLY CAPTURED
          </h1>
          <p className='text-[#6B5D54] text-base md:text-lg max-w-3xl mx-auto'>
            Explore the diverse range of photography projects we've brought to life<br className='hidden md:block' />
            for our clients.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className='relative'>
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          effect={'fade'}
        //   navigation={{
        //     prevEl: '.swiper-button-prev-custom',
        //     nextEl: '.swiper-button-next-custom',
        //   }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className='w-full'
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px]'>
                {/* Background Image */}
                <div className='absolute inset-0'>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>

                {/* Content */}
                <div className='absolute inset-0 flex items-end'>
                  <div className='w-full px-6 md:px-16 lg:px-24 pb-12 md:pb-16'>
                    <div className='max-w-7xl mx-auto'>
                      <p className='text-white/90 text-sm md:text-base mb-2 font-medium'>
                        {project.category}
                      </p>
                      <h2 className='font-italiana text-white text-3xl md:text-4xl lg:text-5xl mb-4'>
                        {project.title}
                      </h2>
                      <p className='text-white/90 text-sm md:text-base max-w-2xl'>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className='swiper-pagination-custom absolute  top-6 right-20 flex justify-end gap-2 z-10 pr-20 pb-5'></div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active-custom {
          width: 30px;
          border-radius: 5px;
          background: #C4956B;
        }

        .swiper-pagination-bullet-custom:hover {
          background: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </section>
  )
}

export default Hero_Projects
