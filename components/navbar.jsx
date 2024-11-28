 'use client'
import { useState } from 'react';
import Link from 'next/link'; 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-purple-900 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
       
     
        
        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className="text-white hover:text-purple-300">Inicio</Link>
          <Link href="/registro" className="text-white hover:text-purple-300">Registro</Link>
          <Link href="/workshops" className="text-white hover:text-purple-300">Workshops</Link>
       
        </div>

       
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <i className={`fas fa-bars ${isOpen ? 'rotate-90' : ''} transition-all`} /> {/* Menú hamburguesa */}
          </button>
        </div>
      </div>
    </div>
  );
}
