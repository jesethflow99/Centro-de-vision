import React from 'react'
import "./section.css"
import Service_card from '../../components/service_card/Service_card'
import { motion } from 'framer-motion'
import data from "../../assets/services.json"
import Carousel from '../../components/Carrousel'

const Section = () => {
  return (
    <div className='section'>
      <h1>Nuestros Servicios</h1>
      <p>Ofrecemos una amplia gama de servicios oftalmológicos para cuidar la salud visual de toda su familia.</p>

      <div className='section_cards'>

        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Service_card icon={item.icon} title={item.title} description={item.description} />
          </motion.div>
          
        ))}

        
        </div>
        
        <Carousel />
    </div>
  )
}

export default Section
