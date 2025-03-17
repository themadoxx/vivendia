import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';

const PasswordForgot = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [step, setStep] = useState('email'); // 'email', 'check-email', 'reset', 'success'
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resetToken, setResetToken] = useState('');

  // Fonction pour soumettre le formulaire d'email
  const onSubmitEmail = async (data) => {
    setIsLoading(true);
    try {
      // Simuler un appel API pour demander la réinitialisation du mot de passe
      // Remplacer par votre appel API réel
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setEmail(data.email);
      setStep('check-email');
    } catch (error) {
      console.error('Erreur lors de la demande de réinitialisation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour vérifier le code envoyé par email
  const onSubmitCode = async (data) => {
    setIsLoading(true);
    try {
      // Simuler un appel API pour vérifier le code
      // Remplacer par votre appel API réel
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setResetToken(data.code);
      setStep('reset');
    } catch (error) {
      console.error('Erreur lors de la vérification du code:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour réinitialiser le mot de passe
  const onSubmitReset = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    
    setIsLoading(true);
    try {
      // Simuler un appel API pour changer le mot de passe
      // Remplacer par votre appel API réel avec le token et le nouveau mot de passe
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStep('success');
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Composant pour l'étape de demande d'email
  const EmailForm = () => (
    <form onSubmit={handleSubmit(onSubmitEmail)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Adresse e-mail
        </label>
        <input
          id="email"
          type="email"
          {...register('email', { 
            required: 'L\'adresse e-mail est requise', 
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Adresse e-mail invalide'
            }
          })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="exemple@domaine.com"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col space-y-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex justify-center items-center transition-colors"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Envoi en cours...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="w-4 h-4 mr-2" />
              Envoyer les instructions
            </span>
          )}
        </button>
        
        <Link to="/fournisseur/login" className="flex items-center justify-center text-sm text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Retour à la connexion
        </Link>
      </div>
    </form>
  );

  // Composant pour l'étape de vérification de l'email
  const CheckEmailForm = () => (
    <form onSubmit={handleSubmit(onSubmitCode)} className="space-y-6">
      <div className="text-center mb-6">
        <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
          <Send className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">Vérifiez votre e-mail</h3>
        <p className="text-sm text-gray-600 mt-1">
          Nous avons envoyé un code de vérification à <span className="font-medium">{email}</span>
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="code" className="block text-sm font-medium text-gray-700">
          Code de vérification
        </label>
        <input
          id="code"
          type="text"
          {...register('code', { 
            required: 'Le code de vérification est requis',
            minLength: { value: 6, message: 'Le code doit contenir au moins 6 caractères' }
          })}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Entrez le code à 6 chiffres"
        />
        {errors.code && (
          <p className="text-red-600 text-sm">{errors.code.message}</p>
        )}
      </div>

      <div className="flex flex-col space-y-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex justify-center items-center transition-colors"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Vérification...
            </span>
          ) : (
            <span>Vérifier le code</span>
          )}
        </button>
        
        <div className="flex justify-between items-center text-sm">
          <button 
            type="button" 
            onClick={() => setStep('email')}
            className="text-blue-600 hover:text-blue-800"
          >
            Utiliser une autre adresse e-mail
          </button>
          
          <button 
            type="button"
            className="text-blue-600 hover:text-blue-800"
            onClick={() => onSubmitEmail({ email })}
          >
            Renvoyer le code
          </button>
        </div>
      </div>
    </form>
  );

  // Composant pour l'étape de réinitialisation du mot de passe
  const ResetPasswordForm = () => (
    <form onSubmit={handleSubmit(onSubmitReset)} className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-medium text-gray-900">Créer un nouveau mot de passe</h3>
        <p className="text-sm text-gray-600 mt-1">
          Votre nouveau mot de passe doit être différent des précédents
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Nouveau mot de passe
          </label>
          <input
            id="password"
            type="password"
            {...register('password', { 
              required: 'Le mot de passe est requis',
              minLength: { value: 8, message: 'Le mot de passe doit contenir au moins 8 caractères' }
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirmer le mot de passe
          </label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', { 
              required: 'Veuillez confirmer votre mot de passe',
              validate: value => value === document.getElementById('password').value || 'Les mots de passe ne correspondent pas'
            })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex justify-center items-center transition-colors"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Réinitialisation...
            </span>
          ) : (
            <span>Réinitialiser le mot de passe</span>
          )}
        </button>
      </div>
    </form>
  );

  // Composant pour l'étape de succès
  const SuccessMessage = () => (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900">Mot de passe réinitialisé</h3>
        <p className="text-sm text-gray-600">
          Votre mot de passe a été réinitialisé avec succès. Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.
        </p>
      </div>
      
      <Link 
        to="/fournisseur/login"
        className="inline-block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-center transition-colors"
      >
        Se connecter
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img 
          src={`${process.env.PUBLIC_URL}/vivendia-logo.svg`}
          alt="Vivendia" 
          className="mx-auto h-12 w-auto"
        />
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          {step === 'email' && "Réinitialiser votre mot de passe"}
          {step === 'check-email' && "Vérification de sécurité"}
          {step === 'reset' && "Nouveau mot de passe"}
          {step === 'success' && "Réinitialisation réussie"}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {step === 'email' && <EmailForm />}
          {step === 'check-email' && <CheckEmailForm />}
          {step === 'reset' && <ResetPasswordForm />}
          {step === 'success' &&