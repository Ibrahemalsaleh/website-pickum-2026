import React, { useState } from 'react';
// Import the global useLanguage hook
// Make sure this path is correct for your project structure
import { useLanguage } from '../context/LanguageContext'; 
;

const Contact = () => {
    // Use the global language context
    const { t, isRTL, translations } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [focusedField, setFocusedField] = useState(null);

    // Use translations directly from the context for consistency
    const contactInfo = translations.contact.infoCards.map((card, index) => ({
        icon: ['📍', '📞', '✉️', '⏰'][index] || 'ℹ️',
        title: card.title,
        content: card.content,
        gradient: [
            'linear-gradient(135deg, #1e5631 0%, #2a7d46 100%)',
            'linear-gradient(135deg, #2a7d46 0%, #76b947 100%)',
            'linear-gradient(135deg, #76b947 0%, #a4de02 100%)',
            'linear-gradient(135deg, #a4de02 0%, #c8f442 100%)'
        ][index]
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => {
                setStatus('');
                setFormData({ name: '', email: '', phone: '', message: '' });
            }, 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-bg">
                <div className="gradient-mesh" />
                <div className="floating-elements">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="float-element" style={{ '--element-index': i }} />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="header-badge">
                        <span className="badge-dot" />
                        <span>{t('contact.badge')}</span>
                    </div>
                   
                    <p className="section-subtitle">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-info-cards">
                        {contactInfo.map((info, index) => (
                            <div 
                                key={index} 
                                className="info-card"
                                style={{
                                    '--card-index': index,
                                    '--card-gradient': info.gradient
                                }}
                            >
                                <div className="card-glow" />
                                <div className="info-icon">{info.icon}</div>
                                <h3 className="info-title">{info.title}</h3>
                                <p className="info-content">{info.content}</p>
                                <div className="card-shine" />
                            </div>
                        ))}
                    </div>

                    <div className="contact-form-wrapper">
                        <div className="form-header">
                            <h3>{t('contact.form.title')}</h3>
                            <p>{t('contact.form.subtitle')}</p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}>
                                    <label htmlFor="name">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                        <span>{t('contact.form.name')}</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        placeholder={t('contact.form.namePlaceholder')}
                                    />
                                    <div className="input-border" />
                                </div>

                                <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
                                    <label htmlFor="email">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                                            <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                        <span>{t('contact.form.email')}</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        placeholder={t('contact.form.emailPlaceholder')}
                                    />
                                    <div className="input-border" />
                                </div>
                            </div>

                            <div className={`form-group ${focusedField === 'phone' ? 'focused' : ''}`}>
                                <label htmlFor="phone">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    <span>{t('contact.form.phone')}</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('phone')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    placeholder={t('contact.form.phonePlaceholder')}
                                />
                                <div className="input-border" />
                            </div>

                            <div className={`form-group ${focusedField === 'message' ? 'focused' : ''}`}>
                                <label htmlFor="message">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    <span>{t('contact.form.message')}</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    rows="5"
                                    placeholder={t('contact.form.messagePlaceholder')}
                                />
                                <div className="input-border" />
                            </div>

                            <button 
                                type="submit" 
                                className={`submit-btn ${status}`}
                                disabled={status === 'sending'}
                            >
                                <span className="btn-content">
                                    {status === 'sending' && (
                                        <>
                                            <div className="spinner" />
                                            <span>{t('contact.form.sending')}</span>
                                        </>
                                    )}
                                    {status === 'success' && (
                                        <>
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                            </svg>
                                            <span>{t('contact.form.sent')}</span>
                                        </>
                                    )}
                                    {status === '' && (
                                        <>
                                            <svg viewBox="0 0 24 24" fill="none">
                                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                            </svg>
                                            <span>{t('contact.form.submit')}</span>
                                        </>
                                    )}
                                </span>
                                <div className="btn-wave" />
                            </button>
                        </form>

                        <div className="social-links">
                            <p>{t('contact.social.title')}</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/pickum.jo" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/pickum.jo" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-section {
                    padding: 100px 0;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
                    direction: ${isRTL ? 'rtl' : 'ltr'};
                }

                .contact-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .gradient-mesh {
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(circle at 20% 30%, rgba(30, 86, 49, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(164, 222, 2, 0.08) 0%, transparent 50%);
                }

                .floating-elements {
                    position: absolute;
                    inset: 0;
                }

                .float-element {
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                    background: radial-gradient(circle, rgba(76, 185, 71, 0.1) 0%, transparent 70%);
                    animation: float 15s ease-in-out infinite;
                    animation-delay: calc(var(--element-index) * -2.5s);
                }

                .float-element:nth-child(1) { top: 10%; left: 10%; }
                .float-element:nth-child(2) { top: 20%; right: 15%; }
                .float-element:nth-child(3) { bottom: 30%; left: 5%; }
                .float-element:nth-child(4) { bottom: 15%; right: 20%; }
                .float-element:nth-child(5) { top: 50%; left: 50%; }
                .float-element:nth-child(6) { bottom: 40%; right: 10%; }

                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) rotate(0deg);
                    }
                    33% {
                        transform: translate(20px, -20px) rotate(120deg);
                    }
                    66% {
                        transform: translate(-15px, 15px) rotate(240deg);
                    }
                }

                .section-header {
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto 80px;
                }

                .header-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(30, 86, 49, 0.08);
                    padding: 10px 24px;
                    border-radius: 50px;
                    margin-bottom: 24px;
                    border: 1px solid rgba(30, 86, 49, 0.1);
                }

                .badge-dot {
                    width: 8px;
                    height: 8px;
                    background: #a4de02;
                    border-radius: 50%;
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.7; }
                }

                .header-badge span:last-child {
                    color: #1e5631;
                    font-weight: 600;
                    font-size: 15px;
                }

                .section-title {
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    font-weight: 800;
                    color: #1a1a1a;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .title-highlight {
                    background: linear-gradient(135deg, #1e5631 0%, #a4de02 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .section-subtitle {
                    font-size: 1.2rem;
                    color: #4a5568;
                    line-height: 1.6;
                }

                .contact-wrapper {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 48px;
                }

                .contact-info-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 24px;
                }

                .info-card {
                    position: relative;
                    background: white;
                    padding: 32px;
                    border-radius: 20px;
                    text-align: center;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    border: 2px solid rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    animation: cardSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                    animation-delay: calc(var(--card-index) * 0.1s);
                    opacity: 0;
                }

                @keyframes cardSlideIn {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .info-card {
                    transform: translateY(30px);
                }

                .card-glow {
                    position: absolute;
                    inset: -20px;
                    background: var(--card-gradient);
                    opacity: 0;
                    filter: blur(30px);
                    transition: opacity 0.4s ease;
                }

                .info-card:hover {
                    transform: translateY(-12px) scale(1.03);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
                    border-color: transparent;
                }

                .info-card:hover .card-glow {
                    opacity: 0.2;
                }

                .info-icon {
                    font-size: 48px;
                    margin-bottom: 16px;
                    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .info-card:hover .info-icon {
                    transform: scale(1.2) rotate(10deg);
                }

                .info-title {
                    font-size: 18px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 8px;
                }

                .info-content {
                    color: #4a5568;
                    font-size: 15px;
                    line-height: 1.6;
                }

                .card-shine {
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.5), transparent);
                    transform: translateX(-100%) translateY(-100%) rotate(45deg);
                    transition: transform 0.8s ease;
                }

                .info-card:hover .card-shine {
                    transform: translateX(0) translateY(0) rotate(45deg);
                }

                .contact-form-wrapper {
                    background: white;
                    padding: 48px;
                    border-radius: 28px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    border: 2px solid rgba(0, 0, 0, 0.05);
                }

                .form-header {
                    text-align: center;
                    margin-bottom: 40px;
                }

                .form-header h3 {
                    font-size: 28px;
                    font-weight: 800;
                    color: #1a1a1a;
                    margin-bottom: 8px;
                }

                .form-header p {
                    color: #718096;
                    font-size: 16px;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }

                .form-group {
                    position: relative;
                }

                .form-group label {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #4a5568;
                    margin-bottom: 10px;
                    transition: color 0.3s ease;
                }

                .form-group label svg {
                    width: 18px;
                    height: 18px;
                }

                .form-group.focused label {
                    color: #1e5631;
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 16px 20px;
                    border: 2px solid #e2e8f0;
                    border-radius: 12px;
                    font-size: 15px;
                    font-family: inherit;
                    transition: all 0.3s ease;
                    background: #f8fafc;
                    color: #1a1a1a;
                }

                .form-group input:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: #1e5631;
                    background: white;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(30, 86, 49, 0.1);
                }

                .form-group textarea {
                    resize: vertical;
                    min-height: 150px;
                }

                .input-border {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 3px;
                    background: linear-gradient(135deg, #1e5631 0%, #a4de02 100%);
                    transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    border-radius: 2px;
                }

                .form-group.focused .input-border {
                    width: 100%;
                }

                .submit-btn {
                    width: 100%;
                    padding: 20px;
                    background: linear-gradient(135deg, #1e5631 0%, #2a7d46 100%);
                    color: white;
                    border: none;
                    border-radius: 14px;
                    font-size: 16px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    position: relative;
                    overflow: hidden;
                    margin-top: 16px;
                }

                .btn-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    position: relative;
                    z-index: 1;
                }

                .btn-content svg {
                    width: 22px;
                    height: 22px;
                }

                .btn-wave {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transform: translateX(-100%);
                    transition: transform 0.8s ease;
                }

                .submit-btn:hover {
                    transform: translateY(-4px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(30, 86, 49, 0.3);
                }

                .submit-btn:hover .btn-wave {
                    transform: translateX(100%);
                }

                .submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                    transform: none;
                }

                .submit-btn.success {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                }

                .spinner {
                    width: 20px;
                    height: 20px;
                    border: 3px solid rgba(255, 255, 255, 0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .social-links {
                    margin-top: 40px;
                    padding-top: 32px;
                    border-top: 2px solid #e2e8f0;
                    text-align: center;
                }

                .social-links p {
                    color: #4a5568;
                    font-size: 15px;
                    margin-bottom: 16px;
                    font-weight: 600;
                }

                .social-icons {
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                }

                .social-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    position: relative;
                    overflow: hidden;
                }

                .social-icon::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: currentColor;
                    opacity: 0.1;
                    transition: all 0.3s ease;
                }

                .social-icon svg {
                    width: 24px;
                    height: 24px;
                    position: relative;
                    z-index: 1;
                }

                .social-icon.facebook {
                    color: #1877f2;
                }

                .social-icon.instagram {
                    color: #e4405f;
                }

                .social-icon:hover {
                    transform: translateY(-8px) scale(1.1) rotate(5deg);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
                }

                .social-icon:hover::before {
                    opacity: 0.2;
                }

                @media (max-width: 768px) {
                    .contact-section {
                        padding: 60px 0;
                    }

                    .section-header {
                        margin-bottom: 50px;
                    }

                    .contact-info-cards {
                        grid-template-columns: 1fr;
                    }

                    .contact-form-wrapper {
                        padding: 32px 24px;
                    }

                    .form-row {
                        grid-template-columns: 1fr;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .float-element,
                    .info-card,
                    .submit-btn,
                    .spinner {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;