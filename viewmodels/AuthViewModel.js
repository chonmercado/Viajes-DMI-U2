import { useState } from 'react';
import { createAccount, signIn } from '../services/AuthService';
import User from '../models/User';

export const useAuthViewModel = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreateAccount = (email, password) => {
    setLoading(true);
    createAccount(email, password)
      .then((userCredential) => {
        const user = new User(userCredential.user.uid, userCredential.user.email, userCredential.user.nombre);
        setUser(user);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleSignIn = (email, password) => {
    setLoading(true);
    signIn(email, password)
      .then((userCredential) => {
        const user = new User(userCredential.user.uid, userCredential.user.email, userCredential.user.nombre);
        setUser(user);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return {
    user,
    error,
    loading,
    handleCreateAccount,
    handleSignIn,
  };
};
