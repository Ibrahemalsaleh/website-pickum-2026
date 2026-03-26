import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className={`back-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="العودة إلى الأعلى"
        >
            <i className="fas fa-chevron-up"></i>
            
            <style jsx>{`
                .back-to-top {
                    position: fixed;
                    bottom: var(--space-xl);
                    right: var(--space-xl);
                    width: 50px;
                    height: 50px;
                    background: var(--primary-gradient);
                    border: none;
                    border-radius: 50%;
                    color: var(--text-inverse);
                    font-size: 1.125rem;
                    cursor: pointer;
                    transition: var(--transition-professional);
                    z-index: var(--z-fixed);
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px);
                    box-shadow: var(--shadow-lg);
                }

                .back-to-top.visible {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .back-to-top:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-2xl);
                }

                .back-to-top:active {
                    transform: translateY(-2px);
                }

                @media (max-width: 768px) {
                    .back-to-top {
                        bottom: var(--space-lg);
                        right: var(--space-lg);
                        width: 45px;
                        height: 45px;
                        font-size: 1rem;
                    }
                }

                /* RTL Support */
                [dir="rtl"] .back-to-top {
                    left: var(--space-xl);
                    right: auto;
                }

                [dir="rtl"] @media (max-width: 768px) {
                    .back-to-top {
                        left: var(--space-lg);
                        right: auto;
                    }
                }
            `}</style>
        </button>
    );
};

export default BackToTopButton;