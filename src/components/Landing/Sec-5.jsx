import React from 'react';

const VivendiaComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image principale */}
        <div className="order-1 lg:order-1">
          <img 
            src="/distrib.png" 
            alt="Boissons dans un distributeur automatique" 
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        {/* Contenu textuel */}
        <div className="order-2 lg:order-2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight text-left">
            Votre fournisseur de référence pour la distribution automatique
          </h1>
          
          <div className="space-y-4 text-gray-700 text-left">
            <p className="text-base sm:text-lg">
              Vivendia est votre fournisseur direct d'usine, proposant une gamme complète de produits pour la distribution automatique : snacks, boissons fraîches, café, aliments froids et surgelés.
            </p>
            
            <p className="text-base sm:text-lg">
              Nous offrons des références neuves, des solutions combo ainsi que des produits reconditionnés et certifiés. Toutes nos machines sont fabriquées en France et personnalisables selon vos besoins.
            </p>
          </div>
          
          <div className="space-y-4 text-gray-700 pt-4 text-left">
            <p className="text-base sm:text-lg">
              Que vous soyez un professionnel de la distribution automatique ou une entreprise cherchant des solutions d'approvisionnement fiables, Vivendia est votre partenaire privilégié. En tant que fournisseur direct d'usine, nous mettons à votre disposition une gamme complète de produits adaptés aux besoins des distributeurs automatiques, garantissant qualité, fraîcheur et diversité.
            </p>
          </div>
          
          <div className="pt-4 text-left">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Lire plus
            </button>
          </div>
        </div>
      </div>
      
      {/* Section des caractéristiques */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg w-full">
            <img 
              src="/tech.jpg" 
              alt="Smart POS" 
              className="w-full h-32 object-cover object-center rounded"
            />
          </div>
          <h3 className="font-bold text-xl text-gray-900">Le Meilleur de la Tech</h3>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg w-full">
            <img 
              src="/france-industrie.jpeg" 
              alt="Fabriqué en France" 
              className="w-full h-32 object-cover object-center rounded"
            />
          </div>
          <h3 className="font-bold text-xl text-gray-900">Fabriqué en France</h3>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg w-full">
            <img 
              src="/photo-distri.webp" 
              alt="Garantie à vie" 
              className="w-full h-32 object-cover object-center rounded"
            />
          </div>
          <h3 className="font-bold text-xl text-gray-900">Garantie à vie</h3>
        </div>
      </div>
    </div>
  );
};

export default VivendiaComponent;