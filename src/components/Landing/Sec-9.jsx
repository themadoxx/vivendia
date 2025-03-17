import React from 'react';

const VivendiaBlogSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Titre du blog */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">VIVENDIA</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-red-600">LE BLOG</h3>
        </div>
        
        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Article 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="p-6 flex flex-col h-full">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Comment optimiser votre offre de distributeurs automatiques pour maximiser vos ventes ?
              </h4>
              <p className="text-gray-700 mb-4 flex-grow">
                Les distributeurs automatiques sont devenus un canal de vente incon...
              </p>
              <a href="#" className="text-red-600 font-medium flex items-center self-start">
              <span>Lire l'article →</span>
              </a>
            </div>
          </div>
          
          {/* Article 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
            <div className="p-6 flex flex-col h-full">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Les 5 tendances qui révolutionnent la distribution automatique en 2024
              </h4>
              <p className="text-gray-700 mb-4 flex-grow">
                La distribution automatique évolue rapidement, avec l'émer...
              </p>
              <a href="#" className="text-red-600 font-medium flex items-center self-start">
                <span>Lire l'article →</span>
              </a>
            </div>
          </div>
          
          {/* Article 3 avec image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        
            <div className="p-6 flex flex-col h-full">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Pourquoi choisir Vivendia comme fournisseur de produits pour vos distributeurs automatiques ?
              </h4>
              <p className="text-gray-700 mb-4 flex-grow">
                Avec plus de 25 ans d'expérience, Vivendia est un acteur incontour...
              </p>
              <a href="#" className="text-red-600 font-medium flex items-center self-start">
              <span>Lire l'article →</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bannière LinkedIn */}
        <div className="relative w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
          <a href="https://www.linkedin.com/company/vivendia" target="_blank" rel="noopener noreferrer" 
            className="flex items-center justify-center bg-blue-600 text-white py-4 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            <div className="absolute left-4 -top-6">
              <div className="bg-white p-2 rounded-md shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </div>
            </div>
            <span className="text-sm md:text-base font-medium tracking-wide uppercase">
              Découvrir l'entreprise Vivendia sur LinkedIn →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VivendiaBlogSection;