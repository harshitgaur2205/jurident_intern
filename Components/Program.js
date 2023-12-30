import React from 'react'
import Link from 'next/link'

const Program = () => {
  return (
    <div className='project_section' id='project' >
        <div className='project_heading'>PROJECT</div>
        <div className='projct_show'>
            <div className='project1'>
                <Link className='p1' href={`/Program1`}><h2>WATER MANAGEMENT</h2></Link>
                
                <Link className='p2' href={`/Program3`}><h2>SCHOOL</h2></Link>
            </div>
            <div className='project2'>
                <Link className='p3' href={`/Program2`}><h2>AGRICULTURE DEVELOPMENT</h2></Link>
            </div>
        </div>
    </div>
  )
}

export default Program