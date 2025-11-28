import React from 'react';
import '../styles/Home.css'; // Reusing home styles for consistency

const Portfolio = () => {
    return (
        <div className="section">
            <div className="container text-center">
                <h1>포트폴리오</h1>
                <p className="section-subtitle">루민 케이터링의 다양한 행사 현장을 소개합니다.</p>

                <div style={{ padding: '4rem 0', color: 'var(--color-text-light)' }}>
                    <p>준비 중입니다. 곧 업데이트될 예정입니다.</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
