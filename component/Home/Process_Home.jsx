import React from 'react'

const Process_Home = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      text: 'We begin with a thorough consultation to understand your needs, preferences, and vision for the photo session.'
    },
    {
      number: '02',
      title: 'Concept Development',
      text: 'We plan the shoot, including location, props, and styling, to ensure a cohesive and impactful outcome.'
    },
    {
      number: '03',
      title: 'Photo Session',
      text: 'On the day of the shoot, our photographers use state-of-the-art equipment and techniques to capture stunning images.'
    },
    {
      number: '04',
      title: 'Post-Processing',
      text: "After the session, our expert editors meticulously enhance and retouch the images, ensuring each photo meets our high standards of quality and artistry."
    },
    {
      number: '05',
      title: 'Final Delivery',
      text: 'We present the edited images to you through an online gallery, allowing you to review and select your favorites.'
    }
  ]

  return (
    <section className='w-full bg-[#F6F2EC] py-16 md:py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex flex-col items-center text-center mb-10 md:mb-16'>
          <div className='inline-block border-2 border-[#C4956B] rounded-full px-2 md:px-5 md:py-2 mb-6'>
            <span className='text-[#C4956B] text-[10px] md:text-sm tracking-wider font-medium'>PROCESS</span>
          </div>
          <h2 className='font-italiana text-[#4A3B35] text-3xl md:text-4xl lg:text-5xl'>
            HOW OUR CREATIVE
            <br /> TEAM WORKS
          </h2>
        </div>

        {/* Content layout: On desktop - image left, steps right. On mobile - image stacked above steps */}
        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          {/* Image Column */}
          <div className='w-full lg:w-1/2'>
            <div className='bg-gray-200 overflow-hidden'>
              {/* Replace this img src with your own image path */}
              <img src='/process.png' alt='Process' className='w-full h-auto md:h-[36rem] object-cover' />
            </div>
          </div>

          {/* Steps Column */}
          <div className='w-full lg:w-1/2'>
            <div className='flex flex-col gap-6'>
              {steps.map((step, idx) => (
                <div key={idx} className='flex gap-6 items-start'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 rounded-full bg-white border border-[#E0B98E] flex items-center justify-center text-[#4A3B35] font-semibold'>
                      {step.number}
                    </div>
                  </div>

                  <div className='flex-1 border-b border-[#e6dcd1] pb-4'>
                    <h4 className='text-[#322421] font-semibold mb-2'>{step.title}</h4>
                    <p className='text-[#5a4f49] text-sm leading-relaxed'>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process_Home
