import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import IbrahimImage from '../assets/WhatsApp Image 2025-10-01 at 15.09.01_964bb634.jpg'; 
import KHALIDImage from '../assets/Screenshot 2025-10-01 165247.png';

const TeamSection = () => {
    const { t, language } = useLanguage();
    const [activeCard, setActiveCard] = useState(null);

    const team = [
        {
            id: 1,
            name: "رفعت جميل محمد عوض",
            nameEn: "Refat Jameel Mohammad Awad",
            role: "رئيس مجلس الادارة",
            roleEn: "Chairman of the Board",
            image: '/images/team/avatar1.jpg', 
            bio: "رئيس هيئة مديرين",
            bioEn: "Chairman of Directors",
            social: {
                phone: '+9627772576', 
                email: 'refat.Awad@pickum.jo' 
            },
            color: '#76b947'
        },

        {
            id: 3,
            name: "خالد جعفر شحاده غيث",
            nameEn: "Khalid Jafar Shehadeh Ghaith",
            role: "مدير العمليات والاتصال",
            roleEn: "Operations & Communication Manager",
            image: KHALIDImage, 
            bio: 'يشرف على سير العمليات التشغيلية ويدير مركز الاتصال',
            bioEn: 'Oversees operational processes and manages the call center',
            social: {
                phone: '+962797023732',
                email: 'khalid.jafar@pickum.jo'
            },
            color: '#76b947'
        },
        {
            id: 4,
            name: 'ابراهيم وائل الصالح',
            nameEn: 'Ibrahim Wael Al-Saleh',
            role: 'مسؤول تكنولوجيا المعلومات',
            roleEn: 'IT Manager',
            image: IbrahimImage, 
            bio: 'متخصص في متابعة أمور التطبيقات وكتابة الأكواد',
            bioEn: 'Specialist in application management and coding',
            social: {
                phone: '+96791414606',
                email: 'ibrahim.wael@pickum.jo'
            },
            color: '#a4de02'
        }
    ];

    return (
        <section id="team" className="team-section">
            <div className="team-bg">
                <div className="animated-grid" />
                <div className="floating-shapes">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="shape" style={{ '--shape-index': i }} />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="section-header">
                    <div className="header-badge">
                        <span className="badge-icon">👥</span>
                        <span>{t('team.badge')}</span>
                    </div>
                    <p className="section-subtitle">
                        {t('team.subtitle')}
                    </p>
                </div>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <div
                            key={member.id}
                            className={`team-card ${activeCard === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                            style={{
                                '--member-color': member.color,
                                '--card-index': index
                            }}
                        >
                            <div className="card-background">
                                <div className="gradient-bg" />
                                <div className="pattern-bg" />
                            </div>

                            <div className="card-content">
                                <div className="avatar-container">
                                    <div className="avatar-ring ring-1" />
                                    <div className="avatar-ring ring-2" />
                                    <div className="avatar-ring ring-3" />
                                    <div className="avatar">
                                        <img 
                                            src={member.image} 
                                            alt={language === 'ar' ? member.name : member.nameEn} 
                                            className="avatar-image" 
                                        />
                                    </div>
                                    <div className="avatar-glow" />
                                </div>

                                <div className="member-info">
                                    <h3 className="member-name">
                                        {language === 'ar' ? member.name : member.nameEn}
                                    </h3>
                                    <p className="member-role">
                                        {language === 'ar' ? member.role : member.roleEn}
                                    </p>
                                    <p className="member-bio">
                                        {language === 'ar' ? member.bio : member.bioEn}
                                    </p>
                                </div>

                                 <div className="social-links">
                                    {member.social.phone && (
                                        <a href={`tel:${member.social.phone}`} className="social-link" aria-label="Phone">
                                            <svg>
                                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                            </svg>
                                        </a>
                                    )}
                                    {member.social.email && (
                                        <a href={`mailto:${member.social.email}`} className="social-link" aria-label="Email">
                                            <svg>
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                                                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="card-shine" />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .team-section {
                    padding: 100px 0;
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
                }
                .team-bg {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }
                .animated-grid {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(30, 86, 49, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(30, 86, 49, 0.03) 1px, transparent 1px);
                    background-size: 40px 40px;
                    animation: gridMove 30s linear infinite;
                }
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(40px, 40px); }
                }
                .floating-shapes {
                    position: absolute;
                    inset: 0;
                }
                .shape {
                    position: absolute;
                    width: 150px;
                    height: 150px;
                    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                    background: radial-gradient(circle, rgba(164, 222, 2, 0.08) 0%, transparent 70%);
                    animation: shapeFloat 15s ease-in-out infinite;
                    animation-delay: calc(var(--shape-index) * -3s);
                }
                .shape:nth-child(1) { top: 10%; left: 5%; }
                .shape:nth-child(2) { top: 50%; right: 10%; }
                .shape:nth-child(3) { bottom: 20%; left: 15%; }
                .shape:nth-child(4) { top: 30%; right: 20%; }
                .shape:nth-child(5) { bottom: 40%; right: 5%; }

                @keyframes shapeFloat {
                    0%, 100% {
                        transform: translate(0, 0) rotate(0deg);
                        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                    }
                    50% {
                        transform: translate(20px, -20px) rotate(180deg);
                        border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
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
                .badge-icon {
                    font-size: 20px;
                }
                .header-badge span:last-child {
                    color: #1e5631;
                    font-weight: 600;
                    font-size: 15px;
                }
                .section-subtitle {
                    font-size: 1.2rem;
                    color: #4a5568;
                    line-height: 1.6;
                }
                .team-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 40px;
                    margin-bottom: 80px;
                }
                .team-card {
                    position: relative;
                    background: white;
                    border-radius: 28px;
                    padding: 48px 32px;
                    text-align: center;
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                    border: 2px solid rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    animation: cardSlideUp 0.8s ease forwards;
                    animation-delay: calc(var(--card-index) * 0.15s);
                    opacity: 0;
                    transform: translateY(40px);
                }
                @keyframes cardSlideUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .team-card:hover,
                .team-card.active {
                    transform: translateY(-16px) scale(1.03);
                    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.2);
                    border-color: var(--member-color);
                }
                .card-background {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                }
                .gradient-bg {
                    position: absolute;
                    inset: -20px;
                    background: radial-gradient(circle, var(--member-color) 0%, transparent 70%);
                    opacity: 0;
                    filter: blur(40px);
                    transition: opacity 0.4s ease;
                }
                .team-card:hover .gradient-bg,
                .team-card.active .gradient-bg {
                    opacity: 0.15;
                }
                .pattern-bg {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.02) 0%, transparent 50%);
                }
                .card-content {
                    position: relative;
                    z-index: 1;
                }
                .avatar-container {
                    position: relative;
                    width: 140px;
                    height: 140px;
                    margin: 0 auto 28px;
                }
                .avatar {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, var(--member-color), #a4de02);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                }
                
                .avatar-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }

                .team-card:hover .avatar,
                .team-card.active .avatar {
                    transform: scale(1.1) rotate(5deg);
                }
                .avatar-ring {
                    position: absolute;
                    inset: 0;
                    border: 2px solid var(--member-color);
                    border-radius: 50%;
                    opacity: 0;
                    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .ring-1 { inset: -15px; }
                .ring-2 { inset: -25px; }
                .ring-3 { inset: -35px; }
                .team-card:hover .ring-1,
                .team-card.active .ring-1 {
                    opacity: 0.4;
                    inset: -20px;
                }
                .team-card:hover .ring-2,
                .team-card.active .ring-2 {
                    opacity: 0.3;
                    inset: -30px;
                }
                .team-card:hover .ring-3,
                .team-card.active .ring-3 {
                    opacity: 0.2;
                    inset: -40px;
                }
                .avatar-glow {
                    position: absolute;
                    inset: -30px;
                    background: radial-gradient(circle, var(--member-color) 0%, transparent 70%);
                    opacity: 0;
                    filter: blur(30px);
                    transition: opacity 0.4s ease;
                }
                .team-card:hover .avatar-glow,
                .team-card.active .avatar-glow {
                    opacity: 0.3;
                }
                .member-info {
                    margin-bottom: 24px;
                }
                .member-name {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #1a1a1a;
                    margin-bottom: 8px;
                    transition: color 0.3s ease;
                }
                .team-card:hover .member-name,
                .team-card.active .member-name {
                    color: var(--member-color);
                }
                .member-role {
                    font-size: 1rem;
                    color: var(--member-color);
                    font-weight: 600;
                    margin-bottom: 12px;
                }
                .member-bio {
                    color: #4a5568;
                    font-size: 0.9375rem;
                    line-height: 1.6;
                }
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                }
                .social-link {
                    width: 44px;
                    height: 44px;
                    background: rgba(0, 0, 0, 0.05);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #1a1a1a;
                    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                    text-decoration: none;
                }
                .social-link svg {
                    width: 20px;
                    height: 20px;
                }
                .social-link:hover {
                    background: var(--member-color);
                    color: white;
                    transform: translateY(-4px) scale(1.1);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                }
                .card-shine {
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
                    transform: translateX(-100%) translateY(-100%) rotate(45deg);
                    transition: transform 0.8s ease;
                }
                .team-card:hover .card-shine,
                .team-card.active .card-shine {
                    transform: translateX(0) translateY(0) rotate(45deg);
                }

                @media (max-width: 768px) {
                    .team-section {
                        padding: 60px 0;
                    }

                    .section-header {
                        margin-bottom: 50px;
                    }

                    .team-grid {
                        grid-template-columns: 1fr;
                        gap: 32px;
                    }

                    .team-card {
                        padding: 40px 28px;
                    }

                    .avatar-container {
                        width: 120px;
                        height: 120px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .team-card,
                    .shape,
                    .avatar {
                        animation: none !important;
                        transition: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default TeamSection;