import { Link, useNavigate } from 'react-router-dom';
import { LogOut, ChefHat } from 'lucide-react';
import './Header.css';

export const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    return (
        <header className="header">
            <Link to="/" className="header-brand">
                <div className="header-logo">
                    <ChefHat size={24} />
                </div>
                <div className="header-text">
                    <span className="header-title">Rahasia Dapur</span>
                    <span className="header-subtitle">Selamat datang</span>
                </div>
            </Link>
            <button className="header-logout" onClick={handleLogout}>
                <LogOut size={18} />
                <span>Keluar</span>
            </button>
        </header>
    );
};
