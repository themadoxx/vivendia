import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import SupplierLogin from './components/Login/Login';
import ScrollToTop from './components/main/ScrollTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <HashRouter>
          <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/fournisseur/login" element={<SupplierLogin />} />
          {/* Ajoutez d'autres routes au besoin */}
          <Route path="/fournisseur/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/fournisseur/inscription" element={<div>Inscription Page </div>} />
          <Route path="/reset-password" element={<div>Reset Password Page</div>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;