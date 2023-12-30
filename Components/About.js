import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
     
  return (
        <div className='about_main' id="about">
        
        <h1 className='about_heading'>ABOUT US </h1>
        
        <p className='about_p'>"Gaur's Foundation: Bridging Urban Communities through Support and Generosity"</p>
        <p className='about_p'>At Gaur's Foundation, our mission is simple yet profound: to unite urban communities in a shared purpose of compassion, donation, and support. We understand the strength that lies within urban areas and aim to harness this strength for the betterment of society.</p>
        <p className='about_p'>Founded with a vision to create a network of caring hearts within urban locales, Gaur's Foundation serves as a catalyst for positive change. We believe that every act of kindness, no matter how small, has the power to transform lives and uplift entire communities.
        </p>

        {/* <iframe className='maps'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.051945438592!2d79.15635738508497!3d12.968527918749157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1703952193268!5m2!1sen!2sin"
        width="300"
        height="350"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        /> */}
        </div>
      )
}

export default About