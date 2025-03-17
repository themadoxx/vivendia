import React from 'react';

const PassionEngagementSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
          <span className="text-black">PORTÉS PAR LA </span>
          <span className="text-red-600">PASSION</span>
          <span className="text-black"> ET </span>
          <span className="text-red-600">L'ENGAGEMENT.</span>
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-lg mb-1">Nous développons des relations authentiques et durables avec nos clients.</p>
          <p className="text-lg">Voici ce qu'ils apprécient dans notre collaboration :</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {/* Livraison J+2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8L12 12 16 12" />
              </svg>
            </div>
            <p className="text-center text-sm md:text-base font-medium">Livraison en J+2</p>
          </div>
          
          {/* Service client réactif */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-400 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21L16.65 16.65" />
              </svg>
            </div>
            <p className="text-center text-sm md:text-base font-medium">Service client réactif</p>
          </div>
          
          {/* 25 ans d'engagement */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <p className="text-center text-sm md:text-base font-medium">25 ans d'engagement</p>
          </div>
          
          {/* Adapté aux professionnels */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-purple-500 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3.34l1 1L21 8.34a2 2 0 010 2.83l-2.83 2.83a2 2 0 01-2.83 0l-4-4A2 2 0 0121 8.34" />
              </svg>
            </div>
            <p className="text-center text-sm md:text-base font-medium">Adapté aux professionnels</p>
          </div>
          
          {/* 450 références */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-400 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-center text-sm md:text-base font-medium">450 références</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a href="#avis" className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm tracking-wide uppercase font-medium hover:bg-gray-900 transition duration-300">
            VOIR LES AVIS DE NOS CLIENTS →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PassionEngagementSection;