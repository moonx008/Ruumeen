import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('문의가 접수되었습니다! 곧 연락드리겠습니다.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="contact-page section">
            <div className="container">
                <div className="text-center mb-lg">
                    <h1>문의하기</h1>
                    <p className="section-subtitle">케이터링 관련 문의사항을 남겨주세요</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>오시는 길</h3>
                            <p>경기도 고양시 덕양구 원흥동 645-5</p>
                        </div>
                        <div className="info-card">
                            <h3>전화 문의</h3>
                            <p>0507-1356-8447</p>
                            <p>월-금, 오전 9시 - 오후 6시</p>
                        </div>
                        <div className="info-card">
                            <h3>이메일 문의</h3>
                            <p>jungeunsuh33@naver.com</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">이메일</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">연락처</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">문의 내용 / 케이터링 세부사항</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">메시지 보내기</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
