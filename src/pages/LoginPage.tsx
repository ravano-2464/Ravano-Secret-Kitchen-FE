import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import { useLogin } from '../hooks/useLogin';
import './LoginPage.css';

export const LoginPage = () => {
    const {
        email,
        password,
        loading,
        error,
        setEmail,
        setPassword,
        handleLogin,
    } = useLogin();

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-logo">
                    <ChefHat size={28} />
                </div>

                <h1 className="auth-title">Selamat Datang</h1>
                <p className="auth-subtitle">Login untuk melanjutkan ke Ravano Secret Kitchen</p>

                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleLogin} className="auth-form">
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
                            placeholder="Masukkan password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="auth-button" disabled={loading}>
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>

                <p className="auth-footer">
                    Belum punya akun? <Link to="/register">Daftar di sini</Link>
                </p>
            </div>
        </div>
    );
};
