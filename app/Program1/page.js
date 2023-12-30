import React from 'react'
import Nav from '@/Components/Nav'

const page = () => {
  return (
    <div className='Project1_bg'>
        <div className='Project1_img'>
            <img alt="Image" src="https://www.smsfoundation.org/wp-content/uploads/2020/08/water-management-banner.png" />
        </div>

        <div className='Project1_part2'>
          <div className='Project1_detail'> 
            <h2>WATER MANAGEMENT</h2>
            <p>The Water Management program works with communities to harvest and store rainwater for direct use, and/or replenish groundwater by building and restoring infrastructure in villages. It supports revival of traditional water bodies, construction of water storage infrastructure, and safe disposal of wastewater. It promotes safe drinking water for all with innovative low-cost, sustainable technologies and WASH behavior. It creates awareness about the need for water conservation and builds capacities of local communities for better management and long-term sustainability of their water resources. The program seeks opportunities to collaborate for continuous improvement and replication of low-cost water management interventions.</p>
            <p>The Water Management program focuses on replenishing depleted underground aquifers and augmenting groundwater primarily with rainwater harvesting. This improves the availability and quality of groundwater in the long run, and provides water security to rural households. The program works with communities to revive traditional water bodies, and design and construct cost-effective recharge structures to harvest surplus monsoon runoff for either augmentation of groundwater and/or creation of surface water storage. Water resource augmentation structures include check dams, ponds, farm ponds, tanks, recharge wells, among others.</p>
          </div>

        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nvkSMb5AYhE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
        />
        </div>
    </div>
  )
}

export default page