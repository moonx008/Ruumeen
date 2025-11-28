import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import mainBg from '../assets/main-bg1.jpg';
import boxImg from '../assets/box-main.jfif';
import weddingImg from '../assets/wedding-main.jpg';
import beefImg from '../assets/beef.jpg';
import salmonImg from '../assets/menu-salmon.jpg';

const Hero = () => {
    const images = [mainBg, boxImg, weddingImg, beefImg, salmonImg];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="hero">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`hero-background ${index === currentIndex ? 'active' : ''}`}
                    style={{
                        backgroundImage: `url(${img})`,
                        filter: 'brightness(1.3)'
                    }}
                ></div>
            ))}
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">맛있는 순간,<br />당신에게 배달됩니다</h1>
                <p className="hero-subtitle">기업 행사, 웨딩, 그리고 매일의 식사를 위한 프리미엄 케이터링 및 도시락 서비스.</p>
                <div className="hero-actions">
                    <Link to="/menu" className="btn btn-primary">메뉴 보기</Link>
                    <Link to="/contact" className="btn btn-outline hero-btn-outline">견적 문의</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
