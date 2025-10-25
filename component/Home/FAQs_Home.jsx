"use client"
import React, { useState } from 'react'

const FAQs_Home = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What should I wear to my photo session?",
      answer: "We recommend wearing comfortable, coordinated outfits that reflect your personal style. Avoid busy patterns for the best results."
    },
    {
      question: "How long does a photo session last?",
      answer: "Typical photo sessions last between 1-2 hours, depending on the package you choose and the number of locations or outfit changes."
    },
    {
      question: "When will I receive my photos?",
      answer: "You can expect to receive your fully edited photos within 2-3 weeks after your session. We'll notify you as soon as they're ready for download."
    },
    {
      question: "Can I bring props to my session?",
      answer: "Absolutely! We encourage you to bring props that are meaningful to you. They add personality and help tell your unique story."
    },
    {
      question: "Do you offer location shoots?",
      answer: "Yes, we offer both studio and on-location photography. We can suggest beautiful locations or work at a place that's special to you."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className='bg-[#f5f0eb] py-20 px-8 md:px-16 lg:px-24'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <span className='inline-block border border-amber-600 text-amber-600 px-4 py-1 rounded-full text-sm mb-6 tracking-wide'>
            FAQ
          </span>
          <h2 className='font-italiana text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-800'>
            MOST ASKED QUESTIONS<br />
            BY OUR CLIENTS
          </h2>
        </div>

        {/* Accordion Items */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className='border-b border-gray-300 pb-4'
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className='w-full flex justify-between items-center text-left py-4 hover:text-amber-700 transition-colors group'
              >
                <h3 className='text-lg md:text-xl font-normal text-gray-800 pr-4'>
                  {faq.question}
                </h3>
                
                {/* Plus/Minus Icon */}
                <span className='text-2xl md:text-3xl text-gray-800 transition-transform duration-300 flex-shrink-0'>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer - Animated */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-40 opacity-100 mt-2' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className='text-gray-600 text-base md:text-lg leading-relaxed pb-2'>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs_Home
