import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo">
                    <div className="logo-main">Ruumeen <span className="logo-accent">Catering</span></div>
                    <div className="logo-sub">루민 케이터링</div>
                </Link>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
                </button>

                <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>홈</Link>
                    <Link to="/menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>메뉴</Link>
                    <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>문의하기</Link>
                    <Link to="/contact" className="btn btn-primary btn-sm" onClick={() => setIsMenuOpen(false)}>주문하기</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
