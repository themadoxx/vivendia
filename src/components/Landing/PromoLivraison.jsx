import React from 'react';

const PromoLivraison = () => {
  return (
    <div className="w-full bg-red-600 relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center rounded-3xl bg-white overflow-hidden shadow-lg">
          {/* Left section with image */}
          <div className="w-full md:w-1/2 h-full">
            <img 
              src="/livraison-j+2.jpg" 
              alt="Équipe commerciale" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right section with text */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">LIVRAISON J+2</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              POUR LES COMMANDES<br />
              PASSÉES AVANT 11H
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 md:w-5 md:h-5">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-semibold">DANS TOUTE LA FRANCE</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 md:w-5 md:h-5">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-semibold">SÉCURISÉE</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-600 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 md:w-5 md:h-5">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg md:text-xl font-semibold">RAPIDE</span>
              </li>
            </ul>
            
            <button className="bg-black text-white font-semibold py-3 px-6 rounded-md transform hover:scale-105 transition duration-300 w-full md:w-auto md:self-start">
              JE COMMANDE →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoLivraison;