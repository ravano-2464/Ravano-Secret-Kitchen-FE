import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseRegisterReturn {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  loading: boolean;
  error: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  handleRegister: (e: React.FormEvent) => void;
}

export const useRegister = (): UseRegisterReturn => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Semua field harus diisi');
      return;
    }

    if (password.length < 6) {
      setError('Password minimal 6 karakter');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password tidak cocok');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 1000);
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    loading,
    error,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleRegister,
  };
};
