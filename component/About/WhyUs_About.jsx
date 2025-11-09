'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const WhyUs_About = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const featuresRef = useRef([]);

  // Reusable styles
  const headingStyle = "text-2xl md:text-3xl font-semibold text-gray-800 mb-4";
  const descriptionStyle = "text-gray-700 text-base md:text-lg leading-relaxed";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge morphing animation
      gsap.fromTo(badgeRef.current, 
        { 
          scale: 0,
          rotation: -180,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 85%"
          }
        }
      );

      // Title with wave effect
      if (titleRef.current) {
        const titleWords = titleRef.current.querySelectorAll('.word');
        gsap.fromTo(titleWords,
          {
            y: 100,
            opacity: 0,
            rotateY: 90
          },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.2,
            stagger: {
              amount: 0.8,
              from: "random"
            },
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%"
            }
          }
        );
      }

      // Features with complex entrance
      featuresRef.current.forEach((feature, index) => {
        if (feature) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: feature,
              start: "top 75%"
            }
          });

          tl.fromTo(feature,
            {
              x: index % 2 === 0 ? -100 : 100,
              opacity: 0,
              scale: 0.8,
              rotation: index % 2 === 0 ? -10 : 10
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.5,
              ease: "back.out(1.7)",
              delay: index * 0.2
            }
          );

          // Hover animations
          feature.addEventListener('mouseenter', () => {
            gsap.to(feature, {
              scale: 1.05,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          feature.addEventListener('mouseleave', () => {
            gsap.to(feature, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} className='bg-[#f5f0eb] py-20 px-8 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          
          {/* Left Side - Heading */}
          <div>
            <span ref={badgeRef} className='inline-block border border-amber-600 text-amber-600 px-4 py-1 rounded-full text-sm mb-6 tracking-wide'>
              WHY US
            </span>
            <h2 ref={titleRef} className='font-italiana text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800'>
              <span className='word inline-block'>UNLEASH</span> <span className='word inline-block'>THE</span><br />
              <span className='word inline-block'>MAGIC,</span> <span className='word inline-block'>MOMENTS</span><br />
              <span className='word inline-block'>ELEVATED</span>
            </h2>
          </div>

          {/* Right Side - Features List */}
          <div className='flex flex-col gap-12'>
            {features.map((feature, index) => (
              <div key={index} ref={el => featuresRef.current[index] = el} className='cursor-pointer'>
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
