'use client'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {  FaInstagram, FaYoutube } from "react-icons/fa";

const ContactForm_Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        sessionType: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3_FORMS_API_KEY,
                    subject: "New Enquiry for RK Studio website",
                    ...formData
                }),
            })

            const result = await response.json()
            if (result.success) {
                toast.success("Message sent successfully!")
                setFormData({ 
                    name: '', 
                    email: '', 
                    phone: '', 
                    sessionType: '', 
                    message: '', 
                    preferredDate: '', 
                    preferredTime: '' 
                })
            } else {
                toast.error("Failed to send message. Please try again.")
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className='w-full bg-[#B17B6B] py-16 md:py-24 px-6 md:px-16 lg:px-24'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
                    {/* Left Side - Contact Information */}
                    <div className='text-white'>
                        {/* Badge */}
                        <div className='inline-block border-2 border-white/50 rounded-full px-5 py-2 mb-6'>
                            <span className='text-white text-sm tracking-wider font-medium'>CONTACT US</span>
                        </div>

                        {/* Heading */}
                        <h2 className='font-italiana text-white text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight'>
                            HAVE QUESTIONS?<br />
                            WE'RE HERE TO HELP!
                        </h2>

                        {/* Description */}
                        <p className='text-white/90 text-base mb-8 leading-relaxed'>
                            Our dedicated team is ready to provide the answers and support you need. Whether it's a quick question or a detailed concern, we're just a call, email, or chat away. Let us make your experience seamless and stress-free. We're here to help!
                        </p>

                        {/* Contact Details */}
                        <div className='flex flex-col justify-between md:flex-row mb-8'>
                            <div className='space-y-6 mb-8'>
                                {/* Message Us */}
                                <div>
                                    <h3 className='text-white font-semibold mb-2'>Message Us</h3>
                                    <a href='mailto:rk.photography800@gmail.com' className='text-white/90 hover:text-white transition-colors'>
                                        rk.photography800@gmail.com
                                    </a>
                                </div>

                                {/* Call Us */}
                                <div>
                                    <h3 className='text-white font-semibold mb-2'>Call Us</h3>
                                    <a href='tel:+918003056563' className='text-white/90 hover:text-white transition-colors'>
                                        (+91) 80030 56563
                                    </a>
                                </div>

                                {/* Location */}
                                <div>
                                    <h3 className='text-white font-semibold mb-2'>Location</h3>
                                    <p className='text-white/90'>
                                        RK Studio<br />
                                        1234 Main Street, Suite 101<br />
                                        Metropolis, NY 10001
                                    </p>
                                </div>
                            </div>
                            {/* Business Hours */}
                            <div>
                                <h3 className='text-white font-semibold mb-2'>Business Hour</h3>
                                <p className='text-white/90'>
                                    Monday - Friday: 9 AM - 6 PM<br />
                                    Saturday: 10 AM - 4 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                        {/* Social Media */}
                        <div>
                            <h3 className='text-white font-semibold mb-3'>Follow Us!</h3>
                            <div className='flex gap-3'>

                                <a
                                    href='https://www.youtube.com/@rk.photography800'
                                    target='_blank'
                                    className='w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300'
                                    aria-label='YouTube'
                                >
                                    <FaYoutube className='w-5 h-5 text-white' />
                                </a>
                                <a
                                    href='https://www.instagram.com/rk_photography_________'
                                    target='_blank'
                                    className='w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300'
                                    aria-label='Instagram'
                                >
                                    <FaInstagram className='w-4 h-4 text-white' />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className='bg-[#F6F2EC] rounded-lg p-8 md:p-10'>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            {/* Name */}
                            <div>
                                <label htmlFor='name' className='block text-[#4A3B35] text-sm font-medium mb-2'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Enter your full name'
                                    className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4956B] focus:border-transparent text-[#4A3B35] placeholder-gray-400'
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor='email' className='block text-[#4A3B35] text-sm font-medium mb-2'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Enter your email'
                                    className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4956B] focus:border-transparent text-[#4A3B35] placeholder-gray-400'
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor='phone' className='block text-[#4A3B35] text-sm font-medium mb-2'>
                                    Phone
                                </label>
                                <input
                                    type='tel'
                                    id='phone'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder='Enter your phone'
                                    className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4956B] focus:border-transparent text-[#4A3B35] placeholder-gray-400'
                                />
                            </div>

                            {/* Session Type */}
                            <div>
                                <label htmlFor='sessionType' className='block text-[#4A3B35] text-sm font-medium mb-2'>
                                    Session Type
                                </label>
                                <select
                                    id='sessionType'
                                    name='sessionType'
                                    value={formData.sessionType}
                                    onChange={handleChange}
                                    className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4956B] focus:border-transparent text-[#4A3B35]'
                                    required
                                >
                                    <option value=''>Choose your session</option>
                                    <option value='portrait'>Portrait Photography</option>
                                    <option value='wedding'>Wedding Photography</option>
                                    <option value='event'>Event Photography</option>
                                    <option value='commercial'>Commercial Photography</option>
                                    <option value='product'>Product Photography</option>
                                    <option value='other'>Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor='message' className='block text-[#4A3B35] text-sm font-medium mb-2'>
                                    Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Enter your message'
                                    rows='4'
                                    className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4956B] focus:border-transparent text-[#4A3B35] placeholder-gray-400 resize-none'
                                    required
                                ></textarea>
                            </div>

                            {/* Preferred Date & Time */}
                            <div>
                                <label className='block text-[#4A3B35] text-sm font-medium mb-2'>
                                    Preferred Date & Time
                                </label>
                                <div className='grid grid-cols-2 gap-4'>
                                    <input
                                        type='date'
                                        name='preferredDate'
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4956B] focus:border-transparent text-[#4A3B35]'
                                    />
                                    <input
                                        type='time'
                                        name='preferredTime'
                                        value={formData.preferredTime}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C4956B] focus:border-transparent text-[#4A3B35]'
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='w-full bg-[#8B5A47] text-white py-3 rounded-md hover:bg-[#6F4838] transition-colors font-medium text-base disabled:bg-gray-400 disabled:cursor-not-allowed'
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm_Contact
