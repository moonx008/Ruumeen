import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3 className="footer-logo">Ruumeen <span className="logo-accent">Catering</span></h3>
                    <p>건강한 라이프스타일을 위한 프리미엄 케이터링 및 도시락 서비스.</p>
                </div>
                <div className="footer-section">
                    <h4>문의하기</h4>
                    <p>경기도 고양시 덕양구 원흥동 645-5</p>
                    <p>0507-1356-8447</p>
                    <p>jungeunsuh33@naver.com</p>
                </div>
                <div className="footer-section">
                    <h4>운영 시간</h4>
                    <p>월 - 금: 9:00 AM - 6:00 PM</p>
                    <p>토: 10:00 AM - 4:00 PM</p>
                    <p>일: 휴무</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Ruumeen Catering. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
