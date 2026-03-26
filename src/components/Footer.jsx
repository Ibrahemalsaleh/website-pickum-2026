import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo_vertical.png';

const EnhancedFooter = () => {
    const { t } = useLanguage();

    const footerLinks = {
        company: [
            { name: t('nav.home'), href: '#home' },
            { name: t('nav.about'), href: '#about' },
            { name: t('nav.services'), href: '#services' },
            { name: t('nav.apps'), href: '#apps' }
        ],
        support: [
            { name: t('nav.goals'), href: '#goals' },
            { name: t('nav.challenges'), href: '#challenges' },
            { name: t('nav.contact'), href: '#contact' },
            { name: t('nav.faq'), href: '#faq' },
            { name: t('nav.privacy'), href: '/privacy-policy' }
        ]
    };

    const socialMedia = [
        {
            name: 'Facebook',
            icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
            href: 'https://www.facebook.com/pickum.jo',
            color: '#1877f2'
        },
        {
            name: 'Instagram',
            icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
            href: 'https://www.instagram.com/pickum.jo',
            color: '#e4405f'
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-bg">
                <div className="gradient-layer" />
                <div className="pattern-layer" />
            </div>

            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="brand-logo">
                            <div className="logo-icon">
                                <img src={logo} alt={t('footer.brand')} className="logo-image" />
                            </div>
                            <h3>{t('footer.brand')}</h3>
                        </div>
                        <p className="brand-description">{t('footer.description')}</p>
                        <div className="social-media">
                            {socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    style={{ '--social-color': social.color }}
                                    aria-label={social.name}
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-section">
                            <h4 className="section-title">{t('footer.companyTitle')}</h4>
                            <ul className="links-list">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href}>
                                            <span className="link-icon">→</span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4 className="section-title">{t('footer.supportTitle')}</h4>
                            <ul className="links-list">
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href}>
                                            <span className="link-icon">→</span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4 className="section-title">{t('footer.contactTitle')}</h4>
                            <ul className="contact-info">
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                                    </svg>
                                    <span>{t('footer.address')}</span>
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                                    </svg>
                                    <span>00962781068132</span>
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                                    </svg>
                                    <span>info@pickum.jo</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>{t('footer.copyright')}</p>
                    </div>
                    <div className="footer-badges">
                        <div className="badge">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                            </svg>
                            <span>{t('footer.badge1')}</span>
                        </div>
                        <div className="badge">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                            </svg>
                            <span>{t('footer.badge2')}</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer {
                    position: relative;
                    background: #1a1a1a;
                    color: white;
                    padding: 80px 0 0;
                    overflow: hidden;
                }

                .footer-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .gradient-layer {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, #0b7a30ff 0%, #0b7a30ff 50%, #0b7a30ff 100%);
                    opacity: 0.8;
                }

                .pattern-layer {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        radial-gradient(circle at 20% 20%, rgba(164, 222, 2, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(118, 185, 71, 0.08) 0%, transparent 50%);
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: 2fr 3fr;
                    gap: 60px;
                    padding-bottom: 60px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                    z-index: 1;
                }

                .footer-brand {
                    max-width: 400px;
                }

                .brand-logo {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 20px;
                }

                .logo-icon {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #a4de02 0%, #c8f442 100%);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 32px;
                    box-shadow: 0 8px 24px rgba(164, 222, 2, 0.3);
                    overflow: hidden;
                }

                .logo-image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    padding: 4px;
                }

                .brand-logo h3 {
                    font-size: 28px;
                    font-weight: 800;
                    background: linear-gradient(135deg, #ffffff 0%, #a4de02 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .brand-description {
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.8;
                    margin-bottom: 28px;
                    font-size: 15px;
                }

                .social-media {
                    display: flex;
                    gap: 12px;
                }

                .social-link {
                    width: 48px;
                    height: 48px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .social-link svg {
                    width: 22px;
                    height: 22px;
                    color: rgba(255, 255, 255, 0.7);
                    transition: color 0.3s ease;
                }

                .social-link:hover {
                    background: var(--social-color);
                    transform: translateY(-8px) scale(1.1) rotate(5deg);
                    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
                    border-color: transparent;
                }

                .social-link:hover svg {
                    color: white;
                }

                .footer-links-group {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }

                .footer-section {
                    animation: fadeInUp 0.8s ease forwards;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .section-title {
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: #a4de02;
                    position: relative;
                    display: inline-block;
                }

                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 40px;
                    height: 3px;
                    background: linear-gradient(90deg, #a4de02 0%, transparent 100%);
                    border-radius: 2px;
                }
                
                [dir="rtl"] .section-title::after {
                    left: auto;
                    right: 0;
                    background: linear-gradient(-90deg, #a4de02 0%, transparent 100%);
                }

                .links-list {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .links-list a {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    font-size: 15px;
                }

                .link-icon {
                    transition: transform 0.3s ease;
                }

                .links-list a:hover {
                    color: #a4de02;
                    transform: translateX(8px);
                }
                
                [dir="rtl"] .links-list a:hover {
                    transform: translateX(-8px);
                }

                .links-list a:hover .link-icon {
                    transform: translateX(4px);
                }
                
                [dir="rtl"] .links-list a:hover .link-icon {
                    transform: translateX(-4px);
                }

                .contact-info {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .contact-info li {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 14px;
                }

                .contact-info svg {
                    width: 20px;
                    height: 20px;
                    color: #a4de02;
                    flex-shrink: 0;
                }

                .footer-bottom {
                    padding: 32px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    z-index: 1;
                }

                .copyright {
                    
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }

                .footer-badges {
                    display: flex;
                    gap: 20px;
                }

                .badge {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: rgba(164, 222, 2, 0.1);
                    border-radius: 8px;
                    border: 1px solid rgba(164, 222, 2, 0.2);
                }

                .badge svg {
                    width: 18px;
                    height: 18px;
                    color: #a4de02;
                }

                .badge span {
                    font-size: 13px;
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 600;
                }

                @media (max-width: 1024px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .footer-links-group {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .footer {
                        padding: 60px 0 0;
                    }

                    .footer-links-group {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }

                    .footer-bottom {
                        flex-direction: column;
                        gap: 20px;
                        text-align: center;
                    }

                    .footer-badges {
                        flex-direction: column;
                        width: 100%;
                    }

                    .badge {
                        justify-content: center;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .social-link,
                    .links-list a,
                    .footer-section {
                        animation: none;
                        transition: none;
                    }
                }
            `}</style>
        </footer>
    );
};

export default EnhancedFooter;