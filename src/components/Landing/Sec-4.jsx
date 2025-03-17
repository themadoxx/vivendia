import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Tout en 1",
      image: "/home-services.png",
      selected: false
    },
    {
      id: 2,
      title: "Service client réactif",
      image: "/home-services-2.png",
      selected: false
    },
    {
      id: 3,
      title: "Suivi de vos commandes",
      image: "/home-services-3.png",
      selected: false
    },
    {
      id: 4,
      title: "Meilleurs prix du marché",
      image: "/home-services-4.webp",
      selected: true
    }
  ];

  return (
    <div className="w-full bg-red-600 py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12">
          {/* Heading Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              DÉCOUVREZ NOS <span className="text-red-600">SERVICES</span>
            </h2>
            <p className="text-gray-800 text-lg max-w-4xl mx-auto">
              Nos solutions personnalisées et axées sur la performance propulseront Vivendia vers de nouveaux sommets.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-32 h-32 object-contain mb-4" 
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description} {/* Assurez-vous que chaque service a une courte description */}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-red-700 transition-colors">
              DÉCOUVRIR NOS PRODUITS →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;