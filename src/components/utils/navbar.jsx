import React, { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronDown } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  
  // Gestionnaire de clic pour fermer le menu en cliquant ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target) &&
          buttonRef.current && 
          !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-20 w-full">
      <div className="flex justify-between items-center px-5 py-3 h-[70px] max-w-[1200px] mx-auto relative">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/vivendia-logo.svg`} alt="Vivendia" />
          </a>
        </div>
        
        {/* Navigation Menu Desktop - Bien espacé */}
        <div className="hidden lg:flex lg:items-center lg:ml-12">
          <ul className="flex flex-row items-center space-x-8">
            {[
              { title: "NOS PRODUITS", href: "#produits" },
              { title: "NOS SERVICES", href: "#services" },
              { title: "SOLUTIONS", href: "#solutions" },
              { title: "À PROPOS", href: "#apropos" },
              { title: "BLOG", href: "#blog" },
            ].map((item, index) => (
              <li key={index} className="relative">
                <div className="flex items-center cursor-pointer group">
                  <a href={item.href} className="text-gray-800 no-underline text-sm font-medium py-2 px-1 hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </a>
                  <ChevronDown className="w-3 h-3 text-gray-500 ml-1 group-hover:text-red-600 transition-transform" />
                </div>
              </li>
            ))}
          </ul>
          
          {/* Boutons Desktop - Taille ajustée */}
          <div className="flex items-center ml-10 space-x-5">
            <a href="#contact" className="bg-[#C4392D] text-white text-xs font-medium py-2 px-3 rounded hover:bg-[#a52e23] transition-colors duration-300">
              NOUS CONTACTER
            </a>
            <Link 
              to="/fournisseur/login"
              className="bg-[#2D60C4] text-white text-xs font-medium py-2 px-3 rounded hover:bg-[#234ba5] transition-colors duration-300"
            >
              Connexion Fournisseur
            </Link>
          </div>
        </div>
        
        {/* Navigation Menu Mobile - Fermeture au clic ailleurs */}
        <div 
          ref={menuRef}
          className={`fixed lg:hidden top-0 ${isOpen ? 'right-0' : '-right-full'} h-screen w-[250px] bg-white shadow-lg transition-all duration-300 ease-in-out z-10 pt-24`}
        >
          <ul className="flex flex-col items-start p-0 px-5 space-y-6">
            {[
              { title: "NOS PRODUITS", href: "#produits" },
              { title: "NOS SERVICES", href: "#services" },
              { title: "SOLUTIONS", href: "#solutions" },
              { title: "À PROPOS", href: "#apropos" },
              { title: "BLOG", href: "#blog" },
            ].map((item, index) => (
              <li key={index} className="w-full relative">
                <div className="flex justify-between items-center w-full cursor-pointer">
                  <a href={item.href} className="text-gray-800 no-underline text-sm font-medium block py-2 px-1.5 hover:text-red-600 transition-colors duration-300">
                    {item.title}
                  </a>
                  <ChevronDown className="w-3 h-3 text-gray-500 ml-1 hover:rotate-180 transition-transform" />
                </div>
              </li>
            ))}
            <li className="w-full">
              <a href="#contact" className="bg-[#C4392D] text-white text-xs font-medium py-2 px-3 rounded hover:bg-[#a52e23] transition-colors duration-300 inline-block w-full text-center">
                NOUS CONTACTER
              </a>
            </li>
            <li className="w-full mt-4">
              <Link 
                to="/fournisseur/login"
                className="bg-[#2D60C4] text-white text-xs font-medium py-2 px-3 rounded hover:bg-[#234ba5] transition-colors duration-300 inline-block w-full text-center"
              >
                Connexion Fournisseur
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Overlay pour fermer le menu en cliquant ailleurs (mobile) */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-0 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
        
        {/* Hamburger Menu Button (Mobile uniquement) */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none transition-transform duration-300 ease-in-out lg:hidden z-50"
        >
          <div className="relative w-6 h-6">
            {/* Icône Burger (≡) */}
            <div className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
              <Bars3Icon className="h-6 w-6" />
            </div>
            {/* Icône Croix (✖) */}
            <div className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>
              <XMarkIcon className="h-6 w-6" />
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;