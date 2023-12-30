"use client"
import React from 'react'
import { useLayoutEffect,useRef } from 'react';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import Nav from "@/Components/Nav"
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Program from '@/Components/Program';
import Volunteer from '@/Components/Volunteer';
import Events from '@/Components/Events';
import Contact from '@/Components/Contact';

const page = () => {
  const comp = useRef(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(()=>{
      const t1 = gsap.timeline()
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".heading2",{
        
        scale: 50 ,
        y:"100",
        duration:0.8,
        delay:0.1
      })
      gsap.from(".heading3",{
        y:"100",
        opacity:0,
        delay:1.3,
        duration:0.5
      })
      gsap.to(".image1",{
        skew:100
      })
      gsap.from(".name2",{
        opacity:0,
        y:"100"
      })
    },comp)

    return () => ctx.revert() 
  },[])
  return (
    <>
      <div className='main' ref={comp}>
        <Nav />
        <Hero />
      </div>
      <div className='about_section' id='#about' >
        <About />
      </div>
      <Program />
      <Volunteer />
      <Events />
      <Contact />
    </>
  )
}

export default page