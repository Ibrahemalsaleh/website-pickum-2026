import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const EnhancedGoals = () => {
    const { t } = useLanguage();
    const [visibleGoals, setVisibleGoals] = useState([]);
    const [hoveredGoal, setHoveredGoal] = useState(null);

    const goals = [
        {
            id: 1,
            icon: '❤️',
            title: t('goals.items.satisfaction.title'),
            description: t('goals.items.satisfaction.description'),
            color: '#1e5631',
            gradient: 'linear-gradient(135deg, #1e5631 0%, #2a7d46 100%)',
            pattern: 'M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z'
        },
        {
            id: 2,
            icon: '📈',
            title: t('goals.items.growth.title'),
            description: t('goals.items.growth.description'),
            color: '#2a7d46',
            gradient: 'linear-gradient(135deg, #2a7d46 0%, #76b947 100%)',
            pattern: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z'
        },
        {
            id: 3,
            icon: '🤝',
            title: t('goals.items.partnership.title'),
            description: t('goals.items.partnership.description'),
            color: '#76b947',
            gradient: 'linear-gradient(135deg, #76b947 0%, #a4de02 100%)',
            pattern: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
        },
        {
            id: 4,
            icon: '👥',
            title: t('goals.items.team.title'),
            description: t('goals.items.team.description'),
            color: '#a4de02',
            gradient: 'linear-gradient(135deg, #a4de02 0%, #c8f442 100%)',
            pattern: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
        },
        {
            id: 5,
            icon: '💡',
            title: t('goals.items.innovation.title'),
            description: t('goals.items.innovation.description'),
            color: '#8bc34a',
            gradient: 'linear-gradient(135deg, #8bc34a 0%, #76b947 100%)',
            pattern: 'M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z'
        }
    ];

    useEffect(() => {
        goals.forEach((_, index) => {
            setTimeout(() => {
                setVisibleGoals(prev => [...prev, index]);
            }, index * 150);
        });
    }, []);

    return (
        <section id="goals" className="goals-section">
            <div className="goals-bg">
                <div className="animated-shapes">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="shape" style={{ '--shape-index': i }} />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="header-badge">
                        <div className="badge-pulse" />
                        <span>🎯 {t('goals.badge')}</span>
                    </div>
                   
                    <p className="section-subtitle">
                        {t('goals.subtitle')}
                    </p>
                </div>

                <div className="goals-grid">
                    {goals.map((goal, index) => (
                        <div
                            key={goal.id}
                            className={`goal-card ${visibleGoals.includes(index) ? 'visible' : ''} ${hoveredGoal === index ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredGoal(index)}
                            onMouseLeave={() => setHoveredGoal(null)}
                            style={{
                                '--goal-color': goal.color,
                                '--goal-index': index
                            }}
                        >
                            <div className="card-bg">
                                <svg className="bg-pattern" viewBox="0 0 24 24">
                                    <path d={goal.pattern} fill="currentColor" opacity="0.05" />
                                </svg>
                            </div>

                            <div className="card-shine" />
                            
                            <div className="goal-number">{String(goal.id).padStart(2, '0')}</div>

                            <div className="icon-container">
                                <div className="icon-glow" style={{ background: goal.gradient }} />
                                <div className="icon-wrapper" style={{ background: goal.gradient }}>
                                    <span className="goal-icon">{goal.icon}</span>
                                </div>
                                <div className="icon-ring ring-1" />
                                <div className="icon-ring ring-2" />
                                <div className="icon-particles">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="particle" style={{ '--particle-index': i }} />
                                    ))}
                                </div>
                            </div>

                            <h3 className="goal-title">{goal.title}</h3>
                            <p className="goal-description">{goal.description}</p>

                            <div className="goal-progress">
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ background: goal.gradient }} />
                                </div>
                                <span className="progress-label">{t('goals.inProgress')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .goals-section {
                    padding: 100px 0;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
                }

                .goals-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .animated-shapes {
                    position: absolute;
                    inset: 0;
                }

                .shape {
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                    background: radial-gradient(circle, rgba(164, 222, 2, 0.1) 0%, transparent 70%);
                    animation: morphShape 15s ease-in-out infinite;
                    animation-delay: calc(var(--shape-index) * -3s);
                }

                .shape:nth-child(1) { top: 10%; left: 5%; }
                .shape:nth-child(2) { top: 50%; right: 10%; }
                .shape:nth-child(3) { bottom: 20%; left: 15%; }
                .shape:nth-child(4) { top: 30%; right: 20%; }
                .shape:nth-child(5) { bottom: 40%; right: 5%; }

                @keyframes morphShape {
                    0%, 100% {
                        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                        transform: translate(0, 0) rotate(0deg);
                    }
                    25% {
                        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
                        transform: translate(20px, -20px) rotate(90deg);
                    }
                    50% {
                        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
                        transform: translate(-10px, 10px) rotate(180deg);
                    }
                    75% {
                        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
                        transform: translate(-20px, -10px) rotate(270deg);
                    }
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
                    position: relative;
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
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(2);
                        opacity: 0;
                    }
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

                .goals-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 32px;
                }

                .goal-card {
                    position: relative;
                    background: white;
                    border-radius: 28px;
                    padding: 40px;
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                    cursor: pointer;
                    overflow: hidden;
                    border: 2px solid transparent;
                    opacity: 0;
                    transform: translateY(50px) scale(0.9);
                }

                .goal-card.visible {
                    animation: cardReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                    animation-delay: calc(var(--goal-index) * 0.1s);
                }

                @keyframes cardReveal {
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .goal-card:hover {
                    transform: translateY(-16px) scale(1.03);
                    border-color: var(--goal-color);
                    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
                }

                .card-bg {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                }

                .bg-pattern {
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    top: -50%;
                    right: -50%;
                    color: var(--goal-color);
                    transition: transform 0.8s ease;
                }

                .goal-card:hover .bg-pattern {
                    transform: translate(-10%, 10%) rotate(30deg);
                }

                .card-shine {
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                    transform: translateX(-100%) translateY(-100%) rotate(45deg);
                    transition: transform 0.8s ease;
                }

                .goal-card:hover .card-shine {
                    transform: translateX(0) translateY(0) rotate(45deg);
                }

                .goal-number {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    font-size: 48px;
                    font-weight: 900;
                    color: rgba(0, 0, 0, 0.04);
                    line-height: 1;
                    transition: all 0.4s ease;
                }

                .goal-card:hover .goal-number {
                    color: rgba(0, 0, 0, 0.08);
                    transform: scale(1.2);
                }

                .icon-container {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    margin: 0 auto 28px;
                }

                .icon-glow {
                    position: absolute;
                    inset: -20px;
                    border-radius: 50%;
                    opacity: 0;
                    filter: blur(30px);
                    transition: opacity 0.4s ease;
                }

                .goal-card:hover .icon-glow {
                    opacity: 0.4;
                }

                .icon-wrapper {
                    position: absolute;
                    inset: 0;
                    border-radius: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
                }

                .goal-card:hover .icon-wrapper {
                    transform: scale(1.15) rotate(10deg);
                    border-radius: 50%;
                }

                .goal-icon {
                    font-size: 48px;
                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
                }

                .icon-ring {
                    position: absolute;
                    inset: -10px;
                    border: 2px solid var(--goal-color);
                    border-radius: 50%;
                    opacity: 0;
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .ring-1 {
                    inset: -15px;
                }

                .ring-2 {
                    inset: -25px;
                }

                .goal-card:hover .ring-1 {
                    opacity: 0.4;
                    inset: -20px;
                }

                .goal-card:hover .ring-2 {
                    opacity: 0.2;
                    inset: -35px;
                }

                .icon-particles {
                    position: absolute;
                    inset: 0;
                }

                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: var(--goal-color);
                    border-radius: 50%;
                    opacity: 0;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .goal-card:hover .particle {
                    animation: particleExplode 1s ease-out forwards;
                    animation-delay: calc(var(--particle-index) * 0.05s);
                }

                @keyframes particleExplode {
                    0% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(0);
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        transform: translate(
                            calc(-50% + cos(calc(var(--particle-index) * 45deg)) * 60px),
                            calc(-50% + sin(calc(var(--particle-index) * 45deg)) * 60px)
                        ) scale(1);
                    }
                }

                .goal-title {
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: #1a1a1a;
                    margin-bottom: 16px;
                    transition: color 0.3s ease;
                    text-align: center;
                }

                .goal-card:hover .goal-title {
                    color: var(--goal-color);
                }

                .goal-description {
                    color: #4a5568;
                    line-height: 1.8;
                    margin-bottom: 28px;
                    font-size: 15px;
                    text-align: center;
                }

                .goal-progress {
                    margin-bottom: 24px;
                }

                .progress-bar {
                    width: 100%;
                    height: 8px;
                    background: rgba(0, 0, 0, 0.05);
                    border-radius: 4px;
                    overflow: hidden;
                    margin-bottom: 8px;
                }

                .progress-fill {
                    height: 100%;
                    width: 0;
                    border-radius: 4px;
                    transition: width 1s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .goal-card.visible .progress-fill {
                    width: 85%;
                }

                .goal-card:hover .progress-fill {
                    width: 100%;
                }

                .progress-label {
                    font-size: 13px;
                    color: #718096;
                    font-weight: 500;
                }

                @media (max-width: 768px) {
                    .goals-section {
                        padding: 60px 0;
                    }

                    .section-header {
                        margin-bottom: 50px;
                    }

                    .goals-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .goal-card {
                        padding: 32px;
                    }

                    .icon-container {
                        width: 80px;
                        height: 80px;
                    }

                    .goal-icon {
                        font-size: 40px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .shape,
                    .goal-card,
                    .icon-wrapper,
                    .particle {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default EnhancedGoals;