import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import '../styles/Home.css';
import boxImg from '../assets/box-main.jfif';
import weddingImg from '../assets/wedding-main.jpg';
import specialImg from '../assets/special-box.jpg';

const Home = () => {
    const services = [
        {
            title: "박스 케이터링",
            description: "기업 행사, 세미나, 회의를 위한 프리미엄 박스 케이터링 서비스.",
            image: boxImg,
            icon: "🎁"
        },
        {
            title: "VIP & 웨딩",
            description: "돌잔치, 웨딩, VIP 행사를 위한 고품격 맞춤 메뉴.",
            image: weddingImg,
            icon: "✨"
        },
        {
            title: "수제 도시락",
            description: "영재교육원, 연예인 서포트 등 정성 가득한 수제 도시락.",
            image: specialImg,
            icon: "🍱"
        }
    ];

    return (
        <div className="home-page">
            <Hero />

            <section className="section services-section">
                <div className="container">
                    <div className="text-center mb-lg">
                        <h2>Ruumeen Cooking Studio</h2>
                        <p className="section-subtitle">특별한 날을 더욱 빛내줄 프리미엄 케이터링</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section about-section">
                <div className="container about-content">
                    <div className="about-text">
                        <h2>왜 Ruumeen인가요?</h2>
                        <p>루민쿠킹스튜디오는 단순한 식사가 아닌 감동을 전합니다. 계절 과일과 신선한 재료를 아낌없이 담아, 드시는 분의 건강과 입맛을 모두 생각합니다.</p>
                        <ul className="feature-list">
                            <li>✅ 맞춤형 박스 케이터링 전문</li>
                            <li>✅ 신선한 제철 과일 및 재료 사용</li>
                            <li>✅ 기업 행사 및 프라이빗 파티 최적화</li>
                        </ul>
                    </div>
                    <div className="about-image">
                        <img src="https://postfiles.pstatic.net/MjAyMzAyMTZfMjgz/MDAxNjc2NTI4NTg0Njcy.u0kWGTogmExaH_tt1owRNVXR7uImWsEBVlw91ocsYKAg.MYwPaOySQa8Vn9k-u5IFgszDaWCTIBhLBPQsDQoTFUYg.JPEG.jungeunsuh33/IMG_20230216_112750_063.jpg?type=w773" alt="Ruumeen Catering" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
