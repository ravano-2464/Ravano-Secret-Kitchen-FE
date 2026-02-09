import { Link, useNavigate } from 'react-router-dom';
import { LogOut, ChefHat } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
    const navigate = useNavigate();

    // Get user name from localStorage (set during login)
    const userName = localStorage.getItem('userName') || 'User';

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <div className="navbar-logo">
                    <ChefHat size={24} />
                </div>
                <div className="navbar-text">
                    <span className="navbar-title">Rahasia Dapur</span>
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
