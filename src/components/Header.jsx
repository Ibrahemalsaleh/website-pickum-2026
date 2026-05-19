import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import logoImage from '../assets/logo_vertical.png';

const EnhancedHeader = () => {
    const { t, isRTL } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
    const [isMobileServicesMenuOpen, setIsMobileServicesMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();
    const servicesMenuRef = useRef(null);
    const headerRef = useRef(null);

    const navLinks = [
        { 
            id: 'home', 
            label: t('nav.home'),
            icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' 
        },
        { 
            id: 'about', 
            label: t('nav.about'),
            icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' 
        },
        { 
            id: 'services', 
            label: t('nav.services'),
            icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
            subLinks: [
                { 
                    path: '/service/home', 
                    label: t('services.homeService.title'),
                    description: t('services.homeService.description'),
                    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                },
                { 
                    path: '/service/general', 
                    label: t('services.generalService.title'),
                    description: t('services.generalService.description'),
                    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                },
                { 
                    path: '/service/transport', 
                    label: t('services.transportService.title'),
                    description: t('services.transportService.description'),
                    icon: 'M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                },
                { 
                    path: '/service/pickup', 
                    label: t('services.pickupService.title'),
                    description: t('services.pickupService.description'),
                    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                }
            ] 
        },
        { 
            id: 'apps', 
            label: t('nav.apps'),
            icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' 
        },
        { 
            id: 'goals', 
            label: t('nav.goals'),
            icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' 
        },
        { 
            id: 'contact', 
            label: t('nav.contact'),
            icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' 
        },
        { 
            id: 'privacy',
            label: t('nav.privacy'),
            icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
            path: '/privacy-policy'
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollY / windowHeight) * 100;
            
            setIsScrolled(scrollY > 20);
            setScrollProgress(scrollPercentage);

            if (location.pathname === '/') {
                const sections = navLinks.map(link => link.id);
                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= 100 && rect.bottom >= 100) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
                setIsServicesMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavClick = (id) => {
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
        } else {
            scrollToSection(id);
        }
    };
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    const renderNavLink = (link) => {
        if (link.subLinks) {
            return (
                <div className="dropdown-wrapper">
                    <button
                        className={`nav-link ${activeSection === link.id ? 'active' : ''} ${isServicesMenuOpen ? 'menu-open' : ''}`}
                        onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                    >
                        <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
                            <path d={link.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{link.label}</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" className="dropdown-icon">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {isServicesMenuOpen && (
                        <div className="mega-menu">
                            <div className="menu-header">
                                <h3>{t('services.title')}</h3>
                                <p>{t('services.subtitle')}</p>
                            </div>
                            <div className="menu-grid">
                                {link.subLinks.map(subLink => (
                                    <Link 
                                        key={subLink.path}
                                        to={subLink.path} 
                                        className="menu-item"
                                        onClick={() => setIsServicesMenuOpen(false)}
                                    >
                                        <div className="item-icon">
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <path d={subLink.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="item-content">
                                            <h4>{subLink.label}</h4>
                                            <p>{subLink.description}</p>
                                        </div>
                                        <svg viewBox="0 0 20 20" fill="currentColor" className="item-arrow">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            );
        } else if (link.path) {
            return (
                <Link
                    to={link.path}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                    <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
                        <path d={link.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{link.label}</span>
                </Link>
            );
        } else {
            return (
                <button
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(link.id)}
                >
                    <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
                        <path d={link.icon} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{link.label}</span>
                </button>
            );
        }
    };

    const renderMobileNavLink = (link) => {
        if (link.subLinks) {
            return (
                <>
                    <button
                        className="mobile-link"
                        onClick={() => setIsMobileServicesMenuOpen(!isMobileServicesMenuOpen)}
                    >
                        <svg viewBox="0 0 24 24" fill="none">
                            <path d={link.icon} stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        <span>{link.label}</span>
                        <svg viewBox="0 0 24 24" fill="none" className={`arrow ${isMobileServicesMenuOpen ? 'open' : ''}`}>
                            <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                    </button>
                    {isMobileServicesMenuOpen && (
                        <ul className="mobile-submenu">
                            {link.subLinks.map(subLink => (
                                <li key={subLink.path}>
                                    <Link 
                                        to={subLink.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d={subLink.icon} stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                        <span>{subLink.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            );
        } else if (link.path) {
            return (
                <Link
                    to={link.path}
                    className="mobile-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d={link.icon} stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{link.label}</span>
                </Link>
            );
        } else {
            return (
                <button
                    className="mobile-link"
                    onClick={() => handleNavClick(link.id)}
                >
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d={link.icon} stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{link.label}</span>
                </button>
            );
        }
    };

    return (
        <>
            <header 
                ref={headerRef}
                className={`header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}
            >
                <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

                <div className="container">
                    <div className="header-content">
                        <Link to="/" className="logo">
                            <img src={logoImage} alt={t('nav.home')} />
                        </Link>

                        <nav className="desktop-nav">
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.id} className="nav-item" ref={link.id === 'services' ? servicesMenuRef : null}>
                                        {renderNavLink(link)}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="header-actions">
                            <LanguageSwitcher />

                            <button 
                                className="mobile-menu-btn"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label={isRTL ? 'القائمة' : 'Menu'}
                            >
                                <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)} />
                <div className="mobile-panel">
                    <div className="mobile-header">
                        <Link to="/" className="mobile-logo" onClick={() => setIsMobileMenuOpen(false)}>
                            <img src={logoImage} alt={t('nav.home')} />
                            <span>{isRTL ? 'أهلاً بكم' : 'Ahlan Pickum'}</span>
                        </Link>
                        <button className="mobile-close" onClick={() => setIsMobileMenuOpen(false)}>
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>

                    <nav className="mobile-nav">
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    {renderMobileNavLink(link)}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mobile-footer">
                        <LanguageSwitcher isMobile={true} />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(25px) saturate(180%);
                    border-bottom: 1px solid rgba(30, 86, 49, 0.08);
                    z-index: var(--z-fixed);
                    transition: var(--transition-professional);
                    box-shadow: var(--shadow-sm);
                }

                .header::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 100%;
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, transparent 100%);
                    pointer-events: none;
                }

                .header::after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    width: 0;
                    height: 3px;
                    background: var(--accent-gradient);
                    transition: var(--transition-slow);
                }

                .header.scrolled {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(30px) saturate(180%);
                    box-shadow: var(--shadow-lg);
                    border-bottom-color: rgba(30, 86, 49, 0.12);
                }

                .header.scrolled::after {
                    width: 100%;
                }

                .scroll-progress {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 3px;
                    background: var(--accent-gradient);
                    width: 0;
                    transition: width 0.1s ease-out;
                    z-index: 10;
                    box-shadow: 0 0 10px rgba(164, 222, 2, 0.5);
                }

                .header-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--space-lg) 0;
                    transition: var(--transition-professional);
                    position: relative;
                    z-index: 1;
                }

                .header.scrolled .header-content {
                    padding: var(--space-md) 0;
                }

                .logo {
                    height: 60px;
                    transition: var(--transition-spring);
                    cursor: pointer;
                    position: relative;
                    filter: drop-shadow(0 4px 8px rgba(30, 86, 49, 0.15));
                }

                .logo::before {
                    content: '';
                    position: absolute;
                    inset: -8px;
                    background: var(--accent-gradient);
                    border-radius: var(--radius-2xl);
                    opacity: 0;
                    transition: var(--transition-professional);
                    z-index: -1;
                    filter: blur(12px);
                }

                .logo:hover::before {
                    opacity: 0.2;
                }

                .logo:hover {
                    transform: scale(1.08) translateY(-3px) rotate(2deg);
                    filter: drop-shadow(0 8px 16px rgba(30, 86, 49, 0.25));
                }

                .header.scrolled .logo {
                    height: 50px;
                }

                .logo img {
                    height: 100%;
                    width: auto;
                    object-fit: contain;
                    transition: var(--transition-professional);
                }

                /* Desktop Navigation */
                .desktop-nav {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                }

                @media (max-width: 1024px) {
                    .desktop-nav {
                        display: none;
                    }
                }

                .desktop-nav ul {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .nav-link {
                    color: var(--text-primary);
                    text-decoration: none;
                    font-weight: var(--font-weight-medium);
                    font-size: 0.95rem;
                    position: relative;
                    padding: var(--space-sm) var(--space-lg);
                    border-radius: var(--radius-xl);
                    transition: var(--transition-professional);
                    display: flex;
                    align-items: center;
                    gap: var(--space-xs);
                    overflow: hidden;
                    background: none;
                    border: none;
                    cursor: pointer;
                }

                .nav-link::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: var(--glass-gradient);
                    backdrop-filter: blur(10px);
                    transform: scaleX(0);
                    transition: var(--transition-professional);
                    border-radius: inherit;
                    z-index: -1;
                    box-shadow: var(--shadow-sm);
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 4px;
                    left: 50%;
                    width: 0;
                    height: 3px;
                    background: var(--accent-gradient);
                    transition: var(--transition-spring);
                    transform: translateX(-50%);
                    border-radius: var(--radius-full);
                    box-shadow: var(--shadow-glow);
                }

                .nav-link:hover {
                    color: var(--primary-color);
                    transform: translateY(-3px);
                }

                .nav-link:hover::before {
                    transform: scaleX(1);
                }

                .nav-link:hover::after {
                    width: 80%;
                }

                .nav-link.active {
                    color: var(--primary-color);
                }

                .nav-link.active::before {
                    transform: scaleX(1);
                    background: rgba(30, 86, 49, 0.08);
                }

                .nav-link.active::after {
                    width: 80%;
                }

                .nav-icon {
                    width: 18px;
                    height: 18px;
                    transition: var(--transition-spring);
                }

                .nav-link:hover .nav-icon {
                    transform: scale(1.2) rotate(10deg);
                }

                .dropdown-icon {
                    width: 16px;
                    height: 16px;
                    transition: var(--transition-professional);
                }

                .nav-link.menu-open .dropdown-icon {
                    transform: rotate(180deg);
                }

                /* Mega Menu */
                .mega-menu {
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 800px;
                    background: var(--surface-white);
                    border-radius: var(--radius-2xl);
                    box-shadow: var(--shadow-floating);
                    padding: var(--space-2xl);
                    margin-top: var(--space-md);
                    animation: slideDown 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    border: 1px solid rgba(30, 86, 49, 0.1);
                    backdrop-filter: blur(20px);
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                }

                .menu-header {
                    text-align: center;
                    margin-bottom: var(--space-xl);
                }

                .menu-header h3 {
                    font-size: var(--font-size-2xl);
                    font-weight: var(--font-weight-bold);
                    color: var(--primary-color);
                    margin-bottom: var(--space-sm);
                }

                .menu-header p {
                    color: var(--text-secondary);
                    font-size: var(--font-size-sm);
                }

                .menu-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: var(--space-lg);
                }

                .menu-item {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-md);
                    padding: var(--space-lg);
                    background: var(--surface-light);
                    border-radius: var(--radius-lg);
                    text-decoration: none;
                    transition: var(--transition-spring);
                    border: 1px solid transparent;
                    position: relative;
                    overflow: hidden;
                }

                .menu-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 100%;
                    background: var(--accent-gradient);
                    transform: scaleY(0);
                    transition: var(--transition-professional);
                }

                .menu-item:hover {
                    background: var(--surface-white);
                    border-color: rgba(30, 86, 49, 0.1);
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                }

                .menu-item:hover::before {
                    transform: scaleY(1);
                }

                .item-icon {
                    width: 48px;
                    height: 48px;
                    background: var(--primary-gradient);
                    border-radius: var(--radius-lg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .item-icon svg {
                    width: 24px;
                    height: 24px;
                    color: var(--text-inverse);
                }

                .item-content {
                    flex: 1;
                }

                .item-content h4 {
                    font-size: var(--font-size-base);
                    font-weight: var(--font-weight-semibold);
                    color: var(--text-primary);
                    margin-bottom: var(--space-xs);
                }

                .item-content p {
                    font-size: var(--font-size-sm);
                    color: var(--text-secondary);
                    line-height: 1.5;
                    margin: 0;
                }

                .item-arrow {
                    width: 20px;
                    height: 20px;
                    color: var(--text-muted);
                    transition: var(--transition-professional);
                    flex-shrink: 0;
                    margin-top: var(--space-sm);
                }

                .menu-item:hover .item-arrow {
                    color: var(--primary-color);
                    transform: translateX(4px);
                }

                /* Header Actions */
                .header-actions {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                }

                /* Mobile Menu Button */
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    padding: var(--space-sm);
                    cursor: pointer;
                    border-radius: var(--radius-md);
                    transition: var(--transition-professional);
                }

                @media (max-width: 1024px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                }

                .mobile-menu-btn:hover {
                    background: rgba(30, 86, 49, 0.05);
                }

                .hamburger {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    width: 24px;
                    height: 18px;
                    position: relative;
                }

                .hamburger span {
                    display: block;
                    height: 2px;
                    background: var(--text-primary);
                    border-radius: 1px;
                    transition: var(--transition-professional);
                    transform-origin: center;
                }

                .hamburger.active span:nth-child(1) {
                    transform: rotate(45deg) translate(6px, 6px);
                }

                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }

                .hamburger.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(6px, -6px);
                }

                /* Mobile Menu */
                .mobile-menu {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: var(--z-modal);
                    pointer-events: none;
                }

                .mobile-menu.active {
                    pointer-events: all;
                }

                .mobile-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.5);
                    opacity: 0;
                    transition: var(--transition-professional);
                    backdrop-filter: blur(5px);
                }

                .mobile-menu.active .mobile-overlay {
                    opacity: 1;
                }

                .mobile-panel {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 320px;
                    background: var(--surface-white);
                    transform: translateX(100%);
                    transition: var(--transition-spring);
                    display: flex;
                    flex-direction: column;
                    box-shadow: var(--shadow-2xl);
                }

                .mobile-menu.active .mobile-panel {
                    transform: translateX(0);
                }

                .mobile-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--space-xl);
                    border-bottom: 1px solid var(--surface-gray);
                }

                .mobile-logo {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    text-decoration: none;
                }

                .mobile-logo img {
                    width: 40px;
                    height: 40px;
                }

                .mobile-logo span {
                    font-size: var(--font-size-lg);
                    font-weight: var(--font-weight-bold);
                    color: var(--text-primary);
                }

                .mobile-close {
                    background: none;
                    border: none;
                    padding: var(--space-sm);
                    cursor: pointer;
                    color: var(--text-secondary);
                    border-radius: var(--radius-md);
                    transition: var(--transition-professional);
                }

                .mobile-close:hover {
                    background: var(--surface-gray);
                    color: var(--text-primary);
                }

                .mobile-close svg {
                    width: 24px;
                    height: 24px;
                }

                .mobile-nav {
                    flex: 1;
                    padding: var(--space-xl);
                    overflow-y: auto;
                }

                .mobile-nav ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .mobile-nav li {
                    margin-bottom: var(--space-xs);
                }

                .mobile-link {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    width: 100%;
                    padding: var(--space-md) var(--space-lg);
                    background: none;
                    border: none;
                    border-radius: var(--radius-lg);
                    color: var(--text-primary);
                    font-size: var(--font-size-base);
                    font-weight: var(--font-weight-medium);
                    cursor: pointer;
                    transition: var(--transition-professional);
                    text-decoration: none;
                }

                .mobile-link:hover {
                    background: var(--surface-light);
                    color: var(--primary-color);
                }

                .mobile-link svg {
                    width: 20px;
                    height: 20px;
                }

                .arrow {
                    margin-left: auto;
                    transition: var(--transition-professional);
                }

                .arrow.open {
                    transform: rotate(180deg);
                }

                .mobile-submenu {
                    list-style: none;
                    margin: var(--space-sm) 0 0 var(--space-2xl);
                    padding: 0;
                    background: var(--surface-light);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                }

                .mobile-submenu li {
                    margin: 0;
                }

                .mobile-submenu a {
                    display: flex;
                    align-items: center;
                    gap: var(--space-md);
                    padding: var(--space-md) var(--space-lg);
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: var(--transition-professional);
                    font-size: var(--font-size-sm);
                }

                .mobile-submenu a:hover {
                    background: rgba(30, 86, 49, 0.05);
                    color: var(--primary-color);
                }

                .mobile-submenu svg {
                    width: 16px;
                    height: 16px;
                }

                .mobile-footer {
                    padding: var(--space-xl);
                    border-top: 1px solid var(--surface-gray);
                }

                /* RTL Support */
                :global([dir="rtl"]) .mobile-panel {
                    right: auto;
                    left: 0;
                    transform: translateX(-100%);
                }

                :global([dir="rtl"]) .mobile-menu.active .mobile-panel {
                    transform: translateX(0);
                }

                :global([dir="rtl"]) .item-arrow {
                    transform: rotate(180deg);
                }

                :global([dir="rtl"]) .menu-item:hover .item-arrow {
                    transform: rotate(180deg) translateX(4px);
                }

                :global([dir="rtl"]) .dropdown-icon {
                    transform: rotate(180deg);
                }

                :global([dir="rtl"]) .nav-link.menu-open .dropdown-icon {
                    transform: rotate(0deg);
                }

                :global([dir="rtl"]) .mobile-submenu {
                    margin-right: var(--space-2xl);
                    margin-left: 0;
                }

                :global([dir="rtl"]) .arrow {
                    margin-right: auto;
                    margin-left: 0;
                    transform: rotate(180deg);
                }

                :global([dir="rtl"]) .arrow.open {
                    transform: rotate(0deg);
                }

                :global([dir="rtl"]) .mega-menu {
                    left: auto;
                    right: 50%;
                    transform: translateX(50%);
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateX(50%) translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(50%) translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

export default EnhancedHeader;