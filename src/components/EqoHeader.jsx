import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { eqoContent } from '../context/eqoContent';
import logoMark from '../assets/eqo-logo-mark.png';
import '../styles/EqoChrome.css';

/**
 * شريط تنقّل خاص بـ EQO GO — يُستخدم على مسار /eqo-go فقط
 */
const EqoHeader = () => {
    const { language, changeLanguage } = useLanguage();
    const c = (eqoContent[language] || eqoContent.ar).chrome;
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [language]);

    return (
        <header
            className={`eqo-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
            <div className="eqo-nav-inner">
                <Link to="/eqo-go" className="eqo-nav-brand" onClick={() => setOpen(false)}>
                    <img src={logoMark} alt="EQO GO" />
                    <span className="eqo-nav-tagline" dir="ltr">{c.tagline}</span>
                </Link>

                <nav className="eqo-nav-links" aria-label={c.menu}>
                    {c.links.map(([label, href]) => (
                        <a key={href} href={href} onClick={() => setOpen(false)}>
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="eqo-nav-side">
                    <Link to="/" className="eqo-nav-back" onClick={() => setOpen(false)}>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 3.1 2.6 11.2h2.6v9.7h5.5v-6.2h2.6v6.2h5.5v-9.7h2.6z" />
                        </svg>
                        <span>{c.backToSite}</span>
                    </Link>

                    <button
                        type="button"
                        className="eqo-nav-lang"
                        onClick={() => changeLanguage(language === 'ar' ? 'en' : 'ar')}
                        aria-label={language === 'ar' ? 'English' : 'العربية'}
                    >
                        {language === 'ar' ? 'EN' : 'ع'}
                    </button>

                    <button
                        type="button"
                        className={`eqo-nav-burger${open ? ' is-open' : ''}`}
                        onClick={() => setOpen((value) => !value)}
                        aria-label={c.menu}
                        aria-expanded={open}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default EqoHeader;
