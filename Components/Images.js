"use client"
import React from 'react'
import { useLayoutEffect,useRef } from 'react';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

const Images = () => {
    const comp = useRef(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(()=>{
      const t1 = gsap.timeline()
      t1.to(".image1",{
        delay:1.9,
        translateX:"400",
        opacity:1,
        translateY:"-450"
      }).to(".image2",{
        translateX:"-570",opacity:1,
        translateY:"-450"
      }).to(".image3",{
        translateX:"-300",opacity:1,
      }).to(".image5",{
        translateX:"250",opacity:1,
      }).to(".image1",{
        scale:"10",
        opacity:0
      })
      .to(".image2",{
        scale:"10",
        opacity:0
      }).to(".image3",{
        scale:"10",
        opacity:0
      }).to(".image5",{
        scale:"10",
        opacity:0
      })

    },comp)

    return () => ctx.revert() 
  },[])
  return (
    <div ref={comp} >
        <div className='image1'></div>
        <div className='image2'></div>
        <div className='image3'></div>
        <div className='image5'></div>
    </div>
  )
}

export default Images