import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PartnersSection = () => {
    const { t } = useLanguage();
    const [hoveredPartner, setHoveredPartner] = useState(null);
    const partners = t('partners.list');

    return (
        <section id="partners" className="partners-section">
            <div className="partners-bg">
                <div className="gradient-mesh" />
                <div className="animated-circles">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="circle" style={{ '--circle-index': i }} />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="header-badge">
                        <span className="badge-icon">🤝</span>
                        <span>{t('partners.badge')}</span>
                    </div>
                    <p className="section-subtitle">
                        {t('partners.subtitle')}
                    </p>
                </div>

                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <div
                            key={partner.id}
                            className={`partner-card ${hoveredPartner === index ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredPartner(index)}
                            onMouseLeave={() => setHoveredPartner(null)}
                            style={{ '--partner-index': index }}
                        >
                            <div className="card-glow" />
                            
                            <div className="partner-logo">
                                <img 
                                    src={partner.logo} 
                                    alt={`${t('partners.logoAltPrefix')} ${partner.name}`}
                                    className="logo-image"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="logo-fallback" style={{ display: 'none' }}>
                                    <span>{partner.nameEn}</span>
                                </div>
                                <div className="logo-ring" />
                            </div>

                            <div className="partner-info">
                                <h3 className="partner-name">{partner.name}</h3>
                                {partner.nameEn && (
                                    <p className="partner-name-en">{partner.nameEn}</p>
                                )}
                                <p className="partner-description">{partner.description}</p>
                                <span className="partner-category">{partner.category}</span>
                            </div>

                            <div className="card-shine" />
                        </div>
                    ))}
                </div>

                <div className="partners-stats">
                    <div className="stat-box">
                        <div className="stat-icon">🏢</div>
                        <div className="stat-value">5+</div>
                        <div className="stat-label">{t('partners.stats.partners')}</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-icon">🌍</div>
                        <div className="stat-value">2</div>
                        <div className="stat-label">{t('partners.stats.countries')}</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-icon">📈</div>
                        <div className="stat-value">95%</div>
                        <div className="stat-label">{t('partners.stats.satisfaction')}</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .partners-section {
                    padding: 100px 0;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
                }

                .partners-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .gradient-mesh {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 30% 50%, rgba(30, 86, 49, 0.05) 0%, transparent 50%),
                                radial-gradient(circle at 70% 50%, rgba(164, 222, 2, 0.05) 0%, transparent 50%);
                }

                .animated-circles {
                    position: absolute;
                    inset: 0;
                }

                .circle {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(118, 185, 71, 0.1) 0%, transparent 70%);
                    animation: circleFloat 20s ease-in-out infinite;
                    animation-delay: calc(var(--circle-index) * -5s);
                }

                .circle:nth-child(1) { top: 10%; left: 10%; }
                .circle:nth-child(2) { top: 60%; right: 10%; }
                .circle:nth-child(3) { bottom: 10%; left: 20%; }
                .circle:nth-child(4) { top: 30%; right: 30%; }

                @keyframes circleFloat {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(30px, -30px) scale(1.1); }
                }

                .section-header {
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto 80px;
                }

                .header-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(30, 86, 49, 0.08);
                    padding: 10px 24px;
                    border-radius: 50px;
                    margin-bottom: 24px;
                    border: 1px solid rgba(30, 86, 49, 0.1);
                }

                .badge-icon {
                    font-size: 20px;
                }

                .header-badge span:last-child {
                    color: #1e5631;
                    font-weight: 600;
                    font-size: 15px;
                }

                .section-subtitle {
                    font-size: 1.2rem;
                    color: #4a5568;
                    line-height: 1.6;
                }

                .partners-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 32px;
                    margin-bottom: 80px;
                }

                .partner-card {
                    position: relative;
                    background: white;
                    border-radius: 24px;
                    padding: 40px 32px;
                    text-align: center;
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                    border: 2px solid rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    animation: cardFadeIn 0.8s ease forwards;
                    animation-delay: calc(var(--partner-index) * 0.1s);
                    opacity: 0;
                }

                @keyframes cardFadeIn {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .partner-card {
                    transform: translateY(30px);
                }

                .card-glow {
                    position: absolute;
                    inset: -20px;
                    background: linear-gradient(135deg, #1e5631, #a4de02);
                    opacity: 0;
                    filter: blur(40px);
                    transition: opacity 0.4s ease;
                }

                .partner-card:hover {
                    transform: translateY(-12px) scale(1.03);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                    border-color: #1e5631;
                }

                .partner-card:hover .card-glow {
                    opacity: 0.15;
                }

                .partner-logo {
                    position: relative;
                    width: 120px;
                    height: 120px;
                    margin: 0 auto 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f8fafc;
                    border-radius: 20px;
                    padding: 15px;
                    overflow: hidden;
                }

                .logo-image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    position: relative;
                    z-index: 2;
                    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                    filter: grayscale(0);
                }

                .partner-card:hover .logo-image {
                    transform: scale(1.1);
                }

                .logo-fallback {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    color: white;
                    font-weight: 700;
                    font-size: 0.875rem;
                    border-radius: 12px;
                    position: relative;
                    z-index: 2;
                }

                .logo-ring {
                    position: absolute;
                    inset: -10px;
                    border: 3px solid rgba(30, 86, 49, 0.2);
                    border-radius: 24px;
                    opacity: 0;
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .partner-card:hover .logo-ring {
                    opacity: 1;
                    inset: -15px;
                }

                .partner-info {
                    position: relative;
                    z-index: 1;
                }

                .partner-name {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 4px;
                    transition: color 0.3s ease;
                    line-height: 1.4;
                }

                .partner-name-en {
                    font-size: 0.875rem;
                    color: #718096;
                    font-weight: 500;
                    margin-bottom: 8px;
                    font-style: italic;
                }

                .partner-card:hover .partner-name {
                    color: #1e5631;
                }

                .partner-description {
                    color: #4a5568;
                    font-size: 0.9375rem;
                    margin-bottom: 16px;
                    line-height: 1.6;
                }

                .partner-category {
                    display: inline-block;
                    padding: 6px 16px;
                    background: rgba(30, 86, 49, 0.08);
                    color: #1e5631;
                    border-radius: 20px;
                    font-size: 0.8125rem;
                    font-weight: 600;
                }

                .card-shine {
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
                    transform: translateX(-100%) translateY(-100%) rotate(45deg);
                    transition: transform 0.8s ease;
                }

                .partner-card:hover .card-shine {
                    transform: translateX(0) translateY(0) rotate(45deg);
                }

                .partners-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 32px;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .stat-box {
                    background: linear-gradient(135deg, rgba(30, 86, 49, 0.05), rgba(164, 222, 2, 0.05));
                    padding: 32px;
                    border-radius: 20px;
                    text-align: center;
                    border: 2px solid rgba(30, 86, 49, 0.1);
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .stat-box:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
                }

                .stat-icon {
                    font-size: 48px;
                    margin-bottom: 16px;
                }

                .stat-value {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #1e5631;
                    margin-bottom: 8px;
                }

                .stat-label {
                    color: #4a5568;
                    font-size: 1rem;
                    font-weight: 500;
                }

                @media (max-width: 768px) {
                    .partners-section {
                        padding: 60px 0;
                    }

                    .section-header {
                        margin-bottom: 50px;
                    }

                    .partners-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                        margin-bottom: 60px;
                    }

                    .partner-logo {
                        width: 100px;
                        height: 100px;
                    }

                    .partner-name {
                        font-size: 1rem;
                    }

                    .partners-stats {
                        grid-template-columns: 1fr;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .partner-card,
                    .circle,
                    .logo-image {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default PartnersSection;