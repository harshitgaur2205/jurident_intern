"use client"
import React from 'react'
import Nav_card from './Nav_card'
import Link from 'next/link'

const Nav = (props) => {
    const data = [{
        name1:"home",
        name2:"EXPLORE"
    },{
        name1:"about",
        name2:"READ BIO",
    },{
        name1:"project",
        name2:"DISCOVER "
    },{
        name1:"volunteer",
        name2:"CONTRIBUTE "
    },{
        name1:"contact",
        name2:"GET IN TOUCH"
    }]

    
  return (
    <div className='Nav'>
        
        {data.map((x,index) => (
            <Nav_card key={index} n1 = {x.name1} n2 = {x.name2} />
        ))}
    </div>
  )
}

export default Nav
