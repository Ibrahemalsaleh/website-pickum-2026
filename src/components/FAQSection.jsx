import React, { useState } from 'react';
// Correct the import path to point to your global context file
// Make sure this path is correct for your project structure
import { useLanguage } from '../context/LanguageContext';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const { t, isRTL, translations } = useLanguage();

    // Use translations directly from the context for consistency
    const faqs = translations.faq.items.map((item, index) => ({
        id: index + 1,
        question: item.question,
        answer: item.answer,
        // You can add icons here if you wish, or keep them static
        icon: ['📱', '🗺️', '⏰', '💳', '🛠️'][index] || '❓'
    }));

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="section-header">
                    <div className="header-badge">
                        <span className="badge-icon">💡</span>
                        <span>{t('faq.badge')}</span>
                    </div>
                    <h2>{t('faq.title')}</h2>
                    <p className="section-subtitle">
                        {t('faq.subtitle')}
                    </p>
                </div>

                <div className="faq-content-wrapper">
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className={`faq-item ${activeIndex === index ? 'open' : ''}`}
                            >
                                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                    <span className="question-icon">{faq.icon}</span>
                                    <span className="question-text">{faq.question}</span>
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div
                                    className="faq-answer"
                                    style={{
                                        maxHeight: activeIndex === index ? '300px' : '0'
                                    }}
                                >
                                    <div className="answer-content">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contact-card-wrapper">
                        <div className="contact-card">
                            <div className="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M22 17H2v-2h20v2zM22 7v2H2V7h20zM17 12H7v2h10v-2z" fill="currentColor"/>
                                </svg>
                            </div>
                            <h3>{t('faq.contactCard.title')}</h3>
                            <p>{t('faq.contactCard.text')}</p>
                            <a href="#contact" className="contact-btn"> 
                                <span>{t('faq.contactCard.button')}</span>
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

           
            <style jsx>{`
                
                .faq-section {
                    padding: 100px 0;
                    background-color: #ffffff;
                    direction: ${isRTL ? 'rtl' : 'ltr'};
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                .section-header {
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto 60px;
                }
                .header-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(30, 86, 49, 0.08);
                    padding: 10px 24px;
                    border-radius: 50px;
                    margin-bottom: 16px;
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
                h2 {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #1a1a1a;
                    margin-bottom: 16px;
                }
                .section-subtitle {
                    font-size: 1.125rem;
                    color: #4a5568;
                    line-height: 1.6;
                }

                .faq-content-wrapper {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 40px;
                    align-items: start;
                }

                .faq-item {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 16px;
                    margin-bottom: 15px;
                    overflow: hidden;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
                    transition: all 0.3s ease;
                }
                .faq-item.open {
                    border-color: #1e5631;
                    background: #ffffff;
                }

                .faq-question {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 24px;
                    cursor: pointer;
                    font-weight: 600;
                    color: #1a1a1a;
                    font-size: 1.0625rem;
                    user-select: none;
                }
                .question-icon {
                    font-size: 28px;
                    margin-${isRTL ? 'left' : 'right'}: 15px;
                    transition: transform 0.3s ease;
                    order: ${isRTL ? '3' : '1'};
                }
                .question-text {
                    flex: 1;
                    order: 2;
                    text-align: ${isRTL ? 'right' : 'left'};
                }
                .faq-item.open .question-icon {
                    transform: rotate(5deg);
                }

                .faq-question svg {
                    width: 24px;
                    height: 24px;
                    color: #1e5631;
                    transition: transform 0.3s ease;
                    order: ${isRTL ? '1' : '3'};
                }
                .faq-item.open .faq-question svg {
                    transform: rotate(180deg);
                }

                .faq-answer {
                    max-height: 0;
                    transition: max-height 0.4s ease-in-out;
                    overflow: hidden;
                }
                .answer-content {
                    padding: 0 24px 24px 24px;
                    color: #4a5568;
                    line-height: 1.7;
                    font-size: 1rem;
                    text-align: ${isRTL ? 'right' : 'left'};
                }

                .contact-card {
                    background: linear-gradient(145deg, #2ca755ff 0%, #24964aff 100%);
                    color: white;
                    padding: 48px 32px;
                    border-radius: 16px;
                    text-align: center;
                    box-shadow: 0 15px 30px rgba(30, 86, 49, 0.4);
                    position: sticky;
                    top: 100px;
                }
                .contact-icon {
                    background: white;
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                }
                .contact-icon svg {
                    width: 40px;
                    height: 40px;
                    color: #1e5631;
                }
                .contact-card h3 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                .contact-card p {
                    font-size: 1rem;
                    opacity: 0.9;
                    margin-bottom: 30px;
                }
                .contact-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 28px;
                    background: #a4de02;
                    color: #1e5631;
                    border-radius: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    box-shadow: 0 5px 15px rgba(191, 226, 95, 0.4);
                }
                .contact-btn svg {
                    width: 20px;
                    height: 20px;
                    stroke: #1e5631;
                    transition: transform 0.3s ease;
                    transform: ${isRTL ? 'rotate(180deg)' : 'none'};
                }
                .contact-btn:hover {
                    background: #8db600;
                    transform: translateY(-2px);
                }
                .contact-btn:hover svg {
                    transform: ${isRTL ? 'rotate(180deg) translateX(-4px)' : 'translateX(4px)'};
                }

                @media (max-width: 992px) {
                    .faq-content-wrapper {
                        grid-template-columns: 1fr;
                        gap: 50px;
                    }
                    .contact-card-wrapper {
                        position: static;
                    }
                    .contact-card {
                        position: static;
                    }
                }

                @media (max-width: 600px) {
                    .faq-section {
                        padding: 60px 0;
                    }
                    h2 {
                        font-size: 2rem;
                    }
                    .section-header {
                        margin-bottom: 40px;
                    }
                    .faq-item {
                        border-radius: 12px;
                    }

                    .faq-question {
                        padding: 20px;
                    }

                    .question-icon {
                        font-size: 24px;
                    }

                    .question-text {
                        font-size: 1rem;
                    }

                    .answer-content {
                        padding: 0 20px 20px 20px;
                    }

                    .contact-card {
                        padding: 40px 28px;
                    }

                    .contact-icon {
                        width: 70px;
                        height: 70px;
                    }

                    .contact-icon svg {
                        width: 36px;
                        height: 36px;
                    }

                    .contact-card h3 {
                        font-size: 1.25rem;
                    }

                    .contact-card p {
                        font-size: 0.9375rem;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .faq-item,
                    .contact-icon {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default FAQSection;