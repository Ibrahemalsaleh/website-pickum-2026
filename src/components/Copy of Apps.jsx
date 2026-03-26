import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ahlanBikumLogo from '../assets/logo_vertical.png';
import nashmiLogo from '../assets/logo.nashmi.png';

const Apps = () => {
    const { t } = useLanguage();
    return (
        <section id="apps">
            <div className="container">
                <div className="section-title reveal">
                    <h2>{t('apps.title')}</h2>
                </div>
                <div className="apps-container">
                    <div className="app-card reveal-left">
                        <div className="app-image">
                            <img src={ahlanBikumLogo} alt="تطبيق أهلا بكم" />
                        </div>
                        <div className="app-content">
                            <h3><i className="fas fa-mobile-alt" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('apps.card1.title')}</h3>
                            <p>{t('apps.card1.p')}</p>
                            <br /><br />
                            <div className="app-download">
                                <a href="https://play.google.com/store/apps/details?id=com.pickum.delivery&pcampaignid=web_share"
                                   className="download-btn" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-google-play"></i>
                                    <span className="download-text">{t('apps.download.google')}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="app-card reveal-right">
                        <div className="app-image">
                            <img src={nashmiLogo} alt="تطبيق النشمي" />
                        </div>
                        <div className="app-content">
                            <h3><i className="fas fa-users" style={{ marginLeft: '10px', color: 'var(--accent-color)' }}></i>{t('apps.card2.title')}</h3>
                            <p>{t('apps.card2.p')}</p>
                            <br /><br />
                            <div className="app-download">
                                <a href="https://play.google.com/store/apps/details?id=com.pickum.nashmi&pcampaignid=web_share"
                                   className="download-btn" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-google-play"></i>
                                    <span className="download-text">{t('apps.download.google')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apps;