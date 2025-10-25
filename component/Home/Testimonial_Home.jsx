'use client'
import React, { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Testimonial_Home = () => {
  const testimonials = [
    {
      text: "ViewLight exceeded my expectations with their professionalism and creativity. The photoshoot was fun and relaxed, and the final images were absolutely stunning. I'll be coming back for all my future projects!",
      name: "Kiran Gupta",
      role: "Fashion Designer",
      avatar: "/testimonial/2.png"
    },
    {
      text: "Working with RK Studio was an incredible experience. They captured our wedding beautifully, with attention to every detail and emotion. The photos are timeless treasures we'll cherish forever.",
      name: "Priya Sharma",
      role: "Bride",
      avatar: "/testimonial/1.png"
    },
    {
      text: "The team's creativity and professionalism made our product photography stand out. They understood our brand vision perfectly and delivered stunning visuals that boosted our sales significantly.",
      name: "Rajesh Kumar",
      role: "Business Owner",
      avatar: "/testimonial/3.png"
    },
    {
      text: "Amazing experience from start to finish! The photographers made us feel comfortable and captured candid moments perfectly. Highly recommended for anyone looking for quality photography services.",
      name: "Neha Patel",
      role: "Event Planner",
      avatar: "/testimonial/4.png"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section className='w-full bg-[#F6F2EC] py-16 md:py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start'>
          {/* Left Side - Heading */}
          <div className='w-full lg:w-2/5 flex-shrink-0'>
            <div className='inline-block border-2 border-[#C4956B] rounded-full px-2 md:px-5 md:py-2 mb-6'>
              <span className='text-[#C4956B] text-[10px] md:text-sm tracking-wider font-medium'>TESTIMONIALS</span>
            </div>
            <h2 className='font-italiana text-[#4A3B35] text-4xl md:text-5xl lg:text-6xl leading-tight'>
              THE STORIES<br />
              OF OUR HAPPY<br />
              CLIENTS
            </h2>
          </div>

          {/* Right Side - Testimonial Carousel */}
          <div className='w-full lg:w-3/5 relative'>
            {/* Testimonial Card */}
            <div className='relative overflow-hidden'>
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100 transform translate-x-0'
                }`}
              >
                <div className='p-8 md:p-10'>
                  {/* Quote Text */}
                  <p className='text-[#4A3B35] text-base md:text-lg leading-relaxed mb-8'>
                    {testimonials[currentIndex].text}
                  </p>

                  {/* Author Info and Navigation */}
                  <div className='flex items-center justify-between'>
                    {/* Author */}
                    <div className='flex items-center gap-4'>
                      <div className='w-14 h-14 rounded-full overflow-hidden bg-gray-300 flex-shrink-0'>
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div>
                        <h4 className='text-[#4A3B35] font-semibold text-lg'>
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className='text-[#6B5D54] text-sm'>
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className='flex gap-3'>
                      <button 
                        onClick={handlePrev}
                        className='w-12 h-12 rounded-full bg-[#E8E2D8] hover:bg-[#C4956B] text-[#806146] hover:text-white transition-all duration-300 flex items-center justify-center'
                        aria-label="Previous testimonial"
                      >
                      <MdKeyboardArrowLeft className='w-5 h-5' />
                      </button>
                      <button 
                        onClick={handleNext}
                        className='w-12 h-12 rounded-full bg-[#C4956B] hover:bg-[#9D7556] text-white transition-all duration-300 flex items-center justify-center'
                        aria-label="Next testimonial"
                      >
                        <MdKeyboardArrowRight className='w-5 h-5 text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className='flex justify-center gap-2 mt-6'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-[#C4956B]' 
                      : 'w-2 bg-[#C4956B]/30 hover:bg-[#C4956B]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial_Home
