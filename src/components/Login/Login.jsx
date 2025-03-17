import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Pour React Router
// Pour Next.js, utilisez plutôt:
// import Link from 'next/link';
// import { useRouter } from 'next/router';

const SupplierLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  // Pour React Router
  const navigate = useNavigate();
  // Pour Next.js, utilisez:
  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      // Simuler une API request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Logique de validation à implémenter avec votre API
      if (email === 'demo@vivendia.com' && password === 'password') {
        setSuccess(true);
        
        // Redirection avec React Router après 1 seconde
        setTimeout(() => {
          navigate('/fournisseur/dashboard');
          // Pour Next.js, utilisez:
          // router.push('/fournisseur/dashboard');
        }, 1000);
      } else {
        setError('Identifiants incorrects. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center"> {/* Pour React Router */}
        {/* Pour Next.js: <Link href="/" className="flex justify-center"> */}
          <img
            className="h-12 w-auto"
            src="/vivendia-logo.svg"
            alt="Vivendia"
          />
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Espace Fournisseurs
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Accédez à votre portail fournisseur Vivendia
        </p>
      </div>

      <motion.div 
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {success ? (
            <motion.div 
              className="rounded-md bg-green-50 p-4 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Connexion réussie! Redirection en cours...
                  </p>
                </div>
              </div>
            </motion.div>
          ) : error ? (
            <motion.div 
              className="rounded-md bg-red-50 p-4 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">
                    {error}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : null}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C4392D] focus:border-[#C4392D] sm:text-sm"
                  placeholder="exemple@entreprise.com"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C4392D] focus:border-[#C4392D] sm:text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-[#C4392D] focus:ring-[#C4392D] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <Link to="/reset-password" className="font-medium text-[#C4392D] hover:text-[#a52e23]">
                {/* Pour Next.js: <Link href="/reset-password" className="font-medium text-[#C4392D] hover:text-[#a52e23]"> */}
                  Mot de passe oublié?
                </Link>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#C4392D] hover:bg-[#a52e23] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C4392D] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    Se connecter <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </motion.div>
          </form>

          <motion.div variants={itemVariants} className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Vous n'avez pas de compte?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/fournisseur/inscription"
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C4392D]"
              >
              {/* Pour Next.js: <Link href="/fournisseur/inscription" className="..."> */}
                Demander un accès fournisseur
              </Link>
            </div>
          </motion.div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Vivendia. Tous droits réservés.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SupplierLogin;