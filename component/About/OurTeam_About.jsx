import React from 'react'
import Image from 'next/image'

const OurTeam_About = () => {
  const teamMembers = [
    {
      name: "Evelyn Parker",
      role: "Lead Photographer",
      image: "/placeholder.svg"
    },
    {
      name: "Jackson Rivera",
      role: "Creative Director",
      image: "/placeholder.svg"
    },
    {
      name: "Sophia Mitchell",
      role: "Photo Editor",
      image: "/placeholder.svg"
    },
    {
      name: "Liam Chen",
      role: "Studio Manager",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className='bg-[#f5f0eb] py-20 px-8 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span className='inline-block border border-gray-600 text-gray-600 px-4 py-1 rounded-full text-sm mb-6 tracking-wide'>
            OUR TEAM
          </span>
          <h2 className='font-italiana text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800'>
            CREATIVE TEAM BEHIND THE LENS
          </h2>
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6'>
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className='group relative overflow-hidden'
            >
              {/* Image Container */}
              <div className='relative aspect-[3/4] overflow-hidden'>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>

              {/* Name Card Overlay */}
              <div className='absolute bottom-0 left-0 right-0 bg-white mx-6 md:mx-4 mb-4 p-2 md:p-4 shadow-md'>
                <h3 className='text-[14px] md:text-xl font-semibold text-gray-900 mb-1'>
                  {member.name}
                </h3>
                <p className='text-[10px] text-gray-600'>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam_About
