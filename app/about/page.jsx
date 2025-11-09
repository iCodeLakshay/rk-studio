import Hero_About from '@/component/About/Hero_About'
import WhyUs_About from '@/component/About/WhyUs_About'
import OurTeam_About from '@/component/About/OurTeam_About'
import React from 'react'
import MovingStripe_Home from '@/component/Home/MovingStripe_Home'
import Testimonial_Home from '@/component/Home/Testimonial_Home'
import CTA_About from '@/component/About/CTA_About'

const page = () => {
  return (
    <div>
      <Hero_About />
      <WhyUs_About />
      {/* <OurTeam_About /> */}
      <MovingStripe_Home />
      <Testimonial_Home />
      <CTA_About />
    </div>
  )
}

export default page