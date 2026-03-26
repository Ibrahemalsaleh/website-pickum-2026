import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // احصل على بيانات الشرائح المترجمة من السياق
    const heroSlides = t('hero.slides');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);

        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearInterval(slideInterval);
        };
    }, [heroSlides.length]);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = 80;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const currentSlideData = heroSlides[currentSlide];

    return (
        <section id="home" className="hero">
            <div className="hero-backgrounds">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-background ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            <div className="hero-overlay"></div>

            <div className="hero-floating-elements">
                {[...Array(4)].map((_, i) => <div key={i} className={`floating-shape shape-${i + 1}`}></div>)}
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className={`hero-badge ${isVisible ? 'visible' : ''}`}>
                        <i className="fas fa-star"></i>
                        <span>{currentSlideData.accent}</span>
                    </div>

                    <div className={`hero-main ${isVisible ? 'visible' : ''}`}>
                        <h1 key={currentSlide}>{currentSlideData.title}</h1>
                        <p key={`${currentSlide}-subtitle`}>{currentSlideData.subtitle}</p>
                    </div>

                    <div className={`hero-actions ${isVisible ? 'visible' : ''}`}>
                        <button onClick={() => scrollToSection('services')} className="btn btn-primary btn-hero">
                            <i className="fas fa-rocket"></i>
                            <span>{t('hero.button')}</span>
                        </button>
                        
                        <button onClick={() => scrollToSection('apps')} className="btn btn-secondary btn-hero">
                            <i className="fas fa-mobile-alt"></i>
                            <span>{t('hero.ourApps')}</span>
                        </button>
                    </div>

                    <div className={`hero-stats ${isVisible ? 'visible' : ''}`}>
                        <div className="stat-item">
                            <div className="stat-number">0</div>
                            <div className="stat-label">{t('hero.stats.satisfiedClient')}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">12</div>
                            <div className="stat-label">{t('hero.stats.cityServed')}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">{t('hero.stats.continuousService')}</div>
                        </div>
                    </div>
                </div>

                <div className="hero-indicators">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => handleSlideChange(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-line"></div>
                    <div className="scroll-text">{t('hero.scrollDown')}</div>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>

            <div className="hero-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

            <style jsx>{`
                /* Enhanced Hero Styles */
                .hero {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    background: var(--primary-gradient);
                }

                /* Background System */
                .hero-backgrounds {
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                }

                .hero-background {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    opacity: 0;
                    transition: opacity 1s ease-in-out;
                    filter: brightness(0.4) contrast(1.2);
                }

                .hero-background.active {
                    opacity: 1;
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(30, 86, 49, 0.9) 0%,
                        rgba(42, 125, 70, 0.8) 50%,
                        rgba(118, 185, 71, 0.7) 100%
                    );
                    z-index: 2;
                }

                /* Floating Elements */
                .hero-floating-elements {
                    position: absolute;
                    inset: 0;
                    z-index: 3;
                    pointer-events: none;
                }

                .floating-shape {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(164, 222, 2, 0.1);
                    animation: heroFloat 15s ease-in-out infinite;
                }

                .shape-1 {
                    width: 100px;
                    height: 100px;
                    top: 20%;
                    left: 10%;
                    animation-delay: 0s;
                }

                .shape-2 {
                    width: 150px;
                    height: 150px;
                    top: 60%;
                    right: 15%;
                    animation-delay: 5s;
                }

                .shape-3 {
                    width: 80px;
                    height: 80px;
                    bottom: 30%;
                    left: 20%;
                    animation-delay: 10s;
                }

                .shape-4 {
                    width: 120px;
                    height: 120px;
                    top: 30%;
                    right: 30%;
                    animation-delay: 7s;
                }

                /* Content Styles */
                .hero-content {
                    position: relative;
                    z-index: 4;
                    text-align: center;
                    color: var(--text-inverse);
                    max-width: 900px;
                    margin: 0 auto;
                    padding: var(--space-4xl) 0;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: var(--space-sm);
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    padding: var(--space-sm) var(--space-lg);
                    border-radius: var(--radius-full);
                    font-size: 0.95rem;
                    font-weight: var(--font-weight-medium);
                    margin-bottom: var(--space-xl);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }

                .hero-badge.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-badge i {
                    color: var(--accent-light);
                    font-size: 1rem;
                }

                .hero-main {
                    margin-bottom: var(--space-2xl);
                }

                .hero-main h1 {
                    font-size: clamp(3rem, 8vw, 6rem);
                    font-weight: var(--font-weight-extrabold);
                    margin-bottom: var(--space-xl);
                    line-height: 1.1;
                    background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, var(--accent-light) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    opacity: 0;
                    transform: translateY(50px);
                    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
                }

                .hero-main.visible h1 {
                    opacity: 1;
                    transform: translateY(0);
                }

                .hero-main p {
                    font-size: clamp(1.25rem, 3vw, 1.75rem);
                    line-height: 1.6;
                    margin-bottom: 0;
                    color: rgba(255, 255, 255, 0.95);
                    font-weight: var(--font-weight-normal);
                    max-width: 700px;
                    margin: 0 auto;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
                }

                .hero-main.visible p {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Action Buttons */
                .hero-actions {
                    display: flex;
                    gap: var(--space-lg);
                    justify-content: center;
                    margin-bottom: var(--space-4xl);
                    flex-wrap: wrap;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s;
                }

                .hero-actions.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .btn-hero {
                    padding: var(--space-lg) var(--space-2xl);
                    font-size: 1.125rem;
                    font-weight: var(--font-weight-semibold);
                    min-width: 200px;
                    position: relative;
                    overflow: hidden;
                }

                .btn-hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.7s ease;
                }

                .btn-hero:hover::before {
                    left: 100%;
                }

                .btn-secondary {
                    background: transparent;
                    color: var(--text-inverse);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(10px);
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.5);
                    transform: translateY(-4px);
                }

                /* Statistics */
                .hero-stats {
                    display: flex;
                    justify-content: center;
                    gap: var(--space-2xl);
                    margin-bottom: var(--space-2xl);
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
                }

                .hero-stats.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .stat-item {
                    text-align: center;
                    padding: var(--space-lg);
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: var(--radius-xl);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    transition: var(--transition-professional);
                    min-width: 120px;
                }

                .stat-item:hover {
                    transform: translateY(-8px);
                    background: rgba(255, 255, 255, 0.15);
                }

                .stat-number {
                    font-size: 2rem;
                    font-weight: var(--font-weight-bold);
                    color: var(--accent-light);
                    margin-bottom: var(--space-xs);
                    line-height: 1;
                }

                .stat-label {
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: var(--font-weight-medium);
                }

                /* Slide Indicators */
                .hero-indicators {
                    display: flex;
                    justify-content: center;
                    gap: var(--space-sm);
                    margin-bottom: var(--space-xl);
                    position: relative;
                    z-index: 4;
                }

                .indicator {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    border: none;
                    cursor: pointer;
                    transition: var(--transition-professional);
                    position: relative;
                }

                .indicator::before {
                    content: '';
                    position: absolute;
                    inset: -4px;
                    border-radius: 50%;
                    border: 2px solid transparent;
                    transition: var(--transition-professional);
                }

                .indicator.active,
                .indicator:hover {
                    background: var(--accent-light);
                    transform: scale(1.2);
                }

                .indicator.active::before {
                    border-color: rgba(255, 255, 255, 0.5);
                }

                /* Scroll Indicator */
                .scroll-indicator {
                    position: absolute;
                    bottom: var(--space-2xl);
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    color: rgba(255, 255, 255, 0.8);
                    z-index: 4;
                    animation: scrollBounce 2s ease-in-out infinite;
                }

                .scroll-line {
                    width: 2px;
                    height: 30px;
                    background: rgba(255, 255, 255, 0.5);
                    margin: 0 auto var(--space-sm);
                    border-radius: 1px;
                }

                .scroll-text {
                    font-size: 0.875rem;
                    margin-bottom: var(--space-sm);
                    font-weight: var(--font-weight-medium);
                }

                .scroll-indicator i {
                    font-size: 1.25rem;
                    animation: scrollArrow 1.5s ease-in-out infinite;
                }

                /* Enhanced Wave */
                .hero-wave {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    overflow: hidden;
                    line-height: 0;
                    transform: rotate(180deg);
                    z-index: 5;
                }

                .hero-wave svg {
                    position: relative;
                    display: block;
                    width: calc(100% + 1.3px);
                    height: 120px;
                    animation: waveMotion 8s ease-in-out infinite;
                }

                .hero-wave .shape-fill {
                    fill: var(--surface-light);
                }

                /* Animations */
                @keyframes heroFloat {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.1;
                    }
                    25% {
                        transform: translateY(-20px) rotate(90deg);
                        opacity: 0.15;
                    }
                    50% {
                        transform: translateY(-10px) rotate(180deg);
                        opacity: 0.1;
                    }
                    75% {
                        transform: translateY(-15px) rotate(270deg);
                        opacity: 0.12;
                    }
                }

                @keyframes scrollBounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateX(-50%) translateY(0);
                    }
                    40% {
                        transform: translateX(-50%) translateY(-10px);
                    }
                    60% {
                        transform: translateX(-50%) translateY(-5px);
                    }
                }

                @keyframes scrollArrow {
                    0%, 100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(8px);
                        opacity: 0.6;
                    }
                }

                @keyframes waveMotion {
                    0%, 100% {
                        transform: translateX(0px) rotate(180deg);
                    }
                    50% {
                        transform: translateX(15px) rotate(180deg);
                    }
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .hero {
                        min-height: 90vh;
                    }

                    .hero-content {
                        padding: var(--space-2xl) 0;
                    }

                    .hero-stats {
                        flex-direction: column;
                        gap: var(--space-lg);
                        align-items: center;
                    }

                    .stat-item {
                        min-width: 200px;
                    }

                    .hero-actions {
                        flex-direction: column;
                        align-items: center;
                        gap: var(--space-md);
                    }

                    .btn-hero {
                        width: 100%;
                        max-width: 280px;
                    }

                    .scroll-indicator {
                        display: none;
                    }
                }

                @media (max-width: 480px) {
                    .hero {
                        min-height: 80vh;
                    }

                    .hero-content {
                        padding: var(--space-xl) 0;
                    }

                    .hero-badge {
                        font-size: 0.875rem;
                        padding: var(--space-xs) var(--space-md);
                    }

                    .hero-stats {
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .stat-item {
                        min-width: 100px;
                        padding: var(--space-md);
                    }

                    .stat-number {
                        font-size: 1.5rem;
                    }

                    .stat-label {
                        font-size: 0.8rem;
                    }

                    .hero-wave svg {
                        height: 80px;
                    }

                    .floating-shape {
                        display: none;
                    }
                }

                /* Enhanced RTL Support */
                [dir="rtl"] .hero-actions {
                    flex-direction: row; /* Adjusted for RTL */
                }

                [dir="rtl"] .hero-stats {
                     flex-direction: row; /* Adjusted for RTL */
                }
                
                [dir="rtl"] .hero-actions, [dir="rtl"] .hero-stats {
                    gap: var(--space-lg);
                }


                @media (prefers-reduced-motion: reduce) {
                    .floating-shape,
                    .hero-wave svg,
                    .scroll-indicator {
                        animation: none;
                    }

                    .hero-background {
                        transition: none;
                    }

                    .hero-badge,
                    .hero-main h1,
                    .hero-main p,
                    .hero-actions,
                    .hero-stats {
                        transition: none;
                        opacity: 1;
                        transform: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;