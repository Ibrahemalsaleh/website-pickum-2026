import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const EnhancedChallenges = () => {
    const { t } = useLanguage();
    const [activeChallenge, setActiveChallenge] = useState(null);

    const challenges = [
        {
            id: 1,
            icon: '💡',
            title: t('challenges.items.serviceInnovation.title'),
            challenge: t('challenges.items.serviceInnovation.challenge'),
            solution: t('challenges.items.serviceInnovation.solution'),
            color: '#1e5631',
            gradient: 'linear-gradient(135deg, #1e5631 0%, #2a7d46 100%)',
            pattern: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
        },
        {
            id: 2,
            icon: '🤝',
            title: t('challenges.items.communication.title'),
            challenge: t('challenges.items.communication.challenge'),
            solution: t('challenges.items.communication.solution'),
            color: '#2a7d46',
            gradient: 'linear-gradient(135deg, #2a7d46 0%, #76b947 100%)',
            pattern: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z'
        },
        {
            id: 3,
            icon: '🚀',
            title: t('challenges.items.efficiency.title'),
            challenge: t('challenges.items.efficiency.challenge'),
            solution: t('challenges.items.efficiency.solution'),
            color: '#76b947',
            gradient: 'linear-gradient(135deg, #76b947 0%, #a4de02 100%)',
            pattern: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
        },
        {
            id: 4,
            icon: '🎓',
            title: t('challenges.items.development.title'),
            challenge: t('challenges.items.development.challenge'),
            solution: t('challenges.items.development.solution'),
            color: '#a4de02',
            gradient: 'linear-gradient(135deg, #a4de02 0%, #c8f442 100%)',
            pattern: 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z'
        },
        {
            id: 5,
            icon: '❤️',
            title: t('challenges.items.customerSatisfaction.title'),
            challenge: t('challenges.items.customerSatisfaction.challenge'),
            solution: t('challenges.items.customerSatisfaction.solution'),
            color: '#8bc34a',
            gradient: 'linear-gradient(135deg, #8bc34a 0%, #76b947 100%)',
            pattern: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
        }
    ];

    return (
        <section id="challenges" className="challenges-section">
            <div className="challenges-bg">
                <div className="animated-gradient" />
                <div className="grid-overlay" />
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="header-badge">
                        <div className="badge-pulse" />
                        <span>🎯 {t('challenges.badge')}</span>
                    </div>
                    
                    <p className="section-subtitle">
                        {t('challenges.subtitle')}
                    </p>
                </div>

                <div className="challenges-grid">
                    {challenges.map((item, index) => (
                        <div
                            key={item.id}
                            className={`challenge-card ${activeChallenge === index ? 'active' : ''}`}
                            onClick={() => setActiveChallenge(activeChallenge === index ? null : index)}
                            style={{
                                '--challenge-color': item.color,
                                '--card-index': index
                            }}
                        >
                            <div className="card-background">
                                <svg className="pattern-svg" viewBox="0 0 24 24">
                                    <path d={item.pattern} fill="currentColor" opacity="0.03" />
                                </svg>
                            </div>

                            <div className="card-header">
                                <div className="challenge-number">
                                    <span className="number-bg">{String(item.id).padStart(2, '0')}</span>
                                    <span className="number-front">{String(item.id).padStart(2, '0')}</span>
                                </div>
                                <div className="icon-wrapper" style={{ background: item.gradient }}>
                                    <span className="challenge-icon">{item.icon}</span>
                                    <div className="icon-glow" />
                                </div>
                            </div>

                            <h3 className="challenge-title">{item.title}</h3>

                            <div className="challenge-content">
                                <div className="content-section">
                                    <div className="section-label">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                            <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                        <span>{t('challenges.challenge')}</span>
                                    </div>
                                    <p className="challenge-text">{item.challenge}</p>
                                </div>

                                <div className="divider">
                                    <div className="divider-line" />
                                    <div className="divider-icon">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                    <div className="divider-line" />
                                </div>

                                <div className="content-section solution">
                                    <div className="section-label">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                        <span>{t('challenges.solution')}</span>
                                    </div>
                                    <p className="solution-text">{item.solution}</p>
                                </div>
                            </div>

                            <button className="expand-btn">
                                <span>{activeChallenge === index ? t('challenges.hideDetails') : t('challenges.showDetails')}</span>
                                <svg viewBox="0 0 24 24" fill="none" className={activeChallenge === index ? 'rotated' : ''}>
                                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </button>

                            <div className="card-shine" />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .challenges-section {
                    padding: 100px 0;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
                }

                .challenges-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .animated-gradient {
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(circle at 30% 20%, rgba(30, 86, 49, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(164, 222, 2, 0.05) 0%, transparent 50%);
                    animation: gradientShift 15s ease-in-out infinite;
                }

                @keyframes gradientShift {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(20px, -20px); }
                }

                .grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(30, 86, 49, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(30, 86, 49, 0.02) 1px, transparent 1px);
                    background-size: 40px 40px;
                }

                .section-header {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 80px;
                }

                .header-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    background: rgba(30, 86, 49, 0.08);
                    padding: 12px 28px;
                    border-radius: 50px;
                    margin-bottom: 24px;
                    border: 1px solid rgba(30, 86, 49, 0.1);
                }

                .badge-pulse {
                    width: 10px;
                    height: 10px;
                    background: #a4de02;
                    border-radius: 50%;
                    position: relative;
                }

                .badge-pulse::before {
                    content: '';
                    position: absolute;
                    inset: -5px;
                    border: 2px solid #a4de02;
                    border-radius: 50%;
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(2); opacity: 0; }
                }

                .header-badge span {
                    color: #1e5631;
                    font-weight: 600;
                    font-size: 15px;
                }

                .section-subtitle {
                    font-size: 1.2rem;
                    color: #4a5568;
                    line-height: 1.6;
                }

                .challenges-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 32px;
                }

                .challenge-card {
                    position: relative;
                    background: white;
                    border-radius: 24px;
                    padding: 36px;
                    cursor: pointer;
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                    border: 2px solid rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    animation: cardFadeIn 0.8s ease forwards;
                    animation-delay: calc(var(--card-index) * 0.1s);
                    opacity: 0;
                }

                @keyframes cardFadeIn {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .challenge-card {
                    transform: translateY(30px);
                }

                .challenge-card:hover {
                    transform: translateY(-12px) scale(1.02);
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
                    border-color: var(--challenge-color);
                }

                .challenge-card.active {
                    border-color: var(--challenge-color);
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
                }

                .card-background {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                }

                .pattern-svg {
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    top: -50%;
                    right: -50%;
                    color: var(--challenge-color);
                    transition: transform 0.8s ease;
                }

                .challenge-card:hover .pattern-svg {
                    transform: translate(-5%, 5%) rotate(15deg);
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                    position: relative;
                }

                .challenge-number {
                    position: relative;
                    width: 60px;
                    height: 60px;
                }

                .number-bg,
                .number-front {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 32px;
                    font-weight: 900;
                }

                .number-bg {
                    color: rgba(0, 0, 0, 0.03);
                    transform: translate(4px, 4px);
                }

                .number-front {
                    color: var(--challenge-color);
                    transition: transform 0.3s ease;
                }

                .challenge-card:hover .number-front {
                    transform: scale(1.2);
                }

                .icon-wrapper {
                    width: 70px;
                    height: 70px;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
                }

                .challenge-card:hover .icon-wrapper {
                    transform: scale(1.15) rotate(-10deg);
                    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
                }

                .challenge-icon {
                    font-size: 36px;
                    position: relative;
                    z-index: 1;
                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
                }

                .icon-glow {
                    position: absolute;
                    inset: -15px;
                    background: radial-gradient(circle, var(--challenge-color) 0%, transparent 70%);
                    opacity: 0;
                    filter: blur(20px);
                    transition: opacity 0.3s ease;
                }

                .challenge-card:hover .icon-glow {
                    opacity: 0.4;
                }

                .challenge-title {
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: #1a1a1a;
                    margin-bottom: 20px;
                    transition: color 0.3s ease;
                }

                .challenge-card:hover .challenge-title {
                    color: var(--challenge-color);
                }

                .challenge-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                    margin-bottom: 0;
                }

                .challenge-card.active .challenge-content {
                    max-height: 500px;
                    margin-bottom: 24px;
                }

                .content-section {
                    margin-bottom: 20px;
                }

                .section-label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 12px;
                    color: #4a5568;
                    font-weight: 700;
                    font-size: 14px;
                }

                .section-label svg {
                    width: 20px;
                    height: 20px;
                    color: var(--challenge-color);
                }

                .challenge-text,
                .solution-text {
                    color: #4a5568;
                    line-height: 1.8;
                    font-size: 15px;
                    padding: 16px;
                    background: rgba(0, 0, 0, 0.02);
                    border-radius: 12px;
                    border-right: 3px solid rgba(0, 0, 0, 0.1);
                }

                .solution-text {
                    background: rgba(30, 86, 49, 0.05);
                    border-right-color: var(--challenge-color);
                }

                .divider {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin: 24px 0;
                }

                .divider-line {
                    flex: 1;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
                }

                .divider-icon {
                    width: 32px;
                    height: 32px;
                    background: var(--challenge-color);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .divider-icon svg {
                    width: 18px;
                    height: 18px;
                    color: white;
                }

                .expand-btn {
                    width: 100%;
                    padding: 14px 20px;
                    background: rgba(0, 0, 0, 0.03);
                    border: 2px solid rgba(0, 0, 0, 0.08);
                    border-radius: 12px;
                    color: #4a5568;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .expand-btn svg {
                    width: 20px;
                    height: 20px;
                    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .expand-btn svg.rotated {
                    transform: rotate(180deg);
                }

                .expand-btn:hover {
                    background: var(--challenge-color);
                    color: white;
                    border-color: var(--challenge-color);
                    transform: translateY(-2px);
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
                    pointer-events: none;
                }

                .challenge-card:hover .card-shine {
                    transform: translateX(0) translateY(0) rotate(45deg);
                }

                @media (max-width: 768px) {
                    .challenges-section {
                        padding: 60px 0;
                    }

                    .section-header {
                        margin-bottom: 50px;
                    }

                    .challenges-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .challenge-card {
                        padding: 28px;
                    }

                    .icon-wrapper {
                        width: 60px;
                        height: 60px;
                    }

                    .challenge-icon {
                        font-size: 30px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .challenge-card,
                    .icon-wrapper,
                    .pattern-svg,
                    .badge-pulse::before {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default EnhancedChallenges;