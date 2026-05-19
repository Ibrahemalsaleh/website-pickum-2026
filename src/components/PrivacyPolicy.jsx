import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy = () => {
    const { t, isRTL } = useLanguage();
    const [activeSection, setActiveSection] = useState('introduction');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        { id: 'introduction', title: t('privacy.introduction.title') },
        { id: 'personal-info', title: t('privacy.personalInfo.title') },
        { id: 'data-usage', title: t('privacy.dataUsage.title') },
        { id: 'data-sharing', title: t('privacy.dataSharing.title') },
        { id: 'data-security', title: t('privacy.dataSecurity.title') },
        { id: 'user-rights', title: t('privacy.userRights.title') },
        { id: 'cookies', title: t('privacy.cookies.title') },
        { id: 'policy-updates', title: t('privacy.policyUpdates.title') },
        { id: 'contact', title: t('privacy.contact.title') }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    };

    return (
        <div className="privacy-policy">
         
          

            {/* Main Content */}
            <div className="privacy-container">
                <div className="container">
                    <div className="privacy-layout">
                        {/* Sidebar Navigation */}
                        <aside className="privacy-sidebar">
                            <div className="sidebar-sticky">
                                <h3 className="sidebar-title">{t('privacy.tableOfContents')}</h3>
                                <nav className="sidebar-nav">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            className={`sidebar-link ${activeSection === section.id ? 'active' : ''}`}
                                            onClick={() => scrollToSection(section.id)}
                                        >
                                            <span className="link-text">{section.title}</span>
                                            <div className="link-indicator"></div>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Content */}
                        <main className="privacy-content">
                            {/* Introduction */}
                            <section id="introduction" className="content-section">
                                <h2>{t('privacy.introduction.title')}</h2>
                                <p>{t('privacy.introduction.content1')}</p>
                                <p>{t('privacy.introduction.content2')}</p>
                                
                                <div className="info-card">
                                    <div className="info-icon">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div className="info-content">
                                        <h4>{t('privacy.introduction.noteTitle')}</h4>
                                        <p>{t('privacy.introduction.noteContent')}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Personal Information */}
                            <section id="personal-info" className="content-section">
                                <h2>{t('privacy.personalInfo.title')}</h2>
                                <p>{t('privacy.personalInfo.content')}</p>
                                
                                <div className="data-categories">
                                    <div className="categories-grid">
                                        <div className="category-card">
                                            <div className="category-icon personal"></div>
                                            <h5>{t('privacy.personalInfo.basicInfo.title')}</h5>
                                            <ul>
                                                {t('privacy.personalInfo.basicInfo.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="category-card">
                                            <div className="category-icon payment"></div>
                                            <h5>{t('privacy.personalInfo.paymentInfo.title')}</h5>
                                            <ul>
                                                {t('privacy.personalInfo.paymentInfo.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="category-card">
                                            <div className="category-icon location"></div>
                                            <h5>{t('privacy.personalInfo.locationInfo.title')}</h5>
                                            <ul>
                                                {t('privacy.personalInfo.locationInfo.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="category-card">
                                            <div className="category-icon usage"></div>
                                            <h5>{t('privacy.personalInfo.usageInfo.title')}</h5>
                                            <ul>
                                                {t('privacy.personalInfo.usageInfo.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="category-card">
                                            <div className="category-icon driver"></div>
                                            <h5>{t('privacy.personalInfo.driverInfo.title')}</h5>
                                            <ul>
                                                {t('privacy.personalInfo.driverInfo.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="category-card">
                                            <div className="category-icon device"></div>
                                            <h5>{t('privacy.personalInfo.devicePermissions.title')}</h5>
                                            <ul>
                                                {t('privacy.personalInfo.devicePermissions.items', { returnObjects: true }).map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Data Usage */}
                            <section id="data-usage" className="content-section">
                                <h2>{t('privacy.dataUsage.title')}</h2>
                                <p>{t('privacy.dataUsage.content')}</p>
                                
                                <div className="usage-purposes">
                                    <div className="purposes-list">
                                        {t('privacy.dataUsage.purposes', { returnObjects: true }).map((purpose, index) => (
                                            <div key={index} className="purpose-item">
                                                <div className="purpose-number">{index + 1}</div>
                                                <div className="purpose-content">
                                                    <h5>{purpose.title}</h5>
                                                    <p>{purpose.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Data Sharing */}
                            <section id="data-sharing" className="content-section">
                                <h2>{t('privacy.dataSharing.title')}</h2>
                                <p>{t('privacy.dataSharing.content')}</p>
                                
                                <div className="sharing-partners">
                                    <h4>{t('privacy.dataSharing.casesTitle')}</h4>
                                    <div className="partners-grid">
                                        {t('privacy.dataSharing.cases', { returnObjects: true }).map((caseItem, index) => (
                                            <div key={index} className="partner-card">
                                                <div className="partner-icon">
                                                    <svg viewBox="0 0 24 24" fill="none">
                                                        <path d={caseItem.icon} stroke="currentColor" strokeWidth="2"/>
                                                    </svg>
                                                </div>
                                                <div className="partner-info">
                                                    <h5>{caseItem.name}</h5>
                                                    <p>{caseItem.purpose}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="info-card assurance">
                                    <div className="info-icon">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div className="info-content">
                                        <h4>{t('privacy.dataSharing.assuranceTitle')}</h4>
                                        <p>{t('privacy.dataSharing.assuranceContent')}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Data Security */}
                            <section id="data-security" className="content-section">
                                <h2>{t('privacy.dataSecurity.title')}</h2>
                                <p>{t('privacy.dataSecurity.content')}</p>
                                
                                <div className="security-measures">
                                    <h4>{t('privacy.dataSecurity.measuresTitle')}</h4>
                                    <div className="measures-list">
                                        {t('privacy.dataSecurity.measures', { returnObjects: true }).map((measure, index) => (
                                            <div key={index} className="measure-item">
                                                <div className="measure-check">
                                                    <svg viewBox="0 0 24 24" fill="none">
                                                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
                                                    </svg>
                                                </div>
                                                <span>{measure}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* User Rights */}
                            <section id="user-rights" className="content-section">
                                <h2>{t('privacy.userRights.title')}</h2>
                                <p>{t('privacy.userRights.content')}</p>
                                
                                <div className="rights-grid">
                                    {t('privacy.userRights.rights', { returnObjects: true }).map((right, index) => (
                                        <div key={index} className="right-card">
                                            <div className="right-icon">
                                                <svg viewBox="0 0 24 24" fill="none">
                                                    <path d={right.icon} stroke="currentColor" strokeWidth="2"/>
                                                </svg>
                                            </div>
                                            <div className="right-content">
                                                <h5>{right.title}</h5>
                                                <p>{right.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Cookies */}
                            <section id="cookies" className="content-section">
                                <h2>{t('privacy.cookies.title')}</h2>
                                <p>{t('privacy.cookies.content')}</p>
                                
                                <div className="info-card">
                                    <div className="info-icon">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div className="info-content">
                                        <h4>{t('privacy.cookies.purposeTitle')}</h4>
                                        <p>{t('privacy.cookies.purposeContent')}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Policy Updates */}
                            <section id="policy-updates" className="content-section">
                                <h2>{t('privacy.policyUpdates.title')}</h2>
                                <p>{t('privacy.policyUpdates.content')}</p>
                                
                                <div className="changes-process">
                                    <div className="process-steps">
                                        {t('privacy.policyUpdates.process', { returnObjects: true }).map((step, index) => (
                                            <div key={index} className="process-step">
                                                <div className="step-number">{index + 1}</div>
                                                <div className="step-content">
                                                    <h5>{step.title}</h5>
                                                    <p>{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Contact */}
                            <section id="contact" className="content-section">
                                <h2>{t('privacy.contact.title')}</h2>
                                <p>{t('privacy.contact.content')}</p>
                                
                                <div className="contact-methods">
                                    <div className="contact-card">
                                        <div className="contact-icon">
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                        <div className="contact-info">
                                            <h5>{t('privacy.contact.emailTitle')}</h5>
                                            <a href={`mailto:${t('privacy.contact.email')}`}>{t('privacy.contact.email')}</a>
                                        </div>
                                    </div>
                                    
                                    <div className="contact-card">
                                        <div className="contact-icon">
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                        <div className="contact-info">
                                            <h5>{t('privacy.contact.addressTitle')}</h5>
                                            <p>{t('privacy.contact.address')}</p>
                                        </div>
                                    </div>

                                    <div className="contact-card">
                                        <div className="contact-icon">
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2"/>
                                            </svg>
                                        </div>
                                        <div className="contact-info">
                                            <h5>{t('privacy.contact.phoneTitle')}</h5>
                                            <a href={`tel:${t('privacy.contact.phone')}`}>{t('privacy.contact.phone')}</a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Consent Banner */}
                        
                        </main>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .privacy-policy {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                }

                /* Hero Section */
                .privacy-hero {
                    background: linear-gradient(135deg, #1e5631 0%, #2a7d46 100%);
                    color: white;
                    padding: 120px 0 80px;
                    position: relative;
                    overflow: hidden;
                }

                .privacy-hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }

                .hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .breadcrumb {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    margin-bottom: 30px;
                    font-size: 0.9rem;
                }

                .breadcrumb-link {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .breadcrumb-link:hover {
                    color: white;
                }

                .breadcrumb-link svg {
                    width: 16px;
                    height: 16px;
                }

                .breadcrumb-separator {
                    color: rgba(255, 255, 255, 0.5);
                }

                .breadcrumb-current {
                    color: white;
                    font-weight: 600;
                }

                .hero-title {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 16px;
                    line-height: 1.1;
                }

                .hero-description {
                    font-size: 1.25rem;
                    opacity: 0.9;
                    margin-bottom: 30px;
                    line-height: 1.6;
                }

                .hero-meta {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.9rem;
                    opacity: 0.8;
                }

                .meta-item svg {
                    width: 16px;
                    height: 16px;
                }

                /* Main Container */
                .privacy-container {
                    padding: 80px 0;
                }

                .privacy-layout {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: 40px;
                    align-items: start;
                }

                /* Sidebar */
                .privacy-sidebar {
                    position: sticky;
                    top: 100px;
                }

                .sidebar-sticky {
                    background: white;
                    border-radius: 16px;
                    padding: 24px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    border: 1px solid #e2e8f0;
                }

                .sidebar-title {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: #1e5631;
                    margin-bottom: 20px;
                    padding-bottom: 12px;
                    border-bottom: 2px solid #f1f5f9;
                }

                .sidebar-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .sidebar-link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 16px;
                    background: none;
                    border: none;
                    border-radius: 8px;
                    color: #64748b;
                    font-size: 0.95rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                }

                .sidebar-link:hover {
                    background: rgba(30, 86, 49, 0.05);
                    color: #1e5631;
                }

                .sidebar-link.active {
                    background: rgba(30, 86, 49, 0.1);
                    color: #1e5631;
                    font-weight: 600;
                }

                .link-indicator {
                    width: 4px;
                    height: 4px;
                    background: #1e5631;
                    border-radius: 50%;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .sidebar-link.active .link-indicator {
                    opacity: 1;
                }

                /* Content */
                .privacy-content {
                    background: white;
                    border-radius: 16px;
                    padding: 40px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    border: 1px solid #e2e8f0;
                }

                .content-section {
                    margin-bottom: 60px;
                }

                .content-section:last-child {
                    margin-bottom: 0;
                }

                .content-section h2 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #1e5631;
                    margin-bottom: 16px;
                    padding-bottom: 12px;
                    border-bottom: 2px solid #f1f5f9;
                }

                .content-section p {
                    color: #4a5568;
                    line-height: 1.7;
                    margin-bottom: 16px;
                }

                /* Info Card */
                .info-card {
                    display: flex;
                    gap: 16px;
                    background: rgba(30, 86, 49, 0.05);
                    border: 1px solid rgba(30, 86, 49, 0.1);
                    border-radius: 12px;
                    padding: 20px;
                    margin: 20px 0;
                }

                .info-card.assurance {
                    background: rgba(164, 222, 2, 0.05);
                    border: 1px solid rgba(164, 222, 2, 0.1);
                }

                .info-icon {
                    width: 40px;
                    height: 40px;
                    background: #1e5631;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .info-card.assurance .info-icon {
                    background: #a4de02;
                }

                .info-icon svg {
                    width: 20px;
                    height: 20px;
                    color: white;
                }

                .info-content h4 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1e5631;
                    margin-bottom: 8px;
                }

                .info-card.assurance .info-content h4 {
                    color: #2a7d46;
                }

                .info-content p {
                    color: #4a5568;
                    margin: 0;
                }

                /* Data Categories */
                .data-categories {
                    margin-top: 30px;
                }

                .categories-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                }

                .category-card {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 24px;
                    transition: all 0.3s ease;
                }

                .category-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
                }

                .category-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    margin-bottom: 16px;
                    position: relative;
                }

                .category-icon.personal {
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                }

                .category-icon.payment {
                    background: linear-gradient(135deg, #a4de02, #8bc34a);
                }

                .category-icon.location {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                }

                .category-icon.usage {
                    background: linear-gradient(135deg, #f093fb, #f5576c);
                }

                .category-icon.driver {
                    background: linear-gradient(135deg, #f59e0b, #d97706);
                }

                .category-icon.device {
                    background: linear-gradient(135deg, #06b6d4, #0891b2);
                }

                .category-card h5 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1e5631;
                    margin-bottom: 12px;
                }

                .category-card ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .category-card li {
                    color: #4a5568;
                    padding: 4px 0;
                    position: relative;
                    padding-left: 16px;
                }

                .category-card li::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 12px;
                    width: 6px;
                    height: 6px;
                    background: #a4de02;
                    border-radius: 50%;
                }

                /* Usage Purposes */
                .usage-purposes {
                    margin-top: 30px;
                }

                .purposes-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .purpose-item {
                    display: flex;
                    gap: 16px;
                    padding: 20px;
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                }

                .purpose-number {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    color: white;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    flex-shrink: 0;
                }

                .purpose-content h5 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1e5631;
                    margin-bottom: 8px;
                }

                .purpose-content p {
                    color: #4a5568;
                    margin: 0;
                }

                /* Data Sharing */
                .sharing-partners {
                    margin-top: 30px;
                }

                .sharing-partners h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1e5631;
                    margin-bottom: 20px;
                }

                .partners-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 16px;
                }

                .partner-card {
                    display: flex;
                    gap: 16px;
                    padding: 20px;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }

                .partner-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }

                .partner-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .partner-icon svg {
                    width: 24px;
                    height: 24px;
                    color: white;
                }

                .partner-info h5 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1e5631;
                    margin-bottom: 4px;
                }

                .partner-info p {
                    color: #4a5568;
                    margin: 0;
                    font-size: 0.9rem;
                }

                /* Security Measures */
                .security-measures {
                    margin-top: 30px;
                }

                .security-measures h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #1e5631;
                    margin-bottom: 20px;
                }

                .measures-list {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .measure-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    background: #f8fafc;
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
                }

                .measure-check {
                    width: 24px;
                    height: 24px;
                    background: #a4de02;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .measure-check svg {
                    width: 14px;
                    height: 14px;
                    color: white;
                }

                .measure-item span {
                    color: #4a5568;
                    font-weight: 500;
                }

                /* User Rights */
                .rights-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                    margin-top: 30px;
                }

                .right-card {
                    display: flex;
                    gap: 16px;
                    padding: 24px;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }

                .right-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
                }

                .right-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .right-icon svg {
                    width: 24px;
                    height: 24px;
                    color: white;
                }

                .right-content h5 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1e5631;
                    margin-bottom: 8px;
                }

                .right-content p {
                    color: #4a5568;
                    margin: 0;
                }

                /* Changes Process */
                .changes-process {
                    margin-top: 30px;
                }

                .process-steps {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .process-step {
                    display: flex;
                    gap: 16px;
                    padding: 20px;
                    background: #f8fafc;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                }

                .step-number {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    color: white;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    flex-shrink: 0;
                }

                .step-content h5 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1e5631;
                    margin-bottom: 8px;
                }

                .step-content p {
                    color: #4a5568;
                    margin: 0;
                }

                /* Contact */
                .contact-methods {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin-top: 30px;
                }

                .contact-card {
                    display: flex;
                    gap: 16px;
                    padding: 24px;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                }

                .contact-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .contact-icon svg {
                    width: 24px;
                    height: 24px;
                    color: white;
                }

                .contact-info h5 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1e5631;
                    margin-bottom: 8px;
                }

                .contact-info a, .contact-info p {
                    color: #4a5568;
                    margin: 0;
                    text-decoration: none;
                }

                .contact-info a:hover {
                    color: #1e5631;
                }

                /* Consent Banner */
                .consent-banner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    color: white;
                    padding: 30px;
                    border-radius: 16px;
                    margin-top: 40px;
                }

                .consent-content h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 8px;
                }

                .consent-content p {
                    margin: 0;
                    opacity: 0.9;
                }

                .consent-actions {
                    display: flex;
                    gap: 12px;
                }

                .btn {
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: none;
                    cursor: pointer;
                    font-size: 0.95rem;
                }

                .btn-primary {
                    background: white;
                    color: #1e5631;
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                }

                .btn-secondary {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                /* Responsive Design */
                @media (max-width: 1024px) {
                    .privacy-layout {
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }

                    .privacy-sidebar {
                        position: static;
                    }

                    .sidebar-sticky {
                        position: sticky;
                        top: 80px;
                    }
                }

                @media (max-width: 768px) {
                    .privacy-hero {
                        padding: 100px 0 60px;
                    }

                    .hero-title {
                        font-size: 2.25rem;
                    }

                    .hero-description {
                        font-size: 1.125rem;
                    }

                    .privacy-content {
                        padding: 30px 24px;
                    margin: 0 16px;
                    border-radius: 12px;
                    margin-top: -40px;
                    position: relative;
                        z-index: 3;
                    }

                    .consent-banner {
                        flex-direction: column;
                        gap: 20px;
                        text-align: center;
                    }

                    .consent-actions {
                        width: 100%;
                        justify-content: center;
                    }

                    .categories-grid,
                    .rights-grid,
                    .contact-methods {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 480px) {
                    .privacy-hero {
                        padding: 80px 0 40px;
                    }

                    .hero-title {
                        font-size: 2rem;
                    }

                    .privacy-content {
                        padding: 20px 16px;
                        margin: 0 12px;
                        margin-top: -30px;
                    }

                    .content-section {
                        margin-bottom: 40px;
                    }

                    .purpose-item,
                    .process-step {
                        flex-direction: column;
                        text-align: center;
                    }

                    .purpose-number,
                    .step-number {
                        align-self: center;
                    }
                }

                /* RTL Support */
                [dir="rtl"] .breadcrumb-link svg,
                [dir="rtl"] .meta-item svg {
                    transform: scaleX(-1);
                }

                [dir="rtl"] .category-card li {
                    padding-left: 0;
                    padding-right: 16px;
                }

                [dir="rtl"] .category-card li::before {
                    left: auto;
                    right: 0;
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;