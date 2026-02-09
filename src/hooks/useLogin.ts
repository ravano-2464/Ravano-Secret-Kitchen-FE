import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Email dan password harus diisi');
      return;
    }

    setLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('isLoggedIn', 'true');
      // Extract name from email (before @) for display
      const userName = email.split('@')[0];
      localStorage.setItem('userName', userName);
      navigate('/');
    }, 1000);
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
