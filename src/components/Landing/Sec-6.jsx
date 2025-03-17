import React, { useState } from 'react';

// Composant CategoryItem pour les éléments de la sidebar
const CategoryItem = ({ icon, title }) => (
  <div className="flex items-center py-2 px-3 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
    <div className="w-6 h-6 mr-3 text-gray-500">{icon}</div>
    <span className="text-gray-700">{title}</span>
  </div>
);

// Composant ProductCard pour chaque produit
const ProductCard = ({ image, title, brand, quantity, info }) => {
  return (
    <div className="border rounded-md overflow-hidden flex flex-col h-full">
      <div className="p-4 flex-grow flex flex-col items-center">
        <div className="w-32 h-32 mb-4 mx-auto flex items-center justify-center">
          <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
        </div>
        <h3 className="text-sm font-medium text-gray-800 text-center">{title}</h3>
        <p className="text-xs text-gray-600 mt-1 text-center">{brand}</p>
        <p className="text-xs text-cyan-600 mt-2 text-center">{quantity}</p>
      </div>
      <div className="py-3 px-4 border-t text-center">
        <button className="text-sm text-gray-500 hover:text-cyan-600 transition-colors">
          + info
        </button>
      </div>
    </div>
  );
};

// Composant Banner pour les bannières promotionnelles
const Banner = ({ title, subtitle, buttonText, bgColor, textColor, image }) => (
  <div className={`${bgColor} rounded-lg overflow-hidden p-6 relative`}>
    <div className="max-w-sm text-left">
      {subtitle && <p className="text-yellow-400 font-medium mb-2">Exclusivité</p>}
      <h2 className={`text-2xl font-bold ${textColor} mb-2`}>{title}</h2>
      {subtitle && <p className={`text-2xl font-bold ${textColor} mb-4`}>{subtitle}</p>}
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center space-x-2 transition-colors">
        <span>{buttonText}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
    {image && (
      <div className="absolute bottom-0 right-0 w-1/3 h-full">
        <img src={image} alt="Promo" className="object-contain object-bottom h-full" />
      </div>
    )}
  </div>
);

// Composant principal
const ProductCatalogue = () => {
  const [activeCategory, setActiveCategory] = useState("Toutes");
  
  // Données des catégories
  const categories = [
    { id: "energy", icon: "🔋", title: "Boissons énergétiques" },
    { id: "sodas", icon: "🥤", title: "Sodas" },
    { id: "water", icon: "💧", title: "Eau minérale et gazeuse" },
    { id: "juice", icon: "🍹", title: "Jus de fruits & nectars" },
    { id: "tea", icon: "🍵", title: "Thés glacés & infusions" },
    { id: "chocolate", icon: "🍫", title: "Snacks Chocolat" },
    { id: "candy", icon: "🍬", title: "Bonbons et gélifiés" },
    { id: "biscuits", icon: "🍪", title: "Biscuits et pâtisseries" },
    { id: "savory", icon: "🥨", title: "Snacks salés" },
    { id: "bio", icon: "🌱", title: "Produits Bio et diététiques" },
    { id: "coffee", icon: "☕", title: "Café, cappuccino" },
    { id: "hot", icon: "♨️", title: "Boissons chaudes" },
  ];
  
  // Données des produits à découvrir
  const featuredProducts = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/Monster-Energy.png`,
      title: "Monster Energy Original",
      brand: "MONSTER",
      quantity: "50cl",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/Coca-Cola-sans-sucre.png`,
      title: "Coca-Cola Zéro",
      brand: "COCA-COLA",
      quantity: "33cl et 50cl",
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/San-Pellegrino-NATURE.png`,
      title: "San Pellegrino Gazeuse",
      brand: "SAN PELLEGRINO",
      quantity: "50cl",
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/cristaline-fruits-rouges.png`,
      title: "Cristalline Fruits Rouges",
      brand: "CRISTALLINE",
      quantity: "33cl et 50cl",
    },
    {
      id: 5,
      image: `${process.env.PUBLIC_URL}/kinder-bueno.png`,
      title: "Kinder Bueno",
      brand: "FERRERO",
      quantity: "(Carton de 30)",
    },
    {
      id: 6,
      image: `${process.env.PUBLIC_URL}/lays-bbq.png`,
      title: "Chips Lay's Barbecue",
      brand: "LAY'S",
      quantity: "(Carton de 20)",
    },
    {
      id: 7,
      image: `${process.env.PUBLIC_URL}/haribo-dragibus.webp`,
      title: "Haribo Dragibus",
      brand: "HARIBO",
      quantity: "(Carton de 24)",
    },
    {
      id: 8,
      image: `${process.env.PUBLIC_URL}/lutti-best-fizz.webp`,
      title: "Best Fizz",
      brand: "LUTTI",
      quantity: "(Boîte de 1kg)",
    },
];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar avec catégories */}
        <div className="lg:w-1/4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-bold text-gray-800 mb-2 border-b border-green-500 pb-2 inline-block">
              Catégories
            </h2>
            <div className="mt-4 space-y-1">
              {categories.map((category) => (
                <CategoryItem 
                  key={category.id}
                  icon={category.icon}
                  title={category.title}
                />
              ))}
            </div>
          </div>
          
          {/* Banner San Pellegrino */}
          <div className="mt-8">
          <Banner 
            title="DÉCOUVREZ"
            subtitle="LA GAMME SAN PELEGRINO"
            buttonText="Découvrir"
            bgColor="bg-gray-100"
            textColor="text-teal-600"
            image={`${process.env.PUBLIC_URL}/san-pe.png`} 
          />
          </div>
        </div>
        
        {/* Contenu principal */}
        <div className="lg:w-3/4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1 border-b border-gray-200 pb-2">
              À découvrir
            </h2>
            <p className="text-gray-600 mb-6">Notre sélection de produits à découvrir</p>
            
            {/* Grille de produits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredProducts.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  brand={product.brand}
                  quantity={product.quantity}
                />
              ))}
            </div>
          </div>
          
          {/* Banner World Products */}
          <div className="mt-12">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={`${process.env.PUBLIC_URL}/products.jpeg`}
                alt="Produits du Monde"
                className="w-full h-80 object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent backdrop-blur-sm flex items-center">
                <div className="container mx-auto px-8 md:px-16">
                  <div className="max-w-lg">
                    <div className="flex flex-col items-center md:items-start">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wider">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">PRODUITS DU MONDE</span>
                      </h2>
                      <div className="h-1 w-20 bg-teal-400 mb-4"></div>
                      <p className="text-xl text-teal-300 mb-4 font-medium tracking-wide">AFRIQUE • ASIE • AMÉRIQUE</p>
                      <p className="text-white mb-8 text-center md:text-left">Diversifiez votre offre avec notre sélection de snacks et boissons exotiques pour vos distributeurs automatiques.</p>
                      <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-md font-medium flex items-center space-x-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                        <span>DÉCOUVRIR</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogue;