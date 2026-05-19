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
            {/* Hero Section */}
            <div className="privacy-hero"></div>

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

                        </main>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .privacy-policy {
                    min-height: 100vh;
                    background: #fafbfc;
                }

                /* ==================== HERO SECTION ==================== */
                .privacy-hero {
                    min-height: 600px;
                    background: url('https://www.roadak-consult.com/wp-content/uploads/2024/02/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9-%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9-1.png') center / contain no-repeat;
                    background-color: #f8fafc;
                    position: relative;
                }



                /* ==================== MAIN CONTAINER ==================== */
                .privacy-container {
                    padding: 60px 0 80px;
                }

                .privacy-layout {
                    display: grid;
                    grid-template-columns: 270px 1fr;
                    gap: 36px;
                    align-items: start;
                }

                /* ==================== SIDEBAR ==================== */
                .privacy-sidebar {
                    position: sticky;
                    top: 90px;
                }

                .sidebar-sticky {
                    background: white;
                    border-radius: 16px;
                    padding: 20px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 20px rgba(0, 0, 0, 0.06);
                    border: 1px solid #e8edf2;
                }

                .sidebar-title {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #94a3b8;
                    margin-bottom: 16px;
                    padding: 0 8px 12px;
                    border-bottom: 1px solid #f1f4f8;
                }

                .sidebar-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .sidebar-link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 14px;
                    background: none;
                    border: none;
                    border-radius: 10px;
                    color: #64748b;
                    font-size: 0.9rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    text-align: left;
                    width: 100%;
                    position: relative;
                }

                .sidebar-link:hover {
                    background: rgba(30, 86, 49, 0.06);
                    color: #1e5631;
                }

                .sidebar-link.active {
                    background: linear-gradient(135deg, rgba(30, 86, 49, 0.08), rgba(42, 125, 70, 0.05));
                    color: #1e5631;
                    font-weight: 600;
                    box-shadow: inset 3px 0 0 #1e5631;
                }

                .sidebar-link .link-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #cbd5e1;
                    flex-shrink: 0;
                    transition: all 0.25s ease;
                }

                .sidebar-link.active .link-dot {
                    background: #a4de02;
                    box-shadow: 0 0 8px rgba(164, 222, 2, 0.5);
                }

                /* ==================== CONTENT ==================== */
                .privacy-content {
                    background: white;
                    border-radius: 20px;
                    padding: 48px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.06);
                    border: 1px solid #e8edf2;
                }

                .content-section {
                    margin-bottom: 56px;
                    scroll-margin-top: 90px;
                }

                .content-section:last-child {
                    margin-bottom: 0;
                }

                .content-section h2 {
                    font-size: 1.65rem;
                    font-weight: 700;
                    color: #1e293b;
                    margin-bottom: 6px;
                    padding-bottom: 0;
                    border-bottom: none;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .content-section h2::before {
                    content: '';
                    display: inline-block;
                    width: 4px;
                    height: 28px;
                    background: linear-gradient(180deg, #a4de02, #1e5631);
                    border-radius: 2px;
                    flex-shrink: 0;
                }

                .content-section > p {
                    color: #475569;
                    line-height: 1.8;
                    margin: 4px 0 16px;
                    font-size: 1rem;
                }

                .section-subtitle {
                    display: block;
                    font-size: 0.85rem;
                    color: #94a3b8;
                    margin-bottom: 20px;
                    padding-left: 16px;
                }

                /* ==================== SECTION DIVIDER ==================== */
                .section-divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #e2e8f0 20%, #e2e8f0 80%, transparent);
                    margin-top: 56px;
                }

                /* ==================== INFO CARD ==================== */
                .info-card {
                    display: flex;
                    gap: 18px;
                    background: linear-gradient(135deg, rgba(30, 86, 49, 0.04), rgba(42, 125, 70, 0.02));
                    border: 1px solid rgba(30, 86, 49, 0.12);
                    border-radius: 14px;
                    padding: 22px 24px;
                    margin: 24px 0 0;
                    transition: all 0.3s ease;
                }

                .info-card:hover {
                    border-color: rgba(30, 86, 49, 0.2);
                    box-shadow: 0 4px 16px rgba(30, 86, 49, 0.06);
                }

                .info-card.assurance {
                    background: linear-gradient(135deg, rgba(164, 222, 2, 0.06), rgba(139, 195, 74, 0.03));
                    border: 1px solid rgba(164, 222, 2, 0.2);
                }

                .info-card.assurance:hover {
                    border-color: rgba(164, 222, 2, 0.35);
                    box-shadow: 0 4px 16px rgba(164, 222, 2, 0.1);
                }

                .info-icon {
                    width: 42px;
                    height: 42px;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: 0 4px 12px rgba(30, 86, 49, 0.2);
                }

                .info-card.assurance .info-icon {
                    background: linear-gradient(135deg, #a4de02, #8bc34a);
                    box-shadow: 0 4px 12px rgba(164, 222, 2, 0.3);
                }

                .info-icon svg {
                    width: 20px;
                    height: 20px;
                    color: white;
                }

                .info-content h4 {
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: #1e5631;
                    margin-bottom: 6px;
                }

                .info-card.assurance .info-content h4 {
                    color: #1e5631;
                }

                .info-content p {
                    color: #475569;
                    margin: 0;
                    font-size: 0.95rem;
                    line-height: 1.6;
                }

                /* ==================== CATEGORY CARDS (GLASS) ==================== */
                .data-categories {
                    margin-top: 24px;
                }

                .categories-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
                    gap: 16px;
                }

                .category-card {
                    background: #fafbfc;
                    border: 1px solid #e8edf2;
                    border-radius: 14px;
                    padding: 22px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                }

                .category-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    border-radius: 14px 14px 0 0;
                }

                .category-card:nth-child(1)::before { background: linear-gradient(90deg, #1e5631, #2a7d46); }
                .category-card:nth-child(2)::before { background: linear-gradient(90deg, #f59e0b, #d97706); }
                .category-card:nth-child(3)::before { background: linear-gradient(90deg, #a4de02, #8bc34a); }
                .category-card:nth-child(4)::before { background: linear-gradient(90deg, #667eea, #764ba2); }
                .category-card:nth-child(5)::before { background: linear-gradient(90deg, #f093fb, #f5576c); }
                .category-card:nth-child(6)::before { background: linear-gradient(90deg, #06b6d4, #0891b2); }

                .category-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
                    border-color: #d0d9e3;
                }

                .category-card:hover::before {
                    opacity: 1;
                }

                .category-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    margin-bottom: 14px;
                    position: relative;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .category-icon.personal { background: linear-gradient(135deg, #1e5631, #2a7d46); }
                .category-icon.payment { background: linear-gradient(135deg, #a4de02, #8bc34a); }
                .category-icon.location { background: linear-gradient(135deg, #667eea, #764ba2); }
                .category-icon.usage { background: linear-gradient(135deg, #f093fb, #f5576c); }
                .category-icon.driver { background: linear-gradient(135deg, #f59e0b, #d97706); }
                .category-icon.device { background: linear-gradient(135deg, #06b6d4, #0891b2); }

                .category-card h5 {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 10px;
                }

                .category-card ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .category-card li {
                    color: #475569;
                    padding: 5px 0;
                    padding-left: 20px;
                    position: relative;
                    font-size: 0.9rem;
                    line-height: 1.5;
                }

                .category-card li::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 12px;
                    width: 8px;
                    height: 8px;
                    background: #a4de02;
                    border-radius: 50%;
                    opacity: 0.7;
                }

                /* ==================== TIMELINE (PURPOSE / PROCESS) ==================== */
                .usage-purposes,
                .changes-process {
                    margin-top: 24px;
                }

                .purposes-list,
                .process-steps {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    position: relative;
                }

                .purposes-list::before,
                .process-steps::before {
                    content: '';
                    position: absolute;
                    left: 20px;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(180deg, #1e5631, #a4de02, transparent);
                    opacity: 0.2;
                }

                .purpose-item,
                .process-step {
                    display: flex;
                    gap: 18px;
                    padding: 18px 20px;
                    background: transparent;
                    border-radius: 0;
                    border: none;
                    border-bottom: 1px solid #f1f4f8;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .purpose-item:last-child,
                .process-step:last-child {
                    border-bottom: none;
                }

                .purpose-item:hover,
                .process-step:hover {
                    background: rgba(30, 86, 49, 0.02);
                }

                .purpose-number,
                .step-number {
                    width: 40px;
                    height: 40px;
                    min-width: 40px;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 0.9rem;
                    flex-shrink: 0;
                    box-shadow: 0 4px 12px rgba(30, 86, 49, 0.25);
                    position: relative;
                    z-index: 1;
                }

                .purpose-content h5,
                .step-content h5 {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 4px;
                }

                .purpose-content p,
                .step-content p {
                    color: #64748b;
                    margin: 0;
                    font-size: 0.9rem;
                    line-height: 1.6;
                }

                /* ==================== DATA SHARING ==================== */
                .sharing-partners {
                    margin-top: 24px;
                }

                .sharing-partners h4 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 16px;
                    padding-left: 4px;
                }

                .partners-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 12px;
                }

                .partner-card {
                    display: flex;
                    gap: 14px;
                    padding: 18px 20px;
                    background: #fafbfc;
                    border: 1px solid #e8edf2;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                }

                .partner-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
                    border-color: #d0d9e3;
                }

                .partner-icon {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .partner-icon svg {
                    width: 22px;
                    height: 22px;
                    color: white;
                }

                .partner-info h5 {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 2px;
                }

                .partner-info p {
                    color: #64748b;
                    margin: 0;
                    font-size: 0.85rem;
                    line-height: 1.5;
                }

                /* ==================== SECURITY MEASURES ==================== */
                .security-measures {
                    margin-top: 24px;
                }

                .security-measures h4 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 14px;
                }

                .measures-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 10px;
                }

                .measure-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    background: #fafbfc;
                    border-radius: 10px;
                    border: 1px solid #e8edf2;
                    transition: all 0.2s ease;
                }

                .measure-item:hover {
                    border-color: #d0d9e3;
                    background: #f8f9fb;
                }

                .measure-check {
                    width: 22px;
                    height: 22px;
                    min-width: 22px;
                    background: linear-gradient(135deg, #a4de02, #8bc34a);
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .measure-check svg {
                    width: 12px;
                    height: 12px;
                    color: white;
                }

                .measure-item span {
                    color: #475569;
                    font-size: 0.9rem;
                    font-weight: 500;
                    line-height: 1.4;
                }

                /* ==================== USER RIGHTS ==================== */
                .rights-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
                    gap: 14px;
                    margin-top: 20px;
                }

                .right-card {
                    display: flex;
                    gap: 14px;
                    padding: 20px;
                    background: #fafbfc;
                    border: 1px solid #e8edf2;
                    border-radius: 14px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .right-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
                    border-color: #d0d9e3;
                }

                .right-icon {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    box-shadow: 0 4px 12px rgba(30, 86, 49, 0.2);
                }

                .right-icon svg {
                    width: 22px;
                    height: 22px;
                    color: white;
                }

                .right-content h5 {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 4px;
                }

                .right-content p {
                    color: #64748b;
                    margin: 0;
                    font-size: 0.85rem;
                    line-height: 1.5;
                }

                /* ==================== CONTACT ==================== */
                .contact-methods {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 14px;
                    margin-top: 20px;
                }

                .contact-card {
                    display: flex;
                    gap: 14px;
                    padding: 20px;
                    background: #fafbfc;
                    border: 1px solid #e8edf2;
                    border-radius: 14px;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .contact-card::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background: linear-gradient(180deg, #a4de02, #1e5631);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .contact-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
                }

                .contact-card:hover::before {
                    opacity: 1;
                }

                .contact-icon {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    background: linear-gradient(135deg, #1e5631, #2a7d46);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .contact-icon svg {
                    width: 22px;
                    height: 22px;
                    color: white;
                }

                .contact-info h5 {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #1e293b;
                    margin-bottom: 4px;
                }

                .contact-info a,
                .contact-info p {
                    color: #475569;
                    margin: 0;
                    text-decoration: none;
                    font-size: 0.85rem;
                    line-height: 1.5;
                }

                .contact-info a:hover {
                    color: #1e5631;
                }



                /* ==================== SCROLLBAR ==================== */
                .privacy-policy ::-webkit-scrollbar {
                    width: 8px;
                }

                .privacy-policy ::-webkit-scrollbar-track {
                    background: #f1f5f9;
                }

                .privacy-policy ::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 4px;
                }

                .privacy-policy ::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }

                /* ==================== RESPONSIVE ==================== */
                @media (max-width: 1024px) {
                    .privacy-layout {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .privacy-sidebar {
                        position: static;
                    }

                    .sidebar-sticky {
                        position: sticky;
                        top: 80px;
                    }

                    .sidebar-nav {
                        flex-direction: row;
                        flex-wrap: wrap;
                    }

                    .sidebar-link {
                        flex: 0 0 auto;
                    }
                }

                @media (max-width: 768px) {
                    .privacy-hero {
                        padding: 110px 0 60px;
                    }

                    .hero-title {
                        font-size: 2rem;
                    }

                    .hero-description {
                        font-size: 1rem;
                    }

                    .hero-meta {
                        gap: 16px;
                    }

                    .privacy-content {
                        padding: 28px 20px;
                        border-radius: 14px;
                    }

                    .privacy-container {
                        padding: 32px 0 60px;
                    }

                    .content-section h2 {
                        font-size: 1.35rem;
                    }

                    .categories-grid,
                    .rights-grid,
                    .contact-methods {
                        grid-template-columns: 1fr;
                    }

                    .purposes-list::before,
                    .process-steps::before {
                        left: 18px;
                    }
                }

                @media (max-width: 480px) {
                    .privacy-hero {
                        padding: 100px 0 40px;
                    }

                    .hero-title {
                        font-size: 1.65rem;
                    }

                    .privacy-content {
                        padding: 20px 16px;
                    }

                    .content-section h2 {
                        font-size: 1.2rem;
                    }

                    .purpose-item,
                    .process-step {
                        flex-direction: row;
                        text-align: left;
                    }

                    .hero-meta {
                        flex-direction: column;
                        align-items: center;
                        gap: 8px;
                    }

                    .sidebar-nav {
                        flex-direction: row;
                        overflow-x: auto;
                        gap: 4px;
                    }

                    .sidebar-link {
                        font-size: 0.8rem;
                        padding: 8px 12px;
                        white-space: nowrap;
                    }
                }

                /* ==================== RTL SUPPORT ==================== */
                [dir="rtl"] .content-section h2::before {
                    order: 1;
                }

                [dir="rtl"] .category-card li {
                    padding-left: 0;
                    padding-right: 20px;
                }

                [dir="rtl"] .category-card li::before {
                    left: auto;
                    right: 0;
                }

                [dir="rtl"] .purposes-list::before,
                [dir="rtl"] .process-steps::before {
                    left: auto;
                    right: 20px;
                }

                [dir="rtl"] .sidebar-link {
                    text-align: right;
                }

                [dir="rtl"] .sidebar-link.active {
                    box-shadow: inset -3px 0 0 #1e5631;
                }

                [dir="rtl"] .contact-card::before {
                    left: auto;
                    right: 0;
                }

                [dir="rtl"] .section-subtitle {
                    padding-left: 0;
                    padding-right: 16px;
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;