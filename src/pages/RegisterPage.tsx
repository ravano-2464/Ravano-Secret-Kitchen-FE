import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
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

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-logo">
                    <ChefHat size={28} />
                </div>

                <h1 className="auth-title">Rahasia Dapur</h1>
                <p className="auth-subtitle">Daftar untuk mengakses ribuan resep masakan</p>

                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleRegister} className="auth-form">
                    <div className="form-group">
                        <label className="form-label">Nama Lengkap</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Ibu Siti"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="ibu.siti@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-input"
                            placeholder="Minimal 6 karakter"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Konfirmasi Password</label>
                        <input
                            type="password"
                            className="form-input"
                            placeholder="Ulangi password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
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
