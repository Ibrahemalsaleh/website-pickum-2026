import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { eqoContent } from '../context/eqoContent';
import logoFull from '../assets/eqo-logo-full.png';
import '../styles/EqoChrome.css';

/**
 * تذييل خاص بـ EQO GO — يُستخدم على مسار /eqo-go فقط
 */
const EqoFooter = () => {
    const { language } = useLanguage();
    const c = (eqoContent[language] || eqoContent.ar).chrome;

    return (
        <footer className="eqo-foot" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="eqo-foot-strip" aria-hidden="true" />

            <div className="eqo-foot-wrap eqo-foot-grid">
                <div className="eqo-foot-brand">
                    <span className="eqo-foot-plate">
                        <img src={logoFull} alt="EQO GO — Easy Quick On-time" />
                    </span>
                    <p>{c.about}</p>
                    <Link to="/" className="eqo-foot-home">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 3.1 2.6 11.2h2.6v9.7h5.5v-6.2h2.6v6.2h5.5v-9.7h2.6z" />
                        </svg>
                        <span>{c.backToSite}</span>
                        <small>{c.backToSiteNote}</small>
                    </Link>
                </div>

                <div className="eqo-foot-col">
                    <h4>{c.quickTitle}</h4>
                    <ul>
                        {c.links.map(([label, href]) => (
                            <li key={href}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="eqo-foot-col">
                    <h4>{c.companyTitle}</h4>
                    <ul>
                        {c.companyLinks.map(([label, href]) => (
                            <li key={href}>
                                <Link to={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="eqo-foot-col">
                    <h4>{c.contactTitle}</h4>
                    <ul className="eqo-foot-contact">
                        <li>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                            </svg>
                            <span>{c.address}</span>
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            <a href={`tel:${c.phone}`} dir="ltr">{c.phone}</a>
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <a href={`mailto:${c.email}`} dir="ltr">{c.email}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="eqo-foot-bottom">
                <div className="eqo-foot-wrap">
                    <p>{c.rights}</p>
                    <p>{c.note}</p>
                </div>
            </div>
        </footer>
    );
};

export default EqoFooter;
