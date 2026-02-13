import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Eye, EyeOff } from 'lucide-react';
import { useRegister } from '../hooks/useRegister';
import './LoginPage.css';

export const RegisterPage = () => {
    const {
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
    } = useRegister();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-logo">
                    <ChefHat size={28} />
                </div>

                <h1 className="auth-title">Ravano Secret Kitchen</h1>
                <p className="auth-subtitle">Daftar untuk mengakses ribuan resep masakan</p>

                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleRegister} className="auth-form">
                    <div className="form-group">
                        <label className="form-label">Nama Lengkap</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Masukkan nama lengkap anda"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="Masukkan email anda"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <div className="password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-input"
                                placeholder="Minimal 6 karakter"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Konfirmasi Password</label>
                        <div className="password-wrapper">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                className="form-input"
                                placeholder="Ulangi password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="auth-button" disabled={loading}>
                        {loading ? 'Loading...' : 'Daftar'}
                    </button>
                </form>

                <p className="auth-footer">
                    Sudah punya akun? <Link to="/login">Login di sini</Link>
                </p>
            </div>
        </div>
    );
};
