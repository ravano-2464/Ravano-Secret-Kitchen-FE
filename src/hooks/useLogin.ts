import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface UseLoginReturn {
  email: string;
  password: string;
  loading: boolean;
  error: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: (e: React.FormEvent) => void;
}

export const useLogin = (): UseLoginReturn => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Email dan password harus diisi');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login gagal');
      }

      // Assuming the backend returns { token, user: { ... } } or similar
      // Adjust based on actual backend response if needed. 
      // Based on auth controller it usually returns token. 
      // I'll assume standard JWT response structure.
      login(data.token, data.user || { name: 'User', email }); 

    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat login');
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    loading,
    error,
    setEmail,
    setPassword,
    handleLogin,
  };
};
