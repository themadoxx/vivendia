import React from 'react';
import '../App.css';
import Navbar from '../components/utils/navbar';
import HeroBanner from '../components/Landing/Hero';
import PartnerSection from '../components/Landing/Sec-2';
import PromoLivraison from '../components/Landing/PromoLivraison';
import ServicesSection from '../components/Landing/Sec-4';
import VivendiaComponent from '../components/Landing/Sec-5';
import ProductCatalogue from '../components/Landing/Sec-6';
import BestSellersSection from '../components/Landing/Sec-7';
import PassionEngagementSection from '../components/Landing/Sec-8';
import VivendiaBlogSection from '../components/Landing/Sec-9';
import ContactFormSection from '../components/Landing/Sec-10';
import Footer from '../components/utils/Footer';

function Landing() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <PartnerSection />
      <ProductCatalogue />
      <BestSellersSection />

      <PromoLivraison />
      <ServicesSection />
      <VivendiaComponent />
    
      <PassionEngagementSection />
      <VivendiaBlogSection />
      <ContactFormSection />
      <Footer />
      
    </div>
  );
}

export default Landing;