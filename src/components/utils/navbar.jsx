import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-20 w-full">
      <div className="flex justify-between items-center px-5 h-[70px] max-w-[1200px] mx-auto relative">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
          <img src={`${process.env.PUBLIC_URL}/vivendia-logo.svg`} alt="Vivendia" />
          </a>
        </div>

        {/* Navigation Menu (Mobile & Desktop) */}
        <div className={`fixed lg:relative top-0 ${isOpen ? 'right-0' : '-right-full'} h-screen lg:h-auto w-[250px] lg:w-auto bg-white lg:bg-transparent lg:flex lg:items-center lg:static lg:p-0 lg:shadow-none shadow-lg transition-all duration-300 ease-in-out z-10 pt-24 lg:pt-0`}>
          
          {/* Liste des liens */}
          <ul className="flex flex-col lg:flex-row items-start lg:items-center p-0 lg:p-0 px-5 lg:px-0 space-y-6 lg:space-y-0">
            {[
              { title: "NOS PRODUITS", href: "#produits" },
              { title: "NOS SERVICES", href: "#services" },
              { title: "SOLUTIONS", href: "#solutions" },
              { title: "À PROPOS", href: "#apropos" },
              { title: "BLOG", href: "#blog" },
            ].map((item, index) => (
              <li key={index} className="mx-0 lg:mx-2.5 w-full lg:w-auto relative">
                <div className="flex justify-between items-center w-full lg:w-auto cursor-pointer">
                  <a href={item.href} className="text-gray-800 no-underline text-sm font-medium block py-2 px-1.5 hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </a>
                  <ChevronDown className="w-4 h-4 text-gray-500 ml-1 hover:rotate-180 transition-transform" />
                </div>
              </li>
            ))}
            <li className="mx-0 lg:mx-2.5 w-full lg:w-auto">
              <a href="#contact" className="bg-[#C4392D] text-white py-2.5 px-4 rounded hover:bg-[#a52e23] transition-colors duration-300 inline-block">
                NOUS CONTACTER
              </a>
            </li>
            <Link 
            to="/fournisseur/login" 
            className="bg-[#C4392D] text-white py-2 px-4 rounded hover:bg-[#a52e23] transition-colors duration-300"
          >
            Connexion Fournisseur
          </Link>
          </ul>
        </div>

        {/* Hamburger Menu Button (Fixé en haut du menu mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-black focus:outline-none transition-transform duration-300 ease-in-out lg:hidden z-50 absolute top-5 right-5"
        >
          <div className="relative w-8 h-8">
            {/* Icône Burger (≡) */}
            <div className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
              <Bars3Icon className="h-8 w-8" />
            </div>
            {/* Icône Croix (✖) */}
            <div className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
              <XMarkIcon className="h-8 w-8" />
            </div>
          </div>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;