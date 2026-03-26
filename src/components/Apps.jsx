import React, { useState } from 'react';
import ahlanBikumIcon from '../assets/logo_vertical.png'; 
import nashmiIcon from '../assets/logo.nashmi.png';
import { useLanguage } from '../context/LanguageContext';

const EnhancedApps = () => {
    const { t } = useLanguage();
    const [activeApp, setActiveApp] = useState(0);

const apps = [
        {
            id: 'ahlan-bikum',
            name: t('apps.ahlanBikum.name'),
            tagline: t('apps.ahlanBikum.tagline'),
            description: t('apps.ahlanBikum.description'),
            icon: ahlanBikumIcon,
            alt: t('apps.ahlanBikum.name'),
            color: '#1e5631',
            gradient: 'linear-gradient(135deg, #1e5631 0%, #2a7d46 100%)',
            features: [
                t('apps.ahlanBikum.features.tracking'),
                t('apps.ahlanBikum.features.payment'),
                t('apps.ahlanBikum.features.rating'),
                t('apps.ahlanBikum.features.support')
            ],
            stats: [
                { value: t('apps.ahlanBikum.stats.downloads'), label: t('apps.ahlanBikum.stats.downloadsLabel') },
                { value: t('apps.ahlanBikum.stats.rating'), label: t('apps.ahlanBikum.stats.ratingLabel') },
                { value: t('apps.ahlanBikum.stats.users'), label: t('apps.ahlanBikum.stats.usersLabel') }
            ],
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pickum.delivery'
        },
        {
            id: 'nashmi',
            name: t('apps.nashmi.name'),
            tagline: t('apps.nashmi.tagline'),
            description: t('apps.nashmi.description'),
            icon: nashmiIcon,
            alt: t('apps.nashmi.name'),
            color: '#76b947',
            gradient: 'linear-gradient(135deg, #76b947 0%, #a4de02 100%)',
            features: [
                t('apps.nashmi.features.management'),
                t('apps.nashmi.features.analytics'),
                t('apps.nashmi.features.rewards'),
                t('apps.nashmi.features.communication')
            ],
            stats: [
                { value: t('apps.nashmi.stats.drivers'), label: t('apps.nashmi.stats.driversLabel') },
                { value: t('apps.nashmi.stats.rating'), label: t('apps.nashmi.stats.ratingLabel') },
                { value: t('apps.nashmi.stats.downloads'), label: t('apps.nashmi.stats.downloadsLabel') }
            ],
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pickum.nashmi'
        }
    ];

    // دالة مساعدة لعرض الأيقونة كصورة (هذا الجزء كان صحيحًا)
    const renderIcon = (app) => (
        <img src={app.icon} alt={app.alt} className="app-icon-image" />
    );

   return (
        <section id="apps" className="apps-section">
            <div className="apps-bg">
                <div className="grid-pattern" />
                <div className="gradient-orb orb-1" />
                <div className="gradient-orb orb-2" />
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="header-badge">
                        <span className="badge-icon">📱</span>
                        <span>{t('apps.badge')}</span>
                    </div>
                    
                    <p className="section-subtitle">
                        {t('apps.subtitle')}
                    </p>
                </div>

                <div className="apps-container">
                    <div className="apps-tabs">
                        {apps.map((app, index) => (
                            <button
                                key={app.id}
                                className={`tab-btn ${activeApp === index ? 'active' : ''}`}
                                onClick={() => setActiveApp(index)}
                            >
                                <span className="tab-icon">
                                    {renderIcon(app)}
                                </span>
                                <span className="tab-name">{app.name}</span>
                            </button>
                        ))}
                    </div>

                    <div className="app-showcase">
                        {apps.map((app, index) => (
                            <div
                                key={app.id}
                                className={`app-card ${activeApp === index ? 'active' : ''}`}
                            >
                                <div className="app-visual">
                                    <div className="phone-mockup">
                                        <div className="phone-frame">
                                            <div className="phone-notch" />
                                            <div className="phone-screen">
                                                <div className="app-preview">
                                                    <div className="preview-header">
                                                        <div className="preview-icon">
                                                            {renderIcon(app)}
                                                        </div>
                                                        <div className="preview-text">
                                                            <div className="preview-title">{app.name}</div>
                                                            <div className="preview-subtitle">{app.tagline}</div>
                                                        </div>
                                                    </div>
                                                    <div className="preview-content">
                                                        {[...Array(3)].map((_, i) => (
                                                            <div key={i} className="preview-item" style={{ '--item-index': i }}>
                                                                <div className="item-icon" />
                                                                <div className="item-text">
                                                                    <div className="item-title" />
                                                                    <div className="item-subtitle" />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="phone-shadow" />
                                    </div>

                                    <div className="floating-icons">
                                        {['⭐', '🚀', '💎', '🎯'].map((emoji, i) => (
                                            <div key={i} className="floating-icon" style={{ '--icon-index': i }}>
                                                {emoji}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="app-details">
                                    <div className="app-header">
                                        <div className="app-icon-large">
                                            <div className="icon-bg" style={{ background: app.gradient }} />
                                            <span className="icon-emoji">
                                                {renderIcon(app)}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="app-name">{app.name}</h3>
                                            <p className="app-tagline">{app.tagline}</p>
                                        </div>
                                    </div>

                                    <p className="app-description">{app.description}</p>

                                    <div className="app-stats">
                                        {app.stats.map((stat, i) => (
                                            <div key={i} className="stat-item">
                                                <div className="stat-value">{stat.value}</div>
                                                <div className="stat-label">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="app-features">
                                        <h4>{t('apps.featuresTitle')}</h4>
                                        <ul className="features-list">
                                            {app.features.map((feature, i) => (
                                                <li key={i} className="feature-item">
                                                    <svg viewBox="0 0 24 24" fill="none">
                                                        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
                                                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="download-btn">
                                        <div className="btn-icon">
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zM16.81 15.12l-3.12-3.12 3.12-3.12 2.24 1.3c.48.28.77.8.77 1.32s-.29 1.04-.77 1.32l-2.24 1.3zm-10.79 6.37L17.83 12 6.02 2.51v18.98zM13.69 12L3.84 2.15c.5-.24 1.04-.21 1.53.07l8.32 4.83L13.69 12z"/>
                                            </svg>
                                        </div>
                                        <div className="btn-text">
                                            <span className="btn-label">{t('apps.download')}</span>
                                            <span className="btn-store">{t('apps.downloadGoogle')}</span>
                                        </div>
                                        <div className="btn-shine" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .apps-section {
                    padding: 100px 0;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
                }

                .apps-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .grid-pattern {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(30, 86, 49, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(30, 86, 49, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    animation: gridMove 20s linear infinite;
                }

                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }

                .gradient-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.15;
                    animation: orbFloat 15s ease-in-out infinite;
                }

                .orb-1 {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, #1e5631 0%, transparent 70%);
                    top: -250px;
                    right: -250px;
                }

                .orb-2 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, #a4de02 0%, transparent 70%);
                    bottom: -200px;
                    left: -200px;
                    animation-delay: -7s;
                }

                @keyframes orbFloat {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(30px, -30px); }
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

                .section-title {
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    font-weight: 800;
                    color: #1a1a1a;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .title-highlight {
                    background: linear-gradient(135deg, #1e5631 0%, #a4de02 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .section-subtitle {
                    font-size: 1.2rem;
                    color: #4a5568;
                    line-height: 1.6;
                }

                .apps-tabs {
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    margin-bottom: 60px;
                }

                .tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px 32px;
                    background: white;
                    border: 2px solid #e2e8f0;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    font-size: 16px;
                    font-weight: 600;
                    color: #4a5568;
                }

                .tab-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    border-color: #1e5631;
                }

                .tab-btn.active {
                    background: linear-gradient(135deg, #1e5631 0%, #2a7d46 100%);
                    color: white;
                    border-color: transparent;
                    box-shadow: 0 10px 30px rgba(30, 86, 49, 0.3);
                }

                .tab-icon {
                    display: flex; 
                    align-items: center;
                    justify-content: center;
                }
                
                .app-icon-image {
                    width:100px;
                    height:100px;
                    object-fit: contain;
                }


                .app-showcase {
                    position: relative;
                    min-height: 600px;
                }

                .app-card {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                    opacity: 0;
                    transform: translateY(30px);
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .app-card.active {
                    opacity: 1;
                    transform: translateY(0);
                    position: relative;
                    pointer-events: auto;
                }

                .app-visual {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .phone-mockup {
                    position: relative;
                    z-index: 2;
                }

                .phone-frame {
                    width: 280px;
                    height: 570px;
                    background: #1a1a1a;
                    border-radius: 40px;
                    padding: 12px;
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
                    position: relative;
                }

                .phone-notch {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 120px;
                    height: 28px;
                    background: #1a1a1a;
                    border-radius: 0 0 20px 20px;
                    z-index: 2;
                }

                .phone-screen {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                    border-radius: 32px;
                    overflow: hidden;
                }

                .phone-shadow {
                    position: absolute;
                    bottom: -40px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 200px;
                    height: 40px;
                    background: radial-gradient(ellipse, rgba(0, 0, 0, 0.2) 0%, transparent 70%);
                    filter: blur(15px);
                }

                .app-preview {
                    padding: 40px 20px 20px;
                }

                .preview-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 24px;
                }

                .preview-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #1e5631 0%, #2a7d46 100%);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .preview-icon .app-icon-image {
                    width: 30px;
                    height: 30px;
                }

                .preview-text {
                    flex: 1;
                }

                .preview-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 2px;
                }

                .preview-subtitle {
                    font-size: 12px;
                    color: #718096;
                }

                .preview-content {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .preview-item {
                    display: flex;
                    gap: 12px;
                    padding: 12px;
                    background: white;
                    border-radius: 12px;
                    animation: itemSlide 0.5s ease forwards;
                    animation-delay: calc(var(--item-index) * 0.1s + 0.3s);
                    opacity: 0;
                }

                @keyframes itemSlide {
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .item-icon {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
                    border-radius: 8px;
                    flex-shrink: 0;
                }

                .item-text {
                    flex: 1;
                }

                .item-title {
                    height: 12px;
                    background: #e2e8f0;
                    border-radius: 4px;
                    margin-bottom: 6px;
                    width: 80%;
                }

                .item-subtitle {
                    height: 10px;
                    background: #f1f5f9;
                    border-radius: 4px;
                    width: 60%;
                }

                .floating-icons {
                    position: absolute;
                    inset: 0;
                }

                .floating-icon {
                    position: absolute;
                    font-size: 32px;
                    animation: iconFloat 4s ease-in-out infinite;
                    animation-delay: calc(var(--icon-index) * 0.5s);
                    opacity: 0.7;
                }

                .floating-icon:nth-child(1) { top: 10%; right: -10%; }
                .floating-icon:nth-child(2) { top: 40%; left: -15%; }
                .floating-icon:nth-child(3) { bottom: 30%; right: -5%; }
                .floating-icon:nth-child(4) { bottom: 10%; left: -10%; }

                @keyframes iconFloat {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(10deg);
                    }
                }

                .app-details {
                    position: relative;
                }

                .app-header {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 24px;
                }

                .app-icon-large {
                    position: relative;
                    width: 80px;
                    height: 80px;
                }

                .icon-bg {
                    position: absolute;
                    inset: 0;
                    border-radius: 20px;
                    opacity: 0.15;
                }

                .icon-emoji {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .icon-emoji .app-icon-image {
                    width: 40px;
                    height: 40px;
                }

                .app-name {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #1a1a1a;
                    margin-bottom: 4px;
                }

                .app-tagline {
                    font-size: 16px;
                    color: #718096;
                }

                .app-description {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: #4a5568;
                    margin-bottom: 32px;
                }

                .app-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-bottom: 32px;
                }

                .stat-item {
                    text-align: center;
                    padding: 20px;
                    background: linear-gradient(135deg, rgba(30, 86, 49, 0.05) 0%, rgba(164, 222, 2, 0.05) 100%);
                    border-radius: 12px;
                    border: 1px solid rgba(30, 86, 49, 0.1);
                    transition: all 0.3s ease;
                }

                .stat-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                }

                .stat-value {
                    font-size: 28px;
                    font-weight: 800;
                    color: #1e5631;
                    margin-bottom: 4px;
                }

                .stat-label {
                    font-size: 13px;
                    color: #718096;
                    font-weight: 500;
                }

                .app-features h4 {
                    font-size: 18px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 16px;
                }

                .features-list {
                    list-style: none;
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 12px;
                    margin-bottom: 32px;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 15px;
                    color: #4a5568;
                }

                .feature-item svg {
                    width: 24px;
                    height: 24px;
                    color: #2a7d46;
                    flex-shrink: 0;
                }

                .download-btn {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    width: 100%;
                    padding: 20px 28px;
                    background: #1a1a1a;
                    color: white;
                    border-radius: 16px;
                    text-decoration: none;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    position: relative;
                    overflow: hidden;
                }

                .btn-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .btn-icon svg {
                    width: 24px;
                    height: 24px;
                }

                .btn-text {
                    flex: 1;
                    text-align: right;
                }

                .btn-label {
                    display: block;
                    font-size: 12px;
                    opacity: 0.7;
                    margin-bottom: 2px;
                }

                .btn-store {
                    display: block;
                    font-size: 18px;
                    font-weight: 700;
                }

                .btn-shine {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.6s ease;
                }

                .download-btn:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    background: #2a7d46;
                }

                .download-btn:hover .btn-shine {
                    left: 100%;
                }

                @media (max-width: 1024px) {
                    .app-card {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .phone-frame {
                        width: 240px;
                        height: 490px;
                    }

                    .features-list {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .apps-section {
                        padding: 60px 0;
                    }

                    .section-header {
                        margin-bottom: 50px;
                    }

                    .apps-tabs {
                        flex-direction: column;
                        gap: 12px;
                    }

                    .tab-btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .app-stats {
                        grid-template-columns: 1fr;
                    }

                    .floating-icons {
                        display: none;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .phone-frame,
                    .download-btn,
                    .tab-btn,
                    .floating-icon {
                        transition: none;
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default EnhancedApps;