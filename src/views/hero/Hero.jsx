import React from 'react'
import Button from '@mui/material/Button';
import './hero.css'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero'>
      <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text">
        
        <h1>Su salud visual es nuestra prioridad</h1>
        <p>En Centro de Visión ofrecemos atención oftalmológica de calidad con tecnología de vanguardia y profesionales altamente calificados.</p>
        <div className='buttons' >
        <Button variant="contained" style={{ backgroundColor: "var(--color-primary)" }}>
          Conocer mas
        </Button>
        <Button variant="oulined" style={{ border: "1px solid var(--color-primary)", color: "var(--color-primary)" }}>
          nuestros servicios
        </Button>
        </div >
        
      </motion.div>
      <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="image">
        <img src="https://staticnew-prod.topdoctors.mx/files/Image/large/81027c7889451e2cfc3d6bfb6aaa8c6a.jpg" alt="Hero" />
      </motion.div>
    </div>
  )
}

export default Hero
