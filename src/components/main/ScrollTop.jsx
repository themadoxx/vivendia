import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Afficher le bouton quand on descend de 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', toggleVisibility);

    // Nettoyer l'écouteur
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300 z-50 group"
          aria-label="Retourner en haut de la page"
        >
          <ArrowUp 
            className="w-6 h-6 group-hover:animate-bounce" 
            strokeWidth={2.5}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;