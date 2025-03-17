import React, { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    titre: '',
    email: '',
    entreprise: '',
    codePostal: '',
    siteWeb: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire soumises:', formData);
    // Ici vous pouvez ajouter la logique pour envoyer les données à votre backend
  };

  return (
    <section className="relative py-16 px-4 md:px-8 w-full bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Colonne de formulaire - Prend 60% sur desktop, 100% sur mobile */}
          <div className="w-full lg:w-7/12 pr-0 lg:pr-8 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">PRÊTS À PASSER COMMANDE ?</h2>
            
            <p className="text-lg text-gray-800 mb-8">
              Faites le premier pas vers un meilleur marketing pour votre 
              entreprise. Remplissez le formulaire de contact ci-dessous 
              pour démarrer la conversation.
            </p>
            
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-wrap -mx-2 mb-4">
                {/* Prénom */}
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="prenom" className="block text-gray-700 mb-1">
                    Prénom <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
                
                {/* Nom */}
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="nom" className="block text-gray-700 mb-1">
                    Nom <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
                
                {/* Titre */}
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="titre" className="block text-gray-700 mb-1">
                    Titre
                  </label>
                  <input
                    type="text"
                    id="titre"
                    name="titre"
                    value={formData.titre}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
                
                {/* Email */}
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
                
                {/* Entreprise */}
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="entreprise" className="block text-gray-700 mb-1">
                    Entreprise <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
                
                {/* Code postal */}
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label htmlFor="codePostal" className="block text-gray-700 mb-1">
                    Code postal <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="codePostal"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
                
                {/* Site web */}
                <div className="w-full px-2 mb-6">
                  <label htmlFor="siteWeb" className="block text-gray-700 mb-1">
                    Site web
                  </label>
                  <input
                    type="url"
                    id="siteWeb"
                    name="siteWeb"
                    value={formData.siteWeb}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="bg-red-600 text-white py-2 px-8 font-medium uppercase tracking-wide hover:bg-red-700 transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
          
          {/* Colonne d'illustration - Masquée sur mobile, 40% sur desktop */}
          <div className="hidden lg:block lg:w-5/12 relative">
            <div className="absolute inset-0">
              {/* Les cercles avec le logo V */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-red-400 flex items-center justify-center shadow-md">
                <span className="text-white text-3xl font-serif font-bold">V</span>
              </div>
              <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-red-300 flex items-center justify-center shadow-md">
                <span className="text-white text-2xl font-serif font-bold">v</span>
              </div>
              <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-red-500 flex items-center justify-center shadow-md">
                <span className="text-white text-4xl font-serif font-bold">V</span>
              </div>
              <div className="absolute top-1/2 right-4 w-14 h-14 rounded-full bg-red-200 flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-serif font-bold">v</span>
              </div>
              <div className="absolute bottom-16 left-10 w-12 h-12 rounded-full bg-red-300 flex items-center justify-center shadow-md">
                <span className="text-white text-lg font-serif font-bold">v</span>
              </div>
              <div className="absolute top-20 left-1/2 w-16 h-16 rounded-full bg-red-400 flex items-center justify-center shadow-md">
                <span className="text-white text-2xl font-serif font-bold">v</span>
              </div>
              <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-red-300 flex items-center justify-center shadow-md">
                <span className="text-white text-3xl font-serif font-bold">V</span>
              </div>
              <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-red-200 flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-serif font-bold">v</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bordure inférieure */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
    </section>
  );
};

export default ContactFormSection;