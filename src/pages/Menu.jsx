import React from 'react';
import '../styles/Menu.css';
import gambasImg from '../assets/menu-gambas.jpg';
import salmonImg from '../assets/menu-salmon.jpg';
import beefImg from '../assets/beef.jpg';
import prawnImg from '../assets/prawn.jfif';
import fruitImg from '../assets/menu-fruit.jpg';
import fingerfoodImg from '../assets/menu-fingerfood1.jpg';

const Menu = () => {
    const menuItems = [
        {
            category: "시그니처 박스",
            items: [
                { name: "문어 새우 감바스", price: "변동", desc: "신선한 문어와 새우, 바게트가 어우러진 스페인식 요리", image: gambasImg },
                { name: "연어 스테이크", price: "변동", desc: "상큼한 레몬 크림 소스를 곁들인 부드러운 연어 스테이크", image: salmonImg },
                { name: "비프 부르기뇽", price: "변동", desc: "부드러운 매쉬드 포테이토를 곁들인 프랑스식 소고기 스튜", image: beefImg }
            ]
        },
        {
            category: "파티 & 핑거푸드",
            items: [
                { name: "날치알 왕새우 구이", price: "변동", desc: "톡톡 터지는 날치알과 고소한 왕새우의 조화", image: prawnImg },
                { name: "계절 과일 컵", price: "변동", desc: "먹기 편하게 손질된 신선한 제철 과일", image: fruitImg },
                { name: "3종 꼬치", price: "변동", desc: "토마토-치즈-소세지 꼬치의 삼단 콜라보", image: fingerfoodImg }
            ]
        }
    ];

    return (
        <div className="menu-page section">
            <div className="container">
                <div className="text-center mb-lg">
                    <h1>메뉴 소개</h1>
                    <p className="section-subtitle">루민쿠킹스튜디오의 정성스러운 메뉴</p>
                </div>

                {menuItems.map((section, idx) => (
                    <div key={idx} className="menu-section">
                        <h2 className="menu-category-title">{section.category}</h2>
                        <div className="menu-grid">
                            {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="menu-item">
                                    <div className="menu-item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                    <div className="menu-item-content">
                                        <div className="menu-item-header">
                                            <h3 className="menu-item-name">{item.name}</h3>
                                            <span className="menu-item-price">{item.price}</span>
                                        </div>
                                        <p className="menu-item-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
