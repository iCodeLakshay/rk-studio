'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const OurTeam_About = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const teamMembersRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge with pulse effect
      gsap.fromTo(badgeRef.current,
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%"
          }
        }
      );

      // Title with letter-by-letter reveal
      if (titleRef.current) {
        const chars = titleRef.current.textContent.split('');
        titleRef.current.innerHTML = chars.map(char => 
          char === ' ' ? ' ' : `<span class="char">${char}</span>`
        ).join('');

        gsap.fromTo(titleRef.current.querySelectorAll('.char'),
          {
            y: 100,
            opacity: 0,
            rotateX: -90
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%"
            }
          }
        );
      }

      // Team members with 3D flip cards effect
      teamMembersRef.current.forEach((member, index) => {
        if (member) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: member,
              start: "top 75%"
            }
          });

          // Initial entrance
          tl.fromTo(member,
            {
              rotateY: 90,
              opacity: 0,
              scale: 0.5
            },
            {
              rotateY: 0,
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "back.out(1.7)",
              delay: index * 0.15
            }
          );

          // Hover effects with 3D transforms
          member.addEventListener('mouseenter', () => {
            gsap.to(member, {
              rotateY: -10,
              rotateX: 5,
              scale: 1.05,
              z: 50,
              duration: 0.4,
              ease: "power2.out"
            });
            
            gsap.to(member.querySelector('.member-image'), {
              scale: 1.1,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          member.addEventListener('mouseleave', () => {
            gsap.to(member, {
              rotateY: 0,
              rotateX: 0,
              scale: 1,
              z: 0,
              duration: 0.4,
              ease: "power2.out"
            });
            
            gsap.to(member.querySelector('.member-image'), {
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} className='bg-[#f5f0eb] py-20 px-8 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span ref={badgeRef} className='inline-block border border-gray-600 text-gray-600 px-4 py-1 rounded-full text-sm mb-6 tracking-wide'>
            OUR TEAM
          </span>
          <h2 ref={titleRef} className='font-italiana text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800'>
            CREATIVE TEAM BEHIND THE LENS
          </h2>
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6' style={{perspective: '1000px'}}>
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              ref={el => teamMembersRef.current[index] = el}
              className='group relative overflow-hidden cursor-pointer'
              style={{transformStyle: 'preserve-3d'}}
            >
              {/* Image Container */}
              <div className='member-image relative aspect-[3/4] overflow-hidden'>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className='object-cover transition-transform duration-500'
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
