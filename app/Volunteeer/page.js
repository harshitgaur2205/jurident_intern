import React from 'react'

const page = () => {
  return (
    <div className='donation'>
      <div  className='donation_part1'>
        <h1>DONATIONS</h1>
      </div>

      <div  className='donation_part2'>
        <h3>YOUR LITTLE HELP CAN MAKE SOMEONE SMILE</h3>
      </div>

      <div className='donation_part3' >
        <h2>
        Imagine being a catalyst for change, a beacon of hope for those in need. Your contribution, no matter the size, holds the power to transform lives, ignite possibilities, and create a ripple effect of kindness.
        </h2>
      </div>

      <div className='donation_part4'>
        <img className='donation_image' alt='image' src='https://img.freepik.com/free-photo/front-view-girls-holding-hands-up_23-2150769101.jpg?t=st=1703934150~exp=1703937750~hmac=c766dbc7d1edfe96a7f60a16b92d323e211957b116e07dba6eb44606e7eca9cb&w=740' />

        <div className='donation_form'>
          
          
          <div className='username'>    
            <input type='text' className='input_text' placeholder='FirstName' />
            <input type='text' className='input_text' placeholder='LastName' />
          </div>
          
          
          <div className='email'>
            <input type='text' className='emaill' placeholder='abc@gmail.com' />
          </div>

          <div className='choice'>
            <div className='choose'> 
            <label className='labell'  for="donation_type">Donation type:</label>
            <select id="type" name="donation_type">
              <option className='choices'  value="Money">Money</option>
              <option className='choices' value="Food">Food</option>
              <option className='choices' value="Clothes">Clothes</option>             
            </select>
            </div>
            <input  type='submit' className='button'/>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default page