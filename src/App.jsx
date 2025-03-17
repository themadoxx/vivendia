import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import SupplierLogin from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<SupplierLogin />} />
          {/* Ajoutez d'autres routes au besoin */}
          <Route path="/fournisseur/dashboard" element={<div>Dashboard Page (À créer)</div>} />
          <Route path="/fournisseur/inscription" element={<div>Inscription Page (À créer)</div>} />
          <Route path="/reset-password" element={<div>Reset Password Page (À créer)</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;