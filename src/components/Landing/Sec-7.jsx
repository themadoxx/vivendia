import React from 'react';

// Composant pour les étoiles de notation
const RatingStars = ({ rating = 5 }) => {
  return (
    <div className="items-center">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Composant pour chaque produit
const ProductCard = ({ image, title, brand, quantity, packageInfo }) => {
  return (
    <div className="bg-white p-4 flex flex-col h-full">
      <div className="flex-grow flex flex-col items-center">
        <div className="h-32 w-32 flex items-center justify-center mb-4">
          <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
        </div>
        <h3 className="text-sm font-medium text-gray-800 text-center">{title}</h3>
        <p className="text-xs text-gray-600 mt-1 text-center">{brand}</p>
        <p className="text-xs text-cyan-600 mt-2 text-center">{quantity}</p>
      </div>
      <div className="mt-4 text-center">
        <button className="text-sm text-gray-500 hover:text-cyan-600 transition-colors">
          + info
        </button>
      </div>
    </div>
  );
};

// Composant pour la bannière promotionnelle
const PromoBanner = ({ title, subtitle, description, buttonText, image }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden relative h-full">
      <div className="p-6">
        <p className="text-yellow-500 font-medium mb-1">{title}</p>
        <h2 className="text-teal-600 font-bold text-xl mb-1">{subtitle}</h2>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors">
          <span>{buttonText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <img 
        src={image} 
        alt="Promotion" 
        className="absolute bottom-0 right-0 h-full object-contain object-right" 
      />
    </div>
  );
};

// Composant pour les catégories spéciales
const CategoryCard = ({ title, subtitle, description, buttonText, image }) => {
  return (
    <div className="rounded-lg overflow-hidden relative bg-cream-100">
      <div className="grid grid-cols-2">
        <div className="p-6">
          <p className="text-red-400 italic mb-1">{title}</p>
          <h2 className="text-gray-800 font-bold text-2xl mb-2">{subtitle}</h2>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md transition-colors">
            {buttonText}
          </button>
        </div>
        <div className="h-full">
          <img 
            src={image} 
            alt={subtitle} 
            className="h-full w-full object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

// Composant pour les descriptions textuelles
const TextSection = ({ title, description }) => {
  return (
    <div className="my-8 text-left">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Composant principal
const BestSellersSection = () => {
  const bestSellerProducts = [
    // 🥤 Boissons Non Alcoolisées
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/oasis-canette.png`,
      title: "Oasis Tropical 33cl",
      brand: "OASIS",
      quantity: "(Pack de 12)",
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/perrier-slim.png`,
      title: "Perrier Slim 33cl",
      brand: "PERRIER",
      quantity: "(Pack de 24)",
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/volvic-zest.png`,
      title: "Volvic Zest Citron 50cl",
      brand: "VOLVIC",
      quantity: "(Pack de 12)",
    },

    // 🍫 Confiseries & Snacks Sucrés
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/mars.png`,
      title: "Mars Chocolat 51g",
      brand: "MARS",
      quantity: "(Carton de 24)",
    },
    {
      id: 5,
      image: `${process.env.PUBLIC_URL}/cookies-sensation.png`,
      title: "Milka Cookies Sensations",
      brand: "MILKA",
      quantity: "(Boîte de 12)",
    },
    {
      id: 6,
      image: `${process.env.PUBLIC_URL}/toblerone.webp`,
      title: "Toblerone 100g",
      brand: "TOBLERONE",
      quantity: "(Carton de 20)",
    },

    // 🥨 Snacks Salés
    {
      id: 7,
      image: `${process.env.PUBLIC_URL}/doritos.png`,
      title: "Doritos Nacho Cheese",
      brand: "DORITOS",
      quantity: "(Carton de 10)",
    },
    {
      id: 8,
      image: `${process.env.PUBLIC_URL}/vico-popcorn.webp`,
      title: "Popcorn Sucré",
      brand: "N/A",
      quantity: "(Carton de 10)",
    },

    // 🌱 Produits Bio & Diététiques
    {
      id: 9,
      image: `${process.env.PUBLIC_URL}/gerble-sesame.png`,
      title: "Gerblé Biscuits Sésame",
      brand: "GERBLÉ",
      quantity: "(Boîte de 8)",
    },
    {
      id: 10,
      image: `${process.env.PUBLIC_URL}/quinoa-tomates.png`,
      title: "Quinoa Tomates Olives",
      brand: "BIO SELECTION",
      quantity: "(Sachet de 500g)",
    },

    // ☕ Café, Cappuccino & Boissons Chaudes
    {
      id: 11,
      image: `${process.env.PUBLIC_URL}/maxwell.webp`,
      title: "Café Maxwell House",
      brand: "MAXWELL HOUSE",
      quantity: "(Boîte de 1kg)",
    },
    {
      id: 12,
      image: `${process.env.PUBLIC_URL}/caprimo-caramel.png`,
      title: "Cappuccino Caramel",
      brand: "CAPRIMO",
      quantity: "(Boîte de 1kg)",
    },
];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
        {/* Bannière promotionnelle - maintenant à la même taille qu'avant */}
        <div className="lg:col-span-1 text-left">
        <PromoBanner 
          title="Exclusivité"
          subtitle="NOUVEAU DORITOS SWEET CHILI"
          description="Découvrez la nouvelle saveur Doritos Sweet Chili, un mélange épicé et sucré pour une expérience unique."
          buttonText="Découvrir"
          image={`${process.env.PUBLIC_URL}/doritos-sweet-chili.png`}  
        />
        </div>
        
        {/* Section des meilleures ventes - maintenant avec 3 colonnes au lieu de 2 */}
        <div className="lg:col-span-3">
          <div>
           <div className="text-center justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-1 border-b border-gray-200 pb-2">
                Nos meilleures ventes
              </h2>
                <p className="text-gray-600 mr-2">Les stars du moment </p>
                
            </div>
            
            {/* Grille de produits avec rangées de 4 produits */}
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {bestSellerProducts.map((product, index) => (
                  <div key={product.id} className={`border-b ${index % 4 === 3 ? 'lg:border-r-0' : 'lg:border-r'} ${index % 2 === 1 ? 'sm:border-r-0' : 'sm:border-r'} ${index >= bestSellerProducts.length - 4 ? 'lg:border-b-0' : ''} ${index >= bestSellerProducts.length - 2 ? 'sm:border-b-0 sm:lg:border-b' : ''}`}>
                    <ProductCard
                      image={product.image}
                      title={product.title}
                      brand={product.brand}
                      quantity={product.quantity}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Catégories spéciales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
      <CategoryCard 
        title="Notre sélection"
        subtitle="Cafés & Chocolats"
        description="Du café finement sélectionné"
        buttonText="Découvrir"
        image={`${process.env.PUBLIC_URL}/cafe-distri.jpg`} 
      />

      <CategoryCard 
        title="Offres spéciales"
        subtitle="Bio et diététique"
        description="Des produits sains et équilibrés"
        buttonText="Découvrir"
        image={`${process.env.PUBLIC_URL}/bio-diet.jpg`}  
      />
      </div>
      
      {/* Sections de texte */}
      <TextSection 
        title="L'activité du grossiste alimentaire : la vente en gros"
        description="Un grossiste alimentaire est une entreprise spécialisée dans l'achat, le stockage et la revente de produits alimentaires en grande quantité. Son rôle principal est de fournir des produits aux détaillants, aux professionnels de la restauration, aux distributeurs automatiques et aux entreprises souhaitant s'approvisionner en gros."
      />
      
      <TextSection 
        title="Un fournisseur avec des milliers de références."
        description="Dans le secteur de la distribution automatique et de la vente en gros, disposer d'un large choix de produits est essentiel pour répondre aux attentes des consommateurs. Un fournisseur avec des milliers de références offre aux professionnels une flexibilité totale dans la sélection des articles, garantissant ainsi diversité, qualité et adaptation aux tendances du marché."
      />
      
      <TextSection 
        title="Une large gamme de produits pour tous les besoins"
        description="Avec plus de 450 références, Vivendia met à disposition des marques renommées comme Coca-Cola, Monster, Kinder, Haribo, LU, Mars, Milka et bien d'autres. Notre engagement est de garantir un approvisionnement fiable, rapide et compétitif pour tous les professionnels de la distribution automatique et de la vente en gros."
      />
    </div>
  );
};

export default BestSellersSection;