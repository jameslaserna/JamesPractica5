'use client'

import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'; // Icono de hamburguesa

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la apertura del menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alternar el estado del menú
  }

  return (
    <div className='bg-white flex flex-row justify-between p-4'>
      {/* Logo */}
      <div className='text-black'>
        <h1 className='text-xl font-semibold'>
          stability.ai
        </h1>
      </div>

      {/* Menú principal - visible en pantallas grandes */}
      <div className='hidden md:flex flex-row space-x-5 text-black font-medium'>
        <p>Models</p>
        <p>Applications</p>
        <p>Deployment</p>
        <p>Company</p>
        <p>Docs</p>
        <button className='text-white bg-black border rounded-xl ml-4 mr-4 p-2'>
          Contact Us
        </button>
      </div>

      {/* Icono hamburguesa - visible solo en pantallas pequeñas */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-black'>
          <FaBars size={30} />
        </button>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 left-0 w-full bg-white shadow-lg`}
      >
        <div className='flex flex-col items-center space-y-4 py-4'>
          <p>Models</p>
          <p>Applications</p>
          <p>Deployment</p>
          <p>Company</p>
          <p>Docs</p>
          <button className='text-white bg-black border rounded-xl ml-4 mr-4 p-2'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
