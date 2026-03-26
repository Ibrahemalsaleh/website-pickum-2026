// src/components/LanguageSwitcher.jsx
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = ({ isMobile = false }) => {
    const { language, changeLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'ar', name: 'العربية', flag: '🇯🇴' },
        { code: 'en', name: 'English', flag: '🇬🇧' }
    ];

    const currentLanguage = languages.find(lang => lang.code === language);

    const handleLanguageChange = (langCode) => {
        changeLanguage(langCode);
        setIsOpen(false);
    };

    if (isMobile) {
        return (
            <div className="mobile-lang-switcher">
                {languages.map(lang => (
                    <button
                        key={lang.code}
                        className={`mobile-lang-btn ${language === lang.code ? 'active' : ''}`}
                        onClick={() => handleLanguageChange(lang.code)}
                    >
                        <span className="lang-flag">{lang.flag}</span>
                        <span className="lang-name">{lang.name}</span>
                        {language === lang.code && (
                            <svg viewBox="0 0 24 24" fill="none" className="check-icon">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        )}
                    </button>
                ))}

                <style jsx>{`
                    .mobile-lang-switcher {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                        padding: 12px 0;
                        border-top: 1px solid #e2e8f0;
                        margin-top: 12px;
                    }

                    .mobile-lang-btn {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        padding: 12px 16px;
                        background: transparent;
                        border: 1px solid #e2e8f0;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-size: 15px;
                        font-weight: 500;
                        color: #4a5568;
                    }

                    .mobile-lang-btn.active {
                        background: linear-gradient(135deg, #1e5631 0%, #2a7d46 100%);
                        color: white;
                        border-color: transparent;
                    }

                    .lang-flag {
                        font-size: 24px;
                    }

                    .lang-name {
                        flex: 1;
                        text-align: right;
                    }

                    .check-icon {
                        width: 20px;
                        height: 20px;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="lang-switcher">
            <button
                className="lang-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={t('language.switchTo')}
            >
                <span className="lang-flag">{currentLanguage?.flag}</span>
                <span className="lang-code">{language.toUpperCase()}</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="dropdown-arrow">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div className="lang-dropdown">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            className={`lang-option ${language === lang.code ? 'active' : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            <span className="option-flag">{lang.flag}</span>
                            <span className="option-name">{lang.name}</span>
                            {language === lang.code && (
                                <svg viewBox="0 0 24 24" fill="none" className="check-icon">
                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {isOpen && (
                <div 
                    className="lang-overlay" 
                    onClick={() => setIsOpen(false)}
                />
            )}

            <style jsx>{`
                .lang-switcher {
                    position: relative;
                }

                .lang-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: white;
                    border: 2px solid #e2e8f0;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 14px;
                    font-weight: 600;
                    color: #4a5568;
                }

                .lang-btn:hover {
                    border-color: #1e5631;
                    background: rgba(30, 86, 49, 0.05);
                }

                .lang-flag {
                    font-size: 20px;
                    line-height: 1;
                }

                .lang-code {
                    font-size: 13px;
                }

                .dropdown-arrow {
                    width: 16px;
                    height: 16px;
                    transition: transform 0.3s ease;
                }

                .lang-btn:hover .dropdown-arrow {
                    transform: translateY(2px);
                }

                .lang-dropdown {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    min-width: 180px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                    border: 1px solid #e2e8f0;
                    overflow: hidden;
                    z-index: 1001;
                    animation: dropdownFadeIn 0.3s ease;
                }

                @keyframes dropdownFadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .lang-option {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    width: 100%;
                    padding: 12px 16px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 14px;
                    color: #4a5568;
                }

                .lang-option:hover {
                    background: rgba(30, 86, 49, 0.05);
                }

                .lang-option.active {
                    background: linear-gradient(135deg, rgba(30, 86, 49, 0.1) 0%, rgba(164, 222, 2, 0.05) 100%);
                    color: #1e5631;
                    font-weight: 600;
                }

                .option-flag {
                    font-size: 20px;
                }

                .option-name {
                    flex: 1;
                    text-align: right;
                }

                .check-icon {
                    width: 18px;
                    height: 18px;
                    color: #1e5631;
                }

                .lang-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 1000;
                }

                @media (max-width: 768px) {
                    .lang-dropdown {
                        right: auto;
                        left: 0;
                    }
                }

                [dir="rtl"] .lang-dropdown {
                    right: auto;
                    left: 0;
                }

                [dir="ltr"] .lang-dropdown {
                    left: auto;
                    right: 0;
                }
            `}</style>
        </div>
    );
};

export default LanguageSwitcher;