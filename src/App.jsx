import React, { useEffect, useState, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTopButton from './components/BackToTopButton';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Apps from './components/Apps';
import Goals from './components/Goals';
import Challenges from './components/Challenges';
import PartnersSection from './components/PartnersSection';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

// استيراد صفحات الخدمات
import HomeService from './components/services/HomeService';
import GeneralService from './components/services/GeneralService';
import TransportService from './components/services/TransportService';
import PickupService from './components/services/PickupService';
import BusService from './components/services/BusService';

// استيراد ملف الأنماط المشترك للخدمات
import './styles/ServiceDetailStyles.css';

// Loading Screen Component
const LoadingScreen = ({ message = "جاري تحميل أهلاً بكم..." }) => (
    <div className="loading-screen">
        <div className="loading-container">
            <div className="loading-logo">
                <div className="logo-placeholder">
                    <i className="fas fa-truck-moving"></i>
                </div>
            </div>
            <div className="loading-spinner">
                <div className="spinner">
                    <div className="spinner-dot"></div>
                    <div className="spinner-dot"></div>
                    <div className="spinner-dot"></div>
                    <div className="spinner-dot"></div>
                </div>
            </div>
            <p className="loading-text">{message}</p>
            <div className="loading-progress">
                <div className="loading-bar"></div>
            </div>
        </div>
        
        <style jsx>{`
            .loading-screen {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: linear-gradient(135deg, #1e5631 0%, #2a7d46 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeOut 0.5s ease-in-out 2s forwards;
            }

            .loading-container {
                text-align: center;
                color: white;
                max-width: 300px;
            }

            .loading-logo {
                margin-bottom: 2rem;
                position: relative;
            }

            .logo-placeholder {
                width: 100px;
                height: 100px;
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                border: 2px solid rgba(255, 255, 255, 0.3);
                animation: logoFloat 3s ease-in-out infinite;
            }

            .logo-placeholder i {
                font-size: 2.5rem;
                color: #a4de02;
                animation: logoRotate 2s linear infinite;
            }

            .loading-spinner {
                margin: 2rem 0;
            }

            .spinner {
                display: flex;
                justify-content: center;
                gap: 0.5rem;
            }

            .spinner-dot {
                width: 12px;
                height: 12px;
                background: #a4de02;
                border-radius: 50%;
                animation: spinnerBounce 1.4s ease-in-out infinite both;
            }

            .spinner-dot:nth-child(1) { animation-delay: -0.32s; }
            .spinner-dot:nth-child(2) { animation-delay: -0.16s; }
            .spinner-dot:nth-child(3) { animation-delay: 0s; }
            .spinner-dot:nth-child(4) { animation-delay: 0.16s; }

            .loading-text {
                font-size: 1.125rem;
                font-weight: 500;
                margin-bottom: 1.5rem;
                opacity: 0.9;
            }

            .loading-progress {
                width: 200px;
                height: 4px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 2px;
                overflow: hidden;
                margin: 0 auto;
            }

            .loading-bar {
                height: 100%;
                background: #a4de02;
                border-radius: 2px;
                animation: loadingProgress 2s ease-in-out infinite;
            }

            @keyframes fadeOut {
                to {
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                }
            }

            @keyframes logoFloat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }

            @keyframes logoRotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            @keyframes spinnerBounce {
                0%, 80%, 100% {
                    transform: scale(0);
                    opacity: 0.5;
                }
                40% {
                    transform: scale(1);
                    opacity: 1;
                }
            }

            @keyframes loadingProgress {
                0% { transform: translateX(-100%); }
                50% { transform: translateX(0%); }
                100% { transform: translateX(100%); }
            }
        `}</style>
    </div>
);

// Floating Shapes Component
const FloatingShapes = () => {
    const [shapes] = useState(() => 
        Array.from({ length: 6 }, (_, i) => ({
            id: i,
            size: Math.random() * 100 + 50,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 10,
            duration: Math.random() * 10 + 20
        }))
    );

    return (
        <div className="floating-shapes">
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    className="floating-shape"
                    style={{
                        '--size': `${shape.size}px`,
                        '--x': `${shape.x}%`,
                        '--y': `${shape.y}%`,
                        '--delay': `${shape.delay}s`,
                        '--duration': `${shape.duration}s`
                    }}
                />
            ))}
            
            <style jsx>{`
                .floating-shapes {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: -1;
                    overflow: hidden;
                }

                .floating-shape {
                    position: absolute;
                    width: var(--size);
                    height: var(--size);
                    top: var(--y);
                    left: var(--x);
                    background: linear-gradient(135deg, #1e5631 0%, #2a7d46 100%);
                    border-radius: 50%;
                    opacity: 0.04;
                    animation: float var(--duration) ease-in-out infinite;
                    animation-delay: var(--delay);
                    filter: blur(1px);
                    will-change: transform;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-30px) translateX(20px) rotate(90deg);
                    }
                    50% {
                        transform: translateY(-15px) translateX(-20px) rotate(180deg);
                    }
                    75% {
                        transform: translateY(-25px) translateX(15px) rotate(270deg);
                    }
                }

                @media (max-width: 768px) {
                    .floating-shapes {
                        display: none;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .floating-shape {
                        animation: none;
                    }
                }
            `}</style>
        </div>
    );
};

// الصفحة الرئيسية
const HomePage = () => (
    <>
        <Hero />
        <About />
        <Services />
        <Apps />
        <Goals />
        <Challenges />
        <PartnersSection />
        <TeamSection />
        <FAQSection />
        <Contact />
    </>
);

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);

    return null;
};

// Main Layout Component
const MainLayout = ({ children }) => {
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (isInitialLoad) {
            const progressInterval = setInterval(() => {
                setLoadingProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(progressInterval);
                        setTimeout(() => setIsInitialLoad(false), 300);
                        return 100;
                    }
                    return prev + Math.random() * 20;
                });
            }, 80);

            return () => clearInterval(progressInterval);
        }
    }, [isInitialLoad]);

    useEffect(() => {
        if (!isInitialLoad) {
            const observerOptions = {
                threshold: [0.1, 0.3, 0.5],
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        const delay = index * 100;
                        setTimeout(() => {
                            entry.target.classList.add('active');
                        }, delay);
                    }
                });
            }, observerOptions);

            setTimeout(() => {
                const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
                revealElements.forEach(element => observer.observe(element));
            }, 100);

            return () => {
                const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
                revealElements.forEach(element => observer.unobserve(element));
            };
        }
    }, [isInitialLoad, location.pathname]);

    if (isInitialLoad) {
        return <LoadingScreen message={`جاري التحميل... ${Math.round(loadingProgress)}%`} />;
    }

    return (
        <>
            <ScrollToTop />
            <FloatingShapes />
            <ScrollProgressBar />
            <Header />
            <main className="main-content">
                <div className="page-wrapper">
                    {children}
                </div>
            </main>
            <Footer />
            <BackToTopButton />
            
            <style jsx>{`
                .page-wrapper {
                    animation: fadeInPage 0.4s ease-in-out;
                }

                @keyframes fadeInPage {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

// Main App Component
const App = () => {
    return (
        <ErrorBoundary>
            <LanguageProvider>
                <BrowserRouter>
                    <div className="app">
                        <MainLayout>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/service/home" element={<HomeService />} />
                                <Route path="/service/general" element={<GeneralService />} />
                                <Route path="/service/transport" element={<TransportService />} />
                                <Route path="/service/pickup" element={<PickupService />} />
                                <Route path="/service/bus" element={<BusService />} />
                                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            </Routes>
                        </MainLayout>
                    </div>
                </BrowserRouter>
            </LanguageProvider>
        </ErrorBoundary>
    );
};

export default App;