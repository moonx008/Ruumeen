import React from 'react';
import '../styles/ServiceCard.css';

const ServiceCard = ({ title, description, icon, image }) => {
    return (
        <div className="service-card">
            <div className="service-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="service-content">
                <div className="service-icon">{icon}</div>
                <h3 className="service-title">{title}</h3>
                <p className="service-description">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
