'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const CTA_About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const photosRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      });

      // Background color wave effect
      gsap.fromTo(sectionRef.current,
        { backgroundColor: "#8B5A3C" },
        { 
          backgroundColor: "#C4956B",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%"
          }
        }
      );

      // Title with typewriter and glow effect
      if (titleRef.current) {
        const titleText = titleRef.current.textContent;
        titleRef.current.innerHTML = titleText.split('').map(char => 
          char === ' ' ? ' ' : char === '\n' ? '<br>' : `<span class="char">${char}</span>`
        ).join('');

        tl.fromTo(titleRef.current.querySelectorAll('.char'),
          { 
            opacity: 0,
            y: 50,
            rotateX: -90,
            filter: "blur(10px)"
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.05,
            stagger: 0.02,
            ease: "back.out(1.7)"
          }
        );
      }

      // Subtitle with wave animation
      tl.fromTo(subtitleRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)"
        },
        "-=0.5"
      );

      // Button with magnetic hover effect
      tl.fromTo(buttonRef.current,
        {
          scale: 0,
          rotation: 180,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)"
        },
        "-=0.3"
      );

      // Photos with complex 3D animation
      photosRef.current.forEach((photo, index) => {
        if (photo) {
          const direction = index === 0 ? -1 : index === 2 ? 1 : 0;
          
          gsap.set(photo, {
            rotateY: direction * 90,
            rotateX: 45,
            opacity: 0,
            scale: 0.5,
            z: -200
          });

          tl.to(photo,
            {
              rotateY: direction * (index === 1 ? 0 : index === 0 ? -12 : 12),
              rotateX: 0,
              opacity: 1,
              scale: 1,
              z: index === 1 ? 50 : 0,
              duration: 1.5,
              ease: "back.out(1.7)",
              delay: index * 0.2
            },
            "-=0.8"
          );

          // Individual photo hover animations
          photo.addEventListener('mouseenter', () => {
            gsap.to(photo, {
              rotateY: 0,
              scale: 1.1,
              z: 100,
              duration: 0.5,
              ease: "power2.out"
            });
          });

          photo.addEventListener('mouseleave', () => {
            gsap.to(photo, {
              rotateY: direction * (index === 1 ? 0 : index === 0 ? -12 : 12),
              scale: index === 1 ? 1 : 1,
              z: index === 1 ? 50 : 0,
              duration: 0.5,
              ease: "power2.out"
            });
          });
        }
      });

      // Button hover magnetic effect
      if (buttonRef.current) {
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            duration: 0.3,
            ease: "power2.out"
          });
        });

        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className='w-full bg-[#C4956B] py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-hidden' style={{perspective: '1200px'}}>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center text-center'>
          {/* Heading */}
          <h2 ref={titleRef} className='font-italiana text-white text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight'>
            CAPTURE YOUR MOMENTS<br />
            WITH VIEWLIGHT!
          </h2>

          {/* Subtext */}
          <p ref={subtitleRef} className='text-white text-base md:text-lg mb-8 max-w-2xl'>
            Book your session today and create lasting memories!
          </p>

          {/* CTA Button */}
          <Link href="/contact" ref={buttonRef} className='bg-white text-[#4A3B35] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors mb-12 cursor-pointer text-center'>
            Reserve a Call
          </Link>

          {/* Photo Collage - 3 Tilted Photos */}
          <div className='relative w-full max-w-5xl h-[200px] md:h-[400px] flex items-center justify-center gap-4 md:gap-8' style={{transformStyle: 'preserve-3d'}}>
            {/* Left Photo - Tilted Left */}
            <div 
              ref={el => photosRef.current[0] = el}
              className='relative w-[28%] md:w-[30%] h-[130px] md:h-[300px] cursor-pointer shadow-2xl'
              style={{ transformOrigin: 'center', transformStyle: 'preserve-3d' }}
            >
              <div className='w-full h-full bg-white p-3 md:p-4'>
                <img 
                  src='/Lens Glance/4.png' 
                  alt='Photo 1'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Center Photo - Straight, Slightly Larger and Forward */}
            <div 
              ref={el => photosRef.current[1] = el}
              className='relative w-[32%] md:w-[34%] h-[160px] md:h-[330px] z-10 cursor-pointer shadow-2xl'
              style={{ transformOrigin: 'center', transformStyle: 'preserve-3d' }}
            >
              <div className='w-full h-full bg-white p-3 md:p-4'>
                <img 
                  src='/Lens Glance/1.png' 
                  alt='Photo 2'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Right Photo - Tilted Right */}
            <div 
              ref={el => photosRef.current[2] = el}
              className='relative w-[28%] md:w-[30%] h-[130px] md:h-[300px] cursor-pointer shadow-2xl'
              style={{ transformOrigin: 'center', transformStyle: 'preserve-3d' }}
            >
              <div className='w-full h-full bg-white p-3 md:p-4'>
                <img 
                  src='/Lens Glance/3.png' 
                  alt='Photo 3'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA_About
