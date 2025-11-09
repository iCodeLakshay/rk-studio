'use client'
import React, { useEffect, useRef } from 'react'
import { createScrollAnimation, createStaggerAnimation, animations } from '../../utils/gsap'

const Gallery_Home = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const galleryItemsRef = useRef([]);
  const galleryImages = [
    {
      src: '/Lens Glance/2.jpg',
      alt: 'Placeholder'
    },
    {
      src: '/Lens Glance/1.png',
      alt: 'Gallery Image 1'
    },
    {
      src: '/Lens Glance/3.png',
      alt: 'Placeholder'
    },
    {
      src: '/Lens Glance/4.png',
      alt: 'Placeholder'
    },
    {
      src: '/Lens Glance/5.png',
      alt: 'Placeholder'
    },
    {
      src: '/Lens Glance/6.png',
      alt: 'Placeholder'
    }
  ]

  useEffect(() => {
    // Animate badge
    if (badgeRef.current) {
      createScrollAnimation(badgeRef.current, animations.scaleIn, {
        scrollTrigger: { start: "top 85%" }
      });
    }

    // Animate title
    if (titleRef.current) {
      createScrollAnimation(titleRef.current, animations.fadeInUp, {
        scrollTrigger: { start: "top 80%" }
      });
    }

    // Animate gallery items with stagger
    if (galleryItemsRef.current.length > 0) {
      createStaggerAnimation(galleryItemsRef.current, animations.staggerFadeInUp, {
        scrollTrigger: { start: "top 70%" },
        stagger: 0.15
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className='w-full bg-[#F6F2EC] py-16 md:py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col items-center text-center mb-10 md:mb-16'>
          <div ref={badgeRef} className='inline-block border-2 border-[#C4956B] rounded-full px-2 md:px-5 md:py-2 mb-6'>
            <span className='text-[#C4956B] text-[10px] md:text-sm tracking-wider font-medium'>GALLERY</span>
          </div>
          <h2 ref={titleRef} className='font-italiana text-[#4A3B35] text-3xl md:text-4xl lg:text-5xl'>
            OUR LENS AT A GLANCE
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              ref={el => galleryItemsRef.current[index] = el}
              className='group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-200'
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-start'
              />
              
              {/* Hover Overlay - Optional */}
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300'></div>
            </div>
          ))}
        </div>

        {/* Optional: View All Button */}
        <div className='flex justify-center mt-12'>
          <button className='bg-[#C4956B] text-white px-8 py-3 rounded-md hover:bg-[#9D7556] transition-colors font-medium'>
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  )
}

export default Gallery_Home
