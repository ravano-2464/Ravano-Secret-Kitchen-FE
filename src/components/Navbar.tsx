import { Link } from 'react-router-dom';
import { LogOut, ChefHat } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export const Navbar = () => {
    const { user, logout } = useAuth();

    const userName = user?.name || 'User';

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <div className="navbar-logo">
                    <ChefHat size={24} />
                </div>
                <div className="navbar-text">
                    <span className="navbar-title">Ravano Secret Kitchen</span>
                    <span className="navbar-subtitle">Selamat datang, <strong>{userName}</strong></span>
                </div>
            </Link>
            <button className="navbar-logout" onClick={handleLogout}>
                <LogOut size={18} />
                <span>Keluar</span>
            </button>
        </nav>
    );
};
