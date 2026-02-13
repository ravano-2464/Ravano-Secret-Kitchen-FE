import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, ChefHat } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export const Navbar = () => {
    const { user, logout } = useAuth();
    const [showModal, setShowModal] = useState(false);

    const userName = user?.name || 'User';

    const handleLogout = () => {
        logout();
        setShowModal(false);
    };

    return (
        <>
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
                <button className="navbar-logout" onClick={() => setShowModal(true)}>
                    <LogOut size={18} />
                    <span>Keluar</span>
                </button>
            </nav>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3 className="modal-title">Konfirmasi Logout</h3>
                        <p className="modal-message">Apakah anda yakin ingin keluar?</p>
                        <div className="modal-actions">
                            <button className="modal-btn modal-btn-cancel" onClick={() => setShowModal(false)}>
                                Batal
                            </button>
                            <button className="modal-btn modal-btn-confirm" onClick={handleLogout}>
                                Ya, Keluar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
