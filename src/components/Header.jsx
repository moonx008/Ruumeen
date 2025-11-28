import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isEnglish, setIsEnglish] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsEnglish(prev => !prev);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo">
                    {isEnglish ? (
                        <>Ruumeen <span className="logo-accent">Catering</span></>
                    ) : (
                        <>루민 <span className="logo-accent">케이터링</span></>
                    )}
                </Link>
                <nav className="nav">
                    <Link to="/" className="nav-link">홈</Link>
                    <Link to="/menu" className="nav-link">메뉴</Link>
                    <Link to="/contact" className="nav-link">문의하기</Link>
                    <Link to="/contact" className="btn btn-primary btn-sm">주문하기</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
