import React, { useState } from 'react';
// **********************************************
// الخطوة 1: استيراد useLanguage من ملف LanguageContext
// هذا يتيح لنا استخدام نظام الترجمة في المكون
// **********************************************
import { useLanguage } from '../context/LanguageContext';

const EnhancedAbout = () => {
    // **********************************************
    // الخطوة 2: استخدام useLanguage للحصول على دالة الترجمة
    // t = دالة الترجمة التي نستخدمها لجلب النصوص
    // **********************************************
    const { t } = useLanguage();
    
    const [activeTab, setActiveTab] = useState('vision');

    return (
        <section id="about" className="about-section">
            <div className="about-bg">
                <div className="gradient-orbs">
                    <div className="orb orb-1" />
                    <div className="orb orb-2" />
                    <div className="orb orb-3" />
                </div>
                <div className="mesh-pattern" />
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="header-badge">
                        <span className="badge-icon">ℹ️</span>
                        {/* **********************************************
                            الخطوة 3: استبدال النص الثابت بدالة الترجمة
                            t('about.badge') تجلب النص من ملف الترجمات
                            المسار: about.badge في كائن الترجمات
                        ********************************************** */}
                        <span>{t('about.badge')}</span>
                    </div>
                </div>

                <div className="about-content">
                    <div className="content-main">
                        <div className="image-wrapper">
                            <div className="image-container">
                                <img 
                                    src="https://img.youm7.com/ArticleImgs/2021/1/14/391480-%D9%85%D9%88%D8%B8%D9%81%D9%8A%D9%86.png" 
                                    alt={t('about.title')}
                                />
                                <div className="image-overlay" />
                                <div className="floating-badge">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="text-content">
                            <div className="intro-text">
                                {/* **********************************************
                                    الخطوة 4: ترجمة العناوين
                                    كل h3 يستخدم t() لجلب الترجمة المناسبة
                                ********************************************** */}
                                <h3>{t('about.subtitle')}</h3>
                                <h3>{t('about.whoWeAre')}</h3>
                                {/* **********************************************
                                    الخطوة 5: ترجمة الفقرات
                                    نفس الطريقة تُستخدم للفقرات
                                ********************************************** */}
                                <p>{t('about.whoWeAreText')}</p>
                                
                                <h3>{t('about.ourStory')}</h3>
                                <p>{t('about.ourStoryText')}</p>
                                
                                <h3>{t('about.expertise')}</h3>
                                <p>{t('about.expertiseText')}</p>
                            </div>
                        </div>
                    </div>

                    {/* **********************************************
                        الخطوة 6: ترجمة أزرار التبويب (Tabs)
                        نستخدم t() في محتوى الأزرار
                    ********************************************** */}
                    <div className="vision-mission-section">
                        <div className="tabs-navigation">
                            <button 
                                className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                                onClick={() => setActiveTab('vision')}
                            >
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                                <span>{t('about.vision.title')}</span>
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`}
                                onClick={() => setActiveTab('mission')}
                            >
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                                <span>{t('about.mission.title')}</span>
                            </button>
                        </div>

                        {/* **********************************************
                            الخطوة 7: ترجمة محتوى التبويبات
                            كل تبويب يحتوي على عنوان ووصف مترجم
                        ********************************************** */}
                        <div className="tabs-content">
                            <div className={`tab-panel ${activeTab === 'vision' ? 'active' : ''}`}>
                                <div className="panel-card">
                                    <div className="card-icon vision-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                        </svg>
                                    </div>
                                    <h3>{t('about.vision.title')}</h3>
                                    <p>{t('about.vision.description')}</p>
                                    <div className="panel-highlights">
                                        <div className="highlight">
                                            <span className="highlight-icon">🎯</span>
                                            <span>{t('about.vision.expansion')}</span>
                                        </div>
                                        <div className="highlight">
                                            <span className="highlight-icon">🚀</span>
                                            <span>{t('about.vision.innovation')}</span>
                                        </div>
                                        <div className="highlight">
                                            <span className="highlight-icon">🌟</span>
                                            <span>{t('about.vision.leadership')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab-panel ${activeTab === 'mission' ? 'active' : ''}`}>
                                <div className="panel-card">
                                    <div className="card-icon mission-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                        </svg>
                                    </div>
                                    <h3>{t('about.mission.title')}</h3>
                                    <p>{t('about.mission.description')}</p>
                                    <div className="panel-highlights">
                                        <div className="highlight">
                                            <span className="highlight-icon">💯</span>
                                            <span>{t('about.mission.quality')}</span>
                                        </div>
                                        <div className="highlight">
                                            <span className="highlight-icon">🤝</span>
                                            <span>{t('about.mission.commitment')}</span>
                                        </div>
                                        <div className="highlight">
                                            <span className="highlight-icon">❤️</span>
                                            <span>{t('about.mission.satisfaction')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about-section {
                    padding: 100px 0;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
                }

                .about-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .gradient-orbs {
                    position: absolute;
                    inset: 0;
                }

                .orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.15;
                    animation: orbFloat 20s ease-in-out infinite;
                }

                .orb-1 {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, #1e5631 0%, transparent 70%);
                    top: -200px;
                    right: -200px;
                }

                .orb-2 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, #a4de02 0%, transparent 70%);
                    bottom: -150px;
                    left: -150px;
                    animation-delay: -10s;
                }

                .orb-3 {
                    width: 350px;
                    height: 350px;
                    background: radial-gradient(circle, #76b947 0%, transparent 70%);
                    top: 50%;
                    left: 50%;
                    animation-delay: -5s;
                }

                @keyframes orbFloat {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(30px, -30px); }
                }

                .mesh-pattern {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(30, 86, 49, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(30, 86, 49, 0.02) 1px, transparent 1px);
                    background-size: 50px 50px;
                }

                .section-header {
                    text-align: center;
                    max-width: 700px;
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

                .badge-icon {
                    font-size: 20px;
                }

                .header-badge span:last-child {
                    color: #1e5631;
                    font-weight: 600;
                    font-size: 15px;
                }

                .about-content {
                    position: relative;
                    z-index: 1;
                }

                .content-main {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                    margin-bottom: 80px;
                }

                .image-wrapper {
                    position: relative;
                }

                .image-container {
                    position: relative;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .image-container:hover {
                    transform: scale(1.02) translateY(-8px);
                    box-shadow: 0 35px 80px rgba(0, 0, 0, 0.2);
                }

                .image-container img {
                    width: 100%;
                    height: 500px;
                    object-fit: cover;
                    display: block;
                }

                .image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(30, 86, 49, 0.3) 0%, transparent 100%);
                    pointer-events: none;
                }

                .floating-badge {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    padding: 12px 20px;
                    border-radius: 50px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
                    animation: badgeFloat 3s ease-in-out infinite;
                }

                @keyframes badgeFloat {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }

                .floating-badge svg {
                    width: 20px;
                    height: 20px;
                    color: #a4de02;
                }

                .text-content {
                    padding-top: 40px;
                }

                .intro-text h3 {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #1a1a1a;
                    margin-bottom: 20px;
                }

                .intro-text p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #4a5568;
                    margin-bottom: 32px;
                }

                .vision-mission-section {
                    background: white;
                    border-radius: 28px;
                    padding: 48px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    border: 2px solid rgba(0, 0, 0, 0.05);
                }

                .tabs-navigation {
                    display: flex;
                    gap: 16px;
                    margin-bottom: 40px;
                    justify-content: center;
                }

                .tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 16px 32px;
                    background: transparent;
                    border: 2px solid #e2e8f0;
                    border-radius: 14px;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    font-size: 16px;
                    font-weight: 600;
                    color: #4a5568;
                }

                .tab-btn svg {
                    width: 22px;
                    height: 22px;
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

                .tabs-content {
                    position: relative;
                    min-height: 350px;
                }

                .tab-panel {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    pointer-events: none;
                    transform: translateY(20px);
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .tab-panel.active {
                    opacity: 1;
                    pointer-events: auto;
                    transform: translateY(0);
                    position: relative;
                }

                .panel-card {
                    background: linear-gradient(135deg, rgba(30, 86, 49, 0.03) 0%, rgba(164, 222, 2, 0.03) 100%);
                    padding: 40px;
                    border-radius: 20px;
                    border: 2px solid rgba(30, 86, 49, 0.1);
                }

                .card-icon {
                    width: 70px;
                    height: 70px;
                    border-radius: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 24px;
                }

                .vision-icon {
                    background: linear-gradient(135deg, #1e5631 0%, #2a7d46 100%);
                }

                .mission-icon {
                    background: linear-gradient(135deg, #76b947 0%, #a4de02 100%);
                }

                .card-icon svg {
                    width: 36px;
                    height: 36px;
                    color: white;
                }

                .panel-card h3 {
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: #1a1a1a;
                    margin-bottom: 16px;
                }

                .panel-card p {
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: #4a5568;
                    margin-bottom: 32px;
                }

                .panel-highlights {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .highlight {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 20px;
                    background: white;
                    border-radius: 12px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #1e5631;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                }

                .highlight-icon {
                    font-size: 20px;
                }

                @media (max-width: 1024px) {
                    .content-main {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                }

                @media (max-width: 768px) {
                    .about-section {
                        padding: 60px 0;
                    }

                    .section-header {
                        margin-bottom: 50px;
                    }

                    .vision-mission-section {
                        padding: 32px 24px;
                    }

                    .tabs-navigation {
                        flex-direction: column;
                    }

                    .tab-btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .panel-highlights {
                        flex-direction: column;
                    }

                    .highlight {
                        justify-content: center;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .orb,
                    .floating-badge,
                    .tab-panel {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default EnhancedAbout;