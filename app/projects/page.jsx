import CTA_Home from '@/component/Home/CTA_Home'
import Hero_Projects from '@/component/Projects/Hero_Projects'
import OurProjects_Projects from '@/component/Projects/OurProjects_Projects'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero_Projects />
        <OurProjects_Projects />
        <CTA_Home />
    </div>
  )
}

export default page