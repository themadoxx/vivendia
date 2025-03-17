import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center" 
         style={{ backgroundImage: "url('/hero.png')" }}> 
      
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenu principal */}
      <div className="relative text-center max-w-4xl mx-auto px-6">
        
        {/* Titres avec animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl lg:text-6xl font-extrabold uppercase drop-shadow-md"
        >
          Leader de la distribution automatique
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-2xl lg:text-3xl mt-4 font-semibold uppercase"
        >
          En France et en Europe
        </motion.h2>

        <button className="bg-white text-black font-semibold py-3 px-8 rounded-full mt-8 hover:bg-[#DE3530] hover:text-white transition duration-300">
          Découvrir notre catalogue
        </button>

        {/* Footer Hero */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          
          {/* Livraison */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg shadow-md text-white flex items-center gap-4"
          >
            <span className="text-lg font-semibold">Livraison à J+2 </span>
            <div className="w-24 h-2 bg-white/30 rounded-full overflow-hidden">

              <div className="h-full bg-secondaire animate-pulse"></div> 
              
            </div>
            <span className="text-lg font-semibold">100% Garantie</span>
          </motion.div>

          {/* Garantie 
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg shadow-md text-white"
          >
            <span className="text-lg font-semibold">100% Garantie</span>
          </motion.div>*/}

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;