import React from 'react';
import './Sec-2.css';

const PartnerSection = () => {
  return (
    <section className="partner-section">
      <div className="partner-container">
        <div className="partner-header">
          <h2 className="partner-title">VOTRE PARTENAIRE POUR LA<br />DISTRIBUTION AUTOMATIQUE</h2>
          <p className="partner-description">
            Depuis plus de 25 ans, Vivendia s'efforce constamment de satisfaire les gestionnaires de la distribution automatique.
          </p>
        </div>

        <div className="partner-content">
          <div className="welcome-card">
            <div className="welcome-content">
              <h3 className="welcome-title">BIENVENUE AUX</h3>
              <h3 className="welcome-subtitle">PARTENAIRES</h3>
              <h3 className="welcome-brand">VIVENDIA</h3>
              <p className="welcome-text">
                Que vous soyez un particulier ou un professionnel, choisissez parmi plus de 450 références de marques renommées et faites-vous livrer partout en France et dans les pays frontaliers.
              </p>
              <button className="btn-boutique">
                Voir la boutique 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="product-cards">
            <div className="product-card">
              <div className="product-info">
                <h3 className="product-title">Confiseries & snacks sucrés</h3>
                <p className="product-description">Découvez notre sélection</p>
                <button className="btn-discover">
                  Découvrir 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
              <div className="product-image confiseries-image"></div>
            </div>

            <div className="product-card">
              <div className="product-info">
                <h3 className="product-title">Boissons</h3>
                <p className="product-description">Découvrez notre gamme de boissons non alcoolisées.</p>
                <button className="btn-discover je-decouvre">
                  Je découvre 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
              <div className="product-image boissons-image"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;