import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const EnhancedServices = () => {
    const { t } = useLanguage();
    const [hoveredCard, setHoveredCard] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const services = [
        { 
            id: 'home-service',
            route: '/service/home',
            icon: '🏠',
            title: t('services.homeService.title'),
            description: t('services.homeService.description'),
            color: '#1e5631',
            gradient: 'linear-gradient(135deg, #1e5631 0%, #2a7d46 100%)',
            feature1: t('services.homeService.feature1'),
            feature2: t('services.homeService.feature2')
        },
        { 
            id: 'general-service',
            route: '/service/general',
            icon: '🚚',
            title: t('services.generalService.title'),
            description: t('services.generalService.description'),
            color: '#2a7d46',
            gradient: 'linear-gradient(135deg, #2a7d46 0%, #76b947 100%)',
            feature1: t('services.generalService.feature1'),
            feature2: t('services.generalService.feature2')
        },
        { 
            id: 'transport-service',
            route: '/service/transport',
            icon: '📦',
            title: t('services.transportService.title'),
            description: t('services.transportService.description'),
            color: '#76b947',
            gradient: 'linear-gradient(135deg, #76b947 0%, #a4de02 100%)',
            feature1: t('services.transportService.feature1'),
            feature2: t('services.transportService.feature2')
        },
        { 
            id: 'pickup-service',
            route: '/service/pickup',
            icon: '🚗',
            title: t('services.pickupService.title'),
            description: t('services.pickupService.description'),
            color: '#a4de02',
            gradient: 'linear-gradient(135deg, #a4de02 0%, #c8f442 100%)',
            feature1: t('services.pickupService.feature1'),
            feature2: t('services.pickupService.feature2')
        }
    ];

    const handleMouseMove = (e, index) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
        setHoveredCard(index);
    };

    return (
        <section id="services" className="services-section">
            <div className="services-bg">
                <div className="bg-shapes">
                    <div className="shape shape-1" />
                    <div className="shape shape-2" />
                    <div className="shape shape-3" />
                </div>
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="header-badge">
                        <span className="badge-dot" />
                        <span>{t('services.badge')}</span>
                    </div>
                    <p className="section-subtitle">
                        {t('services.subtitle')}
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Link
                            key={service.id}
                            to={service.route}
                            className={`service-card ${hoveredCard === index ? 'hovered' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style={{
                                '--service-color': service.color,
                                '--mouse-x': `${mousePos.x}%`,
                                '--mouse-y': `${mousePos.y}%`,
                                '--card-index': index
                            }}
                        >
                            <div className="card-glow" />
                            <div className="card-border" />
                            
                            <div className="card-content">
                                <div className="service-icon-wrapper">
                                    <div className="icon-bg" style={{ background: service.gradient }} />
                                    <div className="service-icon">{service.icon}</div>
                                    <div className="icon-particles">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="icon-particle" style={{ '--p-index': i }} />
                                        ))}
                                    </div>
                                </div>

                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>

                                <div className="service-features">
                                    <div className="feature">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                        <span>{service.feature1}</span>
                                    </div>
                                    <div className="feature">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                        <span>{service.feature2}</span>
                                    </div>
                                </div>

                                <button className="service-btn">
                                    <span>{t('services.learnMore')}</span>
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .services-section {
                    padding: 100px 0;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                }

                .services-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .bg-shapes {
                    position: absolute;
                    inset: 0;
                }

                .shape {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(60px);
                    opacity: 0.1;
                    animation: shapeFloat 20s ease-in-out infinite;
                }

                .shape-1 {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, #1e5631 0%, transparent 70%);
                    top: -200px;
                    right: -200px;
                    animation-delay: 0s;
                }

                .shape-2 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, #a4de02 0%, transparent 70%);
                    bottom: -150px;
                    left: -150px;
                    animation-delay: -7s;
                }

                .shape-3 {
                    width: 350px;
                    height: 350px;
                    background: radial-gradient(circle, #76b947 0%, transparent 70%);
                    top: 50%;
                    left: 50%;
                    animation-delay: -14s;
                }

                @keyframes shapeFloat {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    33% { transform: translate(30px, -30px) rotate(120deg); }
                    66% { transform: translate(-30px, 30px) rotate(240deg); }
                }

                .section-header {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 80px;
                }

                .header-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(30, 86, 49, 0.08);
                    padding: 8px 20px;
                    border-radius: 50px;
                    margin-bottom: 24px;
                    border: 1px solid rgba(30, 86, 49, 0.1);
                }

                .badge-dot {
                    width: 8px;
                    height: 8px;
                    background: #a4de02;
                    border-radius: 50%;
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.7; }
                }

                .header-badge span:last-child {
                    color: #1e5631;
                    font-weight: 600;
                    font-size: 14px;
                }

                .section-subtitle {
                    font-size: 1.2rem;
                    color: #4a5568;
                    line-height: 1.6;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 32px;
                    position: relative;
                }

                .service-card {
                    position: relative;
                    background: white;
                    border-radius: 24px;
                    padding: 40px;
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                    cursor: pointer;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(30px);
                    animation: cardReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                    animation-delay: calc(var(--card-index) * 0.1s);
                    text-decoration: none;
                    display: block;
                }

                @keyframes cardReveal {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .card-glow {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(
                        circle at var(--mouse-x) var(--mouse-y),
                        var(--service-color) 0%,
                        transparent 60%
                    );
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                }

                .service-card.hovered .card-glow {
                    opacity: 0.12;
                }

                .card-border {
                    position: absolute;
                    inset: 0;
                    border-radius: 24px;
                    padding: 2px;
                    background: linear-gradient(135deg, var(--service-color), transparent);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .service-card.hovered .card-border {
                    opacity: 1;
                }

                .service-card:hover {
                    transform: translateY(-12px) scale(1.02);
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
                }

                .card-content {
                    position: relative;
                    z-index: 1;
                }

                .service-icon-wrapper {
                    position: relative;
                    width: 90px;
                    height: 90px;
                    margin-bottom: 28px;
                }

                .icon-bg {
                    position: absolute;
                    inset: 0;
                    border-radius: 20px;
                    opacity: 0.15;
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .service-card:hover .icon-bg {
                    transform: rotate(10deg) scale(1.1);
                    opacity: 0.25;
                }

                .service-icon {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 48px;
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .service-card:hover .service-icon {
                    transform: scale(1.15) rotate(-5deg);
                }

                .icon-particles {
                    position: absolute;
                    inset: 0;
                }

                .icon-particle {
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: var(--service-color);
                    border-radius: 50%;
                    opacity: 0;
                    transition: all 0.6s ease;
                }

                .service-card:hover .icon-particle {
                    opacity: 0.6;
                    animation: particleSpread 1s ease-out forwards;
                    animation-delay: calc(var(--p-index) * 0.1s);
                }

                @keyframes particleSpread {
                    0% {
                        transform: translate(0, 0) scale(0);
                    }
                    100% {
                        transform: translate(
                            calc(cos(calc(var(--p-index) * 60deg)) * 50px),
                            calc(sin(calc(var(--p-index) * 60deg)) * 50px)
                        ) scale(1);
                        opacity: 0;
                    }
                }

                .service-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 12px;
                    transition: color 0.3s ease;
                }

                .service-card:hover .service-title {
                    color: var(--service-color);
                }

                .service-description {
                    color: #4a5568;
                    line-height: 1.7;
                    margin-bottom: 24px;
                    font-size: 15px;
                }

                .service-features {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 28px;
                }

                .feature {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #2a7d46;
                    font-size: 14px;
                    font-weight: 500;
                }

                .feature svg {
                    width: 18px;
                    height: 18px;
                    flex-shrink: 0;
                }

                .service-btn {
                    width: 100%;
                    padding: 16px 24px;
                    background: var(--service-color);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-size: 15px;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    position: relative;
                    overflow: hidden;
                }

                .service-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transform: translateX(-100%);
                    transition: transform 0.6s ease;
                }

                .service-btn:hover::before {
                    transform: translateX(100%);
                }

                .service-btn svg {
                    width: 20px;
                    height: 20px;
                    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .service-btn:hover {
                    transform: translateX(4px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                }

                .service-btn:hover svg {
                    transform: translateX(4px);
                }

                .card-number {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    font-size: 80px;
                    font-weight: 900;
                    color: rgba(0, 0, 0, 0.03);
                    line-height: 1;
                    transition: all 0.4s ease;
                    pointer-events: none;
                }

                .service-card:hover .card-number {
                    color: rgba(0, 0, 0, 0.06);
                    transform: scale(1.1);
                }

                @media (max-width: 768px) {
                    .services-section {
                        padding: 60px 0;
                    }

                    .section-header {
                        margin-bottom: 50px;
                    }

                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .service-card {
                        padding: 32px;
                    }

                    .card-number {
                        font-size: 60px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .service-card,
                    .service-icon,
                    .service-btn {
                        transition: none;
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default EnhancedServices;