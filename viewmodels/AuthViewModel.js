import { useState } from 'react';
import { createAccount, signIn } from '../services/AuthService';
import { ErrorMessages } from '../models/ErrorMessages';

export const useAuthViewModel = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreateAccount = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createAccount(email, password);
      const user = userCredential.user;
      setUser(user);
      setLoading(false);
      return true;
    } catch (err) {
      const errorMessage = ErrorMessages[err.code] || err.message;
      setError(errorMessage);
      setLoading(false);
      return false;
    }
  };

  const handleSignIn = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signIn(email, password); 
      const user = userCredential.user;
      setUser(user);
      setLoading(false);
      return true;
    } catch (err) {
      const errorMessage = ErrorMessages[err.code] || err.message;
      setError(errorMessage);
      setLoading(false);
      return false;
    }
  };
  

  return {
    user,
    error,
    loading,
    handleCreateAccount,
    handleSignIn,
  };
};
